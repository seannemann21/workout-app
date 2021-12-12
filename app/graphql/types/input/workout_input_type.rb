module Types
  module Input
    class WorkoutInputType < Types::BaseInputObject
      argument :user_id, ID, required: true
      argument :workout_type, String, required: true
      argument :completed_at, GraphQL::Types::ISO8601DateTime, required: false
    end
  end
end
