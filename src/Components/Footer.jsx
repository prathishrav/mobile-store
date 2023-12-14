import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp ,faFacebook ,faInstagram,faYoutube ,faSquarespace} from '@fortawesome/free-brands-svg-icons';
function Footer(props) {
    return (
      
   
          <footer className='fm'>
            <div className='foot1'> 
        
          <div className='fs1' >
          <div id='icon1'>  <FontAwesomeIcon icon={faSquarespace} /></div>
            <div>Home</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Terms&Condition</div>
          </div>
          <div className='fs2'> 
            <div id='fi1'><FontAwesomeIcon icon={faWhatsapp} /></div>
          <div><FontAwesomeIcon icon={faFacebook} /></div>
          <div><FontAwesomeIcon icon={faInstagram} /></div> 
          <div> <FontAwesomeIcon icon={faYoutube} /></div>
          </div>
          </div>
          <div className='allr'><p> Copyright 2023 © All Rights Reserved </p> </div>
          </footer>
     
       
    );
}

export default Footer;