class ActivitySerializer
  include JSONAPI::Serializer
  attributes :name, :description, :creator_id
end
