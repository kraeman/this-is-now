Rails.application.routes.draw do
  # resources :users
  # resources :activities
  # resources :values
  # get '/users/profile', :to => 'users#profile'
  post '/values', :to => 'values#create'
  post '/signup', :to => 'users#create'
  post '/login', :to => 'auth#create'
  get '/values', :to => 'values#index'
  post '/activities', :to => 'activities#create'
end
