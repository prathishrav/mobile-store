import React, { useState } from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom"
import "./Login.css"
function Signup() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
const [regsuccess, setRegSuccess] = useState(null)
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
    
      const response = await axios.post("http://localhost:8080/api/auth/signup", userData);

      // Handle the response (e.g., show a success message, redirect, etc.)
    setRegSuccess('User created successfully!', response.data);

      // Reset the form
      setUserData({
        nam: '',
        email: '',
        password: '',
      });
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className='home'>
    <div className='main1'>
      <h2 className='head2'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          
          <input
          placeholder='UserName'
           className='inp'
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
        
          <input
             placeholder='Email'
           className='inp'
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
        
          <input
              placeholder='Password'
           className='inp'
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
       <div className='rsign1'> <button className='btn' type="submit">Sign Up</button></div>  
       {regsuccess === 'User created successfully!' && (
<div>  Registration was successful! You can now log in.</div>
       )}
         
      </form>
      <div className='rsign'>  <p className='member'>Already I have account  ! </p>
      <Link className='link' to="/login"> Login</Link> </div>
     
    </div>
    </div>
  );
}

export default Signup;
