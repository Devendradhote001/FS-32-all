import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    currentPlayingSong: null,
    isPlaying: false,
  },
  reducers: {
    playSong: (state, action) => {
      state.currentPlayingSong = action.payload;
      state.isPlaying = true;
    },
    stopPlaying: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { playSong, stopPlaying } = songSlice.actions;
export default songSlice.reducer;
