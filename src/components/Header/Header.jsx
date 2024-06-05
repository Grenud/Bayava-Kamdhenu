import React from 'react';
import arrow from '../../assets/arrow.png';
import './Header.css';
import { motion } from 'framer-motion';


export default function Header({ bottomRef }) {
  
  
  const handleLearnMoreClick = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-text">
          <motion.h2 initial={{ x: 150 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            SAVE A COW
          </motion.h2>
          <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 2, delay: 0.5 }}>
            Support our Spiritual Mission for Cow Seva to protect every Cow.
          </motion.p>
          <div className="learn-btn" onClick={handleLearnMoreClick}>
            <motion.button initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 2, delay: 0.5 }}>
              Learn More
              <img src={arrow} alt="Arrow" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="animated-image"></div>
    </div>
  );
}

