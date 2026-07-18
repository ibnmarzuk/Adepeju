interface FooterProps {
  isTrueBlack: boolean;
  onToggleTrueBlack: () => void;
}

export function Footer({ isTrueBlack, onToggleTrueBlack }: FooterProps) {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-brand-graphite bg-brand-black text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-serif text-brand-white text-lg">Adepeju<span className="text-brand-gold">.</span></span>
      </div>
      
      {/* High-Contrast OLED Toggle */}
      <div className="flex items-center justify-center">
        <button
          onClick={onToggleTrueBlack}
          className="group flex items-center gap-3 px-3 py-1.5 border border-brand-graphite hover:border-brand-gold bg-brand-black hover:bg-brand-slate transition-all duration-300 rounded-none focus:outline-none relative"
          title="Toggle OLED True Black Mode"
        >
          {/* Corner registration marks */}
          <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-brand-graphite group-hover:border-brand-gold/60" />
          <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-brand-graphite group-hover:border-brand-gold/60" />

          <span className="font-mono text-[9px] tracking-widest text-brand-gray-muted group-hover:text-brand-white uppercase transition-colors">
            OLED Contrast
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isTrueBlack ? 'bg-brand-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]' : 'bg-brand-graphite'}`} />
            <span className="font-mono text-[9px] tracking-wider text-brand-white uppercase">
              {isTrueBlack ? 'ON' : 'OFF'}
            </span>
          </div>
        </button>
      </div>
      
      <div className="font-mono text-[10px] tracking-[0.2em] text-brand-gray-muted uppercase">
        © {new Date().getFullYear()} Adepeju Adedamola. All Rights Reserved.
      </div>
    </footer>
  );
}
