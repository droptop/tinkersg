import { Link } from 'react-router-dom';
import { ArrowRight, Box, CheckCircle2, ChevronDown, Terminal, Activity, Cpu, ShieldCheck, Zap, Palette, Brain } from 'lucide-react';
import { Price } from '@/contexts/CurrencyContext';
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

/* Products Hero */
const ProductsHero = () => {
  const { ref, className } = useReveal();
  return (
    <section ref={ref} className={`relative pt-64 pb-48 px-6 sm:px-10 lg:px-12 overflow-hidden grid-bg border-b border-border/50 ${className}`}>
      <TechLabel text="PRODUCT_NODES // 007" />
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
            PRODUCTISED_OFFERS // 0x02
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
            Productised<br />
            <span className="text-gradient-rainbow">Solutions.</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed mono font-light">
            Fixed scope, fixed timeline, high-impact results. Our products are designed for speed, clarity, and measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

/* Product Feature Card */
const ProductCard = ({
  id,
  title,
  description,
  outcome,
  includes,
  amount,
  suffix = "",
  icon: Icon,
  index = 0
}: {
  id: string,
  title: string,
  description: string,
  outcome: string,
  includes: string[],
  amount: number,
  suffix?: string,
  icon: any,
  index?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-background border border-border/50 rounded-3xl overflow-hidden p-12 hover:bg-accent/[0.02] transition-smooth flex flex-col space-y-12 relative overflow-hidden"
    >
      <div className="absolute top-8 right-8 mono text-[10px] opacity-20 group-hover:opacity-50 transition-opacity">ID: {id}</div>
      <div className="space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/20 flex items-center justify-center">
          <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-bold tracking-tighter leading-none">{title}</h3>
          <p className="text-muted-foreground mono text-sm opacity-70 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <div className="p-6 bg-accent/[0.02] border border-border/50 rounded-2xl space-y-2">
          <p className="mono text-[10px] uppercase tracking-widest text-accent font-bold">Protocol Outcome:</p>
          <p className="text-lg font-bold tracking-tight">{outcome}</p>
        </div>
        <ul className="space-y-4 pt-4">
          {includes.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 text-xs mono opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-10 border-t border-border/50 space-y-8">
        <div className="flex flex-col gap-2">
          <p className="mono text-[10px] uppercase tracking-widest opacity-40">Initialize_At:</p>
          <div className="text-5xl font-black mono text-gradient-rainbow">
            <Price
              amount={amount}
              prefix=""
              suffix={suffix}
            />
          </div>
        </div>
        <Link
          to="/contact"
          className="w-full relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-bold rounded-full overflow-hidden transition-smooth text-lg uppercase tracking-tighter"
        >
          <div className="absolute inset-0 gradient-rainbow opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10">Purchase Module</span>
        </Link>
      </div>
    </motion.div>
  );
};

/* Products Grid */
const ProductsGrid = () => {
  const products = [
    {
      id: '01',
      icon: Palette,
      title: 'Brand Sprint',
      description: 'The foundation for your growth. We define your brand story and visual identity in one high-velocity sprint.',
      outcome: 'Clear positioning + Visual system + Multi-channel kit',
      includes: ['Brand Discovery & Strategy', 'Positioning & Voice', 'Logo & Visual Identity', 'Landing Page Design', 'Social Media Templates', 'Comprehensive Brand Guidelines'],
      amount: 8000,
    },
    {
      id: '02',
      icon: Zap,
      title: 'Performance Site',
      description: 'A marketing powerhouse designed to convert traffic into revenue. Fast, accessible, and measurable.',
      outcome: 'Fully functional marketing site + SEO + Analytics',
      includes: ['Conversion-Focused IA', 'High-Fidelity Design', 'React / Next.js Implementation', 'CMS Setup (Sanity/Strapi)', 'Performance Optimization', 'SEO & GA4 Integration'],
      amount: 15000,
    },
    {
      id: '03',
      icon: Brain,
      title: 'AI Content Engine',
      description: 'A monthly retainer module to scale your marketing and content operations using custom-built AI workflows.',
      outcome: 'Repeatable content system + Custom automation',
      includes: ['Content Strategy & IA', 'Custom AI Prompt Library', 'Social Media Automation', 'Weekly Blog Content Generation', 'Brand Control Framework', 'Monthly Performance Reporting'],
      amount: 3000,
      suffix: '/month',
    }
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-12 py-32 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <ProductCard key={product.id} {...product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Comparison Section */
const ComparisonSection = () => {
  const { ref, className } = useReveal();
  const criteria = [
    { name: 'Timeline', products: '1-4 Weeks', agency: '3-6 Months' },
    { name: 'Pricing', products: 'Fixed / Upfront', agency: 'Hourly / Estimates' },
    { name: 'Deliverables', products: 'High-Fidelity Code', agency: 'Slide Decks' },
    { name: 'Feedback', products: 'Recursive / Fast', agency: 'Protracted / Slow' },
    { name: 'Focus', products: 'Growth / Conversion', agency: 'General Support' },
  ];

  return (
    <section ref={ref} className={`px-6 sm:px-10 lg:px-12 py-48 border-y border-border/50 relative overflow-hidden ${className}`}>
      <TechLabel text="ANALYSIS_MATRIX // 008" side="right" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Productised vs.<br /> <span className="text-muted-foreground/30 italic">Traditional</span></h2>
          <p className="text-xl text-muted-foreground mono font-light max-w-2xl mx-auto leading-relaxed">
            Why companies are moving away from agency retainers and towards high-fidelity product modules.
          </p>
        </div>

        <div className="space-y-4">
          {criteria.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 p-10 bg-accent/[0.02] border border-border/50 rounded-3xl hover:bg-accent/[0.05] transition-smooth group">
               <div className="w-full md:w-1/3 text-xl font-bold tracking-tight mono opacity-40 group-hover:opacity-100 transition-opacity">
                 [{idx + 1}] {item.name}
               </div>
               <div className="flex-1 flex gap-12 items-center justify-between w-full">
                 <div className="space-y-1">
                   <p className="mono text-[10px] uppercase tracking-widest text-accent font-bold">Tinkertorium</p>
                   <p className="text-2xl font-black tracking-tighter">{item.products}</p>
                 </div>
                 <div className="space-y-1 opacity-20">
                   <p className="mono text-[10px] uppercase tracking-widest">Traditional Agency</p>
                   <p className="text-2xl font-black tracking-tighter italic">{item.agency}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* FAQ Teaser */
const FAQTeaser = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-12 py-48 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold text-background tracking-tighter leading-none">
          Still Have <br /> Questions?
        </h2>
        <p className="text-xl text-background/60 mono max-w-2xl mx-auto font-light">
          We've documented every part of our process in the documentation section of our home page.
        </p>
        <Link
          to="/#faq"
          className="inline-flex items-center justify-center px-10 py-5 bg-background text-foreground font-bold rounded-full hover:scale-105 transition-smooth uppercase tracking-tighter"
        >
          View Documentation
        </Link>
      </div>
    </section>
  );
};

/* Main Products Page */
export default function Products() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <ProductsHero />
      <ProductsGrid />
      <ComparisonSection />
      <FAQTeaser />
    </div>
  );
}
