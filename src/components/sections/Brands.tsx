import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

// Simple count up hook for credibility metrics
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
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

function MetricItem({ label, value, suffix = "", index }: { label: string, value: number, suffix?: string, index: number }) {
  const [isInView, setIsInView] = useState(false);
  const count = useCountUp(isInView ? value : 0, 2500);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col border-l border-brand-graphite pl-4"
    >
      <span className="font-mono text-[9px] tracking-widest text-brand-gray-muted uppercase mb-2">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-serif text-brand-gold">{count}</span>
        <span className="text-lg font-serif text-brand-gold">{suffix}</span>
      </div>
    </motion.div>
  );
}

const BRANDS = [
  {
    name: "Rhiva",
    industry: "DeFi • Solana",
    specialization: "Liquidity Education",
    summary: "Produced educational content that simplified complex DeFi concepts into engaging visual stories for a Nigerian audience.",
    cta: "Explore Campaign",
    role: "Creative Director",
    year: "2023",
    outcome: "Increased User Understanding",
    tools: "Premiere Pro, After Effects"
  },
  {
    name: "Airbills",
    industry: "Fintech",
    specialization: "Crypto Payments • Product Demo",
    summary: "Created cinematic product demonstrations showcasing seamless crypto-to-naira payment experiences for modern users.",
    cta: "View Product Story",
    role: "Video Editor & Director",
    year: "2024",
    outcome: "Boosted Product Adoption",
    tools: "Cinematography, Editing"
  },
  {
    name: "Xara",
    industry: "Web3",
    specialization: "Feature Launch • Short Film",
    summary: "Developed narrative-driven launch content that transformed product features into compelling cinematic experiences.",
    cta: "Watch Launch Film",
    role: "Story Consultant",
    year: "2024",
    outcome: "Successful Launch Campaign",
    tools: "Narrative Strategy"
  },
  {
    name: "Bayse",
    industry: "Digital Brand",
    specialization: "Brand Storytelling • Product Marketing",
    summary: "Produced premium visual campaigns that strengthened brand positioning and communicated value with clarity.",
    cta: "Explore Brand Story",
    role: "Creative Strategist",
    year: "2023",
    outcome: "Elevated Brand Perception",
    tools: "Creative Direction"
  },
  {
    name: "Raenest",
    industry: "Fintech",
    specialization: "Documentary Production",
    summary: "Created documentary-style visual content highlighting how modern financial technology empowers remote professionals and global workers.",
    cta: "Watch Documentary",
    role: "Documentary Director",
    year: "2024",
    outcome: "Enhanced Brand Trust",
    tools: "Directing, Editing"
  },
  {
    name: "Superteam NG",
    industry: "Web3 Community",
    specialization: "Community • Event Coverage",
    summary: "Captured high-energy community events while creating content that amplified engagement and strengthened ecosystem visibility.",
    cta: "See Event Coverage",
    role: "Lead Videographer",
    year: "2023-2024",
    outcome: "Amplified Ecosystem Reach",
    tools: "Camera Operation"
  },
  {
    name: "Ilorin Explore",
    industry: "Media",
    specialization: "Founder Project",
    summary: "Founded and produced original visual stories celebrating culture, creativity, businesses, and communities across Ilorin.",
    cta: "Explore Stories",
    role: "Founder & Creative Lead",
    year: "Present",
    outcome: "Built Localized Media Brand",
    tools: "End-to-End Production"
  },
  {
    name: "NBC Tradefair",
    industry: "International Trade",
    specialization: "Event Production",
    summary: "Directed and produced professional event coverage showcasing international trade exhibitions with cinematic storytelling.",
    cta: "View International Project",
    role: "Director of Photography",
    year: "2023",
    outcome: "Premium Event Documentation",
    tools: "Cinematography, Post"
  }
];

export function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 px-6 md:px-10 border-t border-brand-graphite bg-brand-charcoal relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-rule-of-thirds opacity-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 md:mb-24 gap-12 border-b border-brand-graphite pb-12">
          <div className="flex-1 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] tracking-[0.2em] text-brand-gold uppercase mb-4"
            >
              SCENE 04 // Client Roster
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white leading-[1.1] mb-6"
            >
              Creative Partnerships <br className="hidden md:block"/>That Matter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray-light leading-relaxed max-w-xl font-light"
            >
              From Web3 startups and fintech innovators to international organizations and creative communities, every collaboration represents strategic storytelling, premium execution, and measurable business impact.
            </motion.p>
          </div>
          
          {/* Credibility Metrics */}
          <div className="flex flex-wrap gap-8 xl:gap-12">
            <MetricItem label="Projects Delivered" value={70} suffix="+" index={0} />
            <MetricItem label="Brand Collabs" value={50} suffix="+" index={1} />
            <MetricItem label="Years Excellence" value={5} suffix="+" index={2} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANDS.map((brand, i) => (
            <motion.a 
              href="#"
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative border border-brand-graphite bg-brand-black p-6 md:p-8 overflow-hidden hover:border-brand-gold transition-all duration-500 flex flex-col min-h-[400px]"
            >
              {/* Registration marks */}
              <div className="absolute top-3 left-3 w-1.5 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute top-3 left-3 w-[1px] h-1.5 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute bottom-3 right-3 w-1.5 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute bottom-3 right-3 w-[1px] h-1.5 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />

              {/* Default View */}
              <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 group-hover:opacity-0 group-hover:invisible">
                <div className="mb-auto">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-brand-white">{brand.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-brand-gray-muted" />
                  </div>
                  <span className="inline-block font-mono text-[9px] tracking-widest text-brand-gold uppercase border border-brand-graphite px-2 py-1 mb-4">
                    {brand.industry}
                  </span>
                  <div className="text-xs font-mono text-brand-gray-muted uppercase tracking-widest mb-4 pb-4 border-b border-brand-graphite/50">
                    {brand.specialization}
                  </div>
                  <p className="text-sm text-brand-gray-light leading-relaxed font-light">
                    {brand.summary}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-brand-graphite/50 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gray-muted font-bold">
                    {brand.cta}
                  </span>
                  <ArrowRight className="w-3 h-3 text-brand-gray-muted" />
                </div>
              </div>

              {/* Hover View (Hidden by default, slides up and fades in) */}
              <div className="absolute inset-0 z-20 bg-brand-charcoal p-6 md:p-8 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 border-l-2 border-transparent group-hover:border-brand-gold">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-brand-graphite">
                  <h3 className="text-xl font-serif text-brand-gold">{brand.name}</h3>
                  <span className="font-mono text-[9px] tracking-widest text-brand-gray-muted uppercase">{brand.year}</span>
                </div>
                
                {/* Abstract Thumbnail Placeholder */}
                <div className="w-full h-24 bg-brand-slate border border-brand-graphite mb-6 relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-rule-of-thirds opacity-20 pointer-events-none" />
                   <div className="w-8 h-[1px] bg-brand-gold/50" />
                   <div className="h-8 w-[1px] bg-brand-gold/50 absolute" />
                   <span className="absolute bottom-2 left-2 font-mono text-[8px] text-brand-gray-muted tracking-widest uppercase">SCENE_REF</span>
                </div>

                <div className="flex flex-col gap-4 mb-auto">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-1">Role</span>
                    <span className="text-xs text-brand-white">{brand.role}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-1">Outcome</span>
                    <span className="text-xs text-brand-white">{brand.outcome}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-1">Tools</span>
                    <span className="text-xs text-brand-gray-light">{brand.tools}</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-graphite flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                    {brand.cta}
                  </span>
                  <ArrowRight className="w-3 h-3 text-brand-gold" />
                </div>
              </div>

            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
