class MessageSerializer < ActiveModel::Serializer
  attributes :text_content
  has_one :user
end
