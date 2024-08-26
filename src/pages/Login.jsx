import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { AuthContextt } from '../context/AuthContext'

const Login = () => {

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const {signIn,signUpWithGoogle} = useContext(AuthContextt)

  const handleSubmit=(e)=>{
      e.preventDefault()
      signIn(email,password)

  }


  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
    

    <div className="form-container bg-slate-100 dark:bg-[#030303] sm:w-full md:w-1/2 lg:w-1/3 min-h-screen flex items-center justify-center">
      <form className="p-8 md:p-16 lg:p-24 w-full h-full"
      onSubmit={handleSubmit}>
        <h2 className="text-fuchsia-300 text-center text-3xl mb-8 md:mb-12 lg:mb-16">
          Login
        </h2>
        
        <div className="form-group mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="peer w-full"
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-8">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="peer w-full"
            required
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className='flex text-slate-400 justify-between items-center text-xl'>
          <button> Forgot Password</button>
          <button><Link to="/signup">Sign Up</Link></button>
        </div>

        <button type="submit" className="btn w-full p-2 mb-4 bg-fuchsia-400 text-white rounded">
          Register
        </button>
        <button onClick={()=>signUpWithGoogle()} type="button" className="btn w-full p-2 bg-fuchsia-400 text-white border border-gray-300 rounded flex items-center justify-center">
          Continue with Google{" "}
          <FcGoogle color="currentColor" className="inline ml-2" />
        </button>
      </form>
    </div>

    <div className="image-container sm:w-full md:w-1/2 lg:w-2/3">
      <img
        src="https://picsum.photos/800/800"
        className="object-cover w-full h-full"
        alt="Placeholder"
      />
    </div>
  </div>
  )
}

export default Login