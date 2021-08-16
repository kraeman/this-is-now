class ValueSerializer
  include JSONAPI::Serializer
  attributes :name, :id, :creator_id
end
