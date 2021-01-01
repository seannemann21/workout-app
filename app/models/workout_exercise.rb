class WorkoutExercise < ApplicationRecord
  belongs_to :workout
  belongs_to :exercise

  has_many :strength_sets
  has_many :cardio_sets
end
