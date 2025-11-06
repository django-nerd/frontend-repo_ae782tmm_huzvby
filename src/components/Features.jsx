import { motion } from 'framer-motion';
import { MessageCircle, PenTool, BarChart, ArrowRight } from 'lucide-react';

const card = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

export default function Features() {
  return (
    <section className="relative w-full bg-[#1C1B29] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,198,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          Что делает сервис
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            custom={0}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-[0_0_40px_rgba(0,0,0,0.15)] backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00FFC6]/15">
              <MessageCircle className="h-5 w-5 text-[#00FFC6]" />
            </div>
            <h3 className="text-white font-medium">Отвечает клиентам автоматически</h3>
            <p className="mt-1 text-sm text-[#A3A3B2]">Моментальный ответ 24/7 в Telegram и VK.</p>
          </motion.div>

          <motion.div
            custom={1}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-[0_0_40px_rgba(0,0,0,0.15)] backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00FFC6]/15">
              <PenTool className="h-5 w-5 text-[#00FFC6]" />
            </div>
            <h3 className="text-white font-medium">Публикует контент</h3>
            <p className="mt-1 text-sm text-[#A3A3B2]">Генерирует тексты и постит в соцсети без вашего участия.</p>
          </motion.div>

          <motion.div
            custom={2}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-[0_0_40px_rgba(0,0,0,0.15)] backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00FFC6]/15">
              <BarChart className="h-5 w-5 text-[#00FFC6]" />
            </div>
            <h3 className="text-white font-medium">Присылает отчёты</h3>
            <p className="mt-1 text-sm text-[#A3A3B2]">Ежедневная статистика лидов и активности.</p>
          </motion.div>
        </div>

        {/* Industries slider */}
        <div className="mt-12">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-white/90 text-lg">Кому это нужно</h3>
            <a href="#cta" className="inline-flex items-center gap-1 text-[#00FFC6] hover:opacity-90 text-sm">
              Попробовать <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="no-scrollbar overflow-x-auto [scroll-snap-type:x_mandatory]">
            <div className="flex gap-4 min-w-max">
              {[
                { emoji: '💇\u200d♀️', title: 'Салоны красоты', text: 'Чтобы ни одна запись не потерялась' },
                { emoji: '🚗', title: 'Автосервисы', text: 'Чтобы не отвечать вручную ночью' },
                { emoji: '🏫', title: 'Онлайн-курсы', text: 'Чтобы бот собирал заявки' },
                { emoji: '🛍️', title: 'Магазины и доставка', text: 'Быстрые ответы клиентам' },
                { emoji: '📱', title: 'SMM-агентства', text: 'Чтобы контент постился сам' }
              ].map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="[scroll-snap-align:start] w-72 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90"
                >
                  <div className="text-2xl">{it.emoji}</div>
                  <div className="mt-2 font-medium text-white">{it.title}</div>
                  <div className="mt-1 text-sm text-[#A3A3B2]">{it.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
