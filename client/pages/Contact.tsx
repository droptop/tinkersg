import { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2 } from 'lucide-react';

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
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center space-y-8 p-12 rounded-3xl border border-border bg-card/50">
          <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Message received!</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for reaching out. We've received your project details and will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-smooth"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Let's talk about<br />your project
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Whether you're starting from scratch or scaling an existing product, we're here to help you design what sells.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email us</p>
                  <a href="mailto:hello@tinkertorium.com" className="text-lg font-medium text-foreground hover:text-accent transition-smooth">
                    hello@tinkertorium.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Call us</p>
                  <a href="tel:+6597368403" className="text-lg font-medium text-foreground hover:text-accent transition-smooth">
                    +65 9736 8403
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-smooth">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium text-foreground">
                    Singapore-based, Global reach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card/50 border border-border p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-foreground">Tell us about your project</label>
                <textarea
                  id="project"
                  required
                  rows={6}
                  placeholder="What are you building? Tell us about your goals, timeline, and budget."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-smooth resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-smooth disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
