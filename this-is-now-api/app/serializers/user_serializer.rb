class UserSerializer
  include JSONAPI::Serializer
  attributes :username
  has_many :values
  # has_many :values, through: :value_users
  has_many :activities
  # has_many :activities, through: :activity_users
end
