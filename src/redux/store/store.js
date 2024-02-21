import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../gameSlice/gameSlice";

export const store = configureStore({
  reducer: {
    Games: gameReducer,
  },
});
