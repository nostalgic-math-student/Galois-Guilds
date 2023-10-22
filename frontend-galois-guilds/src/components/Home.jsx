import React, { useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';  
import GuildCard from './GuildCard';
import gglogo from '../assets/gglogo.jpg';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import { Rerousel } from 'rerousel';



const Home = () => {
  
  const carouselItems = [
    { id: 'slide2', imageSrc: cat1 , textSubtitle :"Best web3 kickstart on Internet!", textTitle: "Mr Pickles"},
    { id: 'main', imageSrc: gglogo, textTitle: "Welcome to GaloisGuilds", textSubtitle: "The place to build Web3 communities!" },
    { id: 'slide3', imageSrc: cat2 , textSubtitle :"Best web3 kickstart on Internet!", textTitle: "Fluffy"},
    { id: 'slide4', imageSrc: cat3 , textSubtitle :"Best web3 kickstart on Internet!", textTitle: "Pawtrick"},
  ];
  
  const lastItemIndex = carouselItems.length - 1;
  const lastItemRef = useRef(lastItemIndex);
  
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
      <div className=' w-full'>
        <div className='hero-content mx-auto flex-col text-center columns-2'>

<Rerousel itemRef={lastItemRef} interval={4500}>
          {carouselItems.map((item, index) => (
            <div
            key={item.id}
            ref={index === lastItemIndex ? lastItemRef : null}
            className={`carousel-item relative w-full shadow-2xl`}
            >
              <img src={item.imageSrc} className="w-1/2 rounded-3xl" />
              <div className='m-auto align-center space-y-4'>
                <p className='text-5xl font-bold'>
                  {item.textTitle}
                </p>
                <p className='m-auto text-2xl align-bottom italic'>
                  "{item.textSubtitle}"
                </p>
              </div>
            </div>
          ))}
        </Rerousel>

        </div>
      </div>
    </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>

  )
}

export default Home;