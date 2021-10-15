import React, { useState, useEffect } from "react"
import { geolocated } from "react-geolocated";
import CurrentLocation from "./CurrentLocation";
import LocationList from "./LocationList";
//import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
//import { fetchDestination } from "../reducer/destinationSlice";
//import { ModalTemplate } from "./ModalTemplate";
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
      <CurrentLocation isGeolocationAvailable={props.isGeolocationAvailable} isGeolocationEnabled={props.isGeolocationEnabled} coordsInfo={props.coords} destination={destination} />

      <Button variant="primary" onClick={handleShow}>Update Destination</Button>

      <LocationList />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-inline mx-4" onSubmit={e => { handleSubmit(e) }}>
            <label >
              Latitude:

            </label>
            <input type="text" className="form-control mb-2 mr-sm-2" name="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />
            <label>
              Longitude:
            </label>
            <input type="text" className="form-control mb-2 mr-sm-2" name="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />

            <input type="submit" value="Submit" className="btn btn-primary mb-2" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Location);