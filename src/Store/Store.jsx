import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./Reducer/Modeslice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
