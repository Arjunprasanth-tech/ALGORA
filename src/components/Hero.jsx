import React from 'react';
import logoFull from '../assets/logo-white-cropped.png';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">

      {/* IoT Mesh Network Cyber-Web SVG Corner Graphics */}
      <svg className="spidey-web-bg web-top-left" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* IoT Mesh Grid Lines */}
        <path d="M0 0 L140 140 M0 0 L70 140 M0 0 L140 70 M0 0 L140 35 M0 0 L35 140" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        <path d="M30 0 L30 30 L0 30 M60 0 L60 60 L0 60 M90 0 L90 90 L0 90 M120 0 L120 120 L0 120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" fill="none"/>
        
        {/* IoT Wireless Signal Pulses */}
        <circle cx="60" cy="60" r="14" stroke="rgba(232,39,43,0.4)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
        <circle cx="60" cy="60" r="24" stroke="rgba(232,39,43,0.25)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />

        {/* IoT Sensor Nodes & LED Indicators */}
        <circle cx="30" cy="30" r="3" fill="#ffffff" />
        <circle cx="60" cy="60" r="3.5" fill="#e8272b" />
        <circle cx="90" cy="90" r="3" fill="#ffffff" />
        <circle cx="120" cy="120" r="4" fill="#00ff66" />

        {/* Tiny IoT Tech Pin Labels */}
        <text x="34" y="28" fill="rgba(255,255,255,0.6)" fontSize="5" fontFamily="monospace">NODE_01</text>
        <text x="64" y="58" fill="rgba(232,39,43,0.8)" fontSize="5" fontFamily="monospace">IoT_GATEWAY</text>
        <text x="94" y="88" fill="rgba(255,255,255,0.6)" fontSize="5" fontFamily="monospace">MESH_LINK</text>
        <text x="124" y="118" fill="#00ff66" fontSize="5" fontFamily="monospace">ONLINE</text>
      </svg>

      <svg className="spidey-web-bg web-top-right" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M140 0 L0 140 M140 0 L70 140 M140 0 L0 70 M140 0 L0 35 M140 0 L105 140" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
        <path d="M110 0 L110 30 L140 30 M80 0 L80 60 L140 60 M50 0 L50 90 L140 90 M20 0 L20 120 L140 120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" fill="none"/>

        <circle cx="80" cy="60" r="14" stroke="rgba(232,39,43,0.4)" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
        <circle cx="80" cy="60" r="24" stroke="rgba(232,39,43,0.25)" strokeWidth="0.8" strokeDasharray="3 3" fill="none" />

        <circle cx="110" cy="30" r="3" fill="#ffffff" />
        <circle cx="80" cy="60" r="3.5" fill="#e8272b" />
        <circle cx="50" cy="90" r="3" fill="#ffffff" />
        <circle cx="20" cy="120" r="4" fill="#00ff66" />

        <text x="75" y="28" fill="rgba(255,255,255,0.6)" fontSize="5" fontFamily="monospace">NODE_02</text>
        <text x="45" y="58" fill="rgba(232,39,43,0.8)" fontSize="5" fontFamily="monospace">RX_HUB</text>
        <text x="15" y="88" fill="rgba(255,255,255,0.6)" fontSize="5" fontFamily="monospace">5G_MESH</text>
        <text x="-5" y="118" fill="#00ff66" fontSize="5" fontFamily="monospace">SYNCED</text>
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

      {/* 3. Main Poster Display Title with IoT Mesh Network Web Strand */}
      <div className="hero-main reveal">
        <div className="hero-algora-title-wrap">
          <h1 className="hero-algora">ALGORA</h1>
          {/* IoT Network Web Strand under title */}
          <svg className="spidey-web-title-strand" viewBox="0 0 520 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L60 20 L260 30 L460 20 L520 0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none"/>
            <path d="M100 0 L160 16 L260 24 L360 16 L420 0" stroke="rgba(232,39,43,0.5)" strokeWidth="0.9" fill="none"/>
            
            {/* IoT Node Points with Tech Labels */}
            <circle cx="60" cy="20" r="3" fill="#ffffff" />
            <circle cx="160" cy="16" r="3" fill="#e8272b" />
            <circle cx="260" cy="30" r="4" fill="#ffffff" stroke="#e8272b" strokeWidth="1.5" />
            <circle cx="360" cy="16" r="3" fill="#e8272b" />
            <circle cx="460" cy="20" r="3" fill="#00ff66" />

            <text x="45" y="32" fill="rgba(255,255,255,0.7)" fontSize="5.5" fontFamily="monospace">IoT_N1</text>
            <text x="145" y="28" fill="rgba(232,39,43,0.9)" fontSize="5.5" fontFamily="monospace">BUS_CLK</text>
            <text x="242" y="16" fill="#ffffff" fontSize="6" fontFamily="monospace" fontWeight="bold">CENTRAL_HUB</text>
            <text x="345" y="28" fill="rgba(232,39,43,0.9)" fontSize="5.5" fontFamily="monospace">DATA_TX</text>
            <text x="445" y="32" fill="#00ff66" fontSize="5.5" fontFamily="monospace">ONLINE</text>
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
