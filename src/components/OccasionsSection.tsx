'use client';

import React from 'react';
import { Cake, Heart, Flame, GraduationCap, Flower, Sparkles, MessageSquareHeart } from 'lucide-react';
import { OCCASIONS_DATA } from '@/data/occasions';
import { CONTACT_INFO } from '@/data/bouquets';

const occasionIcons = {
  birthday: Cake,
  anniversary: Heart,
  valentine: Flame,
  graduation: GraduationCap,
  'mothers-day': Flower,
  'just-because': Sparkles,
};

export const OccasionsSection: React.FC = () => {
  return (
    <section id="occasions" className="py-20 lg:py-28 bg-blush-50/70 relative overflow-hidden border-y border-blush-100/80">
      {/* Subtle background flourishes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-rosewood-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white text-blush-700 text-xs font-medium tracking-wide uppercase mb-3 shadow-soft-sm border border-blush-200/80">
            <Heart className="w-3.5 h-3.5 text-blush-500 fill-blush-200" />
            <span>Celebrations & Milestones</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight">
            Made for Every Special Moment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-light">
            No matter the milestone or spontaneous surprise, a handmade crochet bouquet says it with warmth and permanence.
          </p>
        </div>

        {/* 6 Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS_DATA.map((item) => {
            const IconComponent = occasionIcons[item.iconType];
            return (
              <div
                key={item.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-7 border border-blush-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blush-100/80 flex items-center justify-center text-blush-600 group-hover:scale-110 group-hover:bg-blush-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-blush-500 bg-blush-50 px-2.5 py-1 rounded-full">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-charcoal-900 group-hover:text-blush-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blush-100/70">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                    Recommended Palette
                  </span>
                  <p className="text-xs text-blush-700 font-medium">
                    {item.recommendedColors}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            Have another occasion in mind? We customize themes for bridal showers, engagements, teacher appreciation, and more!
          </p>
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-4 text-sm font-semibold text-blush-600 hover:text-blush-700 underline decoration-blush-300 underline-offset-4"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>Chat with Criselyn about your custom occasion</span>
          </a>
        </div>
      </div>
    </section>
  );
};
