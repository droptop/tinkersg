import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  path: string;
}

export default function PlaceholderPage({ title, description, path }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Placeholder graphic */}
        <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl mx-auto flex items-center justify-center">
          <div className="w-12 h-12 bg-muted rounded-lg" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}

        <div className="pt-8 space-y-4">
          <p className="text-muted-foreground">
            This page is being built. Continue chatting with your assistant to request content for this section.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-smooth"
          >
            Back to home
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
