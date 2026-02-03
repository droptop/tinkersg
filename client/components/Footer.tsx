import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Services', href: '/services' },
      { label: 'Work', href: '/work' },
      { label: 'Products', href: '/products' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/50 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="font-bold text-lg text-foreground">Tinkertorium</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              AI-first creative agency. Design, build, and brand marketing that drives revenue.
            </p>
            <a
              href="mailto:hello@tinkertorium.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>hello@tinkertorium.com</span>
            </a>
          </div>

          {/* Navigation links */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground text-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Legal and social */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-muted-foreground">
            <p>&copy; 2024 Tinkertorium. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-foreground transition-smooth" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-foreground transition-smooth" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Privacy links */}
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Cookie banner placeholder */}
      <div className="bg-background border-t border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto text-xs text-muted-foreground">
          <p>Analytics and cookie preferences placeholder. GTM ID and tracking setup goes here.</p>
        </div>
      </div>
    </footer>
  );
};
