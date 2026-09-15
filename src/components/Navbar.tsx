'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Bouquets', href: '#bouquets' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-soft border-b border-blush-100/80'
          : 'bg-white/70 backdrop-blur-sm py-4 border-b border-blush-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="group flex items-center space-x-2.5 transition-transform duration-200 hover:scale-[1.01]"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-blush-300 via-blush-200 to-blush-100 flex items-center justify-center text-blush-700 shadow-sm group-hover:rotate-12 transition-transform duration-300">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized floral crochet motif */}
                <path d="M12 2C10.5 4.5 10.5 7.5 12 9.5C13.5 7.5 13.5 4.5 12 2ZM6.5 6C6.5 8.5 9 10 10.5 11C9.5 9.5 8 7 6.5 6ZM17.5 6C16 7 14.5 9.5 13.5 11C15 10 17.5 8.5 17.5 6ZM5 13.5C7.5 13.5 9.5 12 11 10.5C9.5 11.5 7 13 5 13.5ZM19 13.5C17 13 14.5 11.5 13 10.5C14.5 12 16.5 13.5 19 13.5ZM9.5 17.5C10 16 11.5 14.5 12 13.5C12.5 14.5 14 16 14.5 17.5C13 16.5 11 16.5 9.5 17.5Z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </span>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-charcoal-900 block leading-tight">
                Crafts by Criselyn
              </span>
              <span className="text-[10px] tracking-widest uppercase text-blush-600 font-medium block">
                Handmade Crochet Bouquets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blush-600 transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blush-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Order Now CTA & Phone Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center space-x-1.5 text-xs font-medium text-gray-600 hover:text-blush-600 px-3 py-2 rounded-full border border-blush-100 hover:border-blush-200 bg-white/80 transition-colors"
              title="Call Criselyn"
            >
              <Phone className="w-3.5 h-3.5 text-blush-500" />
              <span>{CONTACT_INFO.phoneFormatted}</span>
            </a>

            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 shadow-sm hover:shadow-soft transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-blush-500 hover:bg-blush-600 transition-colors"
            >
              Order Now
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-blush-600 hover:bg-blush-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blush-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-b border-blush-100 animate-fadeIn">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-blush-600 hover:bg-blush-50/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-blush-100 flex flex-col space-y-2.5">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blush-500 to-blush-600 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on Facebook</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl text-xs font-medium text-gray-700 bg-blush-50/80 hover:bg-blush-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blush-500" />
                <span>Call {CONTACT_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
