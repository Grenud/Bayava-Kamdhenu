import React from 'react';
import './Gallery.css'
import Krishna1 from '../../assets/Krishna1.jpeg';
import Krishna2 from '../../assets/Krishna2.jpeg';
import Krishna3 from '../../assets/Krishna3.jpeg';
import Krishna4 from '../../assets/Krishna4.jpeg';
import Krishna5 from '../../assets/Krishna4.jpeg';
import Krishna6 from '../../assets/Krishna5.jpeg';
import { motion } from 'framer-motion';

function Gallery() {
  return (
    <div className='gallery'>
       <h1>Gallery</h1>
       <div className='gallery-image'>

       <motion.div className='image' initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6}}>
            <img src={Krishna1}/>
            <img src={Krishna2}/>
            <img src={Krishna3}/>
            <img src={Krishna4}/>
            <img src={Krishna5}/>
            <img src={Krishna6}/>
        </motion.div>

       </div>
      
    </div>
  )
}

export default Gallery
