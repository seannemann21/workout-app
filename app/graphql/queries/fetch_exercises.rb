module Queries
  class FetchExercises < Queries::BaseQuery
    type Types::WorkoutType, null: false
    argument :workoutType, ID, required: false

    def resolve(params)
      exercises = params[:workoutType] ?
        Exercise.where(workoutType: params[:workoutType]) :
        Exercise.all

      exercises.order(created_at: :desc)
    end
  end
end
