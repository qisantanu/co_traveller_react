import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const selectTodoById = (state, dId) => {
  return state.allDestinations.destinations.find(d => d.id === dId)
}

// Destructure `props.id`, since we only need the ID value
const DestinationListItem = (props) => {
  // omit other change handlers
  // omit other list item rendering logic and contents
  const destination = props.destination

  return (
    <tr>
      <th scope="col">
        {destination.id}
      </th>
      <td>
        {destination.lat}
      </td>
      <td>
        {destination.lng}
      </td>
    </tr>
  )
}

export default DestinationListItem