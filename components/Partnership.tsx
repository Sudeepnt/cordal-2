
import React from 'react';

const Partnership: React.FC = () => {
  return (
    <div className="bg-white py-24 border-b border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="p-12 md:p-20 bg-black text-white">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-10 leading-none">
              Co-Creation <br />Partnerships
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 border border-white flex items-center justify-center flex-shrink-0 mt-1">
                   <div className="w-2 h-2 bg-white"></div>
                </div>
                <p className="font-bold uppercase text-sm tracking-tight">Shared ownership & upside</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 border border-white flex items-center justify-center flex-shrink-0 mt-1">
                   <div className="w-2 h-2 bg-white"></div>
                </div>
                <p className="font-bold uppercase text-sm tracking-tight">AI-native from day one</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 border border-white flex items-center justify-center flex-shrink-0 mt-1">
                   <div className="w-2 h-2 bg-white"></div>
                </div>
                <p className="font-bold uppercase text-sm tracking-tight">Built for breakthrough success</p>
              </div>
            </div>
            <button className="w-full bg-white text-black py-6 font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">
              Partner with Us →
            </button>
          </div>
          
          <div className="max-w-lg">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Equity-Based Collaboration</h4>
            <p className="text-2xl font-black tracking-tight mb-8">
              We don't consult. We co-own. When we build together, we share the vision, the risks, and the upside.
            </p>
            <p className="text-gray-500 font-medium leading-relaxed mb-8">
              We're selective. We partner with visionaries who believe software should be as intelligent as its users. We turn bold ideas into AI-native MVPs in weeks, not years.
            </p>
            <div className="p-6 border-l-4 border-black bg-gray-50 italic font-medium">
              "Crodal builds products we believe in, not features someone else requested."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
