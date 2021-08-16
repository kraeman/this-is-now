class ValueActivitiesSerializer
  include JSONAPI::Serializer
  attributes :value_id, :activity_id, :score
end
