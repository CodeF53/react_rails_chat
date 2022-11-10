class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text_content
  has_one :user
end
