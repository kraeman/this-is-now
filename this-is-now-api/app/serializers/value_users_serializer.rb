class ValueUsersSerializer
  include JSONAPI::Serializer
  attributes :value_id, :user_id
end
