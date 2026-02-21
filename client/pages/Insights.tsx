import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag, Search, Mail, Send, CheckCircle2, Terminal, Activity, Cpu } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

/* Tech Metadata Label */
const TechLabel = ({ text, side = 'left' }: { text: string, side?: 'left' | 'right' }) => (
  <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} p-10 opacity-20 hidden lg:block`}>
    <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.5em]">
      <div className="w-12 h-[1px] bg-foreground" />
      {text}
    </div>
  </div>
);

/* Insights Hero */
const InsightsHero = () => {
  const { ref, className } = useReveal();
  return (
    <section ref={ref} className={`relative pt-64 pb-48 px-6 sm:px-10 lg:px-12 overflow-hidden grid-bg border-b border-border/50 ${className}`}>
      <TechLabel text="INSIGHT_NODES // 009" />
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-accent/30 mono text-[10px] text-accent uppercase tracking-widest bg-accent/5">
            LATEST_INSIGHTS // 0x03
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
            Design<br />
            <span className="text-gradient-rainbow">Intelligence.</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed mono font-light">
            Thoughts on design systems, AI integration, and the future of digital execution.
          </p>
        </div>
      </div>
    </section>
  );
};

/* Article Card */
const ArticleCard = ({ 
  title, 
  category, 
  date, 
  readTime, 
  image, 
  description, 
  id 
}: { 
  title: string, 
  category: string, 
  date: string, 
  readTime: string, 
  image: string, 
  description: string, 
  id: string 
}) => {
  const { ref, className } = useReveal();
  return (
    <article ref={ref} className={`group flex flex-col space-y-8 p-10 border border-border/50 rounded-3xl hover:bg-accent/[0.02] transition-smooth relative overflow-hidden ${className}`}>
      <div className="absolute top-8 right-8 mono text-[10px] opacity-20 group-hover:opacity-50 transition-opacity">DOC_ID: {id}</div>
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110 brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 bg-background/80 backdrop-blur-md border border-border/50 rounded-full mono text-[10px] text-accent uppercase tracking-widest">
           {category}
        </div>
      </div>

      <div className="space-y-6 flex-1">
        <div className="flex items-center gap-6 mono text-[10px] uppercase tracking-widest opacity-40">
           <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {readTime}</div>
           <div className="flex items-center gap-2"><Tag className="w-3 h-3" /> {date}</div>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tighter group-hover:text-accent transition-smooth leading-tight">{title}</h3>
          <p className="text-muted-foreground mono text-sm opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">{description}</p>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50">
        <Link
          to={`/insights/${id}`}
          className="inline-flex items-center text-[10px] mono uppercase tracking-[0.2em] text-accent group-hover:gap-3 transition-smooth"
        >
          Read Full Document <ArrowRight className="w-3 h-3 ml-2" />
        </Link>
      </div>
    </article>
  );
};

/* Insights List */
const InsightsGrid = () => {
  const articles = [
    {
      id: '01',
      title: 'Design as a Growth Engine',
      category: 'STRATEGY',
      date: 'May 12, 2024',
      readTime: '12 MIN',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fd03d6d532a264a758410d540e1e6992d?format=webp&width=800',
      description: 'How to move beyond aesthetic design and leverage visual systems as a core business driver.',
    },
    {
      id: '02',
      title: 'AI Workflows for Modern Teams',
      category: 'AI_INTEL',
      date: 'Apr 24, 2024',
      readTime: '08 MIN',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Fa950d26850f242558572183f9872580c?format=webp&width=800',
      description: 'A deep dive into how we use generative AI to automate content and scale design cycles.',
    },
    {
      id: '03',
      title: 'Building High-Fidelity Design Systems',
      category: 'ENGINEERING',
      date: 'Mar 15, 2024',
      readTime: '15 MIN',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F53ae044003c9478c97e1d1df3132a688?format=webp&width=800',
      description: 'Protocol-based systems for bridging the gap between Figma and React implementation.',
    }
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-12 py-32 grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Newsletter Section */
const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
       setLoading(false);
       setSubmitted(true);
       setEmail('');
    }, 1500);
  };

  return (
    <section className="px-6 sm:px-10 lg:px-12 py-48 bg-foreground relative overflow-hidden border-t border-border/50">
       <div className="absolute inset-0 circuit-bg opacity-10" />
       <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-background tracking-tighter leading-none uppercase italic">Subscribe to <br />Intelligence</h2>
            <p className="text-xl text-background/60 mono max-w-2xl mx-auto font-light leading-relaxed">
               Receive monthly insights on design execution and AI directly to your terminal.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto pt-10">
               <input
                 type="email"
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="ENTER_EMAIL_NODE"
                 className="flex-1 bg-transparent border-b border-background/20 py-4 text-2xl font-bold text-background placeholder:opacity-20 focus:outline-none focus:border-accent transition-smooth"
               />
               <button
                 type="submit"
                 disabled={loading}
                 className="group relative inline-flex items-center justify-center px-12 py-6 bg-background text-foreground font-black rounded-full overflow-hidden transition-smooth text-xl uppercase tracking-tighter"
               >
                 <div className="absolute inset-0 gradient-rainbow opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative z-10 flex items-center">
                    {loading ? 'Processing...' : 'INITIALIZE'}
                    {!loading && <Send className="w-5 h-5 ml-3" />}
                 </span>
               </button>
            </form>
          ) : (
            <div className="p-10 bg-background/5 border border-background/20 rounded-3xl flex flex-col items-center space-y-6 animate-pulse">
               <CheckCircle2 className="w-16 h-16 text-accent" />
               <p className="text-2xl font-bold text-background mono tracking-tighter">DATA_RCVD // NODE_ACTIVE</p>
               <button
                 onClick={() => setSubmitted(false)}
                 className="text-background/40 hover:text-accent mono text-xs uppercase tracking-widest pt-4"
               >
                 New Subscription
               </button>
            </div>
          )}
       </div>
    </section>
  );
};

/* Main Insights Page */
export default function Insights() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <InsightsHero />
      <InsightsGrid />
      <NewsletterSection />
    </div>
  );
}
