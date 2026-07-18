import * as motion from "motion/react-client";
import profilePic from "../../assets/images/adepoju.png";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-12 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black pointer-events-none" />
      
      {/* Cinematic Metadata Details */}
      <div className="absolute top-32 right-10 p-4 font-mono text-[9px] text-brand-gray-muted pointer-events-none hidden md:block">
        ISO 800 / f/2.8<br/>
        24mm / 1/48s<br/>
        4K DCI / 24FPS
      </div>
      <div className="absolute bottom-10 left-10 p-4 font-mono text-[9px] text-brand-gray-muted pointer-events-none uppercase tracking-widest hidden md:block">
        REC 00:00
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-end">
          
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-6 order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] leading-[0.85] font-serif italic mb-2 tracking-tight text-brand-white"
            >
              Adepeju<br/>Adedamola
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-md text-base sm:text-lg text-brand-gray-light leading-relaxed font-light mt-4"
            >
              Multidisciplinary creative leader specializing in <span className="text-brand-white">cinematic storytelling</span> and high-impact brand strategy for global entities.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border border-brand-gold text-brand-gold text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold hover:text-brand-black transition-colors text-center"
              >
                Book Strategy Call
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-brand-white text-brand-black text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gray-light transition-colors text-center"
              >
                View Showcase
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-end pb-4 order-2 relative"
          >
            <div className="w-full max-w-sm aspect-[4/5] bg-brand-slate border border-brand-graphite relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden group">
              {/* Profile Image */}
              <img 
                src={profilePic} 
                alt="Adepeju Profile" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Camera view boundary markers */}
              <div className="absolute top-4 left-4 w-4 h-[1px] bg-brand-gold/60 z-10" />
              <div className="absolute top-4 left-4 w-[1px] h-4 bg-brand-gold/60 z-10" />
              <div className="absolute top-4 right-4 w-4 h-[1px] bg-brand-gold/60 z-10" />
              <div className="absolute top-4 right-4 w-[1px] h-4 bg-brand-gold/60 z-10" />
              <div className="absolute bottom-4 left-4 w-4 h-[1px] bg-brand-gold/60 z-10" />
              <div className="absolute bottom-4 left-4 w-[1px] h-4 bg-brand-gold/60 z-10" />
              <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-brand-gold/60 z-10" />
              <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-brand-gold/60 z-10" />

              {/* Positioned at bottom right to avoid overlapping burned-in text on bottom left */}
              <div className="absolute bottom-6 right-6 z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex flex-col items-end">
                <span className="text-[10px] font-mono text-brand-white uppercase block mb-1 tracking-widest">PROJ_01_HERO.ari</span>
                <div className="w-12 h-[1px] bg-brand-gold"></div>
              </div>
              
              <div className="absolute top-6 right-6 z-20 bg-brand-black/80 px-2 py-0.5 border border-brand-graphite backdrop-blur-sm">
                <span className="text-[8px] font-mono text-brand-gold uppercase tracking-widest">APPROVED // FINAL CUT</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-10">
                 {/* Rule of Thirds Center Cross */}
                 <div className="w-8 h-[1px] bg-brand-gold"></div>
                 <div className="h-8 w-[1px] bg-brand-gold absolute"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Lower Section Stats embedded in Hero container to match layout flow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 lg:mt-24 pt-10 border-t border-brand-graphite grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-16"
        >
          <div className="col-span-2">
            <span className="block text-[10px] uppercase tracking-widest text-brand-gray-muted mb-2 font-mono italic">Selected Clients</span>
            <div className="flex flex-col gap-1 text-sm font-serif italic text-brand-white">
              <span>Rhiva x Airbills</span>
              <span>Xara x Superteam NG</span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <span className="block text-[10px] uppercase tracking-widest text-brand-gray-muted mb-2 font-mono">Experience</span>
            <div className="text-3xl font-serif text-brand-gold">5+ <span className="text-xs align-top uppercase text-brand-gray-muted ml-1">Years</span></div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <span className="block text-[10px] uppercase tracking-widest text-brand-gray-muted mb-2 font-mono">Impact</span>
            <div className="text-3xl font-serif text-brand-gold">70+ <span className="text-xs align-top uppercase text-brand-gray-muted ml-1">Projects</span></div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Cinematic Annotation */}
      <div className="absolute left-[45%] top-[25%] items-center gap-4 opacity-40 hidden lg:flex pointer-events-none">
        <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
        <div className="h-[1px] w-24 bg-brand-graphite"></div>
        <span className="text-[9px] font-mono text-brand-gray-muted uppercase tracking-tighter">[SCENE_01 // VISUAL DIRECTION]</span>
      </div>
    </section>
  );
}
