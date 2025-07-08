import React from "react";

const VideoTitle = ({ title, overview, onPrev, onNext }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end pb-12 px-6 md:px-24 text-white bg-gradient-to-t from-black to-transparent z-20 ">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6  text-white ">
          {overview}
        </p>
        <div className="  flex mt-4 gap-4">
          <div>
            <button className="bg-white text-black py-2 md:py-3 px-6 md:px-8 text-lg rounded-lg hover:bg-opacity-80">
              ▶ Play
            </button>
            <button className="hidden md:inline-block mx-2 bg-gray-400 text-white py-2 md:py-3 md:px-8 px-6 text-xl bg-opacity-80 rounded-md">
              ℹ️More Info
            </button>
          </div>
          <div className="flex gap-4 ml-0 md:ml-auto">
            <button
              className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
              onClick={onPrev}
              aria-label="Previous movie"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-100 transition-all shadow-lg"
              onClick={onNext}
              aria-label="Next movie"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
