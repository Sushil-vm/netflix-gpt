import React from "react";
import useTvShowsMovies from "../../hooks/useTvShowsMovies";
import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";
import Header from "../auth/Header";
import useAiringTodayShows from "../../hooks/useAiringTodayShows";
import useOnTheAirShows from "../../hooks/useOnTheAirShows";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import useTopRatedTvShows from "../../hooks/useTopRatedShows";
import { useLocation } from "react-router-dom";

const TvShows = () => {
  useTvShowsMovies();
  useAiringTodayShows();
  useOnTheAirShows();
  usePopularTvShows();
  useTopRatedTvShows();

  const location = useLocation();
  const title = location.pathname === "/webseries" ? "WebSeries" : "TV Shows";

  const tvShows = useSelector((store) => store.movies);
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      <Header />
      <div className="pt-28 px-6 md:px-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 border-l-4 border-red-600 pl-4">
          {title}
        </h1>
      </div>
      <MovieList title={""} movies={tvShows?.tvShows} />
      <MovieList title={""} movies={tvShows?.airingShows} />
      <MovieList title={""} movies={tvShows?.onTheAirShows} />
      <MovieList title={""} movies={tvShows?.popularTvShows} />
      <MovieList title={""} movies={tvShows?.topRatedTvShows} />
    </div>
  );
};

export default TvShows;
