import React from 'react';
import Krishna from '../../assets/krishna.png'
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="foot-panel">
        <div className='row'>
          <div className='col'>
            <p>Do you have questions? Call or visit us.</p>
            <p className='p2'>DEVRAHA BABA ASRAM Bhaktivedanta Swami Marg, Panigaon Khader, Uttar Pradesh 281202, India welcome@kamdhenuseva.com</p>
          </div>
          <div className='col'>
            <ul>
              <h3>About</h3>
              <li><a href=''>Our Products</a></li>
              <li><a href=''>Our Blog</a></li>
              <li><a href=''>Contact us</a></li>
              <li><Link to='/MyAccount'>My Account</Link></li>
              <li><a href=''>Terms & Conditions</a></li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <h3>About</h3>
              <li><Link to='/cowPuja'>Cow Puja</Link></li>
              <li><Link to='/Veda'>Veda About Cow</Link></li>
              <li><Link to='/SpiritualImp'>Spiritual Importance</Link></li>
              <li><Link to='/TestiMonial'>Testimonials</Link></li>
              <li><Link to='/Gallery'>Gallery</Link></li>
              <li><Link to='/Privacy_Policy'>Privacy Policy</Link></li>
              <li><a href=''>Return & Refund Policy</a></li>
            </ul>
          </div>
          <div className='col cow-image'>
            <img src={Krishna} alt="Cow Print" />
          </div>
        </div>
      </div>
    </footer>
  );
}
