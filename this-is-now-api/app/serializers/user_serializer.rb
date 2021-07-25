class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :id
  has_many :value_users
  has_many :values, through: :value_users
  has_many :activity_users
  has_many :activities, through: :activity_users
end
