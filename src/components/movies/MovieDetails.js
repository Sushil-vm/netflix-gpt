import React, { useState } from "react";
import Header from "../auth/Header";
import { BG_URL, IMG_CDN_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../utils/movieSlice";
import Loading from "../../utils/Loading";
import MovieCast from "./MovieCast";
import TrailerModal from "./TrailerModal";
import VideoBackground from "../video/VideoBackground";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    movieDetails,
    movieCredits,
    simlarMovies,

    trailerVideo,
    loadingStatus,
  } = useSelector((state) => state.movies);

  const [showTrailer, setShowTrailer] = useState(false);

  React.useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id, dispatch]);

  if (loadingStatus === "loading") return <Loading />;
  if (loadingStatus === "failed") return "Error";
  if (!movieDetails) return null;
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="pt-32 px-4 md:px-12 text-white">
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              className="rounded-lg shadow-xl w-full h-auto"
              src={`${IMG_CDN_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {movieDetails.title}
              <span className="text-gray-400 ml-2 font-normal">
                ({movieDetails.release_date?.split("-")[0]})
              </span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {movieDetails.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-700 px-2 py-1 rounded text-sm"
                >
                  {genre.name}
                </span>
              ))}
              <span className="bg-gray-800 px-2 py-1 rounded text-sm">
                {Math.floor(movieDetails.runtime / 60)}h{" "}
                {movieDetails.runtime % 60}m
              </span>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  movieDetails.adult ? "bg-red-600" : "bg-green-600"
                }`}
              >
                {movieDetails.adult ? "18+" : "PG"}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-300 min-w-full">
                {movieDetails.overview}
              </p>
            </div>

            {trailerVideo && (
              <>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mb-8 flex items-center gap-2"
                  onClick={() => setShowTrailer(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Play Trailer
                </button>

                {/* Trailer Modal */}
                {showTrailer && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
                    <div className="relative w-full max-w-4xl">
                      <button
                        className="absolute -top-10 right-0 text-white hover:text-gray-300"
                        onClick={() => setShowTrailer(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <VideoBackground movieId={id} />
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="mt-12">
              <MovieCast cast={movieCredits?.cast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
