import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Footer from '../components/Footer'
import Movies from '../pages/Movies'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />

    </Routes>

    <Footer/>

    </BrowserRouter>
  )
}

export default AppRouter