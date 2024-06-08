import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='supreme'>
      <div className='left'>
        <h1 className='headings'>Countact Us</h1>
        <div ><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452629.62223568937!2d77.715488!3d27.588292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736fb8c0918c63%3A0x5dd68797914571fe!2sYogiraj%20Devraha%20Baba%20(Samadhi%20sthal%20and%20Ashram)!5e0!3m2!1sen!2sus!4v1717690237208!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <h1>Drop us a line  </h1>
        <h3>Want to reach out? We’d love to hear from you!</h3>
        <form>
          <label for='your-name' ></label>
          <input className='input' id='your-name' type='text' placeholder='Your Name'></input>
          <label  for='email' ></label>
          <input className='input' id='email' type='email' placeholder='Your Email'></input>
          <label  for='subject' ></label>
          <input className='input' id='subject' type='text' placeholder='subject'></input>
          <label type='textarea'></label>
          <textarea className='txtarea' id='textarea' type='text-area' placeholder='Message' rows="2" cols="200" ></textarea>
          <button className='submit-btn'>Submit</button>
        </form> 
     
      </div>

      <div className='right'>
        <h2 className='headings headingleft'>Connect With Us</h2>
        <div className='btn-wrap'> <a href="mailto:welcome@kamdhenuseva.com"> <button className='email' >Email Us</button></a>
          <a href='tel:7302756618'><button className='phone'>Call Us</button></a>
        </div>
      
        <h2 className='sub-head'>Connect Info</h2>
        <h4>+91 730 27 566 18</h4>
        <h3>Call Us</h3>
        <h4>welcome@kamdhenuseva.com</h4>
        <h3 className='subhead2'>Email us</h3>
        <h2 className='sub-head ' >SHRI DEVRAHA BABA GAU SEVA SANSTHAN TRUST, Dangoli, Mant<br></br>
          Mathura 281202 (Uttar Pradesh)</h2>
        <h3 className='sub-head'><b>Hours Of Operation</b><br></br>
        9:00 am – 8:00 pm EST
          Monday – Friday</h3>
        <h3>Closed and relax
          Saturday & Sunday</h3>
   </div>
      
    </div>
  )
}

// helloji
