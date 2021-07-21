class Activity < ApplicationRecord
    has_many :value_activities
    has_many :values, through: :value_activities
end
