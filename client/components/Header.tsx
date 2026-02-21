import { Link } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-10 h-10 flex items-center justify-center relative">
              <div className="absolute inset-0 gradient-rainbow opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2Ff82880770fb2433b816220808d99f7a7?format=webp&width=100" 
                alt="Tinkertorium Logo" 
                className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-smooth"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-foreground leading-none tracking-tighter">Tinkertorium</span>
              <span className="mono text-[8px] uppercase tracking-[0.3em] opacity-40 leading-none mt-1">Creative // Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-5 py-2 mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-smooth relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-6">
              <div className="h-4 w-[1px] bg-border/50" />
              <ThemeSwitcher />
            </div>
            
            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-8 py-3 bg-foreground text-background mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-smooth"
            >
              Initialize Project
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground/60 hover:text-foreground transition-smooth"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-2xl p-10 z-50">
            <div className="flex flex-col space-y-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-4xl font-black tracking-tighter hover:text-accent transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-10 space-y-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-8 py-5 bg-foreground text-background font-bold rounded-full text-lg uppercase tracking-tighter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a call
                </Link>
                <div className="flex justify-center">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
