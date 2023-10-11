import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
const Home = () => {


  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(gglogo.jpg)'}}>
      <div className='hero bg-base-200 w-full h-1/2 mx-auto'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>
              Home!
            </h1>
            <p className='py-6'>
              Come build your guild in the blockchain UwU
            </p>
          </div>

        </div>
      </div>
      <div className='flex-grow'>
        <Outlet />

      </div>
    </div>

  )
}

export default Home