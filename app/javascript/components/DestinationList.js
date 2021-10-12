import React from 'react'
import { useSelector } from 'react-redux'
import DestinationListItem from './DestinationListItem'

const selectDestinations = state => state.allDestinations.destinations

const DestinationList = (props) => {
  const destinations = useSelector(selectDestinations) || props.destinations

  const renderedListItems = destinations.map(d => {
    return <DestinationListItem key={d.id} destination={d} />
  })

  return (
    <>
      <h3>Destinations List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Lat</th>
            <th scope="col">Lng</th>
          </tr>
        </thead>
        <tbody>
          {renderedListItems}
        </tbody>
      </table>
    </>
  );
}

export default DestinationList;