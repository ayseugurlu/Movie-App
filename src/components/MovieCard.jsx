
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
      src={`https://image.tmdb.org/t/p/w1280${poster_path}` || "https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_1280.png"}
      alt=""
    />
    
  </div>
  )
}

export default MovieCard