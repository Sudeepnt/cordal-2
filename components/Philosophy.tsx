
import React from 'react';
import { PHILOSOPHY } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <div className="bg-white py-24 border-b border-black" id="philosophy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
            Our Product <br />Philosophy<span className="text-gray-300">.</span>
          </h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">How we think about intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-black">
          {PHILOSOPHY.map((item, index) => (
            <div key={index} className="p-10 md:p-16 border-r border-b border-black hover:bg-gray-50 transition-colors">
              <span className="block text-4xl font-black text-gray-100 mb-8">0{index + 1}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
