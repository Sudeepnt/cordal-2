
import React from 'react';
import { TECHNOLOGIES } from '../constants';

const TechStack: React.FC = () => {
  return (
    <div className="bg-white py-24 border-t border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Tech Stack<span className="text-gray-300">.</span>
          </h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.4em]">
            WE BUILD ANDROID, IOS, WEBSITES, AND AI TOOLS
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {TECHNOLOGIES.map((tech) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-center justify-center p-8 border border-black hover:bg-black hover:text-white transition-all group"
            >
              <div className="w-12 h-12 bg-black text-white border border-white/10 rounded-none flex items-center justify-center font-black text-lg mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                {tech.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
