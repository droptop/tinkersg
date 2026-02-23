import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowUpRight, Zap, Globe, Cpu, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Tech Metadata Label */
const TechLabel = ({ text, side = 'left' }: { text: string, side?: 'left' | 'right' }) => (
  <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} p-10 opacity-20 hidden lg:block`}>
    <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.5em]">
      <div className="w-12 h-[1px] bg-foreground" />
      {text}
    </div>
  </div>
);

const JOBS = [
  {
    id: 'BD_01',
    title: 'Business Developer',
    location: 'Singapore',
    type: 'Full-time // APAC',
    category: 'Growth',
    summary: 'Are you a systems thinker with a passion for scaling AI-driven design services? Join us in Singapore to lead our APAC expansion and build strategic partnerships.',
    icon: Target,
  },
  {
    id: 'SA_01',
    title: 'AI Solutions Architect',
    location: 'Remote // APAC Preferred',
    type: 'Full-time',
    category: 'Engineering',
    summary: "Can you architect complex digital ecosystems where AI isn't just a feature, but the foundation? We're looking for a visionary to bridge the gap between creative intent and technical execution.",
    icon: Cpu,
  },
  {
    id: 'PD_01',
    title: 'Senior Product Designer',
    location: 'Remote // APAC Preferred',
    type: 'Full-time',
    category: 'Design',
    summary: 'Are you ready to redefine UI beyond buttons and forms? Help us build interfaces that anticipate user needs through proactive AI integration and agentic workflows.',
    icon: Zap,
  }
];

const CareersHero = () => (
  <section className="relative pt-64 pb-48 px-6 sm:px-10 lg:px-12 overflow-hidden grid-bg border-b border-border/50">
    <TechLabel text="HUMAN_CAPITAL // 008" />
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
          Join the infrastructure // APAC
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
          Architecting<br />
          <span className="text-gradient-rainbow">the Future.</span>
        </h1>
        <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed mono font-light">
          We're looking for systems thinkers and creative pioneers to build the next generation of AI-first digital products.
        </p>
      </motion.div>
    </div>
  </section>
);

const VacanciesSection = () => (
  <section className="px-6 sm:px-10 lg:px-12 py-32 border-b border-border/50 relative overflow-hidden bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="mono text-xs text-accent uppercase tracking-[0.5em]">Open Positions</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">APAC Opportunities</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mono text-[10px] opacity-30 uppercase tracking-widest pb-2"
        >
          Active_Nodes: {JOBS.length}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border/50 border border-border/50">
        {JOBS.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-background group relative p-10 md:p-16 hover:bg-accent/[0.02] transition-smooth overflow-hidden"
          >
            {/* Background ID */}
            <div className="absolute top-10 right-10 mono text-[8rem] font-black opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
              {job.id}
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="lg:w-1/3 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-smooth">
                    <job.icon className="w-5 h-5 group-hover:text-accent transition-smooth" />
                  </div>
                  <div className="mono text-[10px] uppercase tracking-widest text-accent/60">{job.category}</div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter group-hover:text-gradient-rainbow transition-smooth">
                  {job.title}
                </h3>
                <div className="flex items-center space-x-6 mono text-[10px] uppercase tracking-widest opacity-40">
                  <span className="flex items-center"><MapPin className="w-3 h-3 mr-2" /> {job.location}</span>
                  <span className="flex items-center"><Briefcase className="w-3 h-3 mr-2" /> {job.type}</span>
                </div>
              </div>

              <div className="lg:w-1/2">
                <p className="text-xl text-muted-foreground mono font-light leading-relaxed">
                  {job.summary}
                </p>
              </div>

              <div className="lg:w-1/6 flex justify-start lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CultureSection = () => (
  <section className="px-6 sm:px-10 lg:px-12 py-48 circuit-bg border-b border-border/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
            Internal_Protocol // 0x2
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Culture of<br />Autonomy.</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mono font-light">
            We operate as a high-density talent network. No middle management. Just senior thinkers building together.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {[
              { label: 'Remote First', icon: Globe },
              { label: 'AI Integrated', icon: Cpu },
              { label: 'Talent Density', icon: Users },
              { label: 'APAC Hub', icon: MapPin },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center">
                  <item.icon className="w-4 h-4 opacity-40" />
                </div>
                <span className="mono text-[10px] uppercase tracking-widest opacity-60">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 gradient-rainbow opacity-10 blur-3xl animate-pulse" />
          <div className="relative h-full w-full border border-border/50 rounded-3xl overflow-hidden backdrop-blur-sm bg-background/50 flex items-center justify-center p-12">
            <div className="space-y-8 text-center">
              <div className="text-8xl font-black tracking-tighter opacity-10">TINKER</div>
              <p className="mono text-sm uppercase tracking-[0.3em] leading-relaxed max-w-xs mx-auto">
                "We don't just use AI tools; we build the systems that define how people will use them."
              </p>
              <div className="text-2xl font-black tracking-tighter text-accent">Join the collective.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function Careers() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <CareersHero />
      <VacanciesSection />
      <CultureSection />
      
      {/* Final CTA */}
      <section className="px-6 sm:px-10 lg:px-12 py-48 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-background tracking-tighter">
            Don't see a<br />
            <span className="text-gradient-rainbow">Match?</span>
          </h2>
          <p className="text-xl text-background/60 mono font-light">
            We're always looking for exceptional talent in the AI space.
          </p>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-background text-foreground font-black rounded-full hover:scale-105 transition-smooth text-xl uppercase tracking-tighter"
          >
            <span>Send Open Application</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
