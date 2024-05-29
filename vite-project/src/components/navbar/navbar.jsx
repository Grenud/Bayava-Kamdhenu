import "./navbar.css";
import "../../assets/fonts.css";
import logo from "../../assets/cow-icon.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/Home">Home</a>
          <hr />
        </li>
        <li>
          <a href="/Adopt Gaumata">Adopt Gaumata</a>
          <hr />
        </li>
        <li>
          <a href="/About Project">About Project</a>
          <hr />
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
