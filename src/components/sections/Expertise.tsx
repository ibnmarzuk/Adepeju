import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";

const SKILLS = [
  { id: "01", title: "Creative Direction", desc: "Guiding brand vision with cinematic precision, visual storytelling, and strategic intent." },
  { id: "02", title: "Content Strategy", desc: "Architecting narratives that convert attention into measurable impact and audience engagement." },
  { id: "03", title: "Cinematography", desc: "Intentional framing, lighting, and visual capture that elevates the narrative." },
  { id: "04", title: "Post-Production", desc: "Crafting rhythmic, emotionally resonant stories through precise editing and sound design." },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 px-6 md:px-12 border-t border-brand-graphite bg-brand-charcoal relative overflow-hidden">
      {/* Cinematic Details */}
      <div className="absolute inset-0 bg-rule-of-thirds opacity-10 pointer-events-none" />
      <div className="safe-area hidden md:block" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          number="02" 
          title="Disciplines" 
          subtitle="Specialized disciplines focused on establishing premium market positioning and executing high-value cinematic work."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SKILLS.map((skill, i) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative pl-8 border-l border-brand-graphite hover:border-brand-gold transition-colors duration-500"
            >
              <span className="absolute left-[-1px] top-0 w-[2px] h-0 bg-brand-gold group-hover:h-full transition-all duration-700 ease-out" />
              <div className="font-mono text-xs tracking-widest text-brand-gray-muted mb-4">{skill.id} //</div>
              <h3 className="text-2xl font-serif text-brand-white mb-3">{skill.title}</h3>
              <p className="text-brand-gray-light leading-relaxed max-w-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
