class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :text_content, presence: true
end
