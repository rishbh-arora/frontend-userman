// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/login.css'

function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8081/login-user', { phoneNumber, password });
      localStorage.setItem('accessToken', response.data.accessToken);
      navigate('/order-details', {state: {userID: response.data.userID}});
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className='login-box'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="user-box">
      <input className="user-box" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone number' required/>
      <input className="user-box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        <button className="loginButton" type="submit">Login</button>
        <a href="/signup" style={{color: 'white'}}>Don't have an account? Sign up</a>
      </form>
    </div>
  );
}

export default LoginForm;
