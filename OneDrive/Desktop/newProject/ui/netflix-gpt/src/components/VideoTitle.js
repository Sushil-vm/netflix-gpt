import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute  text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-base w-1/4  text-white ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-lg rounded-md hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-400 text-white p-4 px-12 text-lg bg-opacity-80 rounded-md">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
