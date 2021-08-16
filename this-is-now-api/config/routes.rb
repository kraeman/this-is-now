Rails.application.routes.draw do
  #does order matter?
  post '/signup', :to => 'users#create'
  post '/users/:id', :to => 'users#update'
  post '/login', :to => 'auth#create'
  post '/values', :to => 'values#create'
  get '/values', :to => 'values#index'
  delete'/values/:id', :to => "values#destroy"
  post '/activities', :to => 'activities#create'
  get '/activities', :to => 'activities#index'
  delete'/activities/:id', :to => "activities#destroy"
  get '/scores', :to => 'activities#scores'
end
