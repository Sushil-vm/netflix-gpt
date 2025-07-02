import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTvShows } from "../utils/movieSlice";

const useTvShowsMovies = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.tvShows);
  const getTvShowsMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTvShows(json.results));
  };
  useEffect(() => {
    !tvShows && getTvShowsMovies();
  }, []);
};

export default useTvShowsMovies;
