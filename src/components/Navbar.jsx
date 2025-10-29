import { useState, useMemo } from 'react';
import { Menu, X, Download, Linkedin, Mail, Phone } from 'lucide-react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const resumeText = useMemo(() => `Name: Lohit Satya Sai Kuntamukkala\nRole: Flutter Developer | Photography | Prompt Engineer | Cursor AI Expert\nPhone: +91 83415 90211\nEmail: kuntamukkala2017@gmail.com\nLinkedIn: www.linkedin.com/in/thisislohit\nLocation: Hyderabad, Telangana, India\n\nProfessional Summary\nFlutter Developer and Prompt Engineer with 2+ years of hands-on experience in building and maintaining scalable cross-platform mobile apps for the hospitality and service industries. Skilled in developing SaaS-based apps, integrating third-party SDKs (Stripe, Firebase), and working with native Android code. Experienced in using AI-powered tools like Cursor AI to enhance productivity and automate development workflows. Currently expanding into full-stack development with Node.js, Express.js, and SQL to become a complete Flutter Full Stack Developer. Strong collaborator with proven expertise in performance improvement, debugging, and delivering high-quality user experiences.\n\nSkills\nMobile Development: Flutter 3, Dart, Android (Java), iOS\nState Management: BLoC, Provider, GetX\nBackend Development: Node.js, Express.js\nDatabase: SQL (Basics), Hive, Local Sync Systems\nReal-time & Networking: WebSockets, REST APIs, Dio\nPayments: Stripe SDK (Tap-to-Pay, Terminal Pairing), Apple Pay, Google Pay\nThird-party Integrations: Firebase (Auth, Firestore, FCM), Deep linking, Platform Channels\nAI Tools & Automation: Prompt Engineering, Cursor AI Expert\nDebugging & Optimization: Crash resolutions, bottleneck fixes\nTools: Git, GitHub, Android Studio, VS Code\nBasic CI/CD knowledge\n\nWork Experience\nFlutter Developer — Abilio IT Solutions (Aug 2023 – Present)\n• Clean Architecture, Flutter BLoC, modular development, reviews & optimization\n\nFlutter Developer — FIN Infocom (Apr 2021 – Jul 2023)\n• Grafterr SaaS apps across Android/iOS/Windows & custom devices (Stripe S700)\n• Migrated apps to Flutter 3, Stripe Tap-to-Pay, native Android integrations\n• Performance optimization, offline-first (Hive), real-time sync (REST/WebSockets)\n\nProjects\n1) Grafterr POS System — Flutter 3, BLoC, Provider, Hive, Firebase, REST, Java\n2) Grafterr GO! Payment App — Flutter 3, BLoC, Stripe SDK, Java, REST\n3) Collection Display App — Flutter 3, GetX, Dio, Firebase, Hive, FCM\n\nEducation\nB.Tech CSE — Krishna University College of Engineering and Technology (2018–2022)`, []);

  const resumeHref = `data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`;

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0D1117]/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#8A2BE2] shadow-[0_0_20px_#00E5FF]" />
          <div className="leading-tight">
            <p className="text-white font-semibold">Lohit Satya Sai</p>
            <p className="text-xs text-white/60">Flutter Developer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="text-white/70 hover:text-white transition-colors"
            >
              {s.label}
            </button>
          ))}
          <a
            href={resumeHref}
            download="Lohit_Satya_Sai_Kuntamukkala_Resume.txt"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-colors"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <a
            href="mailto:kuntamukkala2017@gmail.com"
            className="text-white/70 hover:text-white"
            aria-label="Email"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+918341590211"
            className="text-white/70 hover:text-white"
            aria-label="Phone"
            title="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/thisislohit"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0D1117]/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="text-left text-white/80 hover:text-white py-1"
              >
                {s.label}
              </button>
            ))}
            <a
              href={resumeHref}
              download="Lohit_Satya_Sai_Kuntamukkala_Resume.txt"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-colors w-fit"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:kuntamukkala2017@gmail.com" className="text-white/70 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918341590211" className="text-white/70 hover:text-white">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/thisislohit" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
