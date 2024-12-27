import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 font-inter text-white pr-2">
      <h1 className=" text-3xl font-extrabold py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
