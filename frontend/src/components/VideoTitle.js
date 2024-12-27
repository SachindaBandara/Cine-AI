import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-black pt-36 px-12 font-inter">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-gray-500 p-4 px-12 text-xl rounded-sm bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-500 mx-3 p-4 px-12 text-xl rounded-sm bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
