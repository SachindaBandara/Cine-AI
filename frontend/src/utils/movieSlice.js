import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMoives: null,
  },
  reducers: {
    addNowPlayingMoives: (state, action) => {
      state.nowPlayingMoives = action.payload;
    },
  },
});

export const { addNowPlayingMoives } = movieSlice.actions;

export default movieSlice.reducer;
