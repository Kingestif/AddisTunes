import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    fetchSongs: (state, action) => { state.loading = true; },
    fetchSongsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addSong: (state) => { state.loading = true; },
    updateSong: (state) => { state.loading = true; },
    deleteSong: (state) => { state.loading = true; },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  updateSong,
  deleteSong,
} = songsSlice.actions;

export default songsSlice.reducer;
