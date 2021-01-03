Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  root 'homepage#index'
  get 'new-workout', to: 'homepage#index'
  get 'exercises', to: 'homepage#index'
  get 'workouts', to: 'homepage#index'
  get 'sign-in', to: 'homepage#index'
  get 'sign-up', to: 'homepage#index'
  get 'build-workout/:id', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
