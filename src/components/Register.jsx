import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <section id="register" className="register section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Join the Fest</span>
          <span className="section-bar-num">06</span>
        </div>

        <div className="reg-layout">
          <div className="reveal">
            <h2 className="display-head">REGISTER<br/>NOW.</h2>
            <hr className="rule" style={{marginTop:28, marginBottom:28}} />
            <p className="reg-desc">
              Secure your spot at ALGORA 2026. Choose your event,
              register through our official platform, and prepare to
              compete, create, and conquer.
            </p>
            <div className="reg-steps">
              {['Choose your event', 'Register on MyPass', 'Show up and win'].map((step, i) => (
                <div key={i} className="reg-step">
                  <span className="reg-step-num">{String(i+1).padStart(2,'0')}</span>
                  <span className="reg-step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reg-cta-panel reveal">
            <div className="reg-badge label-sm">OFFICIAL PLATFORM</div>
            <div className="reg-platform">MYPASS</div>
            <p className="reg-note">
              Registration link will be available soon. Follow us for
              the announcement.
            </p>
            <button className="btn-primary reg-big-btn" id="register-btn">
              REGISTER ON MYPASS
            </button>
            <span className="reg-status label-sm">⏳ Opening soon</span>

            <hr className="rule" style={{marginTop:32}} />
            <p className="label-sm" style={{marginTop:16}}>
              #ALGORA2026 · ST. GEORGE'S COLLEGE ARUVITHURA
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
