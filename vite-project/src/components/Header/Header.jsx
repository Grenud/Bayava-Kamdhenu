import React from 'react';
import arrow from '../../assets/arrow.png';
import './Header.css';

export default function Header() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-text">
          <h2>SAVE A COW</h2>
          <p>Support our Spiritual Mission for Cow 
          Seva to protect every Cow.</p>
          <div className="learn-btn">
            <button>
              Learn More
              <img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="animated-image"></div>
    </div>
  );
}
