import Footer from './components/footer/footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import AboutGaumata from './components/AdoptGaumata/AboutGaumata.jsx';
import AboutProject from './components/AboutProject/AboutProject.jsx';
import JoinMission from './components/JoinMission/JoinMission.jsx';
import Shop from './components/Shop/Shop.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Home } from './components/Home/Home.jsx';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/adopt-gaumata" element={<AboutGaumata />} />
                    <Route path="/about-project" element={<AboutProject />} />
                    <Route path="/join-mission" element={<JoinMission />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact-us" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
