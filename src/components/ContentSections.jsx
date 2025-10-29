import { motion } from 'framer-motion';
import { Smartphone, Database, Server, GitBranch, CreditCard, Globe, Bug, Mail, Linkedin, Phone } from 'lucide-react';
import { useMemo, useState } from 'react';

function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="mt-2 text-white/70"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function ContentSections() {
  const [activeCase, setActiveCase] = useState(null);

  const skills = useMemo(
    () => [
      { icon: Smartphone, title: 'Mobile', items: ['Flutter 3', 'Dart', 'Android (Java)', 'iOS'] },
      { icon: GitBranch, title: 'State', items: ['BLoC', 'Provider', 'GetX'] },
      { icon: Server, title: 'Backend', items: ['Node.js', 'Express.js'] },
      { icon: Database, title: 'Data', items: ['SQL (Basics)', 'Hive', 'Local Sync'] },
      { icon: Globe, title: 'Networking', items: ['REST APIs', 'WebSockets', 'Dio'] },
      { icon: CreditCard, title: 'Payments', items: ['Stripe SDK', 'Apple Pay', 'Google Pay'] },
      { icon: Bug, title: 'Debug & Tools', items: ['Crash fixes', 'Perf tuning', 'Git/GitHub'] },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        key: 'grafterr-pos',
        title: 'Grafterr POS System',
        stack: 'Flutter 3, BLoC, Provider, Hive, Firebase, REST API, Native Android (Java)',
        bullets: [
          'Full POS with menu management, order & payment workflows',
          'Offline-first with real-time sync',
          'Supported Bluetooth/LAN/USB printers',
        ],
      },
      {
        key: 'grafterr-go',
        title: 'Grafterr GO! Payment App',
        stack: 'Flutter 3, BLoC, Stripe SDK, Native Java, REST API',
        bullets: [
          'Tap-to-Pay & terminal pairing with Stripe',
          'Improved payment reliability and performance',
        ],
      },
      {
        key: 'collection-display',
        title: 'Collection Display App (Independent)',
        stack: 'Flutter 3, GetX, Dio, Firebase, Hive, FCM',
        bullets: [
          'Real-time order display + offline sync',
          'Full app lifecycle owned independently',
        ],
      },
    ],
    []
  );

  return (
    <>
      <Section id="about" title="About me" subtitle="Futuristic, performance-driven, and product focused">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.p
            className="text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Flutter Developer and Prompt Engineer with 2+ years of hands-on experience in building and maintaining scalable cross-platform mobile apps for the hospitality and service industries. Skilled in developing SaaS-based apps, integrating third-party SDKs (Stripe, Firebase), and working with native Android code.
            I use AI-powered tooling like Cursor AI to accelerate development and automate workflows. I'm currently expanding into full-stack development with Node.js, Express.js, and SQL to become a complete Flutter Full Stack Developer.
          </motion.p>
          <motion.div
            className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-2 text-white/80 text-sm">
              <li><span className="text-white">Name:</span> Lohit Satya Sai Kuntamukkala</li>
              <li><span className="text-white">Role:</span> Flutter Developer | Photography | Prompt Engineer | Cursor AI Expert</li>
              <li><span className="text-white">Phone:</span> +91 83415 90211</li>
              <li><span className="text-white">Email:</span> <a className="underline hover:text-white" href="mailto:kuntamukkala2017@gmail.com">kuntamukkala2017@gmail.com</a></li>
              <li><span className="text-white">LinkedIn:</span> <a className="underline hover:text-white" href="https://www.linkedin.com/in/thisislohit" target="_blank" rel="noreferrer">www.linkedin.com/in/thisislohit</a></li>
              <li><span className="text-white">Location:</span> Hyderabad, Telangana, India</li>
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section id="experience" title="Work Experience">
        <div className="grid gap-4">
          {[{
            role: 'Flutter Developer',
            company: 'Abilio IT Solutions',
            period: 'August 2023 – Present',
            points: [
              'Working on the Sevaki Project using Clean Architecture and Flutter BLoC.',
              'Building modular and scalable features with maintainability and testability.',
              'Driving reviews, architecture decisions, and performance optimizations.',
            ],
          }, {
            role: 'Flutter Developer',
            company: 'FIN Infocom Pvt Ltd, Nagole, Hyderabad',
            period: 'April 2021 – July 2023 (2 years 4 months)',
            points: [
              'Developed and maintained Grafterr’s SaaS hospitality apps for Android/iOS/Windows and Stripe S700.',
              'Led migration to Flutter 3 with better stability, performance, and features.',
              'Integrated Stripe Tap‑to‑Pay, paired devices via native Android code.',
              'Supported Grafterr GO!: fixing production bugs and shipping features continuously.',
              'Optimized performance, offline-first (Hive), and real-time sync (REST/WebSockets).',
              'Built real-time modules for live orders, payments, and multi-device sync.',
            ],
          }].map((exp, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.07] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-white font-semibold">{exp.role} • {exp.company}</h3>
                <p className="text-sm text-white/60">{exp.period}</p>
              </div>
              <ul className="mt-3 list-disc list-inside text-white/80 space-y-1">
                {exp.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical Skills" subtitle="Interactive, categorized skill map">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.15),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(138,43,226,0.15),transparent_45%)]" />
              <div className="relative flex items-start gap-3">
                <s.icon className="w-6 h-6 text-[#00E5FF]" />
                <div>
                  <h4 className="text-white font-semibold">{s.title}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Portfolio" subtitle="Case studies with hover micro-interactions">
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, idx) => (
            <motion.button
              key={p.key}
              onClick={() => setActiveCase(p)}
              whileHover={{ y: -6 }}
              className="text-left rounded-xl border border-white/10 bg-white/5 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="h-36 bg-gradient-to-br from-[#00E5FF]/20 to-[#8A2BE2]/20 group-hover:from-[#00E5FF]/30 group-hover:to-[#8A2BE2]/30 transition-colors" />
              <div className="p-5">
                <h4 className="text-white font-semibold">{p.title}</h4>
                <p className="mt-1 text-xs text-white/60">{p.stack}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-[#00E5FF]">View Project</div>
              </div>
            </motion.button>
          ))}
        </div>

        {activeCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70" onClick={() => setActiveCase(null)} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative max-w-2xl w-full rounded-2xl bg-[#0D1117] border border-white/10 p-6 shadow-2xl"
            >
              <button
                onClick={() => setActiveCase(null)}
                className="absolute right-4 top-4 text-white/60 hover:text-white"
                aria-label="Close"
              >✕</button>
              <h3 className="text-white text-xl font-semibold">{activeCase.title}</h3>
              <p className="mt-1 text-sm text-white/60">{activeCase.stack}</p>
              <ul className="mt-4 list-disc list-inside text-white/80 space-y-1">
                {activeCase.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </Section>

      <Section id="testimonials" title="Testimonials" subtitle="What collaborators say">
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
              whileHover={{ y: -4 }}
            >
              <p className="text-white/80 italic">“Lohit delivers robust Flutter features with a strong eye for performance and clean code. A great collaborator.”</p>
              <p className="mt-3 text-white/60 text-sm">— Colleague, Product Team</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's build something exceptional">
        <div className="grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const name = form.get('name');
              const email = form.get('email');
              const message = form.get('message');
              const subject = encodeURIComponent('Portfolio contact via website');
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:kuntamukkala2017@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="rounded-xl bg-white/5 border border-white/10 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm text-white/70">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg bg-[#0A0F14] border border-white/10 px-3 py-2 text-white outline-none focus:border-[#00E5FF]" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-white/70">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg bg-[#0A0F14] border border-white/10 px-3 py-2 text-white outline-none focus:border-[#00E5FF]" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-white/70">Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 w-full rounded-lg bg-[#0A0F14] border border-white/10 px-3 py-2 text-white outline-none focus:border-[#00E5FF]" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#00E5FF] text-[#0D1117] font-semibold shadow-[0_0_25px_#00E5FF] hover:shadow-[0_0_40px_#00E5FF] transition-shadow">Send</button>
            </div>
          </form>
          <div className="rounded-xl bg-white/5 border border-white/10 p-6">
            <h4 className="text-white font-semibold">Direct links</h4>
            <div className="mt-4 flex flex-col gap-3 text-white/80">
              <a href="mailto:kuntamukkala2017@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> kuntamukkala2017@gmail.com</a>
              <a href="tel:+918341590211" className="inline-flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> +91 83415 90211</a>
              <a href="https://www.linkedin.com/in/thisislohit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="w-4 h-4" /> linkedin.com/in/thisislohit</a>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold">Education</h4>
              <p className="text-white/80 mt-2">B.Tech in Computer Science & Engineering<br/>Krishna University College of Engineering and Technology (2018 – 2022)</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
