import React from 'react';
import '../Pages/Adopt.css';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/Footer';
import image1 from '../../assets/Gaumata1.jpeg';
import image2 from '../../assets/Gaumata2.jpeg';
import image3 from '../../assets/Gaumata3.jpeg';
import image4 from '../../assets/Gaumata4.jpeg';
import image5 from '../../assets/Gaumata5.jpeg';
import image6 from '../../assets/Gaumata6.jpeg';
import image7 from '../../assets/Gaumata7.jpeg';
import image8 from '../../assets/Gaumata8.jpeg';
import image9 from '../../assets/Gaumata9.jpeg';
import image10 from '../../assets/Gaumata10.jpeg';
import image11 from '../../assets/Gaumata11.jpeg';
import image12 from '../../assets/Gaumata12.jpeg';
import { GrFormNextLink } from "react-icons/gr";



function AdoptGaumata() {
  return (
   <div className='AdoptGaumata'>
    <div className='Nav'><Navbar/></div>
    <button className='btn1'>Already Adopted</button>
    <h1 className='Heading'>Adopt Gaumatas</h1>
    <div className='AdoptGau'>
    <div className="Gaumata"><img src={image1}/>  <a href='' className='aheading'>Help us to Care Shraddha Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image2}/>  <a href='' className='aheading'>Help us to Care Vishnupatni Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image3}/>  <a href='' className='aheading'>Help us to Care Vibhuti Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image4}/>  <a href='' className='aheading'>Help us to Care Udaranga Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image5}/>  <a href='' className='aheading'>Help us to Care Padmasundari Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image6}/>  <a href='' className='aheading'>Help us to Care Shivakari Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image7}/>  <a href='' className='aheading'>Help us to Care Padmapriya Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image8}/>  <a href='' className='aheading'>Help us to Care Padmobhava Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image9}/>  <a href='' className='aheading'>Help us to Care Sanghavi Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image10}/> <a href='' className='aheading'>Help us to Care Padmamukhi Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image11}/> <a href='' className='aheading'>Help us to Care  NavaDurga Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div>
    <div className="Gaumata"><img src={image12}/> <a href='' className='aheading'>Help us to Care Lokamatri Gaumata</a> <a href='' className='Para1'>Support And Reward For Our sponsoring</a><a href=''  className='Para2'>Partners GARDIANSHIP OF A COW WHITE Coustom</a> </div> 
    </div>
    <span>
    <button className='btn2'><a href=''><GrFormNextLink className='Font'/></a></button>
    </span> 
   </div>
   
  )
}

export default AdoptGaumata;
