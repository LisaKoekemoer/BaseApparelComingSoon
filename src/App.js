import React, { useState } from 'react';
import './App.css';

import logo from './images/logo.svg'
import heroImg from './images/hero-desktop.jpg';
import arrow from './images/icon-arrow.svg';

function App() {
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
    setValidationMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
      console.log('Valid Email:', email);
      setValidationMessage('');
    } else {
      setValidationMessage('Please provide a valid email');
    }
  };


  return (
    <>
      <div className='main-component'>
        <div className='page-details'>
          <img src={logo} alt="" />
          <div className='cta'>
            <h1><span>WE'RE</span> COMING SOON</h1>
            <p>Hello fellow shoppers! We're currently building our new 
               fashion store. Add your email below to stay up-to-date 
               with announcements and our launch deals.</p>
            <form onSubmit={handleSubmit}>
              <input 
                className='emailInput' 
                type="email" 
                id='email' 
                name='email' 
                placeholder='Email Address'
                value={email}
                onChange={handleChange}
              />
              <button className='submit-btn' type='submit'>
                <img src={arrow} alt="" />
              </button>
              {validationMessage && (
                <div className='error'>{validationMessage}</div>
              )}
            </form>
          </div>
        </div>
        <div className='heroImg'>
          <img src={heroImg} alt="" />
        </div>
      </div>

    </>
  );
}

export default App;
