import { useState } from "react";
import * as motion from "motion/react-client";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Portfolio" },
    { href: "#expertise", label: "Expertise" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact", highlight: true }
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-10 backdrop-blur-md bg-brand-black/80 border-b border-brand-graphite/20"
      >
        <div className="flex flex-col">
          <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold mb-1">
            Adepeju Adedamola
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-widest font-medium text-brand-white mt-1 italic font-serif">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className={
                link.highlight 
                  ? "text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-white transition-colors" 
                  : "hover:text-brand-gold transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="flex md:hidden text-brand-white hover:text-brand-gold transition-colors p-2 z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
      >
        <div className="absolute inset-0 bg-rule-of-thirds opacity-5 pointer-events-none" />
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl uppercase tracking-[0.2em] font-medium italic font-serif transition-colors ${
                  link.highlight 
                    ? "text-brand-gold border-b border-brand-gold/40 pb-2 hover:text-brand-white" 
                    : "text-brand-white hover:text-brand-gold"
                }`}
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer info in Mobile Menu */}
        <motion.div 
          variants={itemVariants} 
          className="absolute bottom-12 text-center flex flex-col gap-2"
        >
          <div className="w-8 h-[1px] bg-brand-gold/40 mx-auto mb-4"></div>
          <span className="text-[9px] font-mono text-brand-gray-muted uppercase tracking-widest">
            DIRECTOR'S HQ // VER 1.0
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}
