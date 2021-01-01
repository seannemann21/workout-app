module Types
  module Input
    class WorkoutInputType < Types::BaseInputObject
      argument :email, String, required: true
      argument :user_id, ID, required: true
      argument :workout_type, String, required: true
      argument :completed, Boolean, required: true
    end
  end
end
