import React from "react";
import MovieList from "../movies/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="relative z-10 bg-black pt-16">
        <div className=" pl-4 md:pl-12 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
        {/* 
    MovieList - Popular
     -MovieCards *n
    MovieList - NowPlaying
    MovieList - Trending
    MovieList - Horror
    MovieList - Thriller
     */}
      </div>
    )
  );
};

export default SecondaryContainer;
