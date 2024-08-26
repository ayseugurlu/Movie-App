import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Movies = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(SEARCH_API + query);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-white text-3xl text-center mt-5">Movies</h1>
      <div className=" w-1/3 min-w-fit  bg-transparent border-b-4 border-fuchsia-400 rounded-lg my-16 mx-auto text-2xl ">
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            className="w-96 rounded-lg p-3 text-slate-400"
            type="text"
            placeholder="Search a movie"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white px-6 py-1 bg-fuchsia-400 rounded-lg hover:bg-fuchsia-500 focus: outline-1"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex justify-center flex-wrap gap-8 border-3 border-red-300">
        {loading ? ( <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-fuchsia-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (movies.map((movie)=>(<MovieCard key={movie.id} {...movie}/>)))}
      </div>
    </div>
  );
};

export default Movies;
