import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import "./brand.css"; 

function Spec(props) {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  if (isMobile) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <div> 
         <div className='h224'>CHOOSE HERE WHICH IS PERFECT TO YOU <FontAwesomeIcon icon={faArrowDown}/></div>
      <div className="specs">
       
        <Slider {...settings}>
         
          <div className='cen'>
            <img src="spec/gaming.jpg" alt="" className='speci' />
            <span>Gaming Mobiles</span>
          </div>
          <div className='cen'>
            <img src="spec/5g.jpeg" alt="" className='speci' />
            <span>Connections 5G</span>
          </div>
          <div className='cen'>
            <img src="spec/battry.jpg" alt="" className='speci' />
            <span>Long Battery</span>
          </div>
          <div className='cen'>
            <img src="spec/photo.jpg" alt="" className='speci' />
            <span>Photography</span>
          </div>
          <div className='cen'>
            <img src="spec/display.jpg" alt="" className='speci' />
            <span>Amload Displays</span>
          </div>
        </Slider>
      </div>
      </div>
    );
  }

  return (
    <div>
      <div className='h2'>CHOOSE HERE WHICH IS PERFECT TO YOU <FontAwesomeIcon icon={faArrowDown}/></div>
      <div className='spec-sec'>
       
        <div>
          <img src="spec/gaming.jpg" alt="" className='speci' />
          <span>Gaming Mobiles</span>
        </div>
        <div>
          <img src="spec/5g.jpeg" alt="" className='speci' />
          <span>Connections 5G</span>
        </div>
        <div>
          <img src="spec/battry.jpg" alt="" className='speci' />
          <span>Long Battery</span>
        </div>
        <div>
          <img src="spec/photo.jpg" alt="" className='speci' />
          <span>Photography</span>
        </div>
        <div>
          <img src="spec/display.jpg" alt="" className='speci' />
          <span>Amload Displays</span>
        </div>
      </div>
    </div>
  );
}

export default Spec;
