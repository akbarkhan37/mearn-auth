import React from 'react'
import {Link} from 'react-router-dom';  
const Signup = () => {
  return (
    <div className='p-3max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input tpye='text' placeholder='username' id='username'
         className='border border-gray-300 rounded-md p-2 w-full mb-4' />
        <input tpye='text' placeholder='Emailername' id='email'
         className='border border-gray-300 rounded-md p-2 w-full mb-4' />
         <input tpye='text' placeholder='Password' id='password'
         className='border border-gray-300 rounded-md p-2 w-full mb-4' />
         <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Sign Up</button>
      </form>
      <div className='flxe gap-2 mt-5'>
        <p>Have an account? </p>
        <Link to='/signin'><span className='text-blue-500'>Sign In</span></Link>
      
      </div>
    </div>
  )
}

export default Signup
