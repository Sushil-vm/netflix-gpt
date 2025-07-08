import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  MOVIE_TRAILER_END_URL,
  MOVIE_TRAILER_INITIAL_URL,
} from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //   fetch trailer video & updating the store with trailer video data
  const getMovieVideos = async () => {
    try {
      dispatch(addTrailerVideo(null));
      const data = await fetch(
        MOVIE_TRAILER_INITIAL_URL + movieId + MOVIE_TRAILER_END_URL,
        API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);
  return null;
};

export default useMovieTrailer;
