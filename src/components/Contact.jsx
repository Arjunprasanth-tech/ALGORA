import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="section-bar reveal">
          <span className="section-bar-label">Get In Touch</span>
          <span className="section-bar-num">08</span>
        </div>

        <div className="contact-layout">

          <div className="reveal">
            <h2 className="display-head-white">
              LET'S<br/>CONNECT.
            </h2>
            <div className="rule-bold" />
            <p className="contact-desc">
              Have questions about ALGORA 2026? Want to partner with us?
              Reach out to the organizing team — we'd love to hear from you.
            </p>
          </div>

          <div className="contact-details reveal">
            {[
              { label:'INSTITUTION', value:'St. George\'s College, Aruvithura' },
              { label:'DEPARTMENT',  value:'Dept. of Computer Applications'     },
              { label:'LOCATION',    value:'Aruvithura, Kerala, India'          },
              { label:'HASHTAG',     value:'#ALGORA2026'                        },
            ].map(item => (
              <div key={item.label} className="contact-item">
                <span className="label-sm contact-item-label">{item.label}</span>
                <div className="contact-item-value">{item.value}</div>
                <hr className="rule" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
