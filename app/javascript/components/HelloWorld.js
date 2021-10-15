import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { allDestinations } from "../reducer/allDestinationSlice";
import { fetchDestination } from "../reducer/destinationSlice";

const HelloWorld = (props) => {
//class HelloWorld extends React.Component {
  // if this is the home screen
  // load global state in redux store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allDestinations())
    dispatch(fetchDestination())
  })
  
  
  return (
    <>
      <div>Hello world! This is home page</div>
    </>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
