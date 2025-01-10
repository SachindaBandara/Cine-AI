import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white pt-[20%] px-6 md:px-24 font-inter absolute bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-50 text-black p-4 px-12 text-xl font-bold rounded-md hover:bg-opacity-80 cursor-pointer">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 mx-3 p-4 px-12 text-xl rounded-md bg-opacity-50 hover:bg-opacity-60  cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
