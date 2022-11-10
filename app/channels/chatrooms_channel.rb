class ChatroomsChannel < ApplicationCable::Channel
  def subscribe
    stop_all_streams
    room = Room.find(params[:room_id])
    stream_for room
  end

  def received
    ChatroomsChannel.broadcast_to(chatroom, { chatroom: chatroom, users: chatroom.users, messages: chatroom.messages })
  end

  def unsubscribe
    stop_all_streams
  end
end
