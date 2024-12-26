import React from "react";
import Header from "./Header";
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // Fetch data from movie api and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <p>browse</p>
    </div>
  );
};

export default Browse;
