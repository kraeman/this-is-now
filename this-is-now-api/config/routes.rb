Rails.application.routes.draw do
  resources :users
  resources :activities
  resources :values
  post '/login', :to => 'users#login'

end
