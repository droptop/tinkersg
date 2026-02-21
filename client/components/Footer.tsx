import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Terminal, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  {
    title: 'Directory',
    items: [
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Internal',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-background border-t border-border/50 relative overflow-hidden grid-bg"
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-12 py-24 md:py-32">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand section */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 gradient-rainbow opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Ff82880770fb2433b816220808d99f7a7?format=webp&width=100" 
                  alt="Tinkertorium Logo" 
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
              <span className="font-black text-2xl text-foreground tracking-tighter">Tinkertorium</span>
            </Link>
            <p className="text-muted-foreground text-lg mono font-light leading-relaxed max-w-md">
              AI-first creative agency building the next generation of digital infrastructure. Design, build, and deploy at scale.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:hello@tinkertorium.com"
                className="flex items-center space-x-4 text-foreground/60 hover:text-accent transition-smooth mono text-xs uppercase tracking-widest group"
              >
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent">
                  <Mail className="w-3 h-3" />
                </div>
                <span>hello@tinkertorium.com</span>
              </a>
              <div className="flex items-center space-x-4 text-foreground/60 mono text-xs uppercase tracking-widest">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                  <Globe className="w-3 h-3" />
                </div>
                <span>Singapore // Global</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-12">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="space-y-8">
                <h3 className="mono text-[10px] uppercase tracking-[0.4em] text-foreground/30">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-xl font-bold text-foreground/60 hover:text-foreground transition-smooth tracking-tighter"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Legal and social */}
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <p className="mono text-[10px] uppercase tracking-[0.2em] opacity-30">
              &copy; 2024 Tinkertorium // Systems Active
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/40 hover:text-accent transition-smooth" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-foreground/40 hover:text-accent transition-smooth" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Privacy links */}
          <div className="flex space-x-10">
            <a href="#" className="mono text-[10px] uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity">
              Privacy_Policy
            </a>
            <a href="#" className="mono text-[10px] uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity">
              Terms_Of_Service
            </a>
          </div>
        </div>
      </div>

      {/* Decorative tech bar */}
      <div className="h-1 gradient-rainbow w-full opacity-50" />
    </motion.footer>
  );
};
