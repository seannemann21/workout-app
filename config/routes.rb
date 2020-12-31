Rails.application.routes.draw do
  root 'homepage#index'
  get 'new-workout', to: 'homepage#index'
  get 'exercises', to: 'homepage#index'
  get 'workouts', to: 'homepage#index'
  get 'sign-in', to: 'homepage#index'
  get 'sign-up', to: 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
