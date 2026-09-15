'use client';

import React from 'react';
import { Clock, Sparkles, Gem, HeartHandshake } from 'lucide-react';
import { BENEFITS_DATA } from '@/data/benefits';

const iconMap = {
  Clock: Clock,
  SparkleHand: Sparkles,
  Gem: Gem,
  HeartHand: HeartHandshake,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blush-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blush-100 text-blush-700 text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blush-500" />
            <span>The Crochet Difference</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight">
            A Bouquet That Lasts Beyond the Moment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 font-light">
            Traditional fresh flowers fade in a few days. Our crochet and satin creations stay timeless forever.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {BENEFITS_DATA.map((benefit, idx) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <div
                key={benefit.id}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-blush-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Decorative subtle numbering */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blush-100 to-blush-50 border border-blush-200/60 flex items-center justify-center text-blush-600 group-hover:bg-blush-500 group-hover:text-white transition-colors duration-300 shadow-soft-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-serif font-bold text-blush-300">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-900 group-hover:text-blush-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blush-50/80">
                  <span className="text-xs text-blush-600 font-medium">
                    {benefit.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
