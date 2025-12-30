
import React, { useState } from 'react';

interface PitchProps {
  isBottom?: boolean;
}

const Pitch: React.FC<PitchProps> = ({ isBottom }) => {
  const [formData, setFormData] = useState({ name: '', email: '', idea: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className={`bg-black text-white flex flex-col items-center justify-center p-24 ${isBottom ? 'py-12' : 'py-32'}`}>
        <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6 text-green-500">SENT.</h3>
        <p className="font-mono text-xs opacity-50 uppercase tracking-[0.4em]">Vision received by Crodal system</p>
        <button onClick={() => setSent(false)} className="mt-12 text-[10px] border border-white/20 px-8 py-3 uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-all">Back</button>
      </div>
    );
  }

  return (
    <div className={`bg-white border-t border-black px-6 md:px-12 ${isBottom ? 'py-16' : 'py-32 md:py-48'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            LET'S BUILD <br />
            <span className="text-black/10">SOMETHING REAL.</span>
          </h2>
          <p className="font-bold text-[10px] uppercase tracking-[0.4em] text-gray-400">Direct transmission line</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-b border-black pb-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-300">Identity</label>
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-transparent outline-none font-black text-2xl uppercase tracking-tighter placeholder:text-gray-100"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="border-b border-black pb-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-300">Terminal</label>
              <input 
                type="email" 
                placeholder="E-MAIL ADDRESS" 
                className="w-full bg-transparent outline-none font-black text-2xl uppercase tracking-tighter placeholder:text-gray-100"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          <div className="border-b border-black pb-4">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-300">Objective</label>
            <input 
              type="text" 
              placeholder="YOUR BOLD IDEA" 
              className="w-full bg-transparent outline-none font-black text-2xl uppercase tracking-tighter placeholder:text-gray-100"
              value={formData.idea}
              onChange={e => setFormData({...formData, idea: e.target.value})}
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-black text-white py-8 font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-800 transition-all flex items-center justify-center gap-6 group"
          >
            <span>Initiate Transmission</span>
            <span className="text-xl group-hover:translate-x-4 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pitch;
