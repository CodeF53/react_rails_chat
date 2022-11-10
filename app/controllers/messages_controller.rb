class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

  # GET /messages
  def index
    render json: Message.all
  end

  # POST /messages
  def create
    room = Room.find(params[:room_id])

    message = Message.new(text_content: params[:text_content])
    message.user = @current_user
    message.room = room
    message.save!

    broadcast room

    render json: message, status: :created
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private

  def broadcast(room)
    RoomsChannel.broadcast_to(room, ActiveModelSerializers::SerializableResource.new(room).as_json)
  end
end
