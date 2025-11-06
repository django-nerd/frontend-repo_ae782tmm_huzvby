import React from 'react';

export default function BenefitsFlow() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Почему вы теряете время и деньги</h2>
        <p className="mt-3 text-slate-600">Вы не успеваете отвечать вовремя. Соцсети молчат неделями. Рутинные задачи крадут часы и энергию.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <div className="text-sm font-medium text-slate-700">🤖 Решение — Автопомощник</div>
          <p className="mt-2 text-sm text-slate-600">Отвечает клиентам мгновенно — Telegram и VK 24/7.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <div className="text-sm font-medium text-slate-700">📰 Контент и постинг</div>
          <p className="mt-2 text-sm text-slate-600">Публикует посты автоматически — контент‑план + AI‑тексты.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
          <div className="text-sm font-medium text-slate-700">📊 Контроль и отчёты</div>
          <p className="mt-2 text-sm text-slate-600">Ежедневные отчёты и напоминания — статистика без менеджера.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">1️⃣ Клиент пишет → бот отвечает.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">2️⃣ Данные сохраняются в CRM / таблицу.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">3️⃣ Ежедневный отчёт и новые посты — без вашего участия.</p>
        </div>
      </div>
    </section>
  );
}
