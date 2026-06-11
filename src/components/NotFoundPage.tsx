import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => { document.title = '404 — Page Not Found | AquaGlow'; }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-serif font-bold text-brand-aqua/20 mb-6">404</div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-4">Page not found</h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-3"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
