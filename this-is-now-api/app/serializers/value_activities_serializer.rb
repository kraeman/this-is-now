class ValueActivitiesSerializer
  include JSONAPI::Serializer
  attributes :value_id, :activity_id, :score
  belongs_to :values
  belongs_to :activities
end
