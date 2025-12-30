
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const ProjectEstimator: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const estimateProject = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: `Act as a senior technical project manager at Crodal. Based on this project idea: "${input}", provide a rough breakdown of required services and a high-level timeline estimation.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              recommendedTech: { type: Type.ARRAY, items: { type: Type.STRING } },
              phases: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    weeks: { type: Type.STRING }
                  }
                }
              },
              difficulty: { type: Type.STRING }
            }
          }
        }
      });
      
      const jsonStr = response.text?.trim();
      if (jsonStr) {
        setResult(JSON.parse(jsonStr));
      }
    } catch (error) {
      console.error('Failed to generate blueprint:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white" id="ai-estimate">
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase mb-8 leading-[0.9]">
            EXPERIENCE <br />INTELLIGENCE<span className="text-white/20">.</span>
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-md font-medium leading-snug">
            Don't just read about AI-native products. Use them. Our analyzer blueprints your vision instantly.
          </p>
          
          <div className="space-y-6">
            <textarea 
              className="w-full bg-transparent border border-white/20 p-6 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors h-48 font-medium text-lg resize-none"
              placeholder="What would an intelligent product do for your users?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              onClick={estimateProject}
              disabled={loading}
              className="w-full bg-white text-black font-black uppercase tracking-widest py-6 text-sm hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-4"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Synthesizing Vision...</span>
                </>
              ) : (
                <>
                  <span>GENERATE AI BLUEPRINT</span>
                  <span className="text-xl">→</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 min-h-[500px] bg-white text-black p-8 md:p-16 flex flex-col relative overflow-hidden">
          {!result && !loading && (
             <div className="flex-1 flex flex-col items-center justify-center text-center">
                {/* Brain Icon from Reference */}
                <div className="text-7xl mb-10 animate-pulse transition-all grayscale opacity-40">🧠</div>
                <p className="font-black uppercase tracking-[0.3em] text-[10px] text-gray-400">Waiting for your vision</p>
             </div>
          )}
          
          {loading && (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="relative w-24 h-24 mb-10">
                 <div className="absolute inset-0 border-4 border-black/10 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                 <div className="absolute inset-0 flex items-center justify-center font-black text-xs uppercase">AI</div>
              </div>
              <p className="font-black uppercase tracking-[0.3em] text-[10px] text-black">Constructing Architecture...</p>
            </div>
          )}

          {result && (
            <div className="animate-fadeIn space-y-10 relative z-10">
              <div className="flex justify-between items-start border-b-2 border-black pb-8">
                <div>
                  <h4 className="font-black uppercase tracking-tighter text-3xl mb-1">BLUEPRINT</h4>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest">VERSION 1.0_CORE_STRATEGY</p>
                </div>
                <span className="px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em]">
                  {result.difficulty} SCALE
                </span>
              </div>
              
              <p className="text-gray-800 font-medium leading-relaxed text-lg italic">"{result.summary}"</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">TECHNOLOGY STACK</h5>
                  <div className="flex flex-wrap gap-2">
                    {result.recommendedTech.map((t: string) => (
                      <span key={t} className="px-3 py-1.5 border-2 border-black text-[10px] font-black uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-6">EXECUTION TIMELINE</h5>
                  <div className="space-y-3">
                    {result.phases.map((p: any) => (
                      <div key={p.name} className="flex justify-between items-center text-xs font-black uppercase border-b border-black/5 pb-2">
                        <span className="text-gray-400">{p.name}</span>
                        <span className="text-black">{p.weeks}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-black text-white py-5 font-black uppercase tracking-widest text-[10px] hover:bg-gray-800 transition-all mt-6">
                Download Full Technical Brief
              </button>
            </div>
          )}

          {/* Decorative Corner Background Accent */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEstimator;
