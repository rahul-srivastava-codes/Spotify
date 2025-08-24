import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNight: true,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.isNight = !state.isNight;
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
