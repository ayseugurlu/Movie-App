import React from 'react'

const Register = () => {
  return (
    <div className='flex  h-screenoverflow-hidden'>
    <div className='image-container w-1/2'>
        <img src="https://picsum.photos/800/800" className='w-full' alt="" />
      </div>

      <div className='form-container text-black bg-teal-800 w-1/2 items-center justify-center'>
        <form className='p-32'>
          <h2 className='text-fuchsia-400 text-center text-3xl'>Register</h2>
          <div className="form-group flex flex-col justify-center bg-orange-700">
            <input type="text"
            autoComplete='true'
            placeholder=''
            name='firstname'
            id='firstname'
            className='peer bg-transparent outline-none text-slate-800 text-[1em] tracking-wide'
            required   
             />
             <label htmlFor="firstname" className=''>Firstname</label>
          </div>
          <div className="form-group">
            <input type="text"
            placeholder=''
            name='lastname'
            id='lastname'
            className='peer'
            required   
             />
             <label htmlFor="lastname" className=''>Lastname</label>
          </div>
          <div className="form-group">
            <input type="email"
            placeholder=''
            name='email'
            id='email'
            className='peer'
            required   
             />
             <label htmlFor="email" className='text-white'>Email</label>
          </div>
          <div className="form-group">
            <input type="password"
            placeholder=''
            name='password'
            id='password'
            className='peer'
            required   
             />
             <label htmlFor="password" className='text-white'>Password</label>
          </div>

        </form>
      </div>

      
    </div>
  )
}

export default Register