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

      {/* 1. Official Logo Artwork (Hero Focal Point) */}
      <div className="hero-top-logo-section reveal">
        <img
          src={logoFull}
          alt="ALGORA Official Logo"
          className="hero-logo-large-img"
        />
      </div>

      {/* 2. Sleek Metadata Rule Bar */}
      <div className="hero-bar">
        <span className="hero-bar-left">DEPT. OF COMPUTER APPLICATIONS</span>
        <span className="hero-bar-right">ST. GEORGE'S COLLEGE, ARUVITHURA</span>
      </div>

      {/* 3. Clean Minimalist Title & Tagline */}
      <div className="hero-main reveal">
        <div className="hero-edition-tag">EDITION 01 · 2026</div>
        <h1 className="hero-subhead-title">INAUGURAL TECH FEST</h1>
        <p className="hero-tagline-text">Where Innovation Meets Imagination</p>
      </div>

      {/* 4. Action CTA Group */}
      <div className="hero-bottom-clean reveal">
        <button className="btn-primary" onClick={() => scrollTo('events')}>
          EXPLORE EVENTS
        </button>
        <button className="btn-outline" onClick={() => scrollTo('register')}>
          REGISTER NOW →
        </button>
      </div>

    </section>
  );
}
