import React from "react";
import './Testimoniali.css'
import Vishnu from '../../assets/Vishnu-das.png';

function Testimoniali() {
  return (
    <div className="Testimonial">
      <h1>Donor's Experience</h1>
      <div className="Vishu-intro">
        <h2>Help Cow matas</h2>
        <p>
          My family and I have a great experience with cows. We have been
          participating in donation for the cows at our ashram for several years
          and taking care of them. Also every time we come to the ashram, we
          contact the cows, feed them and we come to the ashram, we contact the
          cows, feed them and take care of them. Since we began to take part in
          the life of the ashram cows, everthing in our family has became
          balanced, material well-being does not leave our house. The children
          in our family are always healthy, cheerful And do well at school, We
          think that a big share of this success is connected with the gratitude
          that cows give us on a spiritual level. The cows are very thankful,
          kind and responsive creatures. Help the cows and happiness will fill
          your life!
          <div>
          <img src={Vishnu}/>
          </div>
         <h4>Vishnu Das</h4>
          <h7>Guruji's student, head of a familt with 4 children from Moscow</h7>
        </p>
      </div>
    </div>
  );
}

export default Testimoniali;
