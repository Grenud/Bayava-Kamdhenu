import React from 'react';
import { FaHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import "./Join.css";

function Join() {
  return (
    <div className='main-container'>
      <div className='PichwaiCow'></div>
      <div className='heading'>
        <h1>JOIN OUR CAMPAIGN</h1>
      </div>
      <div className='box'>
        <div className='box-item'>
          <FaHeart className='icon' />
          <h2>ADOPT</h2>
          <p>We provide Calves, Cows and Bulls ready for Adoption.</p>
        </div>
        <div className='box-item'>
          <IoPerson className='icon' />
          <h2>VOLUNTEER</h2>
          <p>We welcome you, Become a Cow Volunteer- Kamdhenu Volunteer.</p>
        </div>
        <div className='box-item'>
          <FaDonate className='icon' />
          <h2>DONATE</h2>
          <p>Open your hearts to serve our Mission and Donate for this noble cause.</p>
        </div>
      </div>
    </div>
  );
}

export default Join;
