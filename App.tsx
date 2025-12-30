
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Partnership from './components/Partnership';
import Pitch from './components/Pitch';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'partnership', 'pitch'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        {/* HERO */}
        <section id="home" className="bg-transparent">
          <Hero />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="relative z-10">
          <div className="pt-24 px-6 md:px-12 bg-white/60 backdrop-blur-[2px]">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-0 leading-none">
              Projects<span className="text-black/10">.</span>
            </h2>
          </div>
          <Portfolio />
        </section>

        {/* ABOUT (Philosophy + TechStack) */}
        <section id="about" className="relative z-10 bg-white">
          <Philosophy />
          <TechStack />
        </section>

        {/* CO-CREATION */}
        <section id="partnership" className="relative z-10 bg-white">
          <Partnership />
        </section>

        {/* PITCH (Call to Action) */}
        <section id="pitch" className="relative z-10 bg-white">
          <Pitch />
        </section>
      </main>

      {/* FOOTER - Final section of the site */}
      <Footer />
    </div>
  );
};

export default App;
