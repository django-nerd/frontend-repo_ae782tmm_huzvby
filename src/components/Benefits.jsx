import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className="relative w-full bg-[#1C1B29] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,198,0.06),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          Почему это выгодно
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <div className="text-white/70 mb-3">До</div>
            <ul className="space-y-2 text-[#A3A3B2]">
              <li>— клиенты ждут ответа</li>
              <li>— посты не выходят</li>
              <li>— теряются заявки</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <div className="text-white mb-3">После</div>
            <ul className="space-y-2 text-white/90">
              <li>— мгновенные ответы</li>
              <li>— соцсети живут сами</li>
              <li>— отчётность без менеджера</li>
            </ul>
          </div>
        </div>

        <div id="demo" className="mt-10 rounded-2xl border border-[#00FFC6]/20 bg-gradient-to-r from-[#172026] to-[#1C1B29] p-6 text-white/90">
          <div className="text-lg font-medium">Попробуйте Автопомощник — ваш бизнес будет работать без пауз.</div>
        </div>
      </div>
    </section>
  );
}
