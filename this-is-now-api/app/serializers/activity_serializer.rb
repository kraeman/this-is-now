class ActivitySerializer
  include JSONAPI::Serializer
  attributes :name, :description, :creator_id
  # has_many :values
  # has_many :users

end
