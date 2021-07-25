Rails.application.routes.draw do
  resources :users
  resources :activities
  resources :values
  get '/users/:id', :to => 'users#show'
  post '/signup', :to => 'users#signup'
  post '/login', :to => 'users#login'
end
