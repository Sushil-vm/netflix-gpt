import { useSelector } from "react-redux";
import MovieList from "../movies/MovieList";
import Header from "../auth/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";

const Movies = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      <Header />
      <div className="pt-28 px-6 md:px-12">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 border-l-4 border-red-600 pl-4">
          Movies
        </h1>
      </div>
      <MovieList title={""} movies={movies?.nowPlayingMovies} />
      <MovieList title={""} movies={movies?.trendingMovies} />
      <MovieList title={""} movies={movies?.popularMovies} />
      <MovieList title={""} movies={movies?.topRatedMovies} />
    </div>
  );
};

export default Movies;
