
import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <nav className="flex w-full items-stretch h-16 md:h-20 max-w-[1600px] mx-auto px-6 md:px-12">
          <div 
            className="flex items-center font-black text-xl md:text-2xl tracking-tighter cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            CRODAL<span className="text-black/20">.</span>
          </div>
          
          <div className="flex-1"></div>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center justify-center py-2"
            aria-label="Toggle Menu"
          >
            <div className="w-10 h-10 flex flex-col items-end justify-center gap-2">
               <div className="w-full h-[3px] bg-black"></div>
               <div className="w-2/3 h-[3px] bg-black group-hover:w-full transition-all duration-500"></div>
            </div>
          </button>
        </nav>
      </header>

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;
