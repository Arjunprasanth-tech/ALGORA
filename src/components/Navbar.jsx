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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Left: ALGORA Fest Brand */}
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

          {/* Right Group: Nav Links + Register CTA + Official College Logo */}
          <div className="nav-right-group">
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

            {/* St. George's College Logo on Right Side of Navbar */}
            <img
              src={collegeLogo}
              alt="St. George's College Aruvithura"
              className="nav-college-logo-right"
            />

            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

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
