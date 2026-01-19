
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LabGrid from './components/LabGrid';
import ArticleSection from './components/ArticleSection';
import GeminiSection from './components/GeminiSection';
import TopographyBackground from './components/TopographyBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <TopographyBackground />
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <ArticleSection />
        
        <LabGrid />

        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] border border-zinc-800">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Cộng đồng thực hành công nghệ.</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Chúng tôi không chỉ cung cấp lý thuyết. mTechHub là nơi bạn thực sự "nhúng tay" vào code thông qua hệ thống Labs ảo và sự hỗ trợ của AI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Bài Lab thực tế</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-800/50">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">AI Hỗ trợ</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Server Room" />
               <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        <GeminiSection />

        <section id="contact" className="py-32 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Sẵn sàng để trở thành <br/><span className="text-indigo-500">Master Tech?</span></h2>
            <p className="text-zinc-500 mb-12">Đăng ký bản tin để nhận các bài Lab mới nhất mỗi tuần.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input type="email" placeholder="Email của bạn..." className="px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-indigo-500 sm:w-80" />
              <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all">Đăng ký ngay</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center font-bold text-white text-[10px] lowercase">t</div>
            <span className="font-bold tracking-tighter">mTechHub</span>
          </div>
          <div className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} mTechHub — Kiến thức là địa hình, bạn là người dẫn lối.
          </div>
          <div className="flex gap-6 text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <a href="#">Github</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
