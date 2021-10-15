import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDestination } from "../reducer/destinationSlice";
import { fetchDestination } from "../reducer/destinationSlice";

const SetDestination = (props) => {
  const destination = useSelector((state) => state.destination);
  const dispatch = useDispatch()

  const [latitude, setLatitude] = useState(destination.latitude)
  const [longitude, setLongitude] = useState(destination.longitude)
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDestination())
    setLatitude(destination.latitude);
    setLongitude(destination.longitude);
    
  }, [destination])

  const handleSubmit = (e) => {
    const payload = {
      destination: {
        latitude: latitude,
        longitude: longitude
      }
    }

    dispatch(updateDestination(payload))
    history.push('/location')
    e.preventDefault();
  }

  return (
    <>
      
      <form className="form-inline mx-4" onSubmit={e => { handleSubmit(e) }}>
        <label >
          Destination Latitude:

        </label>
        <input type="text" className="form-control mb-2 mr-sm-2" name="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />

        <label>
          Destination Longitude:
        </label>
        <input type="text" className="form-control mb-2 mr-sm-2" name="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />

        <input type="submit" value="Submit" className="btn btn-primary mb-2" />
      </form>
    </>
  )
}

export default SetDestination
