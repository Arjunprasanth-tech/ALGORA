import React from 'react';
import logoFull from '../assets/logo-white-cropped.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">

      {/* Authentic Real Spider-Man Radial Web SVG Corner Overlays */}
      <svg className="spidey-web-bg web-top-left" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="160.0" y2="0.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="154.5" y2="41.4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="138.6" y2="80.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="113.1" y2="113.1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="80.0" y2="138.6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="41.4" y2="154.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <line x1="0" y1="0" x2="0.0" y2="160.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
        <path d="M 26.7 0.0 Q 22.2 2.9 25.8 6.9" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 25.8 6.9 Q 20.7 8.6 23.1 13.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 23.1 13.3 Q 17.8 13.6 18.9 18.9" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 18.9 18.9 Q 13.6 17.8 13.3 23.1" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 13.3 23.1 Q 8.6 20.7 6.9 25.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 6.9 25.8 Q 2.9 22.2 0.0 26.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 53.3 0.0 Q 44.4 5.8 51.5 13.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 51.5 13.8 Q 41.4 17.1 46.2 26.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 46.2 26.7 Q 35.5 27.3 37.7 37.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 37.7 37.7 Q 27.3 35.5 26.7 46.2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 26.7 46.2 Q 17.1 41.4 13.8 51.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 13.8 51.5 Q 5.8 44.4 0.0 53.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 80.0 0.0 Q 66.6 8.8 77.3 20.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 77.3 20.7 Q 62.1 25.7 69.3 40.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 69.3 40.0 Q 53.3 40.9 56.6 56.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 56.6 56.6 Q 40.9 53.3 40.0 69.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 40.0 69.3 Q 25.7 62.1 20.7 77.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 20.7 77.3 Q 8.8 66.6 0.0 80.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 106.7 0.0 Q 88.8 11.7 103.0 27.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 103.0 27.6 Q 82.8 34.3 92.4 53.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 92.4 53.3 Q 71.1 54.5 75.4 75.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 75.4 75.4 Q 54.5 71.1 53.3 92.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 53.3 92.4 Q 34.3 82.8 27.6 103.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 27.6 103.0 Q 11.7 88.8 0.0 106.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 133.3 0.0 Q 111.0 14.6 128.8 34.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 128.8 34.5 Q 103.5 42.9 115.5 66.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 115.5 66.7 Q 88.9 68.2 94.3 94.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 94.3 94.3 Q 68.2 88.9 66.7 115.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 66.7 115.5 Q 42.9 103.5 34.5 128.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 34.5 128.8 Q 14.6 111.0 0.0 133.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 160.0 0.0 Q 133.3 17.5 154.5 41.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 154.5 41.4 Q 124.2 51.4 138.6 80.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 138.6 80.0 Q 106.6 81.8 113.1 113.1" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 113.1 113.1 Q 81.8 106.6 80.0 138.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 80.0 138.6 Q 51.4 124.2 41.4 154.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        <path d="M 41.4 154.5 Q 17.5 133.3 0.0 160.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
      </svg>

      <svg className="spidey-web-bg web-top-right" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(160, 0) scale(-1, 1)">
          <line x1="0" y1="0" x2="160.0" y2="0.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="154.5" y2="41.4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="138.6" y2="80.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="113.1" y2="113.1" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="80.0" y2="138.6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="41.4" y2="154.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="0.0" y2="160.0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2"/>
          <path d="M 26.7 0.0 Q 22.2 2.9 25.8 6.9" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 25.8 6.9 Q 20.7 8.6 23.1 13.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 23.1 13.3 Q 17.8 13.6 18.9 18.9" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 18.9 18.9 Q 13.6 17.8 13.3 23.1" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 13.3 23.1 Q 8.6 20.7 6.9 25.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 6.9 25.8 Q 2.9 22.2 0.0 26.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 53.3 0.0 Q 44.4 5.8 51.5 13.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 51.5 13.8 Q 41.4 17.1 46.2 26.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 46.2 26.7 Q 35.5 27.3 37.7 37.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 37.7 37.7 Q 27.3 35.5 26.7 46.2" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 26.7 46.2 Q 17.1 41.4 13.8 51.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 13.8 51.5 Q 5.8 44.4 0.0 53.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 80.0 0.0 Q 66.6 8.8 77.3 20.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 77.3 20.7 Q 62.1 25.7 69.3 40.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 69.3 40.0 Q 53.3 40.9 56.6 56.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 56.6 56.6 Q 40.9 53.3 40.0 69.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 40.0 69.3 Q 25.7 62.1 20.7 77.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 20.7 77.3 Q 8.8 66.6 0.0 80.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 106.7 0.0 Q 88.8 11.7 103.0 27.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 103.0 27.6 Q 82.8 34.3 92.4 53.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 92.4 53.3 Q 71.1 54.5 75.4 75.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 75.4 75.4 Q 54.5 71.1 53.3 92.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 53.3 92.4 Q 34.3 82.8 27.6 103.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 27.6 103.0 Q 11.7 88.8 0.0 106.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 133.3 0.0 Q 111.0 14.6 128.8 34.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 128.8 34.5 Q 103.5 42.9 115.5 66.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 115.5 66.7 Q 88.9 68.2 94.3 94.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 94.3 94.3 Q 68.2 88.9 66.7 115.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 66.7 115.5 Q 42.9 103.5 34.5 128.8" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 34.5 128.8 Q 14.6 111.0 0.0 133.3" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 160.0 0.0 Q 133.3 17.5 154.5 41.4" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 154.5 41.4 Q 124.2 51.4 138.6 80.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 138.6 80.0 Q 106.6 81.8 113.1 113.1" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 113.1 113.1 Q 81.8 106.6 80.0 138.6" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 80.0 138.6 Q 51.4 124.2 41.4 154.5" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
          <path d="M 41.4 154.5 Q 17.5 133.3 0.0 160.0" stroke="rgba(255,255,255,0.75)" strokeWidth="1.1" fill="none"/>
        </g>
      </svg>

      {/* Vertical side labels (desktop) */}
      <div className="hero-side hero-side-left">
        <div className="hero-side-line" />
        <span className="v-label">INAUGURAL EDITION</span>
        <div className="hero-side-line" />
      </div>
      <div className="hero-side hero-side-right">
        <div className="hero-side-line" />
        <span className="v-label">TECH FEST 2026</span>
        <div className="hero-side-line" />
      </div>

      {/* 1. Official Monochrome White ALGORA Logo Artwork */}
      <div className="hero-top-logo-section reveal">
        <div className="hero-logo-interactive-wrap">
          <img
            src={logoFull}
            alt="ALGORA Official Logo"
            className="hero-logo-large-img"
          />
        </div>
      </div>

      {/* 2. Metadata Bar */}
      <div className="hero-bar">
        <span className="hero-bar-left">ST. GEORGE'S COLLEGE, ARUVITHURA</span>
        <span className="hero-bar-right">DEPT. OF COMPUTER APPLICATIONS</span>
      </div>

      {/* 3. Main Poster Display Title with Real Spider Web Strand */}
      <div className="hero-main reveal">
        <div className="hero-algora-title-wrap">
          <h1 className="hero-algora">ALGORA</h1>
          {/* Authentic Real Spider Web Strand */}
          <svg className="spidey-web-title-strand" viewBox="0 0 520 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q 260 48 520 0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" fill="none"/>
            <path d="M40 0 Q 260 34 480 0" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none"/>
            <path d="M90 0 Q 260 22 430 0" stroke="rgba(232,39,43,0.5)" strokeWidth="0.8" fill="none"/>
          </svg>
        </div>
      </div>

      {/* 4. Rich Poster Info Row */}
      <div className="hero-bottom">
        <div>
          <span className="hero-sub-label">Where Innovation Meets Imagination</span>
          <div className="hero-fest-name">TECH FEST · 2026</div>
          <p className="hero-tagline">
            The inaugural tech-cultural festival of the Department of
            Computer Applications — celebrating innovation, creativity,
            and collaboration.
          </p>
        </div>

        <div>
          <p className="hero-description">
            ALGORA brings together the brightest minds, the boldest
            ideas, and the most creative spirits through competitions
            and experiences that push the boundaries of technology.
          </p>
        </div>

        <div className="hero-cta-group">
          <div className="hero-edition">EDITION 01 · VOL. I</div>
          <button className="btn-primary" onClick={() => scrollTo('events')}>
            EXPLORE EVENTS
          </button>
          <button className="btn-outline" onClick={() => scrollTo('register')}>
            REGISTER NOW →
          </button>
        </div>
      </div>

    </section>
  );
}
