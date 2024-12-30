// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Coursel.css';

function CarouselComponent() {
  return (
   
      <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      <div >
        <img className='img1' src="https://wallpapercrafter.com/desktop/274121-racks-with-mens-apparel-on-the-walls-of-a-clothes-.jpg" alt="slide1" />
        
      </div>
      <div>
        <img className='img1' src="https://wallpaperaccess.com/full/510657.jpg" alt="slide2" />
        
      </div>
      <div>
        <img className='img1' src="https://wallpaperaccess.com/full/3460572.jpg" alt="slide3" />
        
      </div>
    </Carousel>

  );
}

export default CarouselComponent;
