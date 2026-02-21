import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Palette, Code, Brain, CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Price } from '@/contexts/CurrencyContext';

/* Hero Section */
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent rounded-full blur-3xl w-96 h-96 -top-48 -right-48" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Design that Converts
          </h1>
        </div>

        {/* Hero image section */}
        <div className="mt-8 md:mt-12 relative aspect-video">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa81fac9c3bae4b51ace81c3349c8dc9d%2F53ae044003c9478c97e1d1df3132a688?format=webp&width=1600"
            alt="Tinkertorium creative work"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center mt-12 space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We work with founders and operators who see design as a growth engine. From product to platform to hardware hybrids, we build systems that move businesses forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-smooth"
            >
              Book a call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Social Proof Strip */
const SocialProofSection = () => {
  const clients = ['Blueair', 'Phonetradr', 'Marshall', 'Job Flow'];
  
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading brands</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client) => (
            <div key={client} className="text-center">
              <p className="font-semibold text-foreground">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Services Grid */
const ServicesGrid = () => {
  const services = [
    {
      icon: Brain,
      title: 'Brand and Identity',
      description: 'Strategy, positioning, visual identity systems designed for growth.',
    },
    {
      icon: Palette,
      title: 'Product Design and UX',
      description: 'Discovery-led design that solves real problems and delights users.',
    },
    {
      icon: Code,
      title: 'Design Implementation',
      description: 'Component-based builds, CMS setup, performance, and accessibility.',
    },
    {
      icon: Zap,
      title: 'AI Enabled Content',
      description: 'Messaging systems, content engines, and marketing at scale.',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything your brand needs to move the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-smooth group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-accent hover:gap-2 transition-smooth text-sm font-medium"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Process Section */
const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Align', description: 'Understand your goals, audience, and constraints.' },
    { number: '02', title: 'Design', description: 'Create strategy, messaging, and visual direction.' },
    { number: '03', title: 'Implement', description: 'Build, test, and optimise for performance.' },
    { number: '04', title: 'Grow', description: 'Measure, iterate, and scale what works.' },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">How we work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
              
              <div className="space-y-4">
                <div className="text-5xl font-bold text-accent/20">{step.number}</div>
                <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Products Teaser */
const ProductsSection = () => {
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
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Productised offers</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Pre-packaged solutions designed for speed and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-smooth flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-3">{product.name}</h3>
              <p className="text-muted-foreground mb-6">{product.outcome}</p>

              <div className="mb-8 flex-1">
                <p className="text-xs font-semibold text-muted-foreground mb-3">Includes:</p>
                <ul className="space-y-2">
                  {product.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-border pt-6">
                <div className="text-xl font-bold text-foreground">
                  <Price
                    amount={product.amount}
                    prefix="From "
                    suffix={product.suffix}
                  />
                </div>
                <Link
                  to="/products"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-smooth text-sm"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* FAQ Section */
const FAQSection = () => {
  const faqs = [
    {
      question: 'How long do projects typically take?',
      answer: 'Timeline varies by scope. Sprints are 1-2 weeks, projects range from 4-10 weeks, retainers are ongoing. We discuss timeline in the initial call.',
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'We work across sprints (fixed scope, 1-2 weeks), projects (4-10 weeks), and retainers (monthly). Pricing depends on complexity and deliverables. We provide clear estimates before starting.',
    },
    {
      question: 'How do you use AI in your work?',
      answer: 'AI powers our content generation, design iteration, and analysis. It speeds up ideation and testing, but humans drive strategy and final decisions. We\'re thoughtful about where AI adds value.',
    },
    {
      question: 'What happens after the project ends?',
      answer: 'We provide comprehensive handover documentation, component libraries, and CMS guides. We\'re available for questions and can support ongoing updates if needed.',
    },
    {
      question: 'Do you work with early-stage startups?',
      answer: 'Yes. We\'re comfortable with emerging tech and early-stage teams. Our productised sprints are great for proving concepts quickly.',
    },
    {
      question: 'Can we do ongoing work together?',
      answer: 'Absolutely. We offer retainer arrangements for brands needing regular support, from weekly content to quarterly strategy reviews.',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border border-border rounded-lg px-6 py-4 data-[state=open]:bg-card/50 transition-smooth"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent transition-smooth">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

/* Final CTA Section */
const CTASection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-accent/10 to-accent/5">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Let's talk about what you're building
        </h2>
        <p className="text-xl text-muted-foreground">
          Whether you need a brand refresh, product redesign, or full marketing overhaul—we're here to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-smooth text-lg"
        >
          Book a call
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
};

/* Main Home Page */
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SocialProofSection />
      <ServicesGrid />
      <ProcessSection />
      <ProductsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
