import "./navbar.css";
import "../../assets/fonts.css";
import logo from "../../assets/cow-icon.png";
// import { Link } from "react-router-dom";
// import Aboutus from "../Pages/Aboutus";
// import Home from "../Pages/Home";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
         {/* <Link to={<Home/>}> </Link> */}
         <a>Home</a> <hr />
        </li>
        <li>
          {/* <Link></Link> */}
          <a>Adopt Gaumata</a><hr />
        </li>
        <li>
         {/* <Link to={<Aboutus/>}></Link> */}
          <a>About Project</a> <hr />
        </li>
        <li>
          <a href="/Join Mission">Join Mission</a>
          <hr />
        </li>
        <li>
          <a href="/Shop">Shop</a>
          <hr />
        </li>
        <li>
          <a href="/Contact us">Contact us</a>
          <hr />
        </li>
      </ul>
    </div>
  );
}
