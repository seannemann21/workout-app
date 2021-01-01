module Types
  module Input
    class WorkoutExerciseType < Types::BaseInputObject
      field :workout_id, ID, null: false
      field :exercise_id, ID, null: false
    end
  end
end
