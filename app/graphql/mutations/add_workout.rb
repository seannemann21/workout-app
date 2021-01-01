module Mutations
  class AddWorkout < Mutations::BaseMutation
    argument :params, Types::Input::WorkoutInputType, required: true

    field :user, Types::WorkoutType, null: false

    def resolve(params:)
      workout_params = Hash params

      begin
        workout = Workout.create!(workout_params)

        { workout: workout }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
