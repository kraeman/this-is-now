class User < ApplicationRecord
    has_secure_password
    has_many :value_users, dependent: :destroy
    has_many :values, through: :value_users
    has_many :activity_users
    has_many :activities, through: :activity_users
    validates :username, uniqueness: true
end
