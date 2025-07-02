import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularTvShows } from "../utils/movieSlice";

const usePopularTvShows = () => {
  const dispatch = useDispatch();
  const popularTvShows = useSelector((store) => store.popularTvShows);
  const getPopularTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularTvShows(json.results));
  };
  useEffect(() => {
    !popularTvShows && getPopularTvShows();
  }, []);
};

export default usePopularTvShows;
