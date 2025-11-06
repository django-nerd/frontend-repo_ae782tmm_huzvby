import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroAI() {
  return (
    <section className="relative overflow-hidden">
      {/* Background aura gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.35),_transparent_60%)] blur-2xl" />
        <div className="absolute top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.25),_transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-28 md:grid-cols-2 md:gap-12 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Готов работать 24/7
          </div>
          <h1 className="font-semibold tracking-tight text-slate-900/95 [text-wrap:balance] text-3xl sm:text-4xl md:text-5xl">
            Ваш бизнес работает 24/7 — даже когда вы спите.
          </h1>
          <p className="text-base/7 text-slate-600">
            Автопомощник для бизнеса — AI‑система, которая отвечает клиентам, публикует посты и напоминает вам о заявках.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-5 py-3 text-white shadow-[0_0_0_0_rgba(0,0,0,0.05)] transition hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)]">
              Попробовать бесплатно
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white px-5 py-3 text-slate-700 shadow-sm transition hover:bg-slate-50">
              Посмотреть демо
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" /> Отвечает мгновенно в Telegram и VK</li>
            <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#06B6D4]" /> Автопостинг: контент‑план + AI‑тексты</li>
            <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ежедневные отчёты и напоминания</li>
            <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> Без сложных настроек</li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 shadow-lg backdrop-blur">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* subtle vignette overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.08))]" />
        </div>
      </div>
    </section>
  );
}
