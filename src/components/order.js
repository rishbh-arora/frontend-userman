// components/OrderDetails.js
import React from 'react';


function Order({ name, quantity }) {

  return (
      <h2 style={{color: 'white', fontSize: 30}}>{name} - {quantity}</h2>
  );
}

export default Order;
