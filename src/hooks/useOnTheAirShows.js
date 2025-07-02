import { useEffect } from "react";
import { API_OPTIONS, ON_THE_AIR_TV_SHOWS_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addOnTheAirShows } from "../utils/movieSlice";

const useOnTheAirShows = () => {
  const dispatch = useDispatch();
  const onAirtvShows = useSelector((store) => store.onTheAirShows);
  const getOnTheAirShows = async () => {
    const data = await fetch(ON_THE_AIR_TV_SHOWS_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addOnTheAirShows(json.results));
  };
  useEffect(() => {
    !onAirtvShows && getOnTheAirShows();
  }, []);
};

export default useOnTheAirShows;
