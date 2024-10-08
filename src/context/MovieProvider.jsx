import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


//!context area
export const MovieContext = createContext();

const API_KEY=process.env.REACT_APP_TMDB_KEY;
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;


const MovieProvider = ({children}) => {


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [movies, setMovies] = useState([]);


  const getMovies = async (API_ADDRESS) => {
    setLoading(true);

    try {
      const { data } = await axios.get(API_ADDRESS);

      setMovies(data.results);

      // console.log(data.results);

    } catch (error) {

      setError(true);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(BASE_URL);
  }, []);

  
  return (
    <MovieContext.Provider value={{ movies, loading,error, getMovies}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
