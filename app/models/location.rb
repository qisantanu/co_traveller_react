class Location < ApplicationRecord
  validates_presence_of :lat, :lng

  def as_json(options = {})
    {
      id: id,
      lat: lat,
      lng: lng
    }
  end
end
