import React, { useState } from 'react';
import logo from '../../assets/cow-icon.png';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMenuOpen(!isMenuOpen); // Toggle isMenuOpen
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" className="logo" />
                <div className="animated-cow">
          
                </div>
            </div>
            <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}> {/* Toggle isMenuOpen when menu is clicked */}
                <span></span> 
                <span></span> 
                <span></span> 
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}> {/* Close menu when an item is clicked */}
                <li onClick={() => handleMenuClick("home")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                    {menu === "home" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("adopt-gaumata")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/adopt-gaumata">Adopt Gaumata</NavLink>
                    {menu === "adopt-gaumata" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("about-project")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/about-project">About Project</NavLink>
                    {menu === "about-project" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("join-mission")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/join-mission">Join Mission</NavLink>
                    {menu === "join-mission" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("shop")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/shop">Shop</NavLink>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("contact-us")}>
                    <NavLink style={{ textDecoration: 'none' }} to="/contact-us">Contact us</NavLink>
                    {menu === "contact-us" ? <hr /> : null}
                </li>
                    
                
            </ul>
        </div>
    );
}

export default Navbar;
