// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>African International Journal of Educational Learning</h1>
          </Link>
          <p>Vol. 12, June 2025</p>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/articles" onClick={() => setIsMenuOpen(false)}>Articles</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;