import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
import { AuthContextt } from "../context/AuthContext";
import { PiReadCvLogo } from "react-icons/pi";

const Navbar = () => {
    const [profilopen,setProfilOpen]=useState(false)

    const {currentUser,logOut}=useContext(AuthContextt)

   console.log(currentUser);

  return (
    <div className="relative">
    <nav className="bg-slate-100 text-slate-950 dark:bg-slate-950  dark:text-white flex justify-between align-center h-20 p-4 fixed top-0 w-full z-10">
      <div className="flex justify-between gap-16">
        <div className="">
          <NavLink to="/" className="text-3xl text-fuchsia-500 font-[Oswald,sans-serif] font-bold ">
            KinoFLIX
          </NavLink>
        </div>

        <div className="text-xl ">
          <NavLink to="/" className="hover:text-fuchsia-400 transition-all ease-in">Home</NavLink>
          <NavLink to="/movies" className="mx-5 hover:text-fuchsia-400 transition-all ease-in">Movies</NavLink>
          
        </div>
      </div>

      <div className="flex justify-between align-center gap-4 relative">
          <h5 className="text-lg mt-3">{currentUser?.displayName}</h5>
            <Switch/>
        
        <NavLink onClick={()=>setProfilOpen(!profilopen)}>
          
          <img
            className="w-10 rounded-full"
            src={currentUser?.photoURL || "https://cdn-icons-png.flaticon.com/512/1053/1053244.png"}
            alt=""
          />
          {profilopen ? ( <div className="flex flex-col text-xl  text-slate-600 bg-fuchsia-300 p-4 mt-1 rounded-lg absolute right-[0px] top-12">
            <NavLink to="/signup" className="hover:text-fuchsia-800">Sign Up</NavLink>
            <NavLink to="/login" className="hover:text-fuchsia-800">Log in</NavLink>
            <span onClick={()=>logOut()} className="hover:text-fuchsia-800">Log out</span>
          </div>) : ""}
          
        </NavLink>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
