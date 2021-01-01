module Types
  class CardioSetType < Types::BaseObject
    field :id, ID, null: false
    field :workout_exercise_id, ID, null: false
    field :distance, Int, null: true
    field :duration, Int, null: true
  end
end
