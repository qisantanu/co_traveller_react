import React, { useState, useEffect } from "react"
import getDistance from 'geolib/es/getDistance';
import ProgressBar from "./ProgressBar";

const CurrentLocation = ({ isGeolocationAvailable, isGeolocationEnabled, coordsInfo, destination }) => {
  const [distance, setDistance] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const distanceRemained = (coordsInfo) => {
    if (destination) {
      let distance = getDistance(
        { latitude: coordsInfo.latitude, longitude: coordsInfo.longitude },
        destination
      );
  
      let percentage = (1 - distance / 500000) * 100
  
      setDistance(distance/ 1000.0)
      setPercentage(percentage.toFixed());
    }
  };

  useEffect(() => {
    if (coordsInfo) {
      distanceRemained(coordsInfo)
    }

    /*
    // while unmounting, return the function from useEffect
    return () => {
      clearInterval(interval);
    }
  */
  }, [coordsInfo]);

  const tableInfo = (coordsInfo) => {

    return (<table className="table table-striped">
      <tbody>
        <tr scope="row">
          <td>Current latitude</td>
          <td>{coordsInfo.latitude}</td>
        </tr>
        <tr scope="row">
          <td>Current longitude</td>
          <td>{coordsInfo.longitude}</td>
        </tr>
        <tr scope="row">
          <td>Destination</td>
          <td>{destination.latitude}, {destination.longitude}</td>
        </tr>

        <tr scope="row">
          <td>Distance remained</td>
          <td>{distance}</td>
        </tr>
      </tbody>
    </table>)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 text-left">
            {
              !isGeolocationAvailable ? (
                <div>Your, isGeolocationEnableisGeolocationEnableisGeolocationEnabled browser does not support Geolocation</div>
              ) : !isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
              ) : coordsInfo ? (tableInfo(coordsInfo)) : <div>Getting the location data </div>
            }
          </div>
          <div className="col-1 text-right">
            
          </div>
          <div className="col-3 text-right">
            <ProgressBar completed={percentage} />
          </div>
        </div>
      </div>

    </>
  )
}

export default CurrentLocation