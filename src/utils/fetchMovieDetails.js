import React from "react";
import {
  API_OPTIONS,
  MOVIE_TRAILER_INITIAL_URL,
} from "./constants";

export const fetchMovieDetails = async (movieId) => {
  const data = await fetch(
    `${MOVIE_TRAILER_INITIAL_URL}${movieId}?language=en-US`,
    API_OPTIONS
  );
  return await data.json();
};

export const fetchMovieCredits = async (movieId) => {
  const data = await fetch(
    `${MOVIE_TRAILER_INITIAL_URL}${movieId}/credits?language=en-US`,
    API_OPTIONS
  );
  return await data.json();
};

export const fetchSimilarMovies = async (movieId) => {
  const data = await fetch(
    `${MOVIE_TRAILER_INITIAL_URL}${movieId}/similar?language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

export const fetchMovieVideos = async (movieId) => {
  const data = await fetch(
    `${MOVIE_TRAILER_INITIAL_URL}${movieId}/videos?language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};
