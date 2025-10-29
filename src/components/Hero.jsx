import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 opacity-60">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0D1117]/30 via-[#0D1117]/60 to-[#0D1117]" />

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lohit Satya Sai Kuntamukkala
          </motion.h1>
          <motion.p
            className="mt-3 text-lg md:text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Flutter Developer | Photography | Prompt Engineer | Cursor AI Expert
          </motion.p>
          <motion.div
            className="mt-4 flex items-center gap-3 text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MapPin className="w-4 h-4" /> Hyderabad, Telangana, India
          </motion.div>
          <motion.p
            className="mt-6 text-white/80 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            I design and build high-performance, cross-platform mobile experiences. I specialize in Flutter 3, state management at scale, and payment workflows with Stripe. I love crafting clean architectures and automating workflows with AI tools.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#00E5FF] text-[#0D1117] font-semibold shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_40px_#00E5FF] transition-shadow"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#8A2BE2]/20 text-white border border-[#8A2BE2]/60 hover:bg-[#8A2BE2]/30 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <div className="relative h-[380px] md:h-[520px]" aria-hidden="true">
          <div className="absolute -inset-8 rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.25),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(138,43,226,0.25),transparent_45%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
