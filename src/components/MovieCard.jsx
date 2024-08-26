import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContextt } from '../context/AuthContext';

const MovieCard = ({title,overview, poster_path,vote_average,id}) => {

  const {currentUser}=useContext(AuthContextt)

const navigate = useNavigate();

  return (
    <div
    className="card w-[400px] rounded-xl overflow-hidden transition-all ease-in hover:scale-105"
    onClick={()=>navigate("/details/" + id)}
  >
    
    <img
      className="w-full"
      src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
      alt=""
    />
    
  </div>
  )
}

export default MovieCard