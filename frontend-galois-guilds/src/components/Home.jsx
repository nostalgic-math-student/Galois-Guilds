import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' h-screen text-center'>
        <div className='bg-base-200 w-full h-1/2 mx-auto'> 
        Home!     
        </div>
<div className='divider'></div>
<div className='flex-grow'>
<Outlet />

</div>
    </div>
    
  )
}

export default Home