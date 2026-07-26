import React from 'react';
import logoFull from '../assets/logo-white-cropped.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">

      {/* SVG Spider Web Corner Overlay */}
      <svg className="spidey-web-bg web-top-left" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L100 0 L0 100 Z" fill="none"/>
        <path d="M0 0 L100 100 M0 0 L50 100 M0 0 L100 50 M0 0 L100 25 M0 0 L25 100" stroke="rgba(232,39,43,0.3)" strokeWidth="0.8"/>
        <path d="M20 0 Q 20 20 0 20 M40 0 Q 40 40 0 40 M60 0 Q 60 60 0 60 M80 0 Q 80 80 0 80 M100 0 Q 100 100 0 100" stroke="rgba(232,39,43,0.35)" strokeWidth="0.8" fill="none"/>
      </svg>

      <svg className="spidey-web-bg web-top-right" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0 L0 0 L100 100 Z" fill="none"/>
        <path d="M100 0 L0 100 M100 0 L50 100 M100 0 L0 50 M100 0 L0 25 M100 0 L75 100" stroke="rgba(232,39,43,0.3)" strokeWidth="0.8"/>
        <path d="M80 0 Q 80 20 100 20 M60 0 Q 60 40 100 40 M40 0 Q 40 60 100 60 M20 0 Q 20 80 100 80 M0 0 Q 0 100 100 100" stroke="rgba(232,39,43,0.35)" strokeWidth="0.8" fill="none"/>
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

      {/* 3. Main Poster Display Title with Spider Web Decoration */}
      <div className="hero-main reveal">
        <div className="hero-algora-title-wrap">
          <h1 className="hero-algora">ALGORA</h1>
          {/* Subtle Web strand hanging under title */}
          <svg className="spidey-web-title-strand" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q 200 40 400 0" stroke="rgba(232,39,43,0.45)" strokeWidth="1.2" fill="none"/>
            <path d="M50 0 Q 200 28 350 0" stroke="rgba(232,39,43,0.3)" strokeWidth="0.8" fill="none"/>
            <circle cx="200" cy="20" r="2.5" fill="#e8272b"/>
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
