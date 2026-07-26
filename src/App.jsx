import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll reveal — pre-trigger 120px before element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop watching once visible
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px 120px 0px' }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Speakers />
        <Gallery />
        <Sponsors />
        <Register />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
