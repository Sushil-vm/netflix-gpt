import React from "react";
import MovieCard from "./MovieCard";
import ShimmerEffect from "./ShimmerEffect";

const MovieList = ({ title, movies, overview, isloading }) => {
  if (isloading) return <ShimmerEffect />;

  if (!movies) return null;

  return (
    <div className="px-6 py-4">
      <div className="mb-4">
        <h1 className="text-lg md:text-3xl py-4  text-white">{title}</h1>
        {overview && (
          <p className="text-gray-300 text-sm md:text-base mt-2 max-w-2xl">
            {overview}
          </p>
        )}
      </div>
      <div
        className="flex overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
