import React, { useState, useEffect } from 'react';
import logoWhite from '../assets/logo-white.png';
import collegeLogo from '../assets/college-logo.png';
import './Navbar.css';

const NAV = ['About','Events','Schedule','Gallery','Sponsors','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Navbar with College Logo on left */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-brand-group">
            {/* St. George's College Official Logo */}
            <img
              src={collegeLogo}
              alt="St. George's College Aruvithura"
              className="nav-college-logo-img"
            />
            <div className="nav-divider-line" />
            {/* ALGORA Brand */}
            <button className="nav-logo" onClick={() => scrollTo('home')}>
              <img
                src={logoWhite}
                alt="ALGORA"
                className="nav-logo-img"
              />
              <div className="nav-logo-text">
                <span className="logo-main">ALGORA</span>
                <span className="logo-year">'26</span>
              </div>
            </button>
          </div>

          <ul className="nav-links">
            {NAV.map(item => (
              <li key={item}>
                <button onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
              </li>
            ))}
            <li>
              <button className="nav-cta" onClick={() => scrollTo('register')}>
                Register
              </button>
            </li>
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV.map(item => (
          <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
        ))}
        <button className="nav-cta mobile" onClick={() => scrollTo('register')}>
          Register Now
        </button>
      </div>
    </>
  );
}
