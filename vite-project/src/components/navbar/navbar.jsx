
import './navbar.css'; // Optional: if you are adding styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">BrandName</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

