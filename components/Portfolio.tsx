
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectDetail from './ProjectDetail';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-white py-0 text-black overflow-hidden">
      {PROJECTS.map((project, index) => (
        <div 
          key={project.title} 
          onClick={() => setSelectedProject(project)}
          className={`flex flex-col lg:flex-row min-h-[60vh] border-b border-black last:border-b-0 cursor-pointer group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Box Style Side */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 flex items-center justify-center bg-gray-50 border-r border-black last:border-r-0 relative overflow-hidden">
             <div className="w-full aspect-video border border-black/10 flex flex-col items-center justify-center p-8 transition-all duration-700 group-hover:border-black/30 group-hover:bg-white z-10">
                <div className="text-[10px] font-mono text-black/20 mb-4 group-hover:text-black/40 transition-colors uppercase tracking-wider">
                  {project.title} ASSETS
                </div>
                <div className="w-12 h-px bg-black/10 group-hover:w-24 group-hover:bg-black/30 transition-all duration-700"></div>
                <div className="mt-4 flex gap-2">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-black/10 rounded-full animate-pulse" style={{animationDelay: `${i*200}ms`}}></div>)}
                </div>
             </div>
             
             {/* Background Text Accent */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-black/[0.02] uppercase tracking-tighter select-none pointer-events-none group-hover:text-black/[0.04] transition-all duration-700">
               {project.title[0]}
             </div>

             {/* Corner Accents */}
             <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-black/10 group-hover:border-black/30 transition-all"></div>
             <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-black/10 group-hover:border-black/30 transition-all"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white relative">
            <div className="mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black leading-none tracking-tighter mb-8 uppercase group-hover:translate-x-2 transition-transform duration-500">
              {project.title}
            </h3>

            <div className="space-y-8 max-w-lg">
              <p className="text-gray-500 font-medium leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="border-b-2 border-black pb-1 group-hover:text-gray-400 group-hover:border-gray-400 transition-all">View Project</span>
                <span className="w-8 h-8 rounded-none border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  →
                </span>
              </div>
            </div>
            
            {/* Number Indicator */}
            <div className="absolute bottom-8 right-12 text-[10px] font-black text-black/10 uppercase tracking-widest">
              0{index + 1} / 0{PROJECTS.length}
            </div>
          </div>
        </div>
      ))}

      {/* Project Detail View Overlay */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;
