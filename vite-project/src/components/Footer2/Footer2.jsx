import React from 'react'
import img from '../../assets/Aboutdata';
import './Footer2.css';
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer2() {
  return (
      <div>
          <div className='links'>
              <div className='row1'><li></li>
                  <li>Do you have questions?
                      Call or visit us.</li>
                  <li>DEVRAHA BABA ASRAM Bhaktivedanta Swami Marg, Panigaon Khader, Uttar Pradesh 281202, India</li>
                  <li>welcome@kamdhenuseva.com
                    </li>
                  <li>  Follow us: <FaSquareInstagram  className='insta-icon'/></li>
              </div>
              <div className='row2'>
                  <li className='link-b'>Insights</li>
                  <li className='link'>Our products</li>
                  <li className='link'>Our blog</li>
                  <li className='link'>Contact Us</li>
                  <li className='link'>My Account</li>
                  <li className='link'>Dashboard</li>
              </div>
              <div className='row3'>
                  <li className='link-b'>About</li>
                  <li className='link'>Cow pooja</li>
                  <li className='link'>Veda About Cows</li>
                  <li className='link'>Spritual Importance</li>
                  <li className='link'>Testimonials</li>
                  <li className='link'>Privacy Policy</li>
                  <li className='link'>Terms And Conditions</li>
                  <li className='link'>Refund Policy</li></div>
              <div className='row4'><li className='link-b'>Gallery</li>
                  <li><span><img src={img[2].image3} className='img1' /></span> <span><img src={img[3].image4} className='img2' /></span></li> 
                  <li><span><img src={img[4].image5} className='img3' /></span> <span><img src={img[5].image6} className='img4' /></span></li> 

              </div>

          </div>
    </div>
  )
}
