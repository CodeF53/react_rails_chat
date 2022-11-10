class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :users, :messages

  def messages
    object.messages.map { |message| ActiveModelSerializers::SerializableResource.new(message).as_json }
  end

  def users
    object.users.uniq
  end
end
