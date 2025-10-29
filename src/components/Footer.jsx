export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Lohit Satya Sai Kuntamukkala. All rights reserved.</p>
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#8A2BE2] shadow-[0_0_20px_#8A2BE2]" />
      </div>
    </footer>
  );
}
