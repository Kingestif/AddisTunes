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
    fetchSongs: (state) => { state.loading = true; },
    fetchSongsSuccess: (state, action) => { state.items = action.payload; state.loading = false; },
    fetchSongsFailure: (state, action) => { state.error = action.payload; state.loading = false; },

    addSong: (state) => { state.loading = true; },
    addSongSuccess: (state, action) => { state.items.push(action.payload); state.loading = false; },

    updateSong: (state) => { 
      // state.loading = true; 
    },
    updateSongSuccess: (state, action) => {
      const index = state.items.findIndex(s => s._id === action.payload._id);
      if (index !== -1) state.items[index] = action.payload;
      state.loading = false;
    },

    deleteSong: (state) => { 
      // state.loading = true; 
    },
    deleteSongSuccess: (state, action) => {
      state.items = state.items.filter(s => s._id !== action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchSongs, fetchSongsSuccess, fetchSongsFailure,
  addSong, addSongSuccess,
  updateSong, updateSongSuccess,
  deleteSong, deleteSongSuccess
} = songsSlice.actions;

export default songsSlice.reducer;