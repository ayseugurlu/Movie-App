import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className='flex  h-screenoverflow-hidden'>
    <div className='image-container w-1/2'>
        <img src="https://picsum.photos/800/800" className='w-full' alt="" />
      </div>

      <div className='form-container text-black bg-[#030303] w-1/2 items-center justify-center'>
        <form className='p-32'>
          <h2 className='text-fuchsia-300 text-center text-3xl mb-16'>Sign Up</h2>
          <div className="form-group ">
            <input type="text"
            autoComplete='true'
            placeholder='Firstname'
            name='firstname'
            id='firstname'
            className='peer'
            required   
             />
             
          </div>
          <div className="form-group">
            <input type="text"
            placeholder='Lastname'
            name='lastname'
            id='lastname'
            className='peer'
            required   
             />
            
          </div>
          <div className="form-group">
            <input type="email"
            placeholder='Email'
            name='email'
            id='email'
            className='peer'
            required   
             />
            
          </div>
          <div className="form-group">
            <input type="password"
            placeholder='Password'
            name='password'
            id='password'
            className='peer'
            required   
             />
            
          </div>

          <button type='submit' className='btn '>Register</button>
          <button type='button' className='btn'>Continue with Google  <FcGoogle color='currentColor' className='inline'/></button>

        </form>
      </div>

      
    </div>
  )
}

export default Register