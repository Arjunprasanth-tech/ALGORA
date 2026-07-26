import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">About ALGORA</span>
          <span className="section-bar-num">01</span>
        </div>

        {/* Big heading */}
        <div className="about-head reveal">
          <h2 className="display-head-white">
            THE BEGINNING<br/>
            <span style={{color:'var(--red)'}}>OF A NEW</span><br/>
            TRADITION.
          </h2>
        </div>

        <div className="about-grid reveal">

          {/* Left — main text */}
          <div className="about-main">
            <hr className="rule" />
            <p className="about-text">
              ALGORA 2026 marks the inaugural techno-cultural fest of the
              Department of Computer Applications at St. George's College,
              Aruvithura — a celebration of innovation, creativity, and
              collaboration.
            </p>
            <hr className="rule" />
            <p className="about-text">
              ALGORA provides a vibrant platform where students showcase
              technical expertise, creative talents, and problem-solving
              abilities through engaging competitions and immersive experiences.
            </p>
            <hr className="rule" />
            <p className="about-text">
              As the department's first-ever fest, ALGORA represents the
              beginning of a new tradition — one that inspires learning,
              teamwork, and excellence while bringing together students,
              educators, and technology enthusiasts.
            </p>
            <hr className="rule" />
          </div>

          {/* Right — stats */}
          <div className="about-stats">
            {[
              { num:'07', lbl:'Total Events' },
              { num:'03', lbl:'Categories'   },
              { num:'01', lbl:'Vision'       },
              { num:'∞',  lbl:'Possibilities'},
            ].map(s => (
              <div className="stat-item" key={s.lbl}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
                <hr className="rule" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
