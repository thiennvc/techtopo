
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Kiến thức', href: '#articles' },
  { label: 'Hệ thống Labs', href: '#labs' },
  { label: 'Trợ lý AI', href: '#ai-assistant' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
        isScrolled ? 'glass-card rounded-full mx-4 shadow-2xl' : ''
      }`}>
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-black text-white shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-xl lowercase">t</span>
            </div>
            <span className="font-heading font-bold tracking-tighter text-2xl hidden sm:block">
              mTech<span className="text-cyan-400">Hub</span>
            </span>
          </div>
          
          <div className="hidden md:flex gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="text-xs font-black text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">Login</button>
            <button className="px-6 py-2.5 bg-white text-black text-xs font-black rounded-full hover:bg-cyan-400 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.2)]">
              JOIN LABS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
