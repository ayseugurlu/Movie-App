import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/AuthContext";


const MovieCard = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <form>
          <input
            className="w-96 rounded-lg p-3"
            type="text"
            placeholder="Search a movie"
          />
          <button
            type="submit"
            className="text-white p-3 bg-fuchsia-500 rounded-lg ml-3"
          >
            Search
          </button>
        </form>
      </div>


      <div className="flex flex-wrap justify-evenly gap-4 mt-10">
        {movies.map((movie) => (
        <div
          key={movie.id}
          className="card flex flex-col flex-wrap w-[300px] justify-center items-center bg-fuchsia-500"
        >
          <h2 className="text-white text-xl">{movie.original_title}</h2>
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt=""
          />
          <button className="bg-white">Movie Details</button>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default MovieCard;
