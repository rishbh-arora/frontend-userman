// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/login.css'

function OrderForm({ setIsLoggedIn }) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            `https://backend-userman.vercel.app/add-order`, 
            {
                item: item,
                quantity: quantity
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });
      navigate('/order-details');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className='login-box'>
      <h2>New Order</h2>
      <form onSubmit={handleSubmit} className="user-box">
      <input className="user-box" type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='Item' required/>
      <input className="user-box" type="number" value={quantity} min="0" onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' required />
        <button className="loginButton" type="submit">Place order</button>
      </form>
    </div>
  );
}

export default OrderForm;
