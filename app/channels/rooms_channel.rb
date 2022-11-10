class RoomsChannel < ApplicationCable::Channel
  def subscribe
    stop_all_streams
    room = Room.find(params[:room_id])
    stream_for room
  end

  def received
    RoomsChannel.broadcast_to(room, { room: room, users: room.users.uniq, messages: room.messages })
  end

  def unsubscribe
    stop_all_streams
  end
end
