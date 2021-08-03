class ValueActivitiesSerializer
  include JSONAPI::Serializer
  attributes :value_id, :activity_id, :score
  # belongs_to :value
  # belongs_to :activity
end
