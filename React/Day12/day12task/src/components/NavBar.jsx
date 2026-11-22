import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

    <div className='bg-black text-white flex justify-between p-5 font-bold text-3xl text-center'>
        <div className='mx-10'>Logo</div>
        <div>
            <Link to="/" className='text-red-500 mx-10'>Inputform</Link>
            <Link to="/practice" className='text-amber-400 mx-10'>Practice</Link>
            <Link to="/state" className='text-amber-400 mx-10'>State Process</Link>
        </div>
    </div>

    </>
  )
}

export default NavBar