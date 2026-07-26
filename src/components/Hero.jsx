import React from 'react';
import logoFull from '../assets/logo-white-cropped.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">

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

      {/* 3. Main Poster Display Title with Ultra-Faint Web Strand */}
      <div className="hero-main reveal">
        <div className="hero-algora-title-wrap">
          <h1 className="hero-algora">ALGORA</h1>
          {/* Ultra-faint spider web strand (barely visible touch) */}
          <svg className="spidey-web-title-strand-faint" viewBox="0 0 520 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q 260 36 520 0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" fill="none"/>
            <path d="M60 0 Q 260 24 460 0" stroke="rgba(232,39,43,0.15)" strokeWidth="0.6" fill="none"/>
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
