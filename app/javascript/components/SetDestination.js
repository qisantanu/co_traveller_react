import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDestination } from "../reducer/destinationSlice";
import { allDestinations } from "../reducer/allDestinationSlice";

const SetDestination = () => {
  const destination = useSelector((state) => state.destination);
  // for the list section
  const alldestinations = useSelector((state) => state.destinations)
  const dispatch = useDispatch()

  const [latitude, setLatitude] = useState(destination.latitude)
  const [longitude, setLongitude] = useState(destination.longitude)
  const [destError, setDestError] = useState('')
  const history = useHistory();

  useEffect(() => {
    dispatch(allDestinations())
  }, [])

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

  const DestinationRow = (dest) => {
    return (
      <tr>
        <td id={dest.id}>dest.id</td>
      </tr>
    )
  }

  const destinationList = () => {
    if(alldestinations) {
      alldestinations.map(destination => {
        DestinationRow(destination)
      })
    }
    
  }

  return (
    <>
      <div>{destError}</div>
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

      <div>


        <h3>List of destinations</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Lat</th>
              <th>Long</th>
              <th>Is Current</th>
            </tr>

          </thead>
          <tbody>

            {
              destinationList()
            }


          </tbody>
        </table>

      </div>
    </>
  )
}

export default SetDestination
