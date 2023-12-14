import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarespace } from '@fortawesome/free-brands-svg-icons';
import { faCartArrowDown ,faMagnifyingGlassChart,faUserPlus ,faHouseChimney, faUserMinus,faBars}  from '@fortawesome/free-solid-svg-icons';
import {Link ,useNavigate} from "react-router-dom";
import "./sections/brand.css"
function Header(props) {
  const [showIcon,setShowIcon] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowIcon(window.innerWidth <= 375);
    };
  
    handleResize(); // Check if handleResize is called initially
  
    window.addEventListener('resize', handleResize);
  
    console.log('Effect ran');
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');
    const Logout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };
      const orderPage = ()=>{
        navigate('/MyCart');
      }
     

    return (
   


        <div>
          
            <header> 
            <nav className='header'>
  <div className='logo'>
  <FontAwesomeIcon icon={faSquarespace} />
  </div>
  <div className='pp' onClick={Logout}>
  <FontAwesomeIcon  icon={faHouseChimney} /> <span className='sp'>Home </span>
  </div>
  <div className='search'> 
  <input type="search" className="inp" id="inp" />
  <FontAwesomeIcon className='sg' icon={faMagnifyingGlassChart} />
  </div>
  <div>
            {isAuthenticated ? ( // Conditionally render "Login" or "Logout" based on authentication
              <div onClick={Logout}>
                <FontAwesomeIcon icon={faUserMinus} /><span className='sp'>Logout</span>
              </div>
            ) : (
              <Link to='/login'>
                <div className='log'>
                  <FontAwesomeIcon icon={faUserPlus} /><span className='sp'>Login</span>
                </div>
              </Link>
            )}
          </div>
       
  <div onClick={orderPage}> <FontAwesomeIcon icon={faCartArrowDown} />< span className='sp'>MyCart</span></div>
  {showIcon && (
  <div className='mobile-icon'> <FontAwesomeIcon icon={faBars} /> </div>
)}

</nav>
</header>    
        </div>
      
    );
}

export default Header;