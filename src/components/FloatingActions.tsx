'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2.5 animate-fadeIn"
    >
      {/* Tooltip hint on hover */}
      <div className="hidden sm:block glass-card px-3 py-1.5 rounded-full text-xs font-medium text-charcoal-900 border border-blush-200 shadow-soft">
        <span className="flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Criselyn is available for inquiries!</span>
        </span>
      </div>

      <div className="flex items-center space-x-2">
        {/* Quick Call button on mobile/desktop */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="w-11 h-11 rounded-full bg-white hover:bg-blush-50 text-emerald-600 border border-emerald-200 shadow-soft flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Call Criselyn directly"
          title="Call Criselyn"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Facebook Messenger button */}
        <a
          href={CONTACT_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 text-white shadow-soft-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          aria-label="Message on Facebook"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-semibold pr-1">Message Us</span>
        </a>
      </div>
    </aside>
  );
};
