import React from 'react';
import cow1 from '../../../assets/cow1.png';
import cow2 from '../../../assets/cow2.png';
import cow3 from '../../../assets/cow3.png';
import cow4 from '../../../assets/cow4.png';
import cow5 from '../../../assets/cow5.png';
import cow6 from '../../../assets/cow6.png';
import './CowCatalogue.css';


export default function Cow({ bottomRef }) {
  return (
    <div ref={bottomRef}>
    <div class="heading">
    <h1 >Donate Now to Change Lives</h1>
    </div>


   <div class="cow-section">
    <div class="slider">
        <div class="slide">
            <img src={cow1} alt="Sudarshan Nandi"/>
            <h2>Sudarshan Nandi</h2>
        </div>
        <div class="slide">
            <img src={cow2} alt="Madhusudan Nandi"/>
            <h2>Madhusudan Nandi</h2>
        </div>
        <div class="slide">
            <img src={cow3} alt="Kamla Gaumata"/>
            <h2>Kamla Gaumata</h2>
        </div>
        <div class="slide">
            <img src={cow4} alt="ShaktiDev Nandi"/>
            <h2>ShaktiDev Nandi</h2>
        </div>
        <div class="slide">
            <img src={cow5} alt="Kamla Gaumata"/>
            <h2>Kamla Gaumata</h2>
        </div>
        <div class="slide">
            <img src={cow6} alt="Gauri Gaumata"/>
            <h2>Gauri Gaumata</h2>
        </div>
    </div>
</div>

     
    
    
    </div>
  );
}
