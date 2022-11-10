class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

  # GET /messages
  def index
    render json: Message.all
  end

  # POST /messages
  def create
    message = Message.new(message_params)
    message.user = @current_user
    message.save!

    broadcast message.room

    render json: @message, status: :created
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private

  def broadcast(chatroom)
    ChatroomsChannel.broadcast_to(chatroom,
    {
      chatroom: chatroom,
      users: chatroom.users,
      messages: chatroom.messages
    })
  end

  # Only allow a list of trusted parameters through.
  def message_params
    params.require(:message).permit(:text_content, :room_id)
  end
end
