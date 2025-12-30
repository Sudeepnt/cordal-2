
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('sent');
    }, 1800);
  };

  return (
    <div className="bg-gray-50 py-24 md:py-40 relative overflow-hidden" id="contact">
      {/* Crazy Animation Overlay */}
      {status === 'sent' && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden animate-[screenReveal_0.8s_ease-in-out_forwards]">
          <div className="absolute inset-0 grid grid-cols-12 gap-px opacity-20">
             {Array.from({length: 144}).map((_, i) => (
               <div key={i} className="bg-white/10 animate-[pulse_2s_infinite]" style={{ animationDelay: `${i * 15}ms` }}></div>
             ))}
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-[120px] md:text-[250px] font-black text-green-500 leading-none tracking-tighter uppercase animate-[zoomIn_0.6s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
              SENT
            </h2>
            <div className="mt-8 flex flex-col items-center">
              <div className="w-24 h-px bg-white/30 mb-8 animate-[widthExpand_1s_ease-out]"></div>
              <p className="text-white font-black uppercase tracking-[0.5em] text-xs opacity-50">Intelligence synchronized</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-16 text-white text-[10px] font-bold uppercase tracking-widest border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all"
              >
                Return to Core
              </button>
            </div>
          </div>
          
          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-spin transition-all duration-[10s]">
             <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-sm"></div>
             <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full blur-md"></div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className={`transition-all duration-700 ${status === 'submitting' ? 'blur-md opacity-50 scale-95 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter text-black uppercase">
              Let's build <br />
              <span className="text-gray-300">something real.</span>
            </div>
            
            <div className="mt-20 text-lg md:text-4xl font-semibold leading-relaxed text-gray-800">
              Hi, my name is{' '}
              <input 
                type="text" 
                placeholder="your name" 
                className="bg-transparent border-b-4 border-black focus:border-gray-400 outline-none px-2 py-1 placeholder:text-gray-200 w-48 md:w-64 transition-colors font-black uppercase tracking-tighter"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {' '}and I have a{' '}
              <input 
                type="text" 
                placeholder="bold idea" 
                className="bg-transparent border-b-4 border-black focus:border-gray-400 outline-none px-2 py-1 placeholder:text-gray-200 w-48 md:w-64 transition-colors font-black uppercase tracking-tighter"
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
              />
              . Reach me at{' '}
              <input 
                type="email" 
                placeholder="e-mail" 
                className="bg-transparent border-b-4 border-black focus:border-gray-400 outline-none px-2 py-1 placeholder:text-gray-200 w-48 md:w-80 transition-colors font-black uppercase tracking-tighter"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              .
            </div>

            <button 
              onClick={handleSubmit}
              disabled={status === 'submitting'}
              className="mt-20 group flex items-center gap-10 bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors relative overflow-hidden"
            >
              <span className="relative z-10">Send Vision</span>
              <span className="text-2xl group-hover:translate-x-4 transition-transform relative z-10">→</span>
              {status === 'submitting' && (
                <div className="absolute inset-0 bg-white/10 animate-[loadingSlide_1s_infinite]"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes screenReveal {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes widthExpand {
          from { width: 0; }
          to { width: 96px; }
        }
        @keyframes loadingSlide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
