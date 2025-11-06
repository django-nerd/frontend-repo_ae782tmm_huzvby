import React from 'react';
import { MessageSquare, FileText, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Мгновенные ответы клиентам',
    desc: 'Единый тон, без ошибок и задержек. Встраивается в чат и почту.'
  },
  {
    icon: FileText,
    title: 'Контент за минуты',
    desc: 'Коммерческие предложения, посты и шаблоны на лету — без менеджера.'
  },
  {
    icon: BarChart3,
    title: 'Ежедневная аналитика',
    desc: 'Ключевые метрики в одном отчёте: лиды, конверсия, ответы.'
  }
];

export default function FeatureRows() {
  return (
    <section id="features" className="bg-[#12111C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-white/10 bg-[#1A1926] hover:bg-[#1D1C2A] transition-colors">
              <f.icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
