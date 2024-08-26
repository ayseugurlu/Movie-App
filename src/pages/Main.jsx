import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate =useNavigate()

  return (
    <div className='text-white font-mono flex flex-col gap-10 md:gap-72  mt-72 sm:mt-96 p-8 h-16'>
        <p className='text-3xl w-[500px] md:w-[800px]'>Discover the latest movies, explore genres, and enjoy cinematic adventures.</p>

        <button className='flex gap-3 text-black hover:text-white text-sm md:text-lg border-[1px] border-white-200 p-3 items-center  rounded-2xl bg-white hover:bg-black self-start md:self-end'>
        <IoIosArrowRoundForward className='text-4xl bg-fuchsia-400 rounded-2xl hover:bg-fuchsia-600'
        onClick={()=>navigate("/login")}
         /> <span>Get Started</span> </button>
    </div>
  )
}

export default Main
