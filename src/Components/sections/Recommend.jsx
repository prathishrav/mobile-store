import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import { faIndianRupeeSign,faHeart } from '@fortawesome/free-solid-svg-icons';
import "./brand.css"


function Recommend(props) {
  const isMobile = useMediaQuery({ maxWidth: 500 });

  if (isMobile) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
   
     
    <div className='rmd'>
    <div className='h22'>RECOMMEND FOR YOU </div>
    <div className="specs">
    <Slider {...settings}>
      {props.mobiles.map((mobile, index) => (
        <div className='n1'id='wii' key={index}>
          <div className='n11'>
          <p id='ic'>
            <span id='si'>
              <FontAwesomeIcon
                icon={faHeart}
                className={mobile.clicked ? 'afterclicked' : ''}
                onClick={() => props.addToCart({ ...mobile }, index)}
              />
            </span>
          </p>
          <img src={mobile.image} className='nothing' alt={mobile.name} />
          <p>
            <span id='txt'>
              {mobile.name} <br />
              <FontAwesomeIcon icon={faIndianRupeeSign} /> {mobile.price}
            </span>
          </p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
  );
  }

return(
  <div className='rmd'>
  <div className='h22'>RECOMMEND FOR YOU  </div>
  <div className='mobiles'>
      {props.mobiles.map((mobile, index) => (
          <div className='n1' id='wii' key={index}>
              <p id='ic'>
                  <span id='si'>
                      <FontAwesomeIcon
                          icon={faHeart}
                          className={mobile.clicked ? 'afterclicked' : ''}
                          onClick={() => props.addToCart({ ...mobile }, index)}
                      />
                  </span>
              </p>
              <img src={mobile.image} className='nothing' alt={mobile.name} />
              <p>
                  <span id='txt'>
                      {mobile.name}
                     
                  </span> <br />
                  <span>  ₹ {mobile.price}</span>
              </p>
          </div>


      ))}
  </div>
</div>
)
}

export default Recommend;








