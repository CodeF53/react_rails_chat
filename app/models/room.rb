class Room < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 100 }

  has_many :messages, dependent: :destroy
  has_many :users, through: :messages
end
