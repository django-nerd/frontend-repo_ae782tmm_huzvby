import React from 'react';

export default function HeroMinimal() {
  return (
    <section className="relative isolate bg-[#1C1B29]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full blur-3xl opacity-20 bg-emerald-300" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-10 bg-cyan-300" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Автопомощник для бизнеса
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Убираем рутину, ускоряем продажи и улучшаем сервис — без лишней суеты и анимаций. Чистый фокус на результате в стиле топовых платформ.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#cta" className="inline-flex h-11 px-6 rounded-md bg-white text-[#1C1B29] font-medium hover:bg-white/90 transition-colors">Попробовать бесплатно</a>
            <a href="#features" className="inline-flex h-11 px-6 rounded-md border border-white/10 text-white/90 hover:text-white hover:border-white/20 transition-colors">Смотреть возможности</a>
          </div>
          <div className="mt-10 text-xs uppercase tracking-wider text-white/40">Работает на базе OpenAI и n8n</div>
        </div>
      </div>
    </section>
  );
}
