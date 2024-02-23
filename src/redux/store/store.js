import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../gameSlice/gameSlice";
import gameDetailsReducer from "../gameDetailsSlice/gameDetailsSlice";

export const store = configureStore({
  reducer: {
    Games: gameReducer,
    GameDetails: gameDetailsReducer,
  },
});
