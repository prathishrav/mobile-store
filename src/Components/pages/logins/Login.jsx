import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login(props) {
  const { userRole } = props; // Receive userRole as a prop
  const [userData, setUserData] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', userData);
    // After a successful login
localStorage.setItem('token', response.data.accessToken);
localStorage.setItem('user', JSON.stringify(response.data));


      console.log('Authentication successful!', response.data);

      // Check userRole and set it in local storage
      if (userRole) {
        localStorage.setItem('userRole', userRole);
      }

     
      setUserData({
        name: '',
        password: '',
      });

  
      navigate('/');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className='home'>
      <div className='main1'>
        <h2 className='head2'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
           
           
            <input
             placeholder = "UserName "
              className='inp'
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
           
            <input
             placeholder = "Password"
              className='inp'
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='rsign1'>
            <button className='btn' type="submit">Log In</button>
          </div>
        </form>
        <div className='rsign'>
          <p>OR</p>
          <Link id='link1' to="/signup">Signup Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
