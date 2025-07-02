import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const CreativeDirectionPage: React.FC = () => {
  // Redirect to external portfolio site
  useEffect(() => {
    // Record analytics event if needed before redirect
    if (window.gtag) {
      window.gtag('event', 'portfolio_redirect', {
        'event_category': 'outbound',
        'event_label': 'Creative Direction Portfolio',
      });
    }
    
    // Redirect to external site after a brief delay
    const timer = setTimeout(() => {
      window.location.href = 'https://shnwzrf.com/';
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Return a loading state or redirect component
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-violet/20 rounded-full filter blur-[100px] animate-glow"></div>
      <div className="glass-card p-8 md:p-12 text-center max-w-md relative z-10">
        <h1 className="text-3xl font-semibold mb-4">
          <span className="gradient-text">Redirecting</span>
        </h1>
        <p className="text-xl text-white/80 mb-6">
          Please wait while we redirect you to our Creative Direction portfolio...
        </p>
        <div className="w-12 h-12 rounded-full border-4 border-neutral-700 border-t-electric-violet animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default CreativeDirectionPage;