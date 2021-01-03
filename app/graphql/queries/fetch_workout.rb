module Queries
  class FetchWorkout < Queries::BaseQuery
    type Types::WorkoutType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      Workout.find(id)
    rescue ActiveRecord::RecordNotFound => _e
      GraphQL::ExecutionError.new('Workout does not exist.')
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
