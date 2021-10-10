import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { formattedUrl } from "../config";

// first create the thunk

export const allDestinations = createAsyncThunk(
  'allDestinations',
  async() => await axios.get(formattedUrl('api/v1/destinations'))
)

export const allDestinationsSlice = createSlice({
  name: "destinations",
  initialState: {
    destinations: [],
    status: null
  },
  extraReducers: {
    [allDestinations.pending]: (state, action) => {
      state.status = 'loading'
    },
    [allDestinations.fulfilled]: (state, action) => {
      state.destinations = action.payload
      state.status = 'success'
    },
    [allDestinations.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export const { allDestinationAction } = allDestinationsSlice.actions

export default allDestinationsSlice.reducer;