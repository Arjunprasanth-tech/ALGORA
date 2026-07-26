import React from 'react';
import logoFull from '../assets/logo-white-cropped.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">

      {/* Techno-Circuit Cyber-Web SVG Corner Graphics */}
      <svg className="spidey-web-bg web-top-left" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L120 0 L0 120 Z" fill="none"/>
        {/* Main radial circuit web lines */}
        <path d="M0 0 L120 120 M0 0 L60 120 M0 0 L120 60 M0 0 L120 30 M0 0 L30 120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"/>
        {/* Polygon techno-web arcs */}
        <path d="M25 0 L25 25 L0 25 M50 0 L50 50 L0 50 M75 0 L75 75 L0 75 M100 0 L100 100 L0 100" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none"/>
        {/* Cyber circuit nodes */}
        <circle cx="25" cy="25" r="2.5" fill="#ffffff" />
        <circle cx="50" cy="50" r="2.5" fill="#e8272b" />
        <circle cx="75" cy="75" r="2.5" fill="#ffffff" />
        <circle cx="100" cy="100" r="3" fill="#e8272b" />
      </svg>

      <svg className="spidey-web-bg web-top-right" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 0 L0 0 L120 120 Z" fill="none"/>
        <path d="M120 0 L0 120 M120 0 L60 120 M120 0 L0 60 M120 0 L0 30 M120 0 L90 120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"/>
        <path d="M95 0 L95 25 L120 25 M70 0 L70 50 L120 50 M45 0 L45 75 L120 75 M20 0 L20 100 L120 100" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none"/>
        <circle cx="95" cy="25" r="2.5" fill="#ffffff" />
        <circle cx="70" cy="50" r="2.5" fill="#e8272b" />
        <circle cx="45" cy="75" r="2.5" fill="#ffffff" />
        <circle cx="20" cy="100" r="3" fill="#e8272b" />
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

      {/* 3. Main Poster Display Title with Techno-Circuit Web Strand */}
      <div className="hero-main reveal">
        <div className="hero-algora-title-wrap">
          <h1 className="hero-algora">ALGORA</h1>
          {/* Techno-Circuit Web strand hanging under title */}
          <svg className="spidey-web-title-strand" viewBox="0 0 500 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L50 18 L250 28 L450 18 L500 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
            <path d="M100 0 L150 14 L250 22 L350 14 L400 0" stroke="rgba(232,39,43,0.5)" strokeWidth="0.9" fill="none"/>
            <circle cx="50" cy="18" r="2.5" fill="#ffffff" />
            <circle cx="150" cy="14" r="2.5" fill="#e8272b" />
            <circle cx="250" cy="28" r="3.5" fill="#ffffff" stroke="#e8272b" strokeWidth="1" />
            <circle cx="350" cy="14" r="2.5" fill="#e8272b" />
            <circle cx="450" cy="18" r="2.5" fill="#ffffff" />
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
