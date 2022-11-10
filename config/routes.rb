Rails.application.routes.draw do
  # ActionCable Magic
  mount ActionCable.server => '/cable'
  
  # User Account related stuff
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'

  # Create Room
  resources :rooms, only: %i[index create show]
  # Send Message
  resources :messages, only: %i[create]

  # Compiled Frontend routes
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/', to: 'fallback#index'
end
