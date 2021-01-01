module Mutations
  class AddWorkoutExercise < Mutations::BaseMutation
    argument :params, Types::Input::WorkoutExerciseInputType, required: true

    field :user, Types::WorkoutType, null: false

    def resolve(params:)
      workout_exercise_params = Hash params

      begin
        workout_exercise = Workout.create!(workout_exercise_params)

        { workout_exercise: workout_exercise }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
