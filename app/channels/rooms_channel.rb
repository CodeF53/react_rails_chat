class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    room = Room.find(params[:room_id])
    stream_for room
  end

  def received
    RoomsChannel.broadcast_to(room, ActiveModelSerializers::SerializableResource.new(room).as_json)
  end

  def unsubscribed
    stop_all_streams
  end
end
