import React from "react";
import './AboutDevraha.css';
import Basuri from '../../../assets/basuri_element.png'

import person from '../../../assets/personCow.png';
import { motion } from 'framer-motion';

export default function Main() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
      <div className="element">
          <img src={Basuri}/>
          </div>
      
      <div className="p-container">
        <div className="head">
          <h2>About Sri Devraha Baba Ashram</h2>
          
          <button>DONATE NOW</button>
        </div>
        <div className="intro">
          <p>
            Here, away from the noisy streets, in the gardens of Vrindavan,
            amazing games of Radha and Krishna take place at all times.
            Krishna friends, the cows, find shelter and love in this blessed
            place. In the ancient city of Vrindavan, on the banks of the
            sacred Yamuna River, there is an Ashram of the world-famous sage
            Sri Devraha Baba, one of the greatest siddha yogis of India in
            the parampara of Sri Ramanuja Acharya. People of all castes and
            classes came to him to pay obeisances from different parts of
            India and many countries of the world. It was attended by Indian
            Prime Minister Indira Gandhi and her son Rajiv, the first President of
            the USSR Mikhail Gorbachev, as well as other politicians, saints,
            yogis, priests, rich and poor all came for the blessing of Sri
            Devraha Baba, the true spiritual incarnation of love. Today, the
            ashram is run by the successor of Sri Devraha Baba, Mahatma Sri
            Devadas Maharaj, following the instructions of the great sage.
          </p>
          <img src={person} alt="Person" />
        </div>
      </div>
    </motion.div>
  );
}
