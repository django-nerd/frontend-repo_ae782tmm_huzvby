import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] } })
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#1C1B29]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft radial glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,198,0.18),rgba(28,27,41,0.1)_40%,rgba(28,27,41,1)_80%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-balance font-[600] leading-tight text-white md:text-6xl text-4xl"
        >
          Ваш бизнес работает 24/7 — с умным Автопомощником.
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-[#A3A3B2]"
        >
          Система на базе нейросетей, которая отвечает клиентам, публикует контент и экономит ваше время.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#00FFC6] px-6 py-3 text-[#1C1B29] font-medium shadow-[0_0_30px_rgba(0,255,198,0.35)] transition-transform duration-300 hover:scale-[1.02]"
          >
            Попробовать бесплатно
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Play className="h-4 w-4 text-[#00FFC6]" />
            Посмотреть демо
          </a>
        </motion.div>

        {/* subtle instruction text */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-6 text-xs text-white/50"
        >
          Инновации • Доверие • Простота
        </motion.p>
      </div>

      {/* floating gradient orbs */}
      <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,198,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.25),transparent_60%)] blur-3xl" />
    </section>
  );
}
