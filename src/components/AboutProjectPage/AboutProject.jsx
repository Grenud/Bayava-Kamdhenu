import React from 'react';
import './AboutProject.css'
import Cowseva from '../../assets/Cowseva.png'
import Cow from '../../assets/CowsevaP.png'


export default function About() {
  return (
    <div className='supreme'>
      <section className='block1'>
        <h1> About us</h1>
        <img src={Cowseva} />
        <p className='para'>The cow is an amazing divine being who carries the most powerful and sublime vibrations of the Universe,  the true mother of mankind.  She feeds her children, her people, with her own milk.  From the milk of a cow, a person creates yogurt, butter, ghee, cheese, all kinds of sweets, etc. It is impossible to imagine a day without these blissful products.  Indispensable ingredients such as ghee, which is sometimes called liquid gold; manure, which is a symbol of purification and protection; and cow urine, which is truly living water; and powerful biostimulants are in canonical Ayurveda and modern medicine.  Everything that comes from the cow, even its breath, is healing for the body and soul.  The bull in the farm plows the land, helps in sowing and harvesting, transports heavy loads and is the father of the family!  The cow and the bull are the basis  for the well-being of the family, its health and happiness.  And from the well-being in families comes the well-being of all mankind.</p>
      </section>
      <section className='division'>
        <span className='left'><p className='para'>Previously there were more than a hundred breeds of cows in India  but  today there are only 32.</p>
          <p className='para' ><b>The Ashram of Sri Devraha Baba undertook the mission of preserving and reproducing rare breeds. We can work together to protect cows and become the voice of this silent animal.</b></p>
          <p className='para'>People should know: donations to keep cows alive will be returned to them a hundredfold – this is evidenced by the scriptures and spoken by the holy sages.</p>
          <p className='para'>People should know: donations to keep cows alive will be returned to them a hundredfold – this is evidenced by the scriptures and spoken by the holy sages.</p></span>
        <span className='right'><img src={Cow} /></span>
       
      </section> <a><button className='adopt-btn'>ADOPT A COW</button></a>
    </div>
  )
}