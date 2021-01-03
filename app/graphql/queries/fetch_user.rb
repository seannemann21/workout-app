module Queries
  class FetchUser < Queries::BaseQuery
    type Types::UserType, null: false
    argument :id, ID, required: false
    argument :email, String, required: false

    def resolve(params)
      User.find_by(email: params[:email]) || User.find(params[:id])
    rescue ActiveRecord::RecordNotFound => _e
      GraphQL::ExecutionError.new('User does not exist.')
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
        " #{e.record.errors.full_messages.join(', ')}")
    end
  end
end
