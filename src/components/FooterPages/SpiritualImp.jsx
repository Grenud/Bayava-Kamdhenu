import React from 'react';
import './SpiritualImp.css'
import Krishna1 from '../../assets/Krishna1.jpeg';
import Krishna2 from '../../assets/Krishna2.jpeg';
import Krishna3 from '../../assets/Krishna3.jpeg';
import Krishna4 from '../../assets/Krishna4.jpeg';
import Krishna5 from '../../assets/Krishna4.jpeg';
import Krishna6 from '../../assets/Krishna5.jpeg';
import { motion } from 'framer-motion';

export default function SpiritualImp() {
  return (
    <div>
    <div className='para'>
      <p>
        Hindu religion considers cows as goddesses, as it bestows us with life savior milk.
        <br />
        The cow is considered a motherly figure, who takes such good care of her people.
        <br />
        Even a well-known deity, Lord Krishna, is popular as Govinda and Gopala which means literally “lord and guardian of cows.” As per Hinduism and spiritual reasons cow is worshipped as a mother.
     
        Being symbolic of wealth and good fortune, cows are considered to be the purest of all animals and are worshipped as Kamdhenu, the sacred cow, which is considered as the source of all prosperity in Hindu Religion. Our Vedas also link cows as a symbol of well-being and prosperity in the house.
        Cow Mata is very sacred and special to Lord Krishna and as Hindus it is our duty to protect and care for Cow Mata.
        <br />
        Sri Devraha Baba said: “a Hindu can be recognised by the way he loves and worships cows”. Baba felt so passionately about the holiness of cows that he revealed “Bharat Varsh (India) will be saved by Cow Mata when time will come”.
        </p>
        </div>
        <motion.div className='image' initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
            <img src={Krishna1}/>
            <img src={Krishna2}/>
            <img src={Krishna3}/>
            <img src={Krishna4}/>
            <img src={Krishna5}/>
            <img src={Krishna6}/>
        </motion.div>

    </div>
  );
}
