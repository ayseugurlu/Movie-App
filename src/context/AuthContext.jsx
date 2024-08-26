
import React, { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { GoogleAuthProvider } from "firebase/auth/web-extension";


//! context alani actik
export const AuthContextt = createContext();



const AuthContext = ({children}) => {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser]=useState()
  

  //!register 
  const createUser=(email,password,displayName)=>{

createUserWithEmailAndPassword(auth, email, password).then((user) => {
 
    toastSuccess("Registered Successfully")
    navigate("/login");

    updateProfile(auth.currentUser,{displayName:displayName})



    

  })
  .catch((error) => {
    console.log(error);
    toastError(error.message)
  });
  }


  //! login
  const signIn=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password).then(() => {

      toastSuccess("Logged in Succesfully")
      navigate("/movies");

  })
  .catch((error) => {
   
    toastError(error.message)
  });

  }

  //! google ile giris

  const signUpWithGoogle=()=>{

    //?google hesaplarına ulaşmak için firebase metodu
    const provider = new GoogleAuthProvider();

    //?açılır pencere ile giriş yapılması için firebase metodu

    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("Google ile giriş başarılı");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //! user takip

  useEffect(()=>{

    const userObserver=()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {

        const {displayName,email,photoURL}=user
        
        setCurrentUser({displayName,email,photoURL})
        
      } else {
        setCurrentUser(false)
       
      }
    });
  }
  },[])


  //!logout

 const logOut=()=>{
  signOut(auth)
  toastSuccess("Logout is Successfully")
 }
  
  



  return (
    <AuthContextt.Provider value={{createUser,signIn,signUpWithGoogle,currentUser,logOut}}>
  {children}
    </AuthContextt.Provider>
  )
}

export default AuthContext