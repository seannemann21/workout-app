module Types
  module Input
    class WorkoutInputType < Types::BaseInputObject
      argument :email, String, required: true
      field :user_id, ID, null: false
      field :workout_type, String, null: false
      field :completed, Boolean, null: false
    end
  end
end
