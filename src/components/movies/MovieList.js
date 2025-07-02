import React from "react";
import MovieCard from "./MovieCard";
import ShimmerEffect from "./ShimmerEffect";

const MovieList = ({ title, movies, isloading }) => {

  if (isloading) return <ShimmerEffect />;

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4  text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
