import React from 'react';
import './Speakers.css';

const SPEAKERS = [
  { num:'01', role:'CHIEF GUEST', name:'TBA', org:'To be announced', icon:'👤' },
  { num:'02', role:'GUEST OF HONOUR', name:'TBA', org:'To be announced', icon:'👤' },
  { num:'03', role:'FACULTY COORDINATOR', name:'To be announced', org:'Dept. of Computer Applications', icon:'👤' },
];

export default function Speakers() {
  return (
    <section id="speakers" className="speakers section">
      <div className="container">
        <div className="section-bar reveal">
          <span className="section-bar-label">Guests & Faculty</span>
          <span className="section-bar-num">04</span>
        </div>
        <h2 className="display-head reveal" style={{marginBottom:48}}>SPEAKERS</h2>

        <div className="speakers-list">
          {SPEAKERS.map((s, i) => (
            <div key={i} className="sp-row reveal" style={{transitionDelay:`${i*100}ms`}}>
              <div className="sp-num">{s.num}</div>
              <div className="sp-icon">{s.icon}</div>
              <div className="sp-info">
                <div className="sp-role label-sm">{s.role}</div>
                <div className="sp-name">{s.name}</div>
                <div className="sp-org">{s.org}</div>
              </div>
              <div className="sp-tba tag-red">TBA</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
