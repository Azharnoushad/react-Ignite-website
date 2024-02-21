import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from "../../api";

const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  loading: false,
  error: null,
};

export const fetchPopularGames = createAsyncThunk(
  "Games/fetchPopularGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(popularGamesUrl());
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchUpcomingGames = createAsyncThunk(
  "Games/fetchUpcomingGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(upcomingGamesUrl());
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchNewGames = createAsyncThunk(
  "Games/fetchNewGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(newGamesUrl());
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
);

const gameSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularGames.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPopularGames.fulfilled, (state, action) => {
        state.loading = false;
        state.popularGames = action.payload;
      })
      .addCase(fetchPopularGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUpcomingGames.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingGames = action.payload;
      })
      .addCase(fetchNewGames.fulfilled, (state, action) => {
        state.loading = false;
        state.newGames = action.payload;
      });
  },
});

export default gameSlice.reducer;
