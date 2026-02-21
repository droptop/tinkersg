import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Palette, Award, History, Users, Phone, Cpu } from 'lucide-react';
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

/* Hero Section */
const AboutHero = () => {
  return (
    <section className="relative pt-64 pb-48 px-6 sm:px-10 lg:px-12 overflow-hidden grid-bg border-b border-border/50">
      <TechLabel text="CORE_MISSION // 004" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
        >
          Senior Thinking.<br />
          <span className="text-gradient-rainbow">Hands-on</span> Delivery.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mono font-light"
        >
          Tinkertorium is a design and development agency based in Singapore. Since 2007, we've been building the next generation of digital infrastructure.
        </motion.p>
      </div>
    </section>
  );
};

/* Our Story Section - Minimal / Line-based */
const OurStory = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-12 py-48 border-b border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
              EST_2007 // SIN
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">The<br />Narrative</h2>
            <div className="japanese-vertical mono text-[10px] opacity-20 tracking-[1.5em] leading-none uppercase pt-10">
              歴史と進化 // デジタル
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-8 text-xl md:text-2xl text-foreground/80 leading-relaxed mono font-light">
              <p>
                Founded in 2007 as Tinkertorium Pte Ltd, we began with a simple mission: to help companies navigate the rapidly evolving digital landscape through design-led execution.
              </p>
              <p>
                From our base in Singapore, we've expanded our reach to work with clients across the globe—from Swedish household names to South African startups.
              </p>
              <p>
                Today, we operate as an AI-first agency, integrating emerging technologies into our workflows to deliver faster, more effective results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
              {[
                { label: 'Experience', val: '17+' },
                { label: 'Countries', val: '50+' },
                { label: 'Clients', val: 'Global' },
                { label: 'Workflow', val: 'AI-First' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-black tracking-tighter">{stat.val}</div>
                  <div className="mono text-[10px] uppercase tracking-widest opacity-40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Core Philosophy - Minimalist Grid */
const CorePhilosophy = () => {
  const values = [
    {
      title: 'Senior Thinking',
      description: 'You work directly with experienced partners, not junior account managers.',
      id: 'V_01'
    },
    {
      title: 'Execution Focused',
      description: "We don't just deliver slide decks. We build functional prototypes and apps.",
      id: 'V_02'
    },
    {
      title: 'Design-Led',
      description: "Everything we do starts with user experience and visual identity.",
      id: 'V_03'
    },
    {
      title: 'Global Scale',
      description: "Systems that operate in 50+ countries and serve millions of users.",
      id: 'V_04'
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-12 py-48 bg-background circuit-bg border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 space-y-4"
        >
          <div className="mono text-xs text-accent uppercase tracking-[0.5em]">Operating System</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Core Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x border-y border-border/50 bg-background/50 backdrop-blur-sm">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 group hover:bg-accent/[0.02] transition-smooth relative"
            >
              <div className="mono text-[10px] opacity-20 mb-8">{value.id}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-accent transition-smooth">{value.title}</h3>
              <p className="text-muted-foreground mono text-sm opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Global Impact - High Trend Typography */
const GlobalImpact = () => {
  const impacts = [
    {
      client: 'Blueair',
      country: 'Sweden / Global',
      impact: 'Digital transformation across 50+ countries. Designed the IFA award-winning app.',
    },
    {
      client: 'Phonetradr',
      country: 'South Africa / Global',
      impact: 'Built the brand from the ground up—from logo to high-converting cross-platform tools.',
    },
    {
      client: 'Marshall',
      country: 'Global',
      impact: 'Technical illustrations and design for packaging across 10+ product launches.',
    },
    {
      client: 'Job Flow',
      country: 'Regional',
      impact: 'Developed a mobile-first brand and cross-platform app solution for local employment.',
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-12 py-48 grid-bg border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="mono text-xs text-accent uppercase tracking-widest">Case_Studies</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Global Impact</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 rounded-full border border-accent/20 mono text-[10px] text-accent uppercase tracking-[0.2em] animate-pulse"
          >
            <Award className="w-4 h-4 mr-3" />
            IFA Best Show Award
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 border border-border/50">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-12 hover:bg-accent/[0.02] transition-smooth group"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="mono text-[10px] text-accent uppercase tracking-widest">{item.country}</div>
                <div className="mono text-[10px] opacity-20">0{idx + 1}</div>
              </div>
              <h3 className="text-4xl font-bold tracking-tighter mb-6 group-hover:text-gradient-rainbow transition-smooth">{item.client}</h3>
              <p className="text-muted-foreground mono text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{item.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Contact / Call to Action - Minimal Full Width */
const ContactSection = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-12 py-64 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-16">
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-background tracking-tighter leading-none">
          Ready to<br />
          <span className="text-gradient-rainbow">Build?</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-background text-foreground font-black rounded-full hover:scale-105 transition-smooth text-xl uppercase tracking-tighter"
          >
            <span className="relative z-10">Initialize Project</span>
          </Link>
          <a
            href="tel:+6597368403"
            className="group flex items-center text-background hover:text-accent transition-smooth mono font-bold text-lg"
          >
            <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center mr-4 group-hover:border-accent">
              <Phone className="w-5 h-5" />
            </div>
            +65 9736 8403
          </a>
        </div>
      </div>
    </section>
  );
};

/* Main About Page */
export default function About() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <AboutHero />
      <OurStory />
      <CorePhilosophy />
      <GlobalImpact />
      <ContactSection />
    </div>
  );
}
