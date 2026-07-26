import React from 'react';
import './Footer.css';

const NAV = ['About','Events','Schedule','Gallery','Sponsors','Contact'];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="container">
          <div className="ftb-inner">
            <span className="label-sm">ALGORA 2026 · TECH FEST</span>
            <span className="label-sm">DEPT. OF COMPUTER APPLICATIONS · ST. GEORGE'S COLLEGE ARUVITHURA</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">ALGORA</div>
            <div className="footer-year">2026</div>
            <p className="footer-tagline label-sm">
              Where Innovation Meets Imagination
            </p>
          </div>

          <div className="footer-nav">
            <div className="label-sm" style={{marginBottom:16}}>NAVIGATION</div>
            {NAV.map(item => (
              <button key={item} className="footer-link" onClick={() => scrollTo(item.toLowerCase())}>
                {item}
              </button>
            ))}
          </div>

          <div className="footer-info">
            <div className="label-sm" style={{marginBottom:16}}>CONTACT</div>
            <p className="footer-addr">
              Department of Computer Applications<br/>
              St. George's College<br/>
              Aruvithura, Kerala, India
            </p>
            <div className="footer-hashtag">#ALGORA2026</div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="label-sm">© 2026 ALGORA TECH FEST · ALL RIGHTS RESERVED</span>
          <span className="label-sm">EDITION 01 · INAUGURAL</span>
        </div>
      </div>
    </footer>
  );
}
