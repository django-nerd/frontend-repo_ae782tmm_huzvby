import React from 'react';

const plans = [
  {
    name: 'Start',
    badge: 'Бесплатно 7 дней',
    price: '0₽',
    period: '7 дней',
    cta: 'Начать тест',
    popular: false,
    features: ['Базовые ответы', 'Шаблоны писем', '1 интеграция']
  },
  {
    name: 'Growth',
    badge: 'Рекомендовано',
    price: '9 900₽',
    period: 'мес',
    cta: 'Выбрать Growth',
    popular: true,
    features: ['Расширенные сценарии', 'Ежедневные отчёты', '3 интеграции']
  },
  {
    name: 'Scale',
    badge: 'Для команд',
    price: '29 900₽',
    period: 'мес',
    cta: 'Связаться с нами',
    popular: false,
    features: ['Команда', 'SLA 99.9%', 'Приоритетная поддержка']
  }
];

export default function Plans() {
  return (
    <section id="pricing" className="bg-[#0B0A10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Тарифы, которые растут вместе с вами</h2>
          <p className="mt-2 text-white/70">Начните бесплатно и переходите на расширенные возможности, когда будете готовы.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-6 transition-colors ${
                p.popular
                  ? 'border-emerald-300/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02]'
                  : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-medium">{p.name}</h3>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border ${
                  p.popular ? 'border-emerald-300/50 text-emerald-200' : 'border-white/15 text-white/60'
                }`}>
                  {p.badge}
                </span>
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
              <a
                href="#cta"
                className={`mt-6 inline-flex h-10 items-center justify-center rounded-md px-4 font-medium transition-colors w-full ${
                  p.popular ? 'bg-emerald-300 text-[#0B0A10] hover:bg-emerald-200' : 'border border-white/15 text-white/90 hover:border-white/25'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/50">Все тарифы можно отменить в любой момент. НДС включён.</p>
      </div>
    </section>
  );
}
