import React, { useState, useEffect } from "react"
import axios from "axios"
import { formattedUrl } from "../config"

const LocationList = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    // get locations from api
    axios.get(formattedUrl('api/v1/locations'))
      .then(resp => {
        setLocations(resp.data)
      })
      .catch(resp => console.log(resp))
  }, [locations.length]);

  const list = locations.map(item => {
    return (<li className="list-group-item" key={item.id}>{item.lat}, {item.lng}</li>)
  })

  return (
    <>
      <div className="ml-4 px-2">
        <h3>My recent locations</h3>
        <ul className="list-group">
          {list}
        </ul>
      </div>

    </>
  )
}

export default LocationList;