
import React from 'react';
import { AUDIENCE } from '../constants';

const Audience: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] py-24 border-b border-black" id="audience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
              Who we <br />build for<span className="text-gray-300">.</span>
            </h2>
          </div>
          <div className="text-gray-400 font-bold text-xs uppercase tracking-widest md:mb-4">
            From individual users to global organizations
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-black bg-white">
          {AUDIENCE.map((item, index) => (
            <div key={index} className="p-12 border-b md:border-b-0 md:border-r last:border-0 border-black flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="text-4xl mb-8 grayscale">{item.icon}</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 leading-none">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {item.description}
                </p>
              </div>
              <div className="mt-12">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                  Collaborate →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Audience;
