import React, { useState } from 'react';
import gglogo from '../assets/gglogo.jpg';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';

const GuildExplorer = () => {
  const carouselItems = [
    { id: 'slide1', imageSrc: gglogo },
    { id: 'slide2', imageSrc: cat1 },
    { id: 'slide3', imageSrc: cat2 },
    { id: 'slide4', imageSrc: cat3 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel w-full">
      {carouselItems.map((item, index) => (
        <div key={item.id} className={`carousel-item relative w-full ${index === currentSlide ? 'current-slide' : ''}`}>
          <img src={item.imageSrc} className="w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default GuildExplorer