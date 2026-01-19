
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Kiến thức', href: '#articles' },
  { label: 'Hệ thống Labs', href: '#labs' },
  { label: 'Trợ lý AI', href: '#ai-assistant' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Labs', href: '#labs' },
    { label: 'Bài viết', href: '#articles' },
    { label: 'Cộng đồng', href: '#community' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-bold text-black text-xs lowercase">t</div>
            <span className="text-xl font-bold tracking-tighter text-white">mTechHub</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="px-5 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors">
              Đăng nhập
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full text-left bg-zinc-800 text-white px-3 py-3 rounded-md text-base font-medium mt-4">
              Đăng nhập
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
