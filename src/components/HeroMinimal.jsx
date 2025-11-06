import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroMinimal() {
  return (
    <section className="relative isolate bg-[#0B0A10]">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft vignette and color glows over 3D but not blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,198,0.10),rgba(11,10,16,0.35)_45%,rgba(11,10,16,0.9)_80%)]" />
        <div className="pointer-events-none absolute -top-28 right-1/4 h-80 w-80 rounded-full blur-3xl opacity-25 bg-cyan-400/40" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full blur-3xl opacity-15 bg-amber-300/30" />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Нейро‑платформа для роста бизнеса
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Автопомощник для бизнеса
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70">
            Умная система, которая отвечает клиентам, создаёт контент и готовит отчёты. Работает 24/7, сокращает издержки и ускоряет продажи.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex h-11 items-center gap-2 rounded-md bg-emerald-300 px-6 font-medium text-[#0B0A10] hover:bg-emerald-200 transition-colors">
              Попробовать бесплатно
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex h-11 items-center rounded-md border border-white/10 px-6 text-white/90 hover:text-white hover:border-white/20 transition-colors">
              Смотреть возможности
            </a>
          </div>

          {/* trust bar */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/50">
            <span className="text-xs uppercase tracking-wider">Используется командами</span>
            <div className="flex items-center gap-6 opacity-70">
              <span className="text-sm">OpenAI</span>
              <span className="text-sm">Notion</span>
              <span className="text-sm">Slack</span>
              <span className="text-sm">n8n</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
