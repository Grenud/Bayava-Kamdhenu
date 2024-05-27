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
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
