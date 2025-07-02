// components/movies/MovieListSkeleton.js
import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="px-6">
      <div className="h-10 w-48 mb-4 bg-gray-800 rounded animate-pulse"></div>
      <div className="flex overflow-x-scroll space-x-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-48 h-72 bg-gray-800 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default ShimmerEffect;
