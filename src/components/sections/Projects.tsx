import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Rhiva",
    industry: "Web3 • DeFi • Solana",
    role: "Content Strategist • Scriptwriter • Creative Director • Editor",
    category: "Educational Content • Product Marketing • Explainer",
    summary: "Created a cinematic educational explainer that simplified liquidity mining for everyday users, transforming complex DeFi concepts into engaging visual storytelling for the Nigerian crypto community.",
    cta: "Explore Case Study",
    year: "2023",
    tools: "Creative Strategy, Scriptwriting, Motion Graphics",
    status: "Completed"
  },
  {
    name: "Airbills",
    industry: "Fintech • Crypto Payments",
    role: "Creative Director • Product Storyteller • Editor",
    category: "Product Demo • Fintech Marketing",
    summary: "Produced a premium product demonstration showcasing seamless crypto-to-naira payment experiences through realistic user journeys and cinematic product storytelling.",
    cta: "Watch Product Story",
    year: "2024",
    tools: "Editing, Visual Storytelling",
    status: "Completed"
  },
  {
    name: "Xara",
    industry: "Web3",
    role: "Creative Strategist • Scriptwriter • Editor",
    category: "Feature Launch • Short Film",
    summary: "Developed a narrative-driven launch film that transformed technical product features into an engaging cinematic story designed to educate and convert users.",
    cta: "Watch Launch Film",
    year: "2024",
    tools: "Creative Direction, Editing",
    status: "Completed"
  },
  {
    name: "Bayse",
    industry: "Digital Brand",
    role: "Creative Director • Brand Strategist • Editor",
    category: "Brand Marketing • Visual Storytelling",
    summary: "Produced premium visual campaigns that strengthened Bayse's brand identity through intentional storytelling, clean visuals, and refined cinematic editing.",
    cta: "Explore Brand Story",
    year: "2023",
    tools: "Creative Direction, Video Editing",
    status: "Completed"
  },
  {
    name: "Raenest",
    industry: "Fintech",
    role: "Director • Editor • Storyteller",
    category: "Documentary • Brand Film",
    summary: "Produced a documentary-style film highlighting how Raenest empowers remote professionals through seamless international payment solutions.",
    cta: "Watch Documentary",
    year: "2024",
    tools: "Documentary Production, Motion",
    status: "Completed"
  },
  {
    name: "Superteam NG",
    industry: "Web3 Community",
    role: "Creative Lead • Event Videographer • Editor",
    category: "Community • Event Coverage",
    summary: "Captured and edited dynamic event content showcasing Nigeria's thriving Web3 ecosystem while increasing community engagement across digital platforms.",
    cta: "View Event Story",
    year: "2023",
    tools: "Event Coverage, Editing",
    status: "Completed"
  },
  {
    name: "Ilorin Explore",
    industry: "Media",
    role: "Founder • Creative Director • Creator",
    category: "Media • Culture • Tourism",
    summary: "Built and grew an original media platform dedicated to documenting Ilorin's people, businesses, culture, events, and hidden stories through compelling visual storytelling.",
    cta: "Explore Stories",
    year: "2022 - Present",
    tools: "Videography, Content Strategy",
    status: "Live"
  },
  {
    name: "NBC Tradefair London",
    industry: "International Trade",
    role: "Creative Director • Videographer • Editor",
    category: "International Event • Commercial",
    summary: "Produced premium event coverage for the NBC Trade Fair in London, capturing international exhibitors, business networking, and brand experiences through cinematic production.",
    cta: "View International Project",
    year: "2023",
    tools: "Commercial Editing, Production",
    status: "Completed"
  },
  {
    name: "Kwara Bridges Launch",
    industry: "Government",
    role: "Lead Video Editor • Creative Producer",
    category: "Government • Public Infrastructure",
    summary: "Edited official launch films documenting the commissioning of major bridge infrastructure projects, delivering polished content for government communications and public engagement.",
    cta: "Explore Project",
    year: "2024",
    tools: "Video Editing, Production",
    status: "Completed"
  },
  {
    name: "Open Air Cinema 3.0",
    industry: "Events",
    role: "Founder • Creative Director",
    category: "Experiential Marketing • Events",
    summary: "Designed and led Ilorin's premium outdoor cinema experience, combining film, community engagement, brand partnerships, and event production into a memorable cultural experience.",
    cta: "See Event",
    year: "2023",
    tools: "Event Production, Direction",
    status: "Completed"
  },
  {
    name: "Afrofest Indianapolis",
    industry: "Culture",
    role: "Editor • Creative Storyteller",
    category: "International Festival • Community",
    summary: "Edited high-energy festival films celebrating African culture in Indianapolis, creating emotionally engaging content that expanded audience reach across digital platforms.",
    cta: "Watch Festival Film",
    year: "2023",
    tools: "Editing, Storytelling",
    status: "Completed"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-10 border-t border-brand-graphite relative overflow-hidden bg-brand-black">
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
              SCENE 05 // Selected Work
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white leading-[1.1] mb-6"
            >
              Projects That <br className="hidden md:block"/>Created Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray-light leading-relaxed max-w-xl font-light"
            >
              Every project represents a unique challenge solved through cinematic storytelling, strategic thinking, and intentional execution. From Web3 products and fintech startups to international events and community initiatives, every collaboration was designed to create lasting impact.
            </motion.p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, i) => (
            <motion.a 
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative border border-brand-graphite bg-brand-charcoal p-8 md:p-12 overflow-hidden hover:border-brand-gold transition-colors duration-500 flex flex-col min-h-[480px]"
            >
              {/* Registration marks */}
              <div className="absolute top-4 left-4 w-2 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute top-4 left-4 w-[1px] h-2 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute bottom-4 right-4 w-2 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
              <div className="absolute bottom-4 right-4 w-[1px] h-2 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />

              {/* Default View */}
              <div className="relative z-10 flex flex-col h-full transition-opacity duration-500 group-hover:opacity-0 group-hover:invisible">
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-brand-graphite">
                  <h3 className="text-3xl font-serif text-brand-white pr-4">{project.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-brand-gray-muted shrink-0 mt-1" />
                </div>
                
                <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-brand-gold mb-6 border border-brand-graphite w-fit px-3 py-1">
                  {project.category}
                </div>
                
                <p className="text-brand-gray-light leading-relaxed font-light mb-auto pr-4 md:pr-12 text-sm md:text-base">
                  {project.summary}
                </p>
                
                <div className="mt-12 pt-6 border-t border-brand-graphite flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gray-muted group-hover:text-brand-gold transition-colors font-medium">
                    {project.cta}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-gray-muted" />
                </div>
              </div>

              {/* Hover View */}
              <div className="absolute inset-0 bg-brand-black p-8 md:p-12 flex flex-col z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-4 group-hover:translate-y-0 border-l-2 border-brand-gold">
                <div className="flex justify-between items-start mb-8 pb-4 border-b border-brand-graphite">
                  <h3 className="text-2xl font-serif text-brand-gold">{project.name}</h3>
                  <span className="font-mono text-[10px] tracking-widest text-brand-gray-muted border border-brand-graphite px-2 py-1">{project.year}</span>
                </div>

                {/* Abstract Thumbnail */}
                <div className="w-full h-32 md:h-40 bg-brand-charcoal border border-brand-graphite mb-8 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-rule-of-thirds opacity-20 pointer-events-none" />
                  <div className="w-12 h-[1px] bg-brand-gold/30" />
                  <div className="h-12 w-[1px] bg-brand-gold/30 absolute" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                     <span className="w-1.5 h-1.5 bg-brand-gold/80 rounded-full" />
                     <span className="w-1.5 h-1.5 bg-brand-graphite rounded-full" />
                     <span className="w-1.5 h-1.5 bg-brand-graphite rounded-full" />
                  </div>
                  <span className="absolute top-3 right-3 font-mono text-[8px] text-brand-gray-muted tracking-widest uppercase border border-brand-graphite px-1">MASTER_EXPORT</span>
                </div>

                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-auto">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-2">Role</span>
                    <span className="text-xs text-brand-white leading-relaxed block">{project.role}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-2">Tools</span>
                    <span className="text-xs text-brand-gray-light leading-relaxed block">{project.tools}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-2">Industry</span>
                    <span className="text-xs text-brand-gray-light leading-relaxed block">{project.industry}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-gray-muted mb-2">Status</span>
                    <span className="text-xs text-brand-gray-light leading-relaxed block">{project.status}</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-gold/30 flex justify-between items-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold font-bold">
                    {project.cta}
                  </span>
                  <ArrowRight className="w-4 h-4 text-brand-gold" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
