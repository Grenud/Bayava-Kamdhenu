import React from 'react';
import cow1 from '../../assets/cow1.png';
import cow2 from '../../assets/cow2.png';
import cow3 from '../../assets/cow3.png';
import cow4 from '../../assets/cow4.png';
import cow5 from '../../assets/cow5.png';
import cow6 from '../../assets/cow6.png';
import cowPooja from '../../assets/cow-puja.png'
import './Cow.css';

export default function Cow() {
  return (
    <div>
    <div className="cow-section">
      <h1>Donate Now to Change Lives</h1>
      <div className="slider">
        <div className="slide">
          <img src={cow1} alt="Sudarshan Nandi" />
          <h2>Sudarshan Nandi</h2>
        </div>
        <div className="slide">
          <img src={cow2} alt="Madhusudan Nandi" />
          <h2>Madhusudan Nandi</h2>
        </div>
        <div className="slide">
          <img src={cow3} alt="Kamla Gaumata" />
          <h2>Kamla Gaumata</h2>
        </div>
        <div className="slide">
          <img src={cow6} alt="Gauri Gaumata" />
          <h2>Gauri Gaumata</h2>
        </div>
        <div className="slide">
          <img src={cow4} alt="ShaktiDev Nandi" />
          <h2>ShaktiDev Nandi</h2>
        </div>
        <div className="slide">
          <img src={cow5} alt="Kamla Gaumata" />
          <h2>Kamla Gaumata</h2>
        </div>
       
      </div>
      </div>
      <div className='cowpooja-section'>
     <div  className='cow-puja'>
        <img src= {cowPooja}/>
       
       <div className='cow-intro'>
       <h2>Cow Puja</h2>
        <p>Our Pundits can perform Cow Puja for you either with you at the Ashram or on behalf of you if you are unable to attend. 
        If this is the case, we can send you photographs or videos of your Puja. Your donations for Cow Puja will be used for purchasing Puja materials and as per Vedic rules, giving dakshina to the Pundits for performing the Puja. 
        Please contact us for further information on welcome@kamdhenuseva.com</p>
       </div>
       </div>

     </div>

    
    </div>
  );
}
