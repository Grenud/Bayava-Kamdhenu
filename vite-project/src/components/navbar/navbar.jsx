import './navbar.css';
import '../../assets/fonts.css'; // Import the fonts.css file here

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo font-crimson">
            ShopNow
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/products">Home</a> 
            </li>
            <li>
              <a className="nav-hover"  href="/about">Adopt Gaumata</a>
            </li>
            <li>
              <a className="nav-hover"  href="/contact">About Project</a>
            </li>
            <li>
              <a className="nav-hover"  href="/contact">Join Mission</a>
            </li>
            <li>
              <a className="nav-hover"  href="/contact">Shop</a>
            </li>
            <li>
              <a className="nav-hover"   href="/contact">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
