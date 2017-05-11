Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :parties, only: [:show, :index]
    resources :gifts, only: [:show]
    resources :guests, only: [:index, :show] do
      resources :gifts, only: [:index]
    end
  end

end

# '/api/guests/3/gifts'
