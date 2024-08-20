import React from 'react'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  return (
    <div className='min-h-screen'>
        <h1 className='text-white text-3xl text-center mt-5'>Movies</h1>
        <MovieCard/>
    </div>
  )
}

export default Movies