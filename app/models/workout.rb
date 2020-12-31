class Workout < ApplicationRecord
  belongs_to :user

  has_many :strength_exercises
  has_many :cardio_exercises
end
