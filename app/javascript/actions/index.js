const fetchDestAction = () => {
  return {
    type: 'FETCH_DESTINATION',
    payload: ''
  }
}

const updateDestinationAction = (latLng) => {
  return {
    type: 'UPDATE_DEST',
    payload: latLng
  }
}

export {
  fetchDestAction,
  updateDestinationAction
}