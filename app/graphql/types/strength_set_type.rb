module Types
  class StrengthSetType < Types::BaseObject
    field :id, ID, null: false
    field :workout_exercise_id, ID, null: false
    field :reps, Int, null: true
    field :lbs, Int, null: true
    field :duration, Int, null: true
  end
end
