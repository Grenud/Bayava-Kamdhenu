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
import SpiritualImp from './components/FooterPages/SpiritualImp.jsx';
import MyAccount from './components/FooterPages/MyAccount.jsx';
import Testimoniali from './components/FooterPages/Testimoniali.jsx';
import Gallery from './components/FooterPages/Gallery.jsx';
import Privacy_Policy from './components/FooterPages/Privacy_Policy.jsx';
import Shraddha from './components/AdoptGaumataPage/Shraddha.jsx';
import Vishnupatni from './components/AdoptGaumataPage/Vishnupatni.jsx';

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
          <Route path='/SpiritualImp' element= {<SpiritualImp/>}/>
          <Route path='/MyAccount' element={<MyAccount/>}/>
          <Route path='/TestiMonial' element={<Testimoniali/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/Privacy_Policy' element={<Privacy_Policy/>}/>
          <Route path='/Shraddha_Gaumata' element={<Shraddha/>}/>
          <Route path='/Vishnupatni_Gaumata' element={<Vishnupatni/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
