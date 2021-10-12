# frozen_string: true
# destinations controller
class DestinationsController < ApplicationController
  def add_destination; end

  def index
    @destinations = Destination.where.not(lat: nil)
  end
end
