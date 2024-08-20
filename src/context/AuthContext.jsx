import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MovieContext=createContext();


 const API_KEY="e5632217a7eb6424279fb8bba8d08e17"

const AuthContext = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const [movies,setMovies]=useState([])

   

    const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

    

    const getData = async () => {
        setLoading(true);

        try {

            const {data} = await axios.get(url);

            setMovies(data.results)

            console.log(data.results);
            
          

        } catch (error) {
            setError(true)
            
        }finally{
            setLoading(false)
        }
    }

useEffect(() => {

  getData()

  
}, [])


   

    

  return (
    <MovieContext.Provider value={{movies,setMovies}}>
        {children}
    </MovieContext.Provider>
  )
}

export default AuthContext