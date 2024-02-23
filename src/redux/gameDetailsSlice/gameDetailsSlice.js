import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gameDetailsURL, gameScreenshotURL } from "../../api";
import axios from "axios";

const initialState = {
  gameDetails: {},
  screenshots: {},
};

export const fetchGameDetails = createAsyncThunk(
  "Game_Details/fetchGameDetails",
  async (game_id, thunkAPI) => {
    try {
      const response = await axios.get(gameDetailsURL(game_id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchGameScreenshots = createAsyncThunk(
  "Game_Details,fetchGameScreenshots",
  async (game_id, thunkAPI) => {
    try {
      const response = await axios.get(gameScreenshotURL(game_id));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const gameDetailsSlice = createSlice({
  name: "Game_Details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.gameDetails = action.payload;
      })
      .addCase(fetchGameScreenshots.fulfilled, (state, action) => {
        state.screenshots = action.payload;
      });
  },
});

export default gameDetailsSlice.reducer;
