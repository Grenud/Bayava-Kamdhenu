import React from 'react';
import Footer from './components/Footer/footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import AboutProject from './components/AboutProjectPage/AboutProject.jsx';
import JoinMission from './components/JoinMissionPage/JoinMission.jsx';
import Shop from './components/Shop/Shop.jsx';
import Contact from './components/ContactPage/Contact.jsx';
import { Home } from './components/Home/Home/Home.jsx';
import AdoptGaumata from './components/AdoptGaumataPage/AdoptGaumata.jsx';
import CowPuja from './components/FooterPages/CowPuja.jsx';
import Veda from './components/FooterPages/Veda.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/adopt-gaumata" element={<AdoptGaumata />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/join-mission" element={<JoinMission />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cowPuja" element={<CowPuja />} />
          <Route path='/Veda' element={<Veda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
