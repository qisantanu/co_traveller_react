class Api::V1::LocationsController < Api::V1::BaseController
  def index
    locations = Location.all.last(200)
    render json: locations, status: 200
  end
end
