import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='container mx-auto p-4 flex justify-between items-center'>
      <Link to='/'><h1 className='font-bold'>Auth App</h1></Link>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/signin'><li>Sign In</li></Link>
      </ul>
      </div>
    </div>
  )
}

export default Header
