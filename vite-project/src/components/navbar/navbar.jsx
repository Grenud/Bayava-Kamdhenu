
import React, { useState } from 'react';
import logo from '../../assets/cow-icon.png';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMenuOpen(false); 
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <IoMenu />
            </div>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li onClick={() => handleMenuClick("home")}>
                    <Link style={{ textDecoration: 'none' }} to="/home">Home</Link>
                    {menu === "home" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("adopt-gaumata")}>
                    <Link style={{ textDecoration: 'none' }} to="/adopt-gaumata">Adopt Gaumata</Link>
                    {menu === "adopt-gaumata" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("about-project")}>
                    <Link style={{ textDecoration: 'none' }} to="/about-project">About Project</Link>
                    {menu === "about-project" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("join-mission")}>
                    <Link style={{ textDecoration: 'none' }} to="/join-mission">Join Mission</Link>
                    {menu === "join-mission" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("shop")}>
                    <Link style={{ textDecoration: 'none' }} to="/shop">Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => handleMenuClick("contact-us")}>
                    <Link style={{ textDecoration: 'none' }} to="/contact-us">Contact us</Link>
                    {menu === "contact-us" ? <hr /> : null}
                </li>
            </ul>
        </div>
    );

}

export default Navbar;
