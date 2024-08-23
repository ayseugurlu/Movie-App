import React, { useContext} from "react";
import { MovieContext } from "../context/MovieProvider";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;



const MovieCard = () => {
  const { movies,loading,error } = useContext(MovieContext);

  console.log(movies);

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

{loading ? (<div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-fuchsia-600 mt-52"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div> ) : ( <div className="flex flex-wrap justify-evenly gap-4 mt-10">
        {movies.map((movie) => (
        <div
          key={movie.id}
          className="card flex flex-col flex-wrap w-[300px] justify-center items-center bg-fuchsia-500"
        >
          <h2 className="text-white text-xl">{movie.title}</h2>
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt=""
          />
          <span>{movie.vote_average}</span>
        </div>
      ))}
      </div>)}
     
      
    </div>
  );
};

export default MovieCard;
