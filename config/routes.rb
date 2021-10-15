Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  get '/location' => 'locations#index'
  get '/add_destination' => 'destinations#add_destination'
  get '/destinations' => 'destinations#index'

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:index]
      resources :destinations, only: [:index, :create]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
