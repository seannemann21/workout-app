module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :workouts, [Types::WorkoutType], null: false
    field :current_workout, Types::WorkoutType, null: true
  end
end
