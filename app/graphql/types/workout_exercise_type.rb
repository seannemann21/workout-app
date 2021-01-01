module Types
  class WorkoutExerciseType < Types::BaseObject
    field :id, ID, null: false
    field :workout_id, ID, null: false
    field :exercise_id, ID, null: false
    field :exercise, Types::ExerciseType, null: false
    field :strength_sets, [Types::StrengthSetType], null: false
    field :cardio_sets, [Types::CardioSetType], null: false
  end
end
