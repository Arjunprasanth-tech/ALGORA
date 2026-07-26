import React from 'react';
import './Schedule.css';

export default function Schedule() {
  return (
    <section id="schedule" className="schedule section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Event Timeline</span>
          <span className="section-bar-num">03</span>
        </div>

        <div className="schedule-layout">

          {/* Big heading */}
          <div className="reveal">
            <h2 className="display-head">DATE<br/><span style={{color:'var(--white)'}}>TBA</span></h2>
            <hr className="rule" style={{marginTop:28}} />
            <p className="sched-note">
              The event date is being finalized by the organizing committee.
              Stay connected for the official announcement.
            </p>
            <div className="sched-tags">
              <span className="tag-red">COMING SOON</span>
              <span className="label-sm" style={{marginLeft:16}}>ARUVITHURA · 2026</span>
            </div>
          </div>

          {/* Category list */}
          <div className="sched-list reveal">
            {[
              { icon:'🎓', label:'College Events', count:'04 events', num:'01' },
              { icon:'🏫', label:'School Events',  count:'02 events', num:'02' },
              { icon:'🌐', label:'General Events', count:'01 event',  num:'03' },
            ].map(s => (
              <div key={s.num} className="sched-item">
                <div className="sched-item-num">{s.num}</div>
                <div>
                  <div className="sched-item-name">{s.icon} {s.label}</div>
                  <div className="sched-item-count">{s.count}</div>
                </div>
                <hr className="rule" />
              </div>
            ))}

            <div className="sched-venue card">
              <span className="label-sm">Venue</span>
              <div className="venue-name">St. George's College</div>
              <div className="venue-sub">Aruvithura, Kerala</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
