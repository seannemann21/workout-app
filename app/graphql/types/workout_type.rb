module Types
  class WorkoutType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, ID, null: false
    field :workout_type, String, null: false
    field :start_time, GraphQL::Types::ISO8601DateTime, null: false
    field :completed, Boolean, null: false
    field :workout_exercises, [Types::WorkoutExerciseType], null: true
    field :possible_exercises, [Types::ExerciseType], null: false
  end
end
