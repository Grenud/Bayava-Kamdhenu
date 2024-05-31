import React from 'react';
import arrow from '../../assets/arrow.png';
import './Header.css';

export default function Header() {
  return (
    <div className='hero-container'>
      <div className='hero'>
        <h2>SAVE A COW</h2>
        <p>Support our Spiritual Mission for Cow Seva to protect every Cow.</p>
        <div className='animated-image'></div>
      </div>
      <div className='learn-btn'>
        <button>
          Learn More
        <img src={arrow} alt='Arrow' />
        </button>
      </div>
    </div>
  );
}
