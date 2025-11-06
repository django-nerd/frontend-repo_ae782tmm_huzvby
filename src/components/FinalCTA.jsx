import React from 'react';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15),_transparent_60%)]" />
        <h3 className="relative text-2xl font-semibold tracking-tight text-slate-900">Начните автоматизацию уже сегодня — и дайте бизнесу работать без вас.</h3>
        <p className="relative mt-2 text-slate-600">Без подписок. Без сложных настроек. Настроим под ваш бизнес.</p>
        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#form" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] px-6 py-3 text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] transition hover:brightness-110">
            Попробовать бесплатно
          </a>
        </div>
      </div>

      <form id="form" className="mt-12 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <input className="w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20" placeholder="Имя" />
        <input className="w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20" placeholder="Telegram" />
        <input className="md:col-span-3 w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" placeholder="Сообщение" />
        <button type="button" className="w-full md:w-auto rounded-xl bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-800">Отправить</button>
        <p className="md:col-span-3 text-xs text-slate-500">Без подписок. Без сложных настроек. Настроим под ваш бизнес.</p>
      </form>

      <div className="mt-12 flex flex-col items-center gap-2 text-center text-sm text-slate-500">
        <div className="font-medium text-slate-700">© 2025 Автопомощник для бизнеса</div>
        <div>Работает на n8n + OpenAI • Telegram</div>
      </div>
    </section>
  );
}
