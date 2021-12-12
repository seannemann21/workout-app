module Mutations
  class CompleteWorkout < Mutations::BaseMutation
    argument :id, ID, required: true

    field :workout, Types::WorkoutType, null: false

    def resolve(id:)
      workout = Workout.find(id)
      workout.update(completed_at: Time.current)

      { workout: workout }
    end
  end
end
