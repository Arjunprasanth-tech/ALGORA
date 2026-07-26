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

      {/* 1. Complete Official Logo (Triangle Emblem + A L G O R A Text) */}
      <div className="hero-top-logo-section reveal">
        <img
          src={logoFull}
          alt="ALGORA Official Logo"
          className="hero-logo-large-img"
        />
      </div>

      {/* 2. Metadata Bar */}
      <div className="hero-bar">
        <span className="hero-bar-left">DEPT. OF COMPUTER APPLICATIONS</span>
        <span className="hero-bar-right">ST. GEORGE'S COLLEGE, ARUVITHURA</span>
      </div>

      {/* 3. Main Display Title — ALGORA */}
      <div className="hero-main reveal">
        <h1 className="hero-algora">ALGORA</h1>
      </div>

      {/* 4. Bottom Info & Actions */}
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
