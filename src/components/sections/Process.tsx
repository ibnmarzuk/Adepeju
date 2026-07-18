import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";

const PROCESS_STEPS = [
  { id: "01", title: "Pre-Production", desc: "Formulating the narrative blueprint, scriptwriting, storyboarding, and defining the visual language." },
  { id: "02", title: "Production", desc: "Cinematic filming, intentional framing, and capturing the story with precision on set." },
  { id: "03", title: "Post-Production", desc: "Refining the narrative through editing, motion graphics, color grading, and sound design." },
  { id: "04", title: "Final Delivery", desc: "Exporting the master cut and measuring audience engagement and measurable business impact." }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 border-t border-brand-graphite relative overflow-hidden bg-brand-charcoal">
      {/* Cinematic Grid Overlay */}
      <div className="absolute inset-0 bg-rule-of-thirds opacity-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          number="03" 
          title="Production Workflow" 
          subtitle="A systematic, cinematic approach to solving complex communication challenges through visual storytelling and intentional execution."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-6 relative"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm tracking-widest text-brand-gold">{step.id}</span>
                <span className="h-px bg-brand-graphite flex-1" />
              </div>
              <h3 className="text-xl font-serif text-brand-white">{step.title}</h3>
              <p className="text-sm text-brand-gray-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
