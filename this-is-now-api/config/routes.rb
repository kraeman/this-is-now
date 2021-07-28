Rails.application.routes.draw do
  # resources :users
  # resources :activities
  # resources :values
  # get '/users/profile', :to => 'users#profile'
  post '/values/create', :to => 'values#create'
  post '/signup', :to => 'users#create'
  post '/login', :to => 'auth#create'
end
