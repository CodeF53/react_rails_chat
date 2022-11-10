class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :users
  has_many :messages

  def users
    object.users.uniq
  end
end
