// components/OrderDetails.js
import React, { useState, useLayoutEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Order from './order';

import styles from '../styles/orders.css'

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigate("/login");
  }

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-userman.vercel.app/get-order`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setOrderDetails(response.data.orders);
      } catch (error) {
        console.error('Order details error:', error);
      }
    };
    fetchData();
  });

  return (
    <div>
      <div className='header'>
      <button className='addOrder' onClick={(e) => logout()}>Logout</button>
      <h2 className='title'>Your Orders</h2>
      <button className='addOrder' onClick={(e) => navigate('/place-order')}>Add Order</button>
      </div>
      {orderDetails ? (
        <div>
          { orderDetails.length !== 0 ?(orderDetails.map(element => {
            return <Order name={element.item} quantity={element.quantity}/>
          })) : (
            <h2 style={{color: 'white', fontSize: 30}}>No orders yet!</h2>
          )
        }
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderDetails;
