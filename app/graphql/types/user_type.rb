module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :workouts, [Types::WorkoutType], null: false
  end
end
