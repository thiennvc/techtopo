
import React from 'react';
import { Article } from '../types';

const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Cách thiết lập CI/CD Pipeline hoàn hảo năm 2025',
    excerpt: 'Tìm hiểu về quy trình tự động hóa từ code đến production sử dụng GitHub Actions và Docker chuyên sâu.',
    date: '24/05/2024',
    readTime: '10 min',
    tag: 'DevOps'
  },
  {
    id: 'a2',
    title: 'Tối ưu hóa Cloudflare Workers cho Performance',
    excerpt: 'Chia sẻ các kỹ thuật giảm thiểu latency và tối ưu chi phí khi triển khai serverless tại Edge.',
    date: '22/05/2024',
    readTime: '6 min',
    tag: 'Cloud'
  }
];

const ArticleSection: React.FC = () => {
  return (
    <section id="articles" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div className="reveal">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">Kiến thức <span className="text-purple-400">Mới.</span></h2>
          <p className="text-zinc-500 text-xl font-medium">Cập nhật những xu hướng công nghệ hàng đầu thế giới.</p>
        </div>
        <div className="h-px hidden md:block flex-1 mx-12 bg-zinc-900"></div>
        <button className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors">See Archive</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {ARTICLES.map((article) => (
          <div key={article.id} className="group glass-card p-10 rounded-[3rem] card-glow transition-all duration-700 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest border border-purple-500/20">
                {article.tag}
              </span>
              <span className="text-zinc-600 font-bold text-xs uppercase tracking-widest">{article.date}</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 group-hover:text-purple-300 transition-colors leading-tight tracking-tight">
              {article.title}
            </h3>
            
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed line-clamp-2 font-medium">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-8 border-t border-zinc-800/50">
              <span className="text-xs text-zinc-600 font-black uppercase tracking-widest italic">{article.readTime} reading</span>
              <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group/btn">
                Đọc thêm
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover/btn:bg-purple-600 transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
