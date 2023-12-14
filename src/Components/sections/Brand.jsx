
import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import brandsData from '../../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import "./brand.css"

function Brand() {
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
      <div className="brandsec">
    
        <div className='h223'>CHOOSE HERE WHICH IS PERFECT TO YOU <FontAwesomeIcon icon={faArrowDown}/></div>
        <div className='bnds'>
        <Slider {...settings}>
          {brandsData.map((brand) => (
         
            <div className='adj' key={brand.id}>
              <Link className="qqq" to={`/brand/${brand.id}`}>
                <img src={brand.brand} alt={brand.name} className="mobilebrand" />
              </Link>
            </div>
        
          ))}
        </Slider>
        </div>
      </div>
    );
  }

  return (
    <div className="brandsec">
      <div className='h223'>CHOOSE HERE WHICH IS PERFECT TO YOU <FontAwesomeIcon icon={faArrowDown}/></div>
      <div className="lle">
        {brandsData.map((brand) => (
          <Link key={brand.id} to={`/brand/${brand.id}`}>
            <img src={brand.brand} alt={brand.name} className="mobilebrand" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brand;
