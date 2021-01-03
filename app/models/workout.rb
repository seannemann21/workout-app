class Workout < ApplicationRecord
  belongs_to :user

  has_many :workout_exercises

  def possible_exercises
    Exercise.where(workout_type: workout_type)
  end
end
