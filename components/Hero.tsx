
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Rotate based on scroll position - spinning on the Y axis
      const scrollRotation = scrollY * 0.4;
      setRotation(scrollRotation);

      // Gradually fade out as we move deep into the site to maintain readability of content
      // Starts fading after 300px, fully gone by 1200px
      const newOpacity = Math.max(0, 1 - (scrollY - 300) / 900);
      setOpacity(scrollY < 300 ? 1 : newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center px-4 relative bg-white border-b border-black/5 overflow-hidden">
      {/* 
          FIXED 3D Bloated Logo Container
          Positioned fixed to stay in the center of the viewport 'going nowhere' 
          while the rest of the page content scrolls around it.
      */}
      <div 
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{ opacity }}
      >
        <div 
          className="w-full max-w-[320px] md:max-w-[500px] transition-transform duration-75 ease-out"
          style={{ 
            perspective: '2000px',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)` 
          }}
        >
          <div className="animate-[pulse_4s_ease-in-out_infinite]">
            <svg 
              viewBox="0 0 500 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)]"
            >
              <defs>
                <linearGradient id="bloatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="50%" stopColor="black" />
                  <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
                
                <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
                  <feOffset dx="4" dy="4" />
                  <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
                  <feFlood floodColor="white" floodOpacity="0.2" />
                  <feComposite in2="shadowDiff" operator="in" />
                  <feComposite in2="SourceGraphic" operator="over" />
                </filter>
              </defs>

              {/* Main Horizontal Bar - extremely rounded for 'bloated' feel */}
              <rect 
                x="50" y="270" width="400" height="80" rx="40" 
                fill="url(#bloatGradient)" 
                filter="url(#innerGlow)"
              />
              
              {/* Middle Vertical Pillar - bloated pill shape */}
              <rect 
                x="210" y="80" width="80" height="230" rx="40" 
                fill="url(#bloatGradient)" 
                filter="url(#innerGlow)"
              />
              
              {/* Left Angled Pillar */}
              <rect 
                x="105" y="215" width="80" height="180" rx="40" 
                fill="url(#bloatGradient)" 
                filter="url(#innerGlow)"
                transform="rotate(-42, 105, 215)"
              />
              
              {/* Right Angled Pillar */}
              <rect 
                x="315" y="165" width="80" height="180" rx="40" 
                fill="url(#bloatGradient)" 
                filter="url(#innerGlow)"
                transform="rotate(42, 315, 165)"
              />
              
              {/* Glossy High-lights for 3D depth */}
              <rect x="235" y="100" width="10" height="100" rx="5" fill="white" fillOpacity="0.15" />
              <rect x="80" y="295" width="120" height="8" rx="4" fill="white" fillOpacity="0.1" />
              <rect x="300" y="295" width="120" height="8" rx="4" fill="white" fillOpacity="0.1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content (Labels and Indicators) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 select-none z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Spin</span>
        <div className="w-px h-12 bg-black/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-black animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
