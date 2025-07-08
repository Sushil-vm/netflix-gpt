import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieVideos,
  fetchSimilarMovies,
} from "./fetchMovieDetails";

export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (movieId, { rejectWithValue }) => {
    try {
      const details = await fetchMovieDetails(movieId);
      const credits = await fetchMovieCredits(movieId);
      const similar = await fetchSimilarMovies(movieId);
      const videos = await fetchMovieVideos(movieId);

      return { details, credits, similar };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    tvShows: null,
    airingShows: null,
    onTheAirShows: null,
    popularTvShows: null,
    topRatedTvShows: null,
    movieDetails: null,
    movieCredits: null,
    similarMovies: null,
    loadingStatus: "idle",
    error: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addAiringTodayShows: (state, action) => {
      state.airingShows = action.payload;
    },
    addOnTheAirShows: (state, action) => {
      state.onTheAirShows = action.payload;
    },
    addPopularTvShows: (state, action) => {
      state.popularTvShows = action.payload;
    },
    addTopRatedTvShows: (state, action) => {
      state.topRatedTvShows = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.loadingStatus = "loading";
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loadingStatus = "succeeded";
        state.movieDetails = action.payload.details;
        state.movieCredits = action.payload.credits;
        state.similarMovies = action.payload.similar;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loadingStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addTvShows,
  addAiringTodayShows,
  addOnTheAirShows,
  addPopularTvShows,
  addTopRatedTvShows,
  addMovieDetails,
  addMovieCredits,
  addSimilarMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
