import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Palette, Award, History, Users, Phone } from 'lucide-react';

/* Hero Section */
const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent rounded-full blur-3xl w-96 h-96 -top-48 -right-48" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-3xl w-80 h-80 top-1/2 -left-40" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6">
          Small team, senior thinking,<br />hands-on delivery
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Tinkertorium is a design and development agency based in Singapore. Since 2007, we've been helping global brands and early-stage startups design, build, and ship digital products that drive revenue.
        </p>
      </div>
    </section>
  );
};

/* Our Story Section */
const OurStory = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-4">
              <History className="w-3 h-3 mr-2" />
              Established 2007
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2007 as Tinkertorium Pte Ltd, we began with a simple mission: to help companies navigate the rapidly evolving digital landscape through design-led execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our base in Singapore, we've expanded our reach to work with clients across the globe—from Swedish household names to South African startups and iconic consumer electronics brands.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we operate as an AI-first agency, integrating emerging technologies into our design and development workflows to deliver faster, more effective results for our partners.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
              <div className="text-3xl font-bold text-accent">17+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Countries Deployed</div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
              <div className="text-3xl font-bold text-accent">Global</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Client Base</div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
              <div className="text-3xl font-bold text-accent">AI-First</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Execution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Core Philosophy Section */
const CorePhilosophy = () => {
  const values = [
    {
      icon: Users,
      title: 'Senior Thinking',
      description: 'You work directly with experienced partners, not junior account managers. We bring 17+ years of expertise to every project.',
    },
    {
      icon: Zap,
      title: 'Execution Focused',
      description: "We don't just deliver slide decks. We build functional prototypes, cross-platform apps, and global e-commerce systems.",
    },
    {
      icon: Palette,
      title: 'Design-Led',
      description: "Everything we do starts with user experience and brand identity. We craft products that are as beautiful as they are functional.",
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: "From Singapore to Stockholm, we've built systems that operate in 50+ countries and serve millions of users.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How we operate</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our approach is built on seniority, speed, and a deep understanding of digital ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, idx) => {
          const Icon = value.icon;
          return (
            <div key={idx} className="space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* Global Impact / Client Showcase */
const GlobalImpact = () => {
  const impacts = [
    {
      client: 'Blueair',
      country: 'Sweden / Global',
      impact: 'Assisted in their digital transformation across 50+ countries. Designed the IFA award-winning Blueair Friend app and optimized global support systems.',
    },
    {
      client: 'Phonetradr',
      country: 'South Africa / Global',
      impact: 'Built the brand from the ground up—from logo and mascot to a high-converting cross-platform online experience and sales tools.',
    },
    {
      client: 'Marshall',
      country: 'Global',
      impact: 'A long-standing partnership providing technical illustrations and design for packaging and marketing across 10+ product launches.',
    },
    {
      client: 'Job Flow',
      country: 'Regional',
      impact: 'Developed a mobile-first brand and cross-platform app solution to help users find local work near their location.',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Global Impact</h2>
            <p className="text-lg text-muted-foreground">
              Our work spans industries and continents, delivering results that resonate worldwide.
            </p>
          </div>
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold text-sm">
            <Award className="w-4 h-4 mr-2" />
            IFA Best Show Award Winner
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-border bg-card hover:border-accent/50 transition-smooth group"
            >
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{item.country}</div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-smooth">{item.client}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Contact / Call to Action Section */
const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-border bg-gradient-to-br from-accent/5 via-primary/5 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Let's talk about your next project
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you're looking for a brand refresh, a global e-commerce rollout, or an AI-enabled content engine—we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-smooth text-lg"
          >
            Book a call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a
            href="tel:+6597368403"
            className="inline-flex items-center text-foreground hover:text-accent transition-smooth font-semibold group"
          >
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-smooth">
              <Phone className="w-4 h-4 text-accent" />
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
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <CorePhilosophy />
      <GlobalImpact />
      <ContactSection />
    </div>
  );
}
