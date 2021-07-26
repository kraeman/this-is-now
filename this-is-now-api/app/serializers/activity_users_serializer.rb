class ActivityUsersSerializer
  include JSONAPI::Serializer
  attributes :activity_id, :user_id
  belongs_to :users
  belongs_to :activities
end
