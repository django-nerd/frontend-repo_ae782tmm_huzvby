import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function TestimonialsCTA() {
  return (
    <section id="cta" className="relative w-full bg-[#1C1B29] pb-20">
      {/* Testimonials */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-2">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          Отзывы и доверие
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              name: 'Анна, салон красоты',
              text: 'Теперь не теряем клиентов даже ночью — бот всё сохраняет.'
            },
            {
              name: 'Илья, SMM-агентство',
              text: 'Посты выходят сами, у меня освободилось 5 часов в неделю.'
            }
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90"
            >
              <div className="text-white/90">“{t.text}”</div>
              <div className="mt-3 text-sm text-[#A3A3B2]">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Block */}
      <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#5C3AFF] to-[#00FFC6] p-0.5">
          <div className="rounded-[calc(1.5rem-2px)] bg-[#1C1B29] p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Хотите, чтобы ваш бизнес работал без вас?
                </h3>
                <p className="mt-2 text-white/80">
                  Вы устали делать всё сами. Автопомощник отвечает, постит и напоминает. А вы занимаетесь делом.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-3 md:grid-cols-3"
              >
                <input
                  type="text"
                  placeholder="Имя"
                  className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00FFC6]/40"
                  required
                />
                <input
                  type="text"
                  placeholder="Telegram"
                  className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00FFC6]/40"
                  required
                />
                <input
                  type="text"
                  placeholder="Город"
                  className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00FFC6]/40"
                />
                <button
                  type="submit"
                  className="md:col-span-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00FFC6] px-5 py-3 font-medium text-[#1C1B29] shadow-[0_0_30px_rgba(0,255,198,0.35)] transition-transform duration-300 hover:scale-[1.01]"
                >
                  Попробовать бесплатно
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mx-auto mt-14 max-w-6xl px-6 text-center">
        <div className="text-white/80">Автопомощник для бизнеса</div>
        <div className="mt-1 text-xs text-[#A3A3B2]">Создан на базе n8n и OpenAI. © 2025</div>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
        >
          Написать в Telegram
        </a>
      </footer>
    </section>
  );
}
