import React from 'react'
import Navbar from '../navbar/navbar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Cow from '../Cow/Cow';
import Footer from '../Footer/Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Main/>
      <Cow/>
      <Footer/>
    </div>
  )
}

export default Home;
