import React from 'react'
import Cow from '../Cow/Cow.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import './Home.css'


export const Home = () =>  {
  return (
    <div>
    <Header/>
     <Main/>
     <Cow/> 
          
    </div>
  )
}


