
import React, { useState, useRef } from 'react';
import { getTechAssistantResponse } from '../services/geminiService';

const GeminiSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null);
    const result = await getTechAssistantResponse(input);
    setResponse(result);
    setIsLoading(false);
    
    setTimeout(() => {
      responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section id="ai-assistant" className="py-40 px-4 relative bg-[#050508]">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="relative inline-block mb-10">
            <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-[2rem] mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.4)] animate-pulse">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 256 256"><path d="M208,80H176V48a16,16,0,0,0-16-16H96A16,16,0,0,0,80,48V80H48A16,16,0,0,0,32,96v64a16,16,0,0,0,16,16H80v32a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V176h32a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,48h64V80H96ZM160,208H96V176h64Zm48-48H48V96H208v64Z"></path></svg>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-[#050508]"></div>
          </div>
          <h2 className="text-6xl font-bold mb-6 tracking-tighter">AI Mentor <span className="text-cyan-400">Sẵn Sàng.</span></h2>
          <p className="text-zinc-500 text-xl font-medium">Đưa code của bạn cho tôi, tôi sẽ chỉ cho bạn cách tối ưu nó.</p>
        </div>
        
        <div className="glass-card rounded-[3rem] p-4 reveal">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi bất cứ điều gì về kỹ thuật: Docker, React, Prompting..."
              className="flex-1 bg-black/40 border border-zinc-800 rounded-[2rem] px-10 py-6 text-white text-lg placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all font-medium"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-black rounded-[2rem] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Thinking...</span>
                </>
              ) : 'PHÂN TÍCH'}
            </button>
          </form>

          {response && (
            <div ref={responseRef} className="mt-6 p-10 bg-black/50 rounded-[2.5rem] border border-zinc-800/50 animate-in fade-in zoom-in-95 duration-700">
              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-widest uppercase">Expert Insights</div>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-200 text-xl leading-relaxed font-medium whitespace-pre-wrap">{response}</p>
              </div>
              <div className="mt-12 flex justify-between items-center">
                 <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest italic">Hệ thống phản hồi thời gian thực</span>
                 <button onClick={() => setResponse(null)} className="text-zinc-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Làm mới</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiSection;
