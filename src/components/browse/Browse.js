import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearch from "../gpt/GptSearch";
import Header from "../auth/Header";
import MainContainer from "../../components/browse/MainContainer";
import SecondaryContainer from "../../components/browse/SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? ( 
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
      -MainContainer
        -Video Background 
        -Movie Title
      -SecondaryCOnatiner
        -MovieList * n
        -cards *n 
       */}
    </div>
  );
};

export default Browse;
