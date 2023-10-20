import React from 'react'
import { Link } from 'react-router-dom'

const GuildCard = ({ message, image, title, final_message } ) => {
  return (
    <div className='card max-w-md bg-base-100 shadow-xl overline-4 border-rounded-xl border-gray-900 rounded-lg transition ease-in-out delay-100 '>
        <img class="h-auto w-auto" src={image} alt="" />
        <h1 className='text-5xl font-bold'>
            {title}
        </h1>
        <p className='py-6'>
            {message}
        </p>

        <div className="card-actions justify-end pr-1 pb-1">
        <Link to={"/GaloisCreator"}>
      <button className="btn btn-primary" >{final_message}</button>
        </Link>
    </div>


    </div>
  )
}

export default GuildCard