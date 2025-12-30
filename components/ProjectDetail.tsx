
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Prevent body scroll when detail view is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom duration-500">
      {/* Detail Header - Minimalist */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 md:px-12 py-6 flex justify-end items-center">
        <button 
          onClick={onClose}
          className="group flex items-center justify-center"
          aria-label="Close Project"
        >
          <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <span className="text-lg">✕</span>
          </div>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Title Section */}
        <div className="text-center mb-32">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-gray-300 mb-8">{project.category}</p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-black">
            {project.title}
          </h1>
        </div>

        {/* Hero Image / Placeholder */}
        <div className="w-full aspect-video border border-black mb-32 flex items-center justify-center bg-gray-50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="text-[10px] font-black uppercase tracking-[1em] text-black/10">PREVIEW_SYSTEM_ASSET</div>
          {/* Decorative Corner Accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-black/10"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-black/10"></div>
        </div>

        {/* Brief Section */}
        <div className="mb-32">
          <div className="inline-block bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
            BRIEF
          </div>
          <p className="text-xl md:text-3xl font-medium leading-relaxed text-gray-800 tracking-tight">
            {project.brief}
          </p>
        </div>

        {/* Technical Showcase Image */}
        <div className="w-full aspect-[16/10] border border-black mb-32 flex items-center justify-center bg-white p-8 md:p-16">
           <div className="w-full h-full border border-black/5 flex flex-col">
              <div className="h-8 border-b border-black/5 flex items-center px-4 gap-2">
                 <div className="w-2 h-2 rounded-full bg-black/10"></div>
                 <div className="w-2 h-2 rounded-full bg-black/10"></div>
                 <div className="w-2 h-2 rounded-full bg-black/10"></div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                 <div className="w-2/3 h-px bg-black/10"></div>
                 <div className="w-1/2 h-px bg-black/10"></div>
                 <div className="w-3/4 h-px bg-black/10"></div>
              </div>
           </div>
        </div>

        {/* Implementation Section */}
        <div className="mb-32">
          <div className="text-black text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
             <span className="w-8 h-[2px] bg-black"></span>
             IMPLEMENTATION
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-600">
            {project.implementation}
          </p>
        </div>

        {/* Technology Section */}
        <div className="mb-32">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-12">TECHNOLOGY</h4>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.technologies?.map((tech) => (
                <div key={tech} className="bg-black text-white aspect-square flex flex-col items-center justify-center p-6 group cursor-default transition-all duration-300">
                   <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
                      {tech[0]}
                   </div>
                   <span className="text-[9px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{tech}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Detail Footer */}
      <div className="bg-black text-white py-24 px-6 md:px-12 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 opacity-40">END_OF_CASE_STUDY</p>
         <button 
           onClick={onClose}
           className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors"
         >
           BACK TO ALL PROJECTS
         </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
