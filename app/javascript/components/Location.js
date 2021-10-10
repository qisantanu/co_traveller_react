import React, { useState, useEffect } from "react"
import { geolocated } from "react-geolocated";
import CurrentLocation from "./CurrentLocation";
import LocationList from "./LocationList";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { fetchDestination } from "../reducer/destinationSlice";

const Location = (props) => {
  const destination = useSelector((state) => state.destination);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDestination())

  }, [])
   
  return (
    <>
      <CurrentLocation isGeolocationAvailable={props.isGeolocationAvailable} isGeolocationEnabled={props.isGeolocationEnabled} coordsInfo={props.coords} destination={destination} />
      <p className="text-monospace mx-auto"><Link to="/add_destination" className="btn btn-primary btn-md active text-decoration-none">Update destination</Link></p>
      <LocationList />
    </>
  );
  
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Location);