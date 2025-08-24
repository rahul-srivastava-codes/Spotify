import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./Reducer/Modeslice";
import audioReducer from "./Reducer/AudioSlice";
import detailReducer from "./Reducer/DetailSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    audio: audioReducer,
    detail: detailReducer,
  },
});
