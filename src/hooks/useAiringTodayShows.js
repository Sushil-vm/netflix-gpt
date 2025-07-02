import { useEffect } from "react";
import { AIRING_TODAY_TV_SHOWS_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayShows } from "../utils/movieSlice";

const useAiringTodayShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((store) => store.airingShows);
  const getAiringTodayShows = async () => {
    const data = await fetch(AIRING_TODAY_TV_SHOWS_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addAiringTodayShows(json.results));
  };
  useEffect(() => {
    !tvShows && getAiringTodayShows();
  }, []);
};

export default useAiringTodayShows;
