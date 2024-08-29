
import { useNavigate } from 'react-router-dom';


const MovieCard = ({title,overview, poster_path,vote_average,id}) => {

const navigate = useNavigate();

  return (
    <div
    className="card w-[400px] rounded-xl overflow-hidden transition-all ease-in hover:scale-105"
    onClick={()=>navigate("/details/" + id)}
    
  >
    
    <img
      className="w-full"
      src={poster_path ? `https://image.tmdb.org/t/p/w1280${poster_path}` : "https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      alt=""
    />
    
  </div>
  )
}

export default MovieCard