import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } })
};

const testimonials = [
  {
    name: 'Анна, салон красоты',
    quote: 'Теперь не теряем клиентов даже ночью — бот всё сохраняет.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Игорь, автосервис',
    quote: 'Посты выходят сами, у меня освободилось 5 часов в неделю.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Мария, онлайн-школа',
    quote: 'Ответы мгновенные, заявки не теряются — продажи растут.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop'
  }
];

export default function CTAAndTrust() {
  return (
    <section id="cta" className="relative w-full bg-[#1C1B29] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Why profitable */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 text-white"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Почему это выгодно</h3>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-2 text-xs uppercase tracking-wide text-white/60">До</div>
                  <ul className="space-y-1 text-[#A3A3B2]">
                    <li>— клиенты ждут ответа</li>
                    <li>— посты не выходят</li>
                    <li>— теряются заявки</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-2 text-xs uppercase tracking-wide text-[#00FFC6]">После</div>
                  <ul className="space-y-1 text-[#E7FFE3]">
                    <li>— мгновенные ответы</li>
                    <li>— соцсети живут сами</li>
                    <li>— отчётность без менеджера</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 max-w-md text-sm text-[#A3A3B2]">Попробуйте Автопомощник — ваш бизнес будет работать без пауз.</p>
              <a
                href="#form"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#00FFC6] px-6 py-3 text-[#1C1B29] font-medium shadow-[0_0_30px_rgba(0,255,198,0.35)] transition-transform hover:scale-[1.02]"
              >
                Начать сейчас
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Testimonials */}
            <div className="grid gap-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  custom={i + 1}
                  variants={fade}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm text-white/90">{t.quote}</p>
                    <div className="mt-1 text-xs text-white/50">{t.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final CTA with form */}
        <motion.div
          id="form"
          variants={fade}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#5B3CF5] via-[#1C1B29] to-[#00FFC6]/50 opacity-60" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Хотите, чтобы ваш бизнес работал без вас?</h3>
              <p className="mt-2 text-sm text-white/70">Оставьте контакты — отправим демо и подключим пилот.</p>
            </div>

            <form className="grid gap-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-sm focus:border-[#00FFC6]"
                  required
                />
                <input
                  type="text"
                  placeholder="Telegram (@username)"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-sm focus:border-[#00FFC6]"
                  required
                />
                <input
                  type="text"
                  placeholder="Город"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-sm focus:border-[#00FFC6]"
                />
              </div>
              <button
                type="button"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#00FFC6] px-6 py-3 text-[#1C1B29] font-medium shadow-[0_0_30px_rgba(0,255,198,0.35)] transition-transform hover:scale-[1.02]"
                onClick={() => window.alert('Спасибо! Мы свяжемся в Telegram.')}
              >
                Попробовать бесплатно
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
