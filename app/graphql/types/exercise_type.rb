module Types
  class ExerciseType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :cardio, Boolean, null: false
  end
end
