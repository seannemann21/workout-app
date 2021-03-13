module Types
  module Input
    class WorkoutExerciseInputType < Types::BaseInputObject
      argument :workout_id, ID, required: true
      argument :exercise_id, ID, required: true
      argument :strength_sets, [Types::Input::StrengthSetInputType], required: false
    end
  end
end
