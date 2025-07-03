import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../video/VideoTitle";
import VideoBackground from "../video/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  if (!movies) return null;

  // useEffect(()=>{
  //   const interval = setInterval
  // })
  // const mainMovie = movies[currentMovieIndex];
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
