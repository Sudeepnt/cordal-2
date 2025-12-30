
import React, { useEffect, useState } from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
  activeSection?: string;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, onNavigate, activeSection }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 1400); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Cases', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Partnership', id: 'partnership' },
    { label: 'Pitch', id: 'pitch' },
    { label: 'Contact', id: 'contact' },
  ];

  const currentActiveId = activeSection === 'projects' ? 'projects' : 
                         activeSection === 'about' ? 'about' :
                         activeSection === 'partnership' ? 'partnership' :
                         activeSection === 'pitch' ? 'pitch' :
                         activeSection === 'contact' ? 'contact' : 'home';

  const waterFlowPath = isAnimating 
    ? "M 100 0 L -20 0 C -10 10, -40 20, -15 30 C 10 40, -50 50, -10 60 C 20 70, -35 80, -20 90 C -5 95, -20 100, -20 100 L 100 100 Z" 
    : "M 100 0 L 100 0 C 100 10, 100 20, 100 30 C 100 40, 100 50, 100 60 C 100 70, 100 80, 100 90 C 100 95, 100 100, 100 100 L 100 100 Z";

  const secondaryViscousPath = isAnimating
    ? "M 100 0 L -10 0 C 5 15, -20 25, 0 35 C 15 45, -30 55, 5 65 C 25 75, -15 85, 0 95 C 10 100, 0 100, 0 100 L 100 100 Z"
    : "M 100 0 L 100 0 C 100 15, 100 25, 100 35 C 100 45, 100 55, 100 65 C 100 75, 100 85, 100 95 C 100 100, 100 100, 100 100 L 100 100 Z";

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden pointer-events-none">
      <div 
        className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ease-in-out pointer-events-auto ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path 
          className="fill-white/10 transition-all duration-[1500ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)]"
          d={secondaryViscousPath}
        />
        <path 
          className="fill-black transition-all duration-[1200ms] ease-[cubic-bezier(0.19, 1, 0.22, 1)]"
          d={waterFlowPath}
        />
      </svg>

      <div 
        className={`relative w-full h-full flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-auto ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-12 right-12 text-white group p-4 z-[110]"
          aria-label="Close"
        >
          <div className="w-12 h-px bg-white/40 relative overflow-hidden group-hover:bg-white transition-all duration-300">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 border-t-2 border-r-2 border-white/60 group-hover:border-white rotate-45 transition-all duration-300"></div>
          </div>
        </button>

        <nav className="flex flex-col gap-3 md:gap-5 items-center text-center">
          {menuItems.map((item, index) => {
            const isActive = currentActiveId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                style={{ 
                  transitionDelay: isAnimating ? `${index * 80 + 800}ms` : '0ms',
                  transform: isAnimating ? 'translateY(0)' : 'translateY(25px)',
                  opacity: isAnimating ? (isActive ? 1 : 0.5) : 0
                }}
                className={`group relative px-10 py-1 transition-all duration-[700ms] ease-out hover:opacity-100`}
              >
                <span className={`text-white transition-all duration-300 block uppercase tracking-tighter leading-none
                  ${isActive ? 'text-2xl md:text-5xl font-[900] scale-110' : 'text-xl md:text-3xl font-bold opacity-70 group-hover:opacity-100 group-hover:scale-105'}
                `}>
                  {item.label}
                </span>
                {isActive && (
                   <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-6 h-[2px] bg-white/60 rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MenuOverlay;
