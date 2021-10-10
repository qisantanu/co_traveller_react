import { configureStore } from '@reduxjs/toolkit'
import { destinationSlice } from './destinationSlice';
import { allDestinationsSlice } from './allDestinationSlice';

const store = configureStore({
  reducer: {
    destination: destinationSlice.reducer,
    allDestinations: allDestinationsSlice.reducer,
  }
})

export default store;