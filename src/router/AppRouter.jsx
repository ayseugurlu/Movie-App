import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Footer from '../components/Footer'
import Movies from '../pages/Movies'
import Register from '../pages/Register'

const AppRouter = () => {
 
 
  return (
    <>
    
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path='/signup' element={<Register/>}/>

    </Routes>

    <Footer/>

    </>
  )
}

export default AppRouter