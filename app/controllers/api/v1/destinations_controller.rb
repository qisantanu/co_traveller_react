class Api::V1::DestinationsController < Api::V1::BaseController
  def index
    if params[:current].present?
      destination = Destination.first
      render json: destination, status: 200
    else
      destinations = Destination.where.not(lat: nil)
      render json: destinations, status: 200
    end
  end

  def create
    if destination = Destination.first
      destination.lat = destination_params[:latitude]
      destination.lng = destination_params[:longitude]
      destination.save
    else
      destination = Destination.create(lat: destination_params[:latitude], lng: destination_params[:longitude])
    end

    render json: destination, status: 201
  end

  private
  
  def destination_params
    params.require(:destination).permit(:latitude, :longitude)
  end
end
