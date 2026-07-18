import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

// Simple count up hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

function StatItem({ label, value, suffix = "", index }: { label: string, value: number, suffix?: string, index: number }) {
  const [isInView, setIsInView] = useState(false);
  const count = useCountUp(isInView ? value : 0, 2500);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col border-t border-brand-graphite pt-6 relative"
    >
      <div className="absolute top-0 right-0 w-1 h-1 bg-brand-graphite -mt-[2px]" />
      <div className="absolute top-0 left-0 w-1 h-1 bg-brand-graphite -mt-[2px]" />
      
      <span className="font-mono text-[9px] tracking-widest text-brand-gray-muted uppercase mb-4">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-serif text-brand-gold">{count}</span>
        <span className="text-xl md:text-2xl font-serif text-brand-gold">{suffix}</span>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 border-t border-brand-graphite bg-brand-black relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-rule-of-thirds opacity-10 pointer-events-none" />
      <div className="absolute right-10 top-20 bottom-20 w-[1px] bg-brand-graphite/30 pointer-events-none hidden lg:block" />
      <div className="absolute left-10 top-20 bottom-20 w-[1px] bg-brand-graphite/30 pointer-events-none hidden lg:block" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          number="01" 
          title="The Mind Behind The Work" 
          subtitle="Understanding the strategic foundation that drives the cinematic visuals and global brand storytelling."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mt-12">
          
          {/* Left Column: Identity & Philosophy */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between relative">
            <div className="absolute -left-6 top-2 bottom-2 w-[1px] bg-brand-graphite/50 hidden md:block" />
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-serif text-brand-white leading-relaxed italic"
            >
              "A cinematic storyteller helping ambitious entities communicate with clarity, precision, and undeniable impact."
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 lg:mt-32 border-l border-brand-gold/30 pl-6 py-2 relative"
            >
              <div className="absolute top-0 -left-[1.5px] w-[3px] h-4 bg-brand-gold" />
              <p className="font-mono text-[10px] tracking-widest text-brand-gray-muted uppercase mb-4">DIRECTOR'S NOTES // 01</p>
              <p className="text-brand-gray-light leading-relaxed font-light text-sm md:text-base">
                Every creative decision must solve a communication problem before it attempts to solve an aesthetic one. True luxury in design and storytelling emerges from absolute restraint, not decoration.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column: Metrics */}
          <div className="col-span-1 lg:col-span-6 lg:col-start-7">
            <div className="font-mono text-[9px] tracking-widest text-brand-gray-muted uppercase mb-8 pb-4 border-b border-brand-graphite flex justify-between">
              <span>Verified Impact Metrics</span>
              <span>[ TIMELINE_METRICS ]</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              <StatItem label="Years of Experience" value={5} suffix="+" index={0} />
              <StatItem label="Global Campaigns" value={50} suffix="+" index={1} />
              <StatItem label="Audience Reach" value={240} suffix="M" index={2} />
              <StatItem label="Industry Awards" value={14} index={3} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
