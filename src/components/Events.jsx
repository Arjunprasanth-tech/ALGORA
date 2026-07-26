import React, { useState } from 'react';
import './Events.css';

const ALL_EVENTS = [
  { id:'ai-app',  cat:'COLLEGE', num:'01', icon:'🤖', name:'AI APP DEVELOPMENT', spidey:'🕷️ SPIDER-BOT AI', desc:'Build intelligent applications. Solve real-world problems. Shape the future with AI-powered web solutions.', tag:'MAIN EVENT' },
  { id:'treasure',cat:'COLLEGE', num:'02', icon:'🗺️', name:'TREASURE HUNT',        spidey:'🕸️ WEB-TRAIL HUNT', desc:'Clues, codes, and web curiosity. Navigate the unknown campus trails and decode your way to the prize.', tag:'COLLEGE'   },
  { id:'reel',    cat:'COLLEGE', num:'03', icon:'🎬', name:'REEL EDITING',          spidey:'🎬 SPIDEY-CAM REELS', desc:'Edit your creativity. Tell your story in 60 seconds flat — every cut, frame, and web-edit counts.', tag:'COLLEGE'   },
  { id:'debug',   cat:'COLLEGE', num:'04', icon:'🐛', name:'CODE DEBUGGING',        spidey:'⚡ BUG-WEAVER', desc:'Find the bug. Weave the clean code. Prove your logic and debugging skills are unbreakable under pressure.', tag:'COLLEGE'   },
  { id:'typing',  cat:'SCHOOL',  num:'05', icon:'⌨️', name:'TYPING COMPETITION',   spidey:'⌨️ SPEED-SHOOTER', desc:'Speed. Accuracy. Web-syntax. Type your way to the top — every keystroke counts in this high-intensity race.', tag:'SCHOOL'    },
  { id:'film',    cat:'SCHOOL',  num:'06', icon:'🎥', name:'SHORT FILM REVIEW',     spidey:'🎥 CINEMATIC WEB', desc:'Watch. Think. Express. Your critical perspective is the lens through which great cinema is understood.', tag:'SCHOOL'    },
  { id:'football',cat:'GENERAL', num:'07', icon:'🎮', name:'E-FOOTBALL',            spidey:'🎮 CYBER-STRIKER', desc:"Play. Compete. Conquer. It's not just a game — it's strategy, skill, and glory on a digital pitch.", tag:'GENERAL'   },
];

const TABS = ['ALL', 'COLLEGE', 'SCHOOL', 'GENERAL'];

export default function Events() {
  const [tab, setTab] = useState('ALL');
  const events = tab === 'ALL' ? ALL_EVENTS : ALL_EVENTS.filter(e => e.cat === tab);

  return (
    <section id="events" className="events section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Spider-Tech Challenges & Competitions</span>
          <span className="section-bar-num">02</span>
        </div>

        <div className="events-head reveal">
          <h2 className="display-head">EVENTS</h2>
        </div>

        {/* Tab bar */}
        <div className="events-tabs reveal">
          {TABS.map(t => (
            <button
              key={t}
              className={`ev-tab ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid — reveal target on grid container so filtering always renders visible cards */}
        <div className="events-grid reveal">
          {events.map((ev) => (
            <div
              key={ev.id}
              className={`ev-card ${ev.tag === 'MAIN EVENT' ? 'ev-card-featured' : ''}`}
            >
              <div className="ev-top">
                <span className="ev-num">{ev.num}</span>
                <div className="ev-tags-group">
                  <span className="spidey-badge">{ev.spidey}</span>
                  <span className="tag-red">{ev.tag}</span>
                </div>
              </div>

              <div className="ev-icon">{ev.icon}</div>

              <h3 className="ev-name">{ev.name}</h3>

              <hr className="rule" style={{margin:'14px 0'}} />

              <p className="ev-desc">{ev.desc}</p>

              <button
                className="ev-btn"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior:'smooth' })}
              >
                REGISTER →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
