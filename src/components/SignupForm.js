// components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupForm({ setUser }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gotError, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8081/add-user', { name, phoneNumber, password });
      console.log(response.status)
      navigate('/login');
    } catch (error) {
      setError("Phone number already exists");
    }
  };

  return (
    <div className='login-box'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type="submit">Sign Up</button>
      </form>
      <a href="/login" style={{color: 'white', paddingBottom: 15}}>Have an account? Login</a>
      {gotError ? (<p style={{margin: 0, paddingBottom: 5}}>{gotError}</p>) : <></> }
    </div>
  );
}

export default SignupForm;
