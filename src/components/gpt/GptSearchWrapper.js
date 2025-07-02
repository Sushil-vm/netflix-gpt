import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../../utils/gptSlice";
import GptSearch from "./GptSearch";

const GptSearchWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleGptSearchView(true));
    return () => dispatch(toggleGptSearchView(false));
  }, [dispatch]);

  return <GptSearch />;
};

export default GptSearchWrapper;
