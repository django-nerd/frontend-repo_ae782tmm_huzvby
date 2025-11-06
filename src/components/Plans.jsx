import React from 'react';

const plans = [
  {
    name: 'Start',
    price: '0₽',
    period: '7 дней',
    features: ['Базовые ответы', 'Шаблоны писем', '1 интеграция']
  },
  {
    name: 'Growth',
    price: '9 900₽',
    period: 'мес',
    features: ['Расширенные сценарии', 'Ежедневные отчёты', '3 интеграции']
  },
  {
    name: 'Scale',
    price: '29 900₽',
    period: 'мес',
    features: ['Команда', 'SLA 99.9%', 'Приоритетная поддержка']
  }
];

export default function Plans() {
  return (
    <section id="pricing" className="bg-[#1C1B29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-[#12111C] p-6">
              <div className="flex items-baseline gap-2">
                <h3 className="text-white text-lg font-medium">{p.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-semibold text-white">{p.price}</span>
                <span className="text-white/50">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex h-10 px-4 rounded-md bg-white text-[#1C1B29] font-medium hover:bg-white/90 transition-colors">Выбрать</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
