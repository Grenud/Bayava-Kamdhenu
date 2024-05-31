import React from 'react';
import cowPooja from '../../assets/cow-puja.png';
import './CowPooja.css';

export default function Cow() {
  return (
    <div>
      <div className='cowpooja-section'>
        <div className='cow-puja'>
          <img src={cowPooja} alt="Cow Puja" />
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
