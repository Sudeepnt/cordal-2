
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Large Brand Logo */}
        <div className="mb-16">
          <div className="font-black text-6xl md:text-7xl tracking-tighter text-black uppercase">
            CRODAL<span className="text-black/10">.</span>
          </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">
              NAVIGATION
            </h4>
            <ul className="space-y-4">
              <li 
                onClick={() => scrollTo('home')}
                className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity"
              >
                SERVICES
              </li>
              <li 
                onClick={() => scrollTo('projects')}
                className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity"
              >
                PROJECTS
              </li>
              <li 
                onClick={() => scrollTo('about')}
                className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity"
              >
                ABOUT
              </li>
              <li 
                onClick={() => scrollTo('partnership')}
                className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity"
              >
                PARTNERSHIP
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:crodal.ai@gmail.com" 
                  className="text-sm md:text-base font-black uppercase tracking-tighter hover:opacity-50 transition-opacity block"
                >
                  CRODAL.AI@GMAIL.COM
                </a>
              </li>
              <li className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity">
                LINKEDIN
              </li>
              <li className="text-sm md:text-base font-black uppercase tracking-tighter cursor-pointer hover:opacity-50 transition-opacity">
                X (TWITTER)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-black text-white py-10 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight">
            © 2025 CRODAL STUDIO. INTELLIGENCE-FIRST PRODUCTS.
          </p>
          <p className="text-[11px] md:text-xs font-black uppercase tracking-[0.25em]">
            BUILT FOR BREAKTHROUGH SUCCESS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
