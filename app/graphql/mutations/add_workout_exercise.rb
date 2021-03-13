module Mutations
  class AddWorkoutExercise < Mutations::BaseMutation
    argument :params, Types::Input::WorkoutExerciseInputType, required: true

    field :workout_exercise, Types::WorkoutExerciseType, null: false
    field :workout, Types::WorkoutType, null: false

    def resolve(params:)
      workout_exercise_params = Hash params
      begin
        workout_exercise = WorkoutExercise.create!(workout_exercise_params.except(:strength_sets))
        workout_exercise_params[:strength_sets]&.each do |strength_set|
          StrengthSet.create!(workout_exercise_id: workout_exercise.id, **strength_set)
        end

        { workout_exercise: workout_exercise, workout: workout_exercise.workout }
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end
