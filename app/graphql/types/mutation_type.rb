module Types
  class MutationType < Types::BaseObject
    field :add_user, mutation: Mutations::AddUser
    field :add_workout, mutation: Mutations::AddWorkout
    field :add_workout_exercise, mutation: Mutations::AddWorkoutExercise
  end
end
