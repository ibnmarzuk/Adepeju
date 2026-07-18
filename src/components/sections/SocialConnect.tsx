import { SectionHeading } from "../ui/SectionHeading";
import * as motion from "motion/react-client";
import { Mail } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WA_MESSAGE = "Hello Adepeju,%0A%0AI came across your portfolio and I'm interested in working with you.%0A%0AI'd love to discuss a potential project with you.%0A%0ALooking forward to hearing from you.%0A%0AThank you.";
const EMAIL_SUBJECT = "Project Inquiry";
const EMAIL_BODY = "Hello Adepeju,%0A%0AI found your portfolio and would love to discuss a potential collaboration.%0A%0ALooking forward to hearing from you.%0A%0AThank you.";

const NETWORKS = [
  {
    platform: "X",
    label: "Join the Conversation",
    url: "https://x.com/adepejuuade",
    icon: XIcon,
    external: true
  },
  {
    platform: "Instagram",
    label: "Behind the Scenes",
    url: "https://instagram.com/adepejuuade",
    icon: InstagramIcon,
    external: true
  },
  {
    platform: "WhatsApp",
    label: "Start a Conversation",
    url: `https://wa.me/2348143982737?text=${WA_MESSAGE}`,
    icon: WhatsAppIcon,
    external: true
  },
  {
    platform: "Email",
    label: "Send a Project Inquiry",
    url: `mailto:adepeju.ade@gmail.com?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`,
    icon: Mail,
    external: false
  }
];

export function SocialConnect() {
  return (
    <section id="network" className="py-16 md:py-24 px-6 md:px-10 border-t border-brand-graphite bg-brand-charcoal relative overflow-hidden">
      {/* Cinematic Grid Overlay */}
      <div className="absolute inset-0 bg-rule-of-thirds opacity-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          number="07" 
          title="The Network" 
          subtitle="A premium networking experience. Connect directly to discuss strategy, production, and potential creative collaborations."
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto">
          {NETWORKS.map((network, i) => {
            const Icon = network.icon;
            return (
              <motion.a
                key={network.platform}
                href={network.url}
                target={network.external ? "_blank" : "_self"}
                rel={network.external ? "noopener noreferrer" : ""}
                aria-label={`Connect on ${network.platform}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 border border-brand-graphite bg-brand-black hover:border-brand-gold hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-brand-gold text-center relative overflow-hidden aspect-square max-w-[160px] mx-auto w-full"
              >
                {/* Subtle hover background highlight */}
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Corner registration marks */}
                <div className="absolute top-2 left-2 w-1.5 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
                <div className="absolute top-2 left-2 w-[1px] h-1.5 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
                <div className="absolute bottom-2 right-2 w-1.5 h-[1px] bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
                <div className="absolute bottom-2 right-2 w-[1px] h-1.5 bg-brand-graphite group-hover:bg-brand-gold/50 transition-colors" />
 
                <div className="text-brand-gray-muted group-hover:text-brand-gold transition-colors duration-500 z-10 flex flex-col items-center gap-3">
                  <Icon className="w-6 h-6" />
                  <span className="font-mono text-[9px] tracking-widest uppercase">{network.platform}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
