import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, movieId }) => {
  const navigate = useNavigate();
  if (!posterPath) return null;

  return (
    <div
      className="w-36 md:w-48 pr-4"
      onClick={() => navigate(`/movie/${movieId}`)}
    >
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        title={title}
       
      />
      {title && (
        <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {title}
        </p>
      )}
    </div>
  );
};

export default MovieCard;
