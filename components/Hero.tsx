
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 flex flex-col items-center justify-center px-4 relative">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10 reveal active">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-black text-zinc-400 mb-10 uppercase tracking-[0.3em]">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
          Welcome to the Future of Learning
        </div>
        
        <h1 className="text-7xl md:text-[9rem] font-bold mb-8 tracking-tight leading-[0.85] font-heading drop-shadow-2xl">
          CHIA SẺ<br />
          <span className="shimmer-text">CÔNG NGHỆ.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
          Nền tảng chia sẻ bài Lab kỹ thuật và tin tức công nghệ <span className="text-white">thực chiến</span>. Xây dựng kỹ năng từ những dự án thực tế nhất.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="#labs" className="group relative px-12 py-6 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl overflow-hidden">
            <span className="relative z-10 text-sm uppercase tracking-widest">Khám phá Labs</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
          <a href="#articles" className="px-12 py-6 glass-card border border-zinc-800 text-white font-black rounded-2xl hover:border-zinc-500 hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
            Đọc bài viết
          </a>
        </div>
      </div>
      
      {/* Visual Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-zinc-600 rounded-full animate-bounce"></div>
        </div>
        <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
