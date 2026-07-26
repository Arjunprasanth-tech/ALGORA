import React from 'react';
import './Sponsors.css';

const TIERS = [
  { tier:'TITLE SPONSOR',   slots:1, note:'Premium positioning' },
  { tier:'GOLD PARTNER',    slots:2, note:'High visibility' },
  { tier:'SILVER PARTNER',  slots:3, note:'Brand exposure' },
  { tier:'ASSOCIATE',       slots:4, note:'Supporter package' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="sponsors section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Partners & Supporters</span>
          <span className="section-bar-num">07</span>
        </div>

        <h2 className="display-head reveal" style={{marginBottom:48}}>SPONSORS</h2>

        {TIERS.map((tier, ti) => (
          <div key={ti} className="sp-tier-row reveal" style={{transitionDelay:`${ti*80}ms`}}>
            <div className="sp-tier-label">
              <span className="label-sm">{tier.tier}</span>
              <span className="sp-tier-note label-sm">{tier.note}</span>
            </div>
            <div className="sp-logos">
              {Array(tier.slots).fill(0).map((_, si) => (
                <div key={si} className="sp-logo-slot">
                  <span className="label-sm">YOUR LOGO</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="sp-cta card reveal" style={{marginTop:60}}>
          <div className="sp-cta-text">
            <h3 className="sp-cta-head">BECOME A SPONSOR</h3>
            <p className="sp-cta-sub">Partner with ALGORA 2026 to reach the next generation of tech innovators.</p>
          </div>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
          >
            GET IN TOUCH →
          </button>
        </div>

      </div>
    </section>
  );
}
