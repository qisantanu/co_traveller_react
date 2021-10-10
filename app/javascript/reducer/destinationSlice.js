import { createAsyncThunk, createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import { formattedUrl } from "../config";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
// first create the thunk
export const fetchDestination = createAsyncThunk(
  'fetchDestination',
  async () => await axios.get(formattedUrl('api/v1/destinations?current=true'))
)

export const updateDestination = createAsyncThunk(
  'updateDestination',
  async (destData) => await axios.post(formattedUrl('api/v1/destinations'), destData)
)

export const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    latitude: '',
    longitude: ''
  },
  extraReducers: {
    [fetchDestination.fulfilled]: (state, action) => {
      // action.payload is the response
      state.latitude = action.payload.data.lat
      state.longitude = action.payload.data.lng
    },
    [fetchDestination.rejected]: (state, action) => {
      state.latitude = ''
      state.longitude = ''
    },
    [updateDestination.fulfilled]: (state, action) => {
      // if multiple destinations or array of detinations
      // state.destinations.unshift(action.payload.data);

      state.latitude = action.payload.data.lat
      state.longitude = action.payload.data.lng
    },
  },
  
})

export const { fetchDestinationAction } = destinationSlice.actions

export default destinationSlice.reducer;