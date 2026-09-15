'use client';

import React from 'react';
import { Scissors, Heart, Gift, Sparkles } from 'lucide-react';
import { TRUST_HIGHLIGHTS } from '@/data/trustHighlights';

const iconMap = {
  Scissors: Scissors,
  Heart: Heart,
  Gift: Gift,
  Sparkles: Sparkles,
};

export const TrustHighlights: React.FC = () => {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-blush-100 p-6 sm:p-8 shadow-soft-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blush-100/60">
          {TRUST_HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blush-100 to-blush-50 border border-blush-200/60 flex items-center justify-center text-blush-600 group-hover:scale-110 group-hover:bg-blush-200 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-charcoal-900 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
