import React, { useState } from 'react';
import './Gallery.css';

const ITEMS = [
  { id:1,  icon:'🤖', label:'AI Dev Workshop',  hue:10,  tall:true },
  { id:2,  icon:'💻', label:'Coding Arena',      hue:220, tall:false },
  { id:3,  icon:'🎬', label:'Reel Editing',      hue:280, tall:false },
  { id:4,  icon:'🏆', label:'Podium Moments',    hue:40,  tall:false },
  { id:5,  icon:'🎮', label:'E-Football',        hue:120, tall:true },
  { id:6,  icon:'🗺️', label:'Treasure Hunt',     hue:200, tall:false },
];

export default function Gallery() {
  const [lb, setLb] = useState(null);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Moments & Memories</span>
          <span className="section-bar-num">05</span>
        </div>

        <h2 className="display-head reveal" style={{marginBottom:48}}>GALLERY</h2>

        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`g-cell reveal ${item.tall ? 'tall' : ''}`}
              style={{ transitionDelay:`${i*70}ms` }}
              onClick={() => setLb(item)}
            >
              <div className="g-photo" style={{ '--hue': item.hue }}>
                <span className="g-icon">{item.icon}</span>
                <div className="g-overlay">
                  <span className="g-label">{item.label}</span>
                  <span className="g-view label-sm">VIEW →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note label-sm reveal">
          PHOTOS WILL BE ADDED AFTER THE EVENT · ALGORA 2026
        </p>

      </div>

      {lb && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <div className="lb-inner card-red" onClick={e => e.stopPropagation()}>
            <span className="lb-icon">{lb.icon}</span>
            <h3 className="lb-name">{lb.label}</h3>
            <p className="lb-sub label-sm">Photos coming after the event</p>
            <button className="btn-primary" onClick={() => setLb(null)}>CLOSE</button>
          </div>
        </div>
      )}
    </section>
  );
}
