import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    PlayingMovies: [],
    TrailerVideo: null,
    PopularMovies: [],
    UpcomingMovies: [],
  },
  reducers: {
    addPlayingMovies: (state, action) => {
      state.PlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const {
  addPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
