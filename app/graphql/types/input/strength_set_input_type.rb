module Types
  module Input
    class StrengthSetInputType < Types::BaseInputObject
      argument :reps, Int, required: false
      argument :lbs, Int, required: false
      argument :duration, Int, required: false
    end
  end
end
