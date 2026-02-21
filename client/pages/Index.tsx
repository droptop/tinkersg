import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Palette, Code, Brain, CheckCircle2, ChevronDown, Terminal, Cpu, Activity, LayoutGrid } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Price } from '@/contexts/CurrencyContext';
import { useReveal } from '@/hooks/useReveal';
import { DemoResponse } from "@shared/api";

/* Tech Metadata Label */
const TechLabel = ({ text, side = 'left' }: { text: string, side?: 'left' | 'right' }) => (
  <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} p-4 opacity-30 hidden lg:block`}>
    <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-[0.3em]">
      <div className="w-8 h-[1px] bg-foreground" />
      {text}
    </div>
  </div>
);

/* Hero Section */
const HeroSection = ({ serverStatus }: { serverStatus: string }) => {
  const { ref, className } = useReveal();

  return (
    <section ref={ref} className={`relative pt-56 pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden grid-bg border-b border-border/50 ${className}`}>
      <TechLabel text="SYSTEM_INIT // 001" />
      <div className="absolute top-0 right-0 p-8 opacity-20 hidden lg:block japanese-vertical mono text-xs tracking-widest leading-loose">
        ティンカートリウム // クリエイティブ・テクノロジー
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-full mono text-[10px] text-accent uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {serverStatus || "Now Shipping v2.4"}
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85]">
                <span className="text-gradient-rainbow">Design</span><br />
                <span className="text-foreground">that Converts</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed mono font-light opacity-80">
              We work with founders and operators who see design as a growth engine. From product to platform to hardware hybrids, we build systems that move businesses forward.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-bold rounded-full overflow-hidden transition-smooth"
              >
                <div className="absolute inset-0 gradient-rainbow opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center">
                  Book a call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <div className="flex items-center gap-4 px-6 mono text-xs uppercase tracking-widest opacity-50">
                <Activity className="w-4 h-4" />
                Optimized for Growth
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 aspect-square lg:aspect-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F53ae044003c9478c97e1d1df3132a688?format=webp&width=1600"
                alt="Tinkertorium creative work"
                className="w-full h-full object-contain mix-blend-screen brightness-125"
              />
            </div>
            {/* Geometric circuit elements */}
            <div className="absolute -inset-10 border border-accent/10 rounded-full animate-pulse pointer-events-none" />
            <div className="absolute -inset-20 border border-primary/10 rounded-full animate-pulse pointer-events-none delay-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Social Proof Strip */
const SocialProofSection = () => {
  const { ref, className } = useReveal();
  const clients = [
    { name: 'GIC', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fe5fbd53072f84221828638c3e84e7d49?format=webp&width=200', className: 'h-8 md:h-10' },
    { name: 'Zound Industries', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F8e3cc6d712514beba60476a1c48f2f6b?format=webp&width=200' },
    { name: 'Blueair', logo: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F723b960733c543db95460afdad1a2f6a?format=webp&width=200', className: 'h-3 md:h-4' },
  ];

  return (
    <section ref={ref} className={`px-4 sm:px-6 lg:px-8 py-20 border-b border-border/50 bg-background/50 backdrop-blur-sm relative overflow-hidden ${className}`}>
      <TechLabel text="TRUSTED_PARTNERS // 002" side="right" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <p className="mono text-[10px] uppercase tracking-[0.4em] opacity-40">Verified Partners</p>
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24 opacity-40">
          {clients.map((client) => (
            <div key={client.name} className={`flex items-center justify-center transition-smooth hover:opacity-100 grayscale hover:grayscale-0 ${client.className || 'h-6 md:h-8'}`}>
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-full w-auto object-contain dark:brightness-100 brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Services Grid - Borderless / Techy */
const ServicesGrid = () => {
  const { ref, className } = useReveal();
  const services = [
    {
      icon: Brain,
      title: 'Brand and Identity',
      description: 'Strategy, positioning, visual identity systems designed for growth.',
      code: '0x01'
    },
    {
      icon: Palette,
      title: 'Product Design and UX',
      description: 'Discovery-led design that solves real problems and delights users.',
      code: '0x02'
    },
    {
      icon: Code,
      title: 'Design Implementation',
      description: 'Component-based builds, CMS setup, performance, and accessibility.',
      code: '0x03'
    },
    {
      icon: Zap,
      title: 'AI Enabled Content',
      description: 'Messaging systems, content engines, and marketing at scale.',
      code: '0x04'
    },
  ];

  return (
    <section ref={ref} className={`px-4 sm:px-6 lg:px-8 py-48 circuit-bg border-b border-border/50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="space-y-6">
            <div className="mono text-xs text-accent uppercase tracking-widest">Capabilities // 0x01</div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Our Core<br /><span className="text-muted-foreground/30 italic">Functions</span></h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-md mono font-light leading-relaxed">
            Everything your brand needs to move the needle in a tech-driven market. Staggered modules for precise execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-y border-border/50">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group p-10 space-y-8 hover:bg-accent/[0.02] transition-smooth relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 mono text-[10px] opacity-20 group-hover:opacity-50 transition-opacity">
                  {service.code}
                </div>
                <div className="w-12 h-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 gradient-rainbow opacity-10 blur-xl group-hover:opacity-30 transition-opacity" />
                  <Icon className="w-8 h-8 text-foreground group-hover:text-accent transition-smooth" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mono opacity-70 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[10px] mono uppercase tracking-widest text-accent group-hover:gap-3 transition-smooth pt-4"
                >
                  Request Service <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Products Teaser - Borderless / Iridescent */
const ProductsSection = () => {
  const { ref, className } = useReveal();
  const products = [
    {
      name: 'Brand Sprint',
      outcome: 'Clear positioning + visual direction + launch kit',
      includes: ['Positioning', 'Identity direction', 'Landing page', 'Social templates', 'Prompt pack'],
      amount: 8000,
      suffix: '',
    },
    {
      name: 'Website that Converts',
      outcome: 'Designed and built marketing site, CMS ready, measurable leads',
      includes: ['IA & Copy', 'Design', 'Build', 'Performance', 'SEO basics', 'Analytics'],
      amount: 15000,
      suffix: '',
    },
    {
      name: 'AI Content Engine',
      outcome: 'Repeatable weekly content system with brand controls',
      includes: ['Format library', 'Templates', 'Prompts', 'Workflow setup', 'QA framework', 'Reporting'],
      amount: 3000,
      suffix: '/month',
    },
  ];

  return (
    <section ref={ref} className={`px-4 sm:px-6 lg:px-8 py-48 bg-background relative grid-bg border-b border-border/50 ${className}`}>
      <TechLabel text="DEPLOY_UNITS // 003" side="left" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 space-y-6 text-center">
          <div className="mono text-xs text-accent uppercase tracking-[0.5em]">Standard Units // 0x02</div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Productised <span className="text-gradient-rainbow">Offers</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x border border-border/50 bg-background/50 backdrop-blur-md rounded-3xl overflow-hidden">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="p-12 group hover:bg-accent/[0.02] transition-smooth flex flex-col space-y-10"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter group-hover:text-accent transition-smooth">{product.name}</h3>
                <p className="text-muted-foreground mono text-sm opacity-70 leading-relaxed">{product.outcome}</p>
              </div>

              <div className="space-y-6 flex-1">
                <p className="mono text-[10px] uppercase tracking-widest text-accent font-bold">Protocol Modules:</p>
                <ul className="space-y-4">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs mono opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10 space-y-6 border-t border-border/50">
                <div className="text-3xl font-bold mono">
                  <Price
                    amount={product.amount}
                    prefix=""
                    suffix={product.suffix}
                  />
                </div>
                <Link
                  to="/products"
                  className="group w-full relative inline-flex items-center justify-center px-6 py-4 border border-foreground/20 rounded-full font-bold mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-smooth"
                >
                  Initialize Module
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Process Section - High Trend Vertical */
const ProcessSection = () => {
  const { ref, className } = useReveal();
  const steps = [
    { number: '01', title: 'Exploratory Call', description: 'Check alignment, needs, and project feasibility.' },
    { number: '02', title: 'Proposal', description: 'Strategic roadmap, scoping, and value-based pricing.' },
    { number: '03', title: 'Execution', description: 'Design and development with weekly ship cycles.' },
    { number: '04', title: 'Iteration', description: 'Measuring impact, gathering data, and scaling.' },
  ];

  return (
    <section ref={ref} className={`px-4 sm:px-6 lg:px-8 py-48 bg-background border-b border-border/50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <div className="mono text-xs text-accent uppercase tracking-widest">Workflow</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">The<br />Cycle</h2>
            </div>
            <p className="text-lg text-muted-foreground mono font-light">
              Our process is optimized for speed, clarity, and recursive improvement.
            </p>
            <div className="pt-8 japanese-vertical mono text-[10px] opacity-20 tracking-[1em] leading-none uppercase">
              継続的改善 // 高速配信
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="group flex items-start gap-10 relative">
                <div className="mono text-4xl md:text-6xl font-extrabold text-foreground/5 group-hover:text-accent/20 transition-smooth select-none">
                  {step.number}
                </div>
                <div className="flex-1 pt-2 md:pt-4 space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform">{step.title}</h3>
                  <p className="text-muted-foreground mono text-sm max-w-lg opacity-70">{step.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-border/50 via-border/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* FAQ Section - Clean Tech */
const FAQSection = () => {
  const { ref, className } = useReveal();
  const faqs = [
    {
      question: 'How long do projects typically take?',
      answer: 'Timeline varies by scope. Sprints are 1-2 weeks, projects range from 4-10 weeks, retainers are ongoing.',
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'We work across sprints, projects, and retainers. Pricing depends on complexity and deliverables.',
    },
    {
      question: 'How do you use AI in your work?',
      answer: 'AI powers our content generation, design iteration, and analysis. Humans drive strategy and final decisions.',
    },
    {
      question: 'What happens after the project ends?',
      answer: 'We provide comprehensive handover documentation, component libraries, and CMS guides.',
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes. Our productised sprints are great for proving concepts quickly.',
    },
    {
      question: 'Can we do ongoing work together?',
      answer: 'Absolutely. We offer retainer arrangements for brands needing regular support.',
    },
  ];

  return (
    <section ref={ref} className={`px-4 sm:px-6 lg:px-8 py-48 bg-background circuit-bg ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-24 text-center space-y-4">
          <div className="mono text-[10px] uppercase tracking-[0.5em] opacity-40">Documentation</div>
          <h2 className="text-5xl font-bold tracking-tighter">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border-none bg-accent/[0.02] rounded-2xl px-8 py-2 transition-smooth hover:bg-accent/[0.05]"
            >
              <AccordionTrigger className="text-lg font-bold text-foreground hover:no-underline text-left">
                <span className="flex items-center gap-4">
                  <span className="mono text-[10px] opacity-30">[{idx + 1}]</span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-6 mono text-sm leading-relaxed opacity-80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

/* Final CTA Section - Ultra Modern */
const CTASection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-64 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 gradient-rainbow opacity-20 animate-pulse" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-background tracking-tighter leading-none">
          Ready to <br />Execute?
        </h2>
        <p className="text-xl md:text-2xl text-background/60 mono max-w-2xl mx-auto font-light">
          Whether you need a brand refresh, product redesign, or full marketing overhaul—we're here to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-12 py-6 bg-background text-foreground font-black rounded-full hover:scale-105 transition-smooth text-xl uppercase tracking-tighter"
        >
          Book a call
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 mono text-[10px] text-background/20 uppercase tracking-[1em]">
        Tinkertorium // 2024
      </div>
    </section>
  );
};

/* Main Index Page */
export default function Index() {
  const [serverStatus, setServerStatus] = useState("");

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const response = await fetch("/api/demo");
        const data = (await response.json()) as DemoResponse;
        setServerStatus(`Server Response: ${data.message}`);
      } catch (error) {
        console.error("Error fetching demo:", error);
      }
    };
    fetchDemo();
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <HeroSection serverStatus={serverStatus} />
      <SocialProofSection />
      <ServicesGrid />
      <ProductsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
