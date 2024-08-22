import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate =useNavigate()

  return (
    <div className='text-white font-mono flex-col mt-96  h-full p-8'>
        <p className='text-3xl w-[800px]'>Discover the latest movies, explore genres, and enjoy cinematic adventures.</p>

        <p className='flex gap-3 text-black hover:text-white text-lg border-[1px] border-white-200 w-[250px] h-14 p-3 rounded-2xl bg-white hover:bg-black my-16 ml-[1200px]'>
        <IoIosArrowRoundForward className='text-4xl bg-fuchsia-400 rounded-2xl hover:bg-fuchsia-600'
        onClick={()=>navigate("/login")}
         />Get Started</p>
    </div>
  )
}

export default Main
