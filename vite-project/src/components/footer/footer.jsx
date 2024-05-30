import React from 'react'
import cowprint from '../../assets/cowprint.png'
import './footer.css'

export default function Footer() {
    console.log("Hello Footer")
  return (
    
    <div>
    <footer>
   
    <div class="foot-panel">
        <ul>
          <p>Do you have questions? 
          Call or visit us.</p>
         <p>DEVRAHA BABA ASRAM Bhaktivedanta Swami Marg, Panigaon Khader,
          Uttar Pradesh 281202, India welcome@kamdhenuseva.com</p> 
        </ul>
        <ul>
          <p>About</p>
          <a>Our Products</a>
          <a>Our Blog</a>
          <a>Contuct us</a>
          <a>My Account</a>
          <a>Term & Condition</a>
        
        </ul>
        <ul>
          <p>About</p>
          <a>Cow Puja</a>
          <a>Veda About Cow</a>
          <a>Spiritual Importance</a>
          <a>Testimonails</a>
          <a>Gallery</a>
          <a>Privacy Policy</a>
          <a>Return & Refund Policy</a>
        </ul>
        <ul>
            <img src = {cowprint}/>
        </ul>
      </div>
      </footer>
      
    </div>
  )
}


