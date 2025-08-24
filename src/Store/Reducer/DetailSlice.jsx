import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: {},
};

export const DetailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    changeDetail: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { changeDetail } = DetailSlice.actions;

export default DetailSlice.reducer;
