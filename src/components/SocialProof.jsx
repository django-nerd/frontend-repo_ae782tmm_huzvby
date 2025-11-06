import React from 'react';

export default function SocialProof() {
  return (
    <section className="relative bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
            <div className="text-3xl font-semibold">10ч</div>
            <div className="mt-1 text-sm text-white/80">Экономия каждую неделю</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
            <div className="text-3xl font-semibold">+25%</div>
            <div className="mt-1 text-sm text-white/80">Заявок обработано вовремя</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
            <div className="text-3xl font-semibold">+30%</div>
            <div className="mt-1 text-sm text-white/80">Рост продаж</div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur">
            <div className="text-3xl font-semibold">24/7</div>
            <div className="mt-1 text-sm text-white/80">Отвечает без перерывов</div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            'Бот сам отвечает клиентам — я просто вижу заявки в Telegram.',
            'Посты выходят каждый день без моего участия.',
            'Сэкономили время и деньги — всё прозрачно и под контролем.'
          ].map((quote) => (
            <div key={quote} className="rounded-2xl bg-white p-6 text-slate-700 shadow-md">
              <p className="text-sm">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
