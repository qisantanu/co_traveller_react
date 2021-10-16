import React, { useState, useEffect } from "react"
import { geolocated } from "react-geolocated";
import CurrentLocation from "./CurrentLocation";
import LocationList from "./LocationList";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
//import SetDestination from "./SetDestination";
import { updateDestination } from "../reducer/destinationSlice";
import { useHistory } from "react-router-dom";

/*const ModalTemplate = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return(
    <div>Hello modal</div>    

    
  )  
}
*/
const ModalTemplate = (props) => {
  const [locations, setLocations] = useState([])


  return (
    <>
      <div className="ml-4 px-2">
        <h3>My recent locations</h3>
      </div>

    </>
  )
}

export default ModalTemplate;
