export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-brand-graphite bg-brand-black text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-serif text-brand-white text-lg">Adepeju<span className="text-brand-gold">.</span></span>
      </div>
      
      <div className="font-mono text-[10px] tracking-[0.2em] text-brand-gray-muted uppercase">
        © {new Date().getFullYear()} Adepeju Adedamola. All Rights Reserved.
      </div>
    </footer>
  );
}
