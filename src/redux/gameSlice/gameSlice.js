import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  gameSearchURL,
  newGamesUrl,
  popularGamesUrl,
  upcomingGamesUrl,
} from "../../api";

const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  search: [],
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

export const fetchSearchGames = createAsyncThunk(
  "Games/fetchSearchGames",
  async (gameName, thunkAPI) => {
    try {
      const response = await axios.get(gameSearchURL(gameName));
      return response.data.results;
    } catch (error) {
      throw error;
    }
  }
);

const gameSlice = createSlice({
  name: "Games",
  initialState,
  reducers: {
    clearGameSearch(state, action) {
      state.search = [];
    },
  },
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
      })
      .addCase(fetchSearchGames.fulfilled, (state, action) => {
        state.search = action.payload;
      });
  },
});

export default gameSlice.reducer;
export const { clearGameSearch } = gameSlice.actions;
