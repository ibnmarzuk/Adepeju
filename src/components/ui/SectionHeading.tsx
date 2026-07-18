import { cn } from "../../lib/utils";
import * as motion from "motion/react-client";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ number, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-graphite pb-8 gap-6", className)}>
      <div className="flex flex-col gap-2">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs tracking-[0.2em] text-brand-gold uppercase"
        >
          SCENE {number}
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white"
        >
          {title}
        </motion.h2>
      </div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-gray-muted max-w-sm text-sm leading-relaxed md:text-right"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
