class MessagesController < ApplicationController
  before_action :set_message, only: %i[ show update destroy ]

  # GET /messages
  def index
    render json: Message.all
  end

  # POST /messages
  def create
    message = Message.create!(message_params)

    broadcast message.chatroom

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
    params.require(:message).permit(:text_content, :user_id, :room_id)
  end
end
