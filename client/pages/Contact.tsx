import { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2, Terminal, Activity, Cpu } from 'lucide-react';

/* Tech Metadata Label */
const TechLabel = ({ text, side = 'left' }: { text: string, side?: 'left' | 'right' }) => (
  <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} p-10 opacity-20 hidden lg:block`}>
    <div className="flex items-center gap-4 mono text-[10px] uppercase tracking-[0.5em]">
      <div className="w-12 h-[1px] bg-foreground" />
      {text}
    </div>
  </div>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-64 pb-48 px-6 sm:px-10 lg:px-12 grid-bg">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="w-24 h-24 bg-foreground text-background rounded-full mx-auto flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter">DATA_RCVD</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mono font-light">
              Transmission successful. Our team will initialize contact within 24 standard cycles.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-smooth uppercase tracking-tighter"
          >
            New Transmission
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-64 pb-48 px-6 sm:px-10 lg:px-12 bg-background relative overflow-hidden grid-bg">
      <TechLabel text="INIT_HANDSHAKE // 005" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <div className="mono text-xs text-accent uppercase tracking-widest">Connect</div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Start the <br />
                <span className="text-gradient-rainbow">Cycle.</span>
              </h1>
              <p className="text-xl text-muted-foreground mono font-light leading-relaxed max-w-md">
                Whether you're starting from scratch or scaling an existing product, we're here to help you design what converts.
              </p>
            </div>

            <div className="space-y-10 pt-10 border-t border-border/50">
              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-smooth">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Electronic_Mail</p>
                  <a href="mailto:hello@tinkertorium.com" className="text-xl font-bold tracking-tight hover:text-accent transition-smooth">
                    hello@tinkertorium.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-smooth">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Voice_Comms</p>
                  <a href="tel:+6597368403" className="text-xl font-bold tracking-tight hover:text-accent transition-smooth">
                    +65 9736 8403
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-smooth">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest opacity-40 mb-1">Physical_Node</p>
                  <p className="text-xl font-bold tracking-tight">Singapore // Global</p>
                </div>
              </div>
            </div>

            <div className="pt-10 japanese-vertical mono text-[10px] opacity-10 tracking-[1.5em] leading-none uppercase">
              お問い合わせ // 接続中
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label htmlFor="name" className="mono text-[10px] uppercase tracking-widest opacity-40">User_Identity</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter name..."
                    className="w-full bg-transparent border-b border-border/50 py-4 text-2xl font-bold placeholder:opacity-20 focus:outline-none focus:border-accent transition-smooth"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="mono text-[10px] uppercase tracking-widest opacity-40">Electronic_Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter email..."
                    className="w-full bg-transparent border-b border-border/50 py-4 text-2xl font-bold placeholder:opacity-20 focus:outline-none focus:border-accent transition-smooth"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="subject" className="mono text-[10px] uppercase tracking-widest opacity-40">Subject_Header</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Inquiry type..."
                  className="w-full bg-transparent border-b border-border/50 py-4 text-2xl font-bold placeholder:opacity-20 focus:outline-none focus:border-accent transition-smooth"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="project" className="mono text-[10px] uppercase tracking-widest opacity-40">Project_Parameters</label>
                <textarea
                  id="project"
                  required
                  rows={4}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full bg-transparent border-b border-border/50 py-4 text-2xl font-bold placeholder:opacity-20 focus:outline-none focus:border-accent transition-smooth resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-foreground text-background font-black rounded-full overflow-hidden transition-smooth disabled:opacity-50"
              >
                <div className="absolute inset-0 gradient-rainbow opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center text-xl uppercase tracking-tighter">
                  {loading ? 'Processing...' : 'Send Transmission'}
                  {!loading && <Send className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
