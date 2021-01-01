module Queries
  class FetchNotes < Queries::BaseQuery
    type [Types::UserType], null: false

    def resolve
      Workout.all.order(created_at: :desc)
    end
  end
end
