Rails.application.routes.draw do
  resources :messages
  # User Account related stuff
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'

  # oignoia3ngoia
  mount ActionCable.server => '/cable'

  # Compiled Frontend routes
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/', to: 'fallback#index'
end
