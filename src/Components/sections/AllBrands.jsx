

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../sections/brand.css';

function AllBrands(props) {
  const brandImages = [
    'assets-logo/mi.svg',
    'assets-logo/vivo.svg',
    'assets-logo/apple.svg',
    'assets-logo/samsung.svg',
    'assets-logo/oneplus.svg',
    'assets-logo/sony.svg',
    'assets-logo/oppo.svg',
    'assets-logo/pan.svg',
    'assets-logo/hua.svg',
    'assets-logo/lg.svg',
    'assets-logo/redmi.svg',
  ];

  
  const isSmallScreen = window.innerWidth <= 375;

  if (isSmallScreen) {
    const sliderSettings = {
      dots: false,
    
      prevArrow:false,
      nextArrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3, 
      slidesToScroll: 1,
    };
   
    


    return (
      <div className='pre'>
        <Slider {...sliderSettings}>
          {brandImages.map((image, index) => (
            <div key={index}>
              <img src={image} className="brand" alt={`brand-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  // If not a small screen, render individual images
  return (
    <div>
      {brandImages.map((image, index) => (
        <img key={index} src={image} className="brand" alt={`brand-${index}`} />
      ))}
    </div>
  );
}

export default AllBrands;
