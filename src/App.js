// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import OrderDetails from './components/OrderDetails';
import OrderForm from './components/newOrder';
function App() {
  return ( 
    <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm/>}/>
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/place-order" element={<OrderForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;
