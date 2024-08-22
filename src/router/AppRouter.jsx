import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Footer from '../components/Footer'
import Movies from '../pages/Movies'

const AppRouter = () => {
  console.log("calisiyor mu")
 
  return (
    <>
    { console.log("calisiyor mu")}
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />

    </Routes>

    <Footer/>

    </>
  )
}

export default AppRouter