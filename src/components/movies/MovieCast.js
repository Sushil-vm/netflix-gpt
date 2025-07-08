import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCast = ({ cast }) => {
  if (!cast?.length) return null;

  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-white">
        Cast
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  xl:grid-cols-8 gap-4 sm:gap-5 lg:gap-6">
        {cast.slice(0, 8).map((person) => (
          <div
            key={person.id}
            className="group transition-all duration-200 hover:scale-105 flex flex-col"
          >
            <div className="w-full aspect-[3/5] overflow-hidden rounded-lg shadow-lg mb-2 lg:mb-3  bg-gray-800 hover:shadow-xl transition-shadow">
              <img
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w300${person.profile_path}`
                    : "/avatar-placeholder.png"
                }
                alt={person.name}
                loading="lazy"
              />
            </div>
            <div className="text-center px-1 min-h-[3.5rem] lg:min-h-[4rem] flex flex-col justify-center">
              <p className="font-semibold text-xs sm:text-base  text-white  mb-0.5 lg:mb-1 leading-tight line-clamp-1">
                {person.name}
              </p>
              <p className="text-gray-300 text-xs  sm:text-sm lg:text-[0.95rem] leading-tight italic line-clamp-2">
                {person.character.length > 15
                  ? `${person.character.substring(0, 15)}...`
                  : person.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
