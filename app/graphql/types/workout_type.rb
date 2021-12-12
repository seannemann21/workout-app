module Types
  class WorkoutType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, ID, null: false
    field :workout_type, String, null: false
    field :started_at, GraphQL::Types::ISO8601DateTime, null: false
    field :completed_at, GraphQL::Types::ISO8601DateTime, null: true
    field :workout_exercises, [Types::WorkoutExerciseType], null: true
    field :possible_exercises, [Types::ExerciseType], null: false
  end
end
