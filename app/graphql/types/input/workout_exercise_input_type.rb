module Types
  module Input
    class WorkoutExerciseInputType < Types::BaseInputObject
      argument :workout_id, ID, required: true
      argument :exercise_id, ID, required: true
    end
  end
end
