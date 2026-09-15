'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Phone, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-white relative overflow-hidden">
      {/* Delicate top gradient border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blush-400 via-blush-500 to-rosewood-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="w-10 h-10 rounded-full bg-blush-500/20 border border-blush-400/40 flex items-center justify-center text-blush-400">
                🌸
              </span>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wide text-white block">
                  {CONTACT_INFO.businessName}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-blush-300 block">
                  Artisan Floral Studio
                </span>
              </div>
            </div>

            <p className="font-serif italic text-blush-200 text-base max-w-sm">
              "{CONTACT_INFO.tagline}"
            </p>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Crafting everlasting crochet and satin ribbon flower bouquets for meaningful celebrations across the Philippines. Made with care, precision, and heartfelt dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-blush-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-blush-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#bouquets" className="hover:text-blush-300 transition-colors">
                  Bouquets
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blush-300 transition-colors">
                  Artisan Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blush-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blush-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blush-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-blush-300">
              Connect With Us
            </h4>

            <div className="space-y-2.5 text-sm text-gray-300">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform">
                  <Facebook className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Facebook</span>
                  <span className="text-sm font-medium text-white group-hover:text-blush-300 transition-colors">
                    Crafts by Criselyn
                  </span>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Contact Number</span>
                  <span className="text-sm font-medium text-white group-hover:text-blush-300 transition-colors">
                    {CONTACT_INFO.phoneFormatted}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Crafts by Criselyn. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-gray-400">
              <span>Handcrafted with</span>
              <Heart className="w-3.5 h-3.5 text-blush-400 fill-blush-400 inline" />
              <span>in the Philippines</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
