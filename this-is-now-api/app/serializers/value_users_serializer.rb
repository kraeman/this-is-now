class ValueUsersSerializer
  include JSONAPI::Serializer
  attributes :value_id, :user_id
  belongs_to :users
  belongs_to :values
end
