'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Heart, ArrowRight, ShieldCheck, Flower2 } from 'lucide-react';
import { CONTACT_INFO } from '@/data/bouquets';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-blush-50/70 via-white to-white"
    >
      {/* Soft pink ambient background blobs */}
      <div
        className="absolute top-10 right-0 -mr-24 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 -ml-28 w-80 h-80 bg-rosewood-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-cream-100/60 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Delicate crochet decorative line pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#f44a76_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Small badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100/90 border border-blush-200/80 text-blush-800 text-xs sm:text-sm font-medium shadow-soft-sm transform transition-transform hover:scale-105 duration-200">
              <Sparkles className="w-4 h-4 text-blush-500 animate-spin-slow" />
              <span>Handmade Crochet Bouquets</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
              <span className="text-blush-600 font-normal">Everlasting Keepsakes</span>
            </div>

            {/* Large headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight text-charcoal-900 leading-[1.12]">
              Handmade with Love,{' '}
              <span className="relative inline-block text-blush-600 italic font-normal">
                Crafted to Last.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-blush-200 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,7 Q50,14 100,7 Q50,0 0,7 Z" />
                </svg>
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
              Beautiful crochet bouquets handmade with care — perfect for birthdays, anniversaries,
              gifts, special occasions, or simply showing someone you care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#bouquets"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-blush-500 via-blush-600 to-blush-700 hover:from-blush-600 hover:to-blush-800 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Browse Bouquets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full text-base font-medium text-charcoal-800 bg-white hover:bg-blush-50 border border-blush-200 hover:border-blush-300 shadow-soft-sm hover:shadow-soft transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Heart className="w-4 h-4 text-blush-500 fill-blush-100" />
                <span>Order Now</span>
              </a>
            </div>

            {/* Trust highlights mini-bar */}
            <div className="pt-4 border-t border-blush-100/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-xs text-gray-600">
              <div className="flex items-center space-x-1.5">
                <span className="p-1 rounded-md bg-blush-100 text-blush-600">
                  <Flower2 className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">Never Wilts</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="p-1 rounded-md bg-blush-100 text-blush-600">
                  <Heart className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">100% Handcrafted</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="p-1 rounded-md bg-blush-100 text-blush-600">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium">Custom Colors</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Soft decorative halo backdrops */}
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-blush-200 via-blush-100 to-cream-100 rounded-[2.5rem] transform rotate-2 blur-md opacity-70"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-2 bg-white/60 rounded-[2.5rem] transform -rotate-1 shadow-soft"
              aria-hidden="true"
            />

            {/* Main bouquet image card */}
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft-lg border-4 border-white bg-white group">
              <Image
                src="/images/bouquets/blush-crimson-elegance.jpg"
                alt="Handcrafted Blush and Crimson Satin Rose Bouquet by Crafts by Criselyn"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Subtle top & bottom shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-60" />

              {/* Bottom image overlay pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-card border border-white/80 shadow-soft flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-semibold text-charcoal-900">
                    Blush & Crimson Elegance
                  </p>
                  <p className="text-[11px] text-blush-600 font-medium">
                    Handmade Satin & Ribbon Bloom
                  </p>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-blush-100 text-blush-700 font-medium">
                  Signature
                </span>
              </div>
            </div>

            {/* Floating Pill Badge 1 (Top Left) */}
            <div className="absolute -top-4 -left-4 sm:-left-6 glass-card px-4 py-2.5 rounded-2xl shadow-soft border border-blush-100 flex items-center space-x-2.5 animate-float-slow">
              <span className="w-8 h-8 rounded-full bg-blush-100 flex items-center justify-center text-blush-600 text-sm">
                🌸
              </span>
              <div>
                <p className="text-xs font-semibold text-charcoal-900">100% Everlasting</p>
                <p className="text-[10px] text-gray-500">Cherished forever</p>
              </div>
            </div>

            {/* Floating Pill Badge 2 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 glass-card px-4 py-2.5 rounded-2xl shadow-soft border border-blush-100 flex items-center space-x-2.5 animate-float-reverse">
              <span className="w-8 h-8 rounded-full bg-cream-200/80 flex items-center justify-center text-amber-600 text-sm">
                ✨
              </span>
              <div>
                <p className="text-xs font-semibold text-charcoal-900">Handmade with Heart</p>
                <p className="text-[10px] text-gray-500">Stitch by stitch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
