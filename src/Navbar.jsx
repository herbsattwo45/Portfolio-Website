// Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="mobile-menu">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <h1 className="logo">HA</h1>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;