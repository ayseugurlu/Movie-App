import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";

const Navbar = () => {
    const [profilopen,setProfilOpen]=useState(false)
   

  return (
    <div className="relative">
    <nav className="bg-slate-100 text-slate-950 dark:bg-slate-950  dark:text-white flex justify-between align-center h-20 p-4 fixed top-0 w-full z-10">
      <div className="flex justify-between gap-16">
        <div className="">
          <span className="text-3xl text-fuchsia-500 font-[Oswald,sans-serif] font-bold ">
            KinoFLIX
          </span>
        </div>

        <div className="text-xl ">
          <NavLink to="/" className="hover:text-fuchsia-400 transition-all ease-in">Home</NavLink>
          <NavLink to="/movies" className="mx-5 hover:text-fuchsia-400 transition-all ease-in">Movies</NavLink>
          <NavLink to="/signin" className="hover:text-fuchsia-400 transition-all ease-in">About</NavLink>
        </div>
      </div>

      <div className="flex justify-between align-center gap-4 relative">

            <Switch/>
        
        <NavLink onClick={()=>setProfilOpen(!profilopen)}>
          
          <img
            className="w-10"
            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
            alt=""
          />
          {profilopen ? ( <div className="flex flex-col text-xl  text-slate-600 bg-fuchsia-300 p-4 mt-1 rounded-lg absolute right-[0px] top-12">
            <NavLink to="/signup" className="hover:text-slate-300">Sign Up</NavLink>
            <NavLink to="/login" className="hover:text-slate-300">Login</NavLink>
            <NavLink to="/logout" className="hover:text-slate-300">Logout</NavLink>
          </div>) : ""}
          
        </NavLink>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
