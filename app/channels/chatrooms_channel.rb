class ChatroomsChannel < ApplicationCable::Channel
  def subscribe
    stop_all_streams
    chatroom = Chatroom.find(params[:room])
    stream_for chatroom
  end

  def received
    ChatroomsChannel.broadcast_to(chatroom, { chatroom: chatroom, users: chatroom.users, messages: chatroom.messages })
  end

  def unsubscribe
    stop_all_streams
  end
end
