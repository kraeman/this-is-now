Rails.application.routes.draw do
  resources :users
  resources :activities
  resources :values
  post '/login', :to => 'auth#create'
  post '/signup', :to => 'users#signup'
end
