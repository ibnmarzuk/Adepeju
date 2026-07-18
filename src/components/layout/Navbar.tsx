import * as motion from "motion/react-client";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-8 md:px-10 backdrop-blur-md bg-brand-black/80"
    >
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-1">Adepeju Adedamola</span>
      </div>
      <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-widest font-medium text-brand-white mt-1">
        <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
        <a href="#projects" className="hover:text-brand-gold transition-colors">Portfolio</a>
        <a href="#expertise" className="hover:text-brand-gold transition-colors">Expertise</a>
        <a href="#process" className="hover:text-brand-gold transition-colors">Process</a>
        <a href="#contact" className="text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-white transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
}
