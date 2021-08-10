class Activity < ApplicationRecord
    has_many :value_activities, dependent: :destroy
    has_many :values, through: :value_activities
    has_many :activity_users
    has_many :users, through: :activity_users
end
