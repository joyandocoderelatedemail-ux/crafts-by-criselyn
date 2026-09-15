'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div
        className="absolute top-1/3 left-0 -ml-24 w-80 h-80 bg-blush-100/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft-lg border-4 border-white bg-blush-50 group">
              <Image
                src="/images/bouquets/sunshine-tulip-harmony.jpg"
                alt="Handcrafted sunflower and pink tulips by Crafts by Criselyn"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Decorative corner tag */}
              <div className="absolute top-4 left-4 glass-card px-3.5 py-1.5 rounded-full border border-white/80 shadow-soft flex items-center space-x-1.5">
                <Heart className="w-3.5 h-3.5 text-blush-500 fill-blush-400" />
                <span className="text-xs font-semibold text-charcoal-900">Handmade with Heart</span>
              </div>

              {/* Founder / Artisan signature pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card border border-white/80 shadow-soft">
                <p className="text-xs uppercase tracking-widest text-blush-600 font-bold">
                  Boutique Artisan
                </p>
                <p className="font-serif text-lg font-bold text-charcoal-900">
                  {CONTACT_INFO.ownerName}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Creator & Lead Florist behind Crafts by Criselyn
                </p>
              </div>
            </div>

            {/* Subtle decorative frame effect */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-blush-200/50 rounded-3xl -z-10 blur-xl"
              aria-hidden="true"
            />
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-50 border border-blush-200/80 text-blush-700 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blush-500" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight leading-tight">
              About Crafts by Criselyn
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-blush-700 italic font-medium leading-snug">
              Crafted by hand. Made with heart.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Crafts by Criselyn creates handmade crochet bouquets designed to turn special
                moments into lasting memories.
              </p>
              <p>
                Unlike traditional flowers, crochet bouquets can be treasured for a long time —
                making them a thoughtful and unique gift for someone special.
              </p>
            </div>

            {/* Three key pillars */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-blush-50/50 border border-blush-100/60">
                <CheckCircle2 className="w-5 h-5 text-blush-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-900">Enduring Keepsakes</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Will never wilt, dry up, or fade away.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-blush-50/50 border border-blush-100/60">
                <CheckCircle2 className="w-5 h-5 text-blush-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-900">Custom Colorways</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Crafted to your recipient's favorite shades.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#bouquets"
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Discover Our Bouquets</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
