class User < ApplicationRecord
  has_many :workouts

  def current_workout
    latest_workout = workouts.order(created_at: :desc).first
    latest_workout&.completed_at ? nil : latest_workout
  end
end
