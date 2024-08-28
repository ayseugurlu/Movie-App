import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContextt } from "../context/AuthContext";


const Register = () => {

  const {createUser,signUpWithGoogle}=useContext(AuthContextt)
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [firstname,setFirstname]=useState()
  const [lastname,setLastname]=useState()


  const handleSubmit=(e)=>{
    e.preventDefault()

    const displayName=`${firstname} ${lastname}`
    createUser(email,password,displayName)

    setEmail("")
    setPassword("")
    setFirstname("")
    setLastname("")
    
  }

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
      <div className="image-container h-screen sm:w-full md:w-1/2 lg:w-2/3">
        <img
          src="https://picsum.photos/800/800"
          className="object-cover w-full h-full"
          alt="Placeholder"
        />
      </div>

      <div className="form-container bg-slate-200 dark:bg-[#030303] sm:w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
        <form className="p-8 md:p-16 lg:p-24 w-full"
        onSubmit={handleSubmit}
        >
          <h2 className="text-fuchsia-300 text-center text-3xl mb-8 md:mb-12 lg:mb-16">
            Sign Up
          </h2>
          <div className="form-group mb-4">
            <input
              type="text"
              autoComplete="true"
              placeholder="Firstname"
              name="firstname"
              id="firstname"
              value={firstname}
              className="peer w-full"
              required
              onChange={(e)=>setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              id="lastname"
              value={lastname}
              className="peer w-full"
              required
              onChange={(e)=>setLastname(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
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
              value={password}
              className="peer w-full"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn w-full p-2 mb-4 bg-fuchsia-400 text-white rounded">
            Register
          </button>
          <button onClick={()=>signUpWithGoogle()}
           type="button" className="btn w-full p-2 bg-fuchsia-400 text-white border border-gray-300 rounded flex items-center justify-center">
            Continue with Google{" "}
            <FcGoogle color="currentColor" className="inline ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
