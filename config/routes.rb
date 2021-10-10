Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  get '/location' => 'locations#index'
  get '/add_destination' => 'destinations#add_destination'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
