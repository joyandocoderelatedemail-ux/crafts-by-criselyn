'use client';

import React from 'react';
import { MessageCircle, Heart, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

export const OrderSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blush-600 via-blush-500 to-blush-700 text-white shadow-soft-lg p-8 sm:p-12 lg:p-16 text-center">
          {/* Subtle background glow accents */}
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blush-900/20 blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-6 border border-white/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handmade Just For You</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Give Something Special?
          </h2>

          {/* Text */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blush-100 max-w-2xl mx-auto font-light leading-relaxed">
            Choose a handmade crochet bouquet and make someone's day a little more beautiful.
          </p>

          {/* 3 Step Process */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
              <span className="text-xs font-serif font-bold text-blush-200">STEP 01</span>
              <h4 className="text-sm font-semibold text-white mt-1">Pick Your Design</h4>
              <p className="text-xs text-blush-100/90 mt-0.5">Browse our roses, sunflowers, or custom options.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
              <span className="text-xs font-serif font-bold text-blush-200">STEP 02</span>
              <h4 className="text-sm font-semibold text-white mt-1">Message Us</h4>
              <p className="text-xs text-blush-100/90 mt-0.5">Tell us your preferred colors, date, and wrapping.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
              <span className="text-xs font-serif font-bold text-blush-200">STEP 03</span>
              <h4 className="text-sm font-semibold text-white mt-1">Handcrafted with Love</h4>
              <p className="text-xs text-blush-100/90 mt-0.5">Criselyn carefully crafts and preps your order.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full text-base font-semibold text-blush-700 bg-white hover:bg-blush-50 shadow-soft-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Heart className="w-4 h-4 fill-blush-500 text-blush-500" />
              <span>Order Now</span>
              <ArrowRight className="w-4 h-4 text-blush-500" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Us</span>
            </a>
          </div>

          {/* Quick contact reminder */}
          <p className="mt-6 text-xs text-blush-200">
            Direct orders & inquiries via Facebook Messenger or SMS: {CONTACT_INFO.phoneFormatted}
          </p>
        </div>
      </div>
    </section>
  );
};
