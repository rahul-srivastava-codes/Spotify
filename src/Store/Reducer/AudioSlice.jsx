import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: true,
  currentsong: null,
};

export const AudioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    changeAudio: (state, action) => {
      state.currentsong = action.payload;
    },
  },
});

export const { changeAudio } = AudioSlice.actions;

export default AudioSlice.reducer;
