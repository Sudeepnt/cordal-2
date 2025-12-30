
import React from 'react';
import { SERVICES } from '../constants';

const ServiceGrid: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] py-24 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            Services<span className="text-blue-600">.</span>
          </h2>
          <div className="w-20 h-2 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-black">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group p-8 md:p-12 border-r border-b border-black hover:bg-blue-600 transition-colors duration-500"
            >
              <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6 group-hover:text-white transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-6 group-hover:text-white transition-colors leading-none uppercase">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-100 transition-colors text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                 <span className="text-white font-bold text-xs uppercase tracking-widest">Discover More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
