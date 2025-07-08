import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../video/VideoTitle";
import VideoBackground from "../video/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    if (!movies) return;
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [movies]);
  if (!movies) return null;
  const mainMovie = movies[currentMovieIndex];
  const { id, original_title, overview } = mainMovie;

  return (
    <div className=" relative ">
      <VideoTitle
        title={original_title}
        overview={overview}
        onNext={() =>
          setCurrentMovieIndex((prev) => (prev + 1) % movies.length)
        }
        onPrev={() =>
          setCurrentMovieIndex(
            (prev) => (prev - 1 + movies.length) % movies.length
          )
        }
      />
      <VideoBackground movieId={id} key={id} />
    </div>
  );
};

export default MainContainer;
