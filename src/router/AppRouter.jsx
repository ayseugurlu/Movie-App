import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import Footer from '../components/Footer'
import Movies from '../pages/Movies'
import Register from '../pages/Register'
import MovieDetail from '../pages/MovieDetail'
import Login from '../pages/Login'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
 
 
  return (
    <>
    
    <Navbar/>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/signup" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details/:id" element={<PrivateRouter/>}>
          <Route path="" element={<MovieDetail/>} />
        </Route>

    </Routes>

    <Footer/>

    </>
  )
}

export default AppRouter