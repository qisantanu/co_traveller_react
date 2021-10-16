import React, { useState, useEffect } from "react"
import { geolocated } from "react-geolocated";
import CurrentLocation from "./CurrentLocation";
import LocationList from "./LocationList";
import { useSelector, useDispatch } from "react-redux";
import { ModalTemplate } from "./ModalTemplate";
import { Button, Modal } from "react-bootstrap";
//import SetDestination from "./SetDestination";
import { updateDestination } from "../reducer/destinationSlice";
import { useHistory } from "react-router-dom";


const Location = (props) => {
  const [show, setShow] = useState(false);
  const destination = useSelector((state) => state.destination);
  const dispatch = useDispatch()
  const history = useHistory();
  const [latitude, setLatitude] = useState(destination.latitude)
  const [longitude, setLongitude] = useState(destination.longitude)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    const payload = {
      destination: {
        latitude: latitude,
        longitude: longitude
      }
    }

    dispatch(updateDestination(payload))
    setShow(false)
    e.preventDefault();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Update Destination</Button>
      <CurrentLocation isGeolocationAvailable={props.isGeolocationAvailable} isGeolocationEnabled={props.isGeolocationEnabled} coordsInfo={props.coords} destination={destination} />

      <Button variant="primary" onClick={handleShow}>Update Destination1</Button>

      <LocationList />

      <ModalTemplate title='Update destination' />
    </>
  );

}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Location);