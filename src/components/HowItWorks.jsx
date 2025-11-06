import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="how" className="relative w-full bg-[#1C1B29] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          Как это работает
        </motion.h2>

        {/* Flow 1 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {[
            { title: 'Клиент пишет', text: 'Сообщение прилетает в чат', color: '#00FFC6' },
            { title: 'Бот отвечает', text: 'Мгновенно и по сценарию', color: '#7C6BFF' },
            { title: 'Данные сохраняются', text: 'Лид фиксируется, ничего не теряется', color: '#FFB86B' }
          ].map((step, i) => (
            <motion.div key={step.title} variants={item} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <div className="mb-3 h-1.5 w-16 rounded-full" style={{ backgroundColor: step.color }} />
              <div className="font-medium text-white">{step.title}</div>
              <div className="mt-1 text-sm text-[#A3A3B2]">{step.text}</div>
              {i < 2 && (
                <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-transparent to-white/20 md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Flow 2 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {[
            { title: 'Контент‑план', text: 'Темы и рубрики на неделю', color: '#00FFC6' },
            { title: 'Нейросеть пишет пост', text: 'Тональность под ваш бренд', color: '#7C6BFF' },
            { title: 'Пост выходит сам', text: 'Публикация по расписанию', color: '#FFB86B' }
          ].map((step, i) => (
            <motion.div key={step.title} variants={item} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <div className="mb-3 h-1.5 w-16 rounded-full" style={{ backgroundColor: step.color }} />
              <div className="font-medium text-white">{step.title}</div>
              <div className="mt-1 text-sm text-[#A3A3B2]">{step.text}</div>
              {i < 2 && (
                <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-transparent to-white/20 md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Daily report */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
        >
          Каждый день — отчёт в Telegram
          <ArrowRight className="h-4 w-4 text-[#00FFC6]" />
        </motion.div>
      </div>
    </section>
  );
}
