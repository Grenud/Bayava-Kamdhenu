import React from 'react';
import cowprint from '../../assets/cowprint.png';
import './footer.css';

export default function Footer() {
    console.log("Hello Footer")
    return (
        <div>
            <footer>
                <div className="foot-panel">
                    <div className='row'>
                        <div className='col'>
                            <p>Do you have questions? Call or visit us.</p>
                            <p>DEVRAHA BABA ASRAM Bhaktivedanta Swami Marg, Panigaon Khader, Uttar Pradesh 281202, India welcome@kamdhenuseva.com</p> 
                        </div>
                        <div className='col'>
                            <ul>
                                <h3>About</h3>
                                <li><a href=''>Our Products</a></li>
                                <li><a href=''>Our Blog</a></li>
                                <li><a href=''>Contact us</a></li>
                                <li><a href=''>My Account</a></li>
                                <li><a href=''>Terms & Conditions</a></li>
                            </ul> 
                        </div>
                        <div className='col'>
                            <ul>
                                <h3>About</h3>
                                <li><a href=''>Cow Puja</a></li>
                                <li><a href=''>Veda About Cow</a></li>
                                <li><a href=''>Spiritual Importance</a></li>
                                <li><a href=''>Testimonials</a></li>
                                <li><a href=''>Gallery</a></li>
                                <li><a href=''>Privacy Policy</a></li>
                                <li><a href=''>Return & Refund Policy</a></li>
                            </ul>
                        </div>
                        <div className='col cow-image'>
                            <img src={cowprint} alt="Cow Print" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
