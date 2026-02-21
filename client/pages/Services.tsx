import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Palette, Code, Zap, Smartphone, Search, Database, Layout, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { motion } from 'framer-motion';

/* Tech Metadata Label */
const TechLabel = ({ text, side = 'left' }: { text: string, side?: 'left' | 'right' }) => (
  <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} p-10 opacity-20 hidden lg:block`}>
    <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.5em]">
      <div className="w-12 h-[1px] bg-foreground" />
      {text}
    </div>
  </div>
);

/* Services Hero */
const ServicesHero = () => {
  const { ref, className } = useReveal();
  return (
    <section ref={ref} className={`relative pt-64 pb-48 px-6 sm:px-10 lg:px-12 overflow-hidden grid-bg border-b border-border/50 ${className}`}>
      <TechLabel text="SERVICE_MATRIX // 006" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
            CORE_CAPABILITIES // 0x01
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
            Design-led<br />
            <span className="text-gradient-rainbow">Execution.</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mono font-light">
            We don't just provide services. We deploy specialized modules designed to solve complex business problems through high-fidelity design and engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

/* Service Module Section */
const ServiceModule = ({
  id,
  title,
  description,
  items,
  icon: Icon,
  reverse = false
}: {
  id: string,
  title: string,
  description: string,
  items: string[],
  icon: any,
  reverse?: boolean
}) => {
  return (
    <section className="px-6 sm:px-10 lg:px-12 py-32 border-b border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <div className="mono text-xs text-accent uppercase tracking-widest">Module // {id}</div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-accent/20">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{title}</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mono font-light">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-accent/[0.02] border border-border/50 rounded-2xl group hover:bg-accent/[0.05] transition-smooth"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent group-hover:text-background transition-smooth">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-background" />
                  </div>
                  <span className="mono text-sm opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: reverse ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full aspect-square lg:aspect-video relative rounded-3xl overflow-hidden border border-border/50 group"
          >
             <div className="absolute inset-0 gradient-rainbow opacity-5 group-hover:opacity-10 transition-opacity" />
             <div className="absolute inset-0 circuit-bg opacity-20" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="w-32 h-32 text-foreground/10 group-hover:text-accent/20 transition-smooth group-hover:scale-110" />
             </div>
             <div className="absolute bottom-6 left-6 mono text-[10px] opacity-20 uppercase tracking-[0.3em]">
               SEC_NODE // {id}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Full Service Matrix */
const ServicesList = () => {
  const modules = [
    {
      id: '0x01',
      icon: Brain,
      title: 'Brand and Identity',
      description: 'We build visual systems that reflect your strategy and connect with your audience across all touchpoints.',
      items: [
        'Brand Strategy & Positioning',
        'Visual Identity Systems',
        'Brand Guidelines & Documentation',
        'Marketing Assets & Collateral',
        'Motion & Sonic Branding',
        'Custom Typography & Logotypes'
      ]
    },
    {
      id: '0x02',
      icon: Palette,
      title: 'Product Design (UX/UI)',
      description: 'Human-centric design focused on usability, accessibility, and high conversion rates for complex applications.',
      items: [
        'User Research & Discovery',
        'Information Architecture',
        'High-Fidelity Wireframing',
        'Interactive Prototyping',
        'Design Systems (Figma/React)',
        'Usability Testing & Audit'
      ],
      reverse: true
    },
    {
      id: '0x03',
      icon: Code,
      title: 'Design Implementation',
      description: 'Bridging the gap between design and engineering with high-performance, accessible codebases.',
      items: [
        'React / Next.js Development',
        'TailwindCSS & Framer Motion',
        'CMS Integration (Sanity/Strapi)',
        'Headless E-commerce (Shopify)',
        'Performance Optimization',
        'Accessibility (WCAG) Compliance'
      ]
    },
    {
      id: '0x04',
      icon: Zap,
      title: 'AI Integration',
      description: 'Leveraging emerging technologies to automate workflows, personalize content, and scale marketing efforts.',
      items: [
        'Custom Prompt Engineering',
        'Content Automation Systems',
        'AI-Driven Personalization',
        'Workflow Optimization',
        'Predictive Analytics Integration',
        'Generative Visual Systems'
      ],
      reverse: true
    },
    {
      id: '0x05',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that provide native performance with a unified codebase.',
      items: [
        'React Native Applications',
        'iOS & Android Deployment',
        'PWA (Progressive Web Apps)',
        'Mobile UX Optimization',
        'App Store Strategy',
        'Push Notification Systems'
      ]
    }
  ];

  return (
    <>
      {modules.map((module) => (
        <ServiceModule key={module.id} {...module} />
      ))}
    </>
  );
};

/* Final Call to Action */
const ServicesCTA = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-12 py-64 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 gradient-rainbow opacity-20" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <h2 className="text-6xl md:text-8xl font-black text-background tracking-tighter leading-none">
          Ready to <br />Initialize?
        </h2>
        <p className="text-xl text-background/60 mono max-w-2xl mx-auto font-light">
          Let's discuss which modules are best suited for your current growth cycle.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-12 py-6 bg-background text-foreground font-black rounded-full hover:scale-105 transition-smooth text-xl uppercase tracking-tighter"
        >
          Book a Consultation
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>
      </div>
    </section>
  );
};

/* Main Services Page */
export default function Services() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
}
