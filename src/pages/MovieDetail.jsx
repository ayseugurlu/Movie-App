import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {

  const {id} = useParams()

  const [filmdetail,setFilmDetail]=useState("")

  const {title,poster_path, overview,vote_average, release_date,vote_count}=filmdetail

  console.log(filmdetail);
  return (
    <div>
        
    </div>
  )
}

export default MovieDetail