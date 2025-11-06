import React from 'react';

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#1C1B29]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-emerald-300 to-cyan-400" />
          <span className="font-semibold tracking-tight text-white">Автопомощник</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Возможности</a>
          <a href="#how" className="hover:text-white transition-colors">Как это работает</a>
          <a href="#pricing" className="hover:text-white transition-colors">Цены</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-3 rounded-md text-sm text-white/80 hover:text-white transition-colors">Вход</button>
          <a href="#cta" className="inline-flex h-9 px-4 rounded-md text-sm font-medium bg-white text-[#1C1B29] hover:bg-white/90 transition-colors">Попробовать</a>
        </div>
      </div>
    </header>
  );
}
