import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-brand-graphite bg-brand-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          number="06" 
          title="Initiate Project" 
          subtitle="Partner with a world-class creative strategist. Schedule a discovery call to discuss architecture, aesthetics, and impact."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <p className="text-xl font-serif text-brand-white leading-relaxed max-w-md">
              "Every decision must reflect the quality of a world-class creative agency."
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:adepeju.ade@gmail.com" className="group flex items-center justify-between border border-brand-graphite p-6 hover:border-brand-gold transition-colors bg-brand-black">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-gray-light group-hover:text-brand-white">Email Directly</span>
                <ArrowRight className="w-4 h-4 text-brand-gray-muted group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
              </a>
              <a href="#" className="group flex items-center justify-between border border-brand-graphite p-6 hover:border-brand-gold transition-colors bg-brand-black">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-gray-light group-hover:text-brand-white">Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4 text-brand-gray-muted group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-brand-graphite bg-brand-black p-8 md:p-12"
          >
            <div className="font-mono text-xs tracking-widest text-brand-gold uppercase mb-8 pb-4 border-b border-brand-graphite">
              Client Intake Framework
            </div>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-brand-gray-muted uppercase">Full Name</label>
                <input type="text" className="bg-transparent border-b border-brand-graphite py-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-brand-gray-muted uppercase">Organization</label>
                <input type="text" className="bg-transparent border-b border-brand-graphite py-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="Enter company name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] tracking-widest text-brand-gray-muted uppercase">Project Scope</label>
                <textarea rows={3} className="bg-transparent border-b border-brand-graphite py-2 text-brand-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Briefly describe your objectives..." />
              </div>
              <button type="submit" className="mt-4 bg-brand-white text-brand-black font-mono text-xs tracking-widest uppercase py-4 hover:bg-brand-gold transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
