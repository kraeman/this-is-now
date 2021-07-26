class ValueSerializer
  include JSONAPI::Serializer
  attributes :name, :creator_id
  has_many :activities
  # has_many :activities, through: :value_activities
  has_many :users
  # has_many :users, through: :value_users
end
