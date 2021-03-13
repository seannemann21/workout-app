module Mutations
  class CompleteWorkout < Mutations::BaseMutation
    argument :id, ID, required: true

    field :workout, Types::WorkoutType, null: false

    def resolve(id:)
      begin
        workout = Workout.find(id)
        workout.update(complete: true)

        { workout: workout }
      end
    end
  end
end
