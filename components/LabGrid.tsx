
import React from 'react';
import { Lab } from '../types';

const LABS: Lab[] = [
  {
    id: 'l1',
    title: 'Deploy Fullstack lên Cloudflare',
    difficulty: 'Easy',
    duration: '15 mins',
    category: 'Cloud',
    description: 'Hướng dẫn chi tiết cách deploy ứng dụng React & Pages lên Cloudflare Workers.',
    link: '#'
  },
  {
    id: 'l2',
    title: 'Tối ưu hiệu năng Gemini AI',
    difficulty: 'Medium',
    duration: '45 mins',
    category: 'AI',
    description: 'Học cách sử dụng Prompt Engineering và Thinking Budget để có kết quả tốt nhất.',
    link: '#'
  },
  {
    id: 'l3',
    title: 'Hệ thống CI/CD với GitHub Actions',
    difficulty: 'Hard',
    duration: '60 mins',
    category: 'DevOps',
    description: 'Xây dựng pipeline tự động test và deploy lên môi trường Staging/Production.',
    link: '#'
  }
];

const LabGrid: React.FC = () => {
  return (
    <section id="labs" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Thực hành <span className="text-cyan-400">Labs</span></h2>
          <p className="text-zinc-500 text-lg">Học tập qua trải nghiệm thực tế với hạ tầng Cloud hiện đại.</p>
        </div>
        <button className="text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors flex items-center gap-2">
          Tất cả bài Lab
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LABS.map((lab) => (
          <div key={lab.id} className="group glass-panel p-8 rounded-[2rem] hover-glow transition-all duration-500 relative overflow-hidden border-zinc-800/50">
            {/* Background Accent Blur */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
               lab.difficulty === 'Easy' ? 'bg-green-400' : lab.difficulty === 'Medium' ? 'bg-orange-400' : 'bg-red-500'
            }`}></div>
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                lab.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                lab.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 
                'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {lab.difficulty}
              </span>
              <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{lab.category}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white transition-colors">{lab.title}</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed line-clamp-3">{lab.description}</p>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800/50">
              <span className="text-xs text-zinc-500 font-bold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                {lab.duration}
              </span>
              <a href={lab.link} className="flex items-center gap-2 text-black bg-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-cyan-400 transition-all group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Bắt đầu 
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabGrid;
