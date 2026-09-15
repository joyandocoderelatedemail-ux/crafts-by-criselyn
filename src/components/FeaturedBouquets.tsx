'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Eye, Sparkles, Heart } from 'lucide-react';
import { BOUQUET_PRODUCTS, Bouquet, CONTACT_INFO } from '@/data/bouquets';

interface FeaturedBouquetsProps {
  onSelectBouquet: (bouquet: Bouquet) => void;
}

export const FeaturedBouquets: React.FC<FeaturedBouquetsProps> = ({ onSelectBouquet }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'roses' | 'mixed'>('all');

  const filteredBouquets = activeTab === 'all'
    ? BOUQUET_PRODUCTS
    : BOUQUET_PRODUCTS.filter((b) => b.category === activeTab);

  return (
    <section id="bouquets" className="py-20 lg:py-28 bg-white relative">
      {/* Decorative floral accents */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-blush-50/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-cream-50/80 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blush-50 border border-blush-200 text-blush-700 text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blush-500" />
            <span>Artisan Floral Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight">
            Our Handmade Bouquets
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 font-light">
            Little bundles of happiness, made stitch by stitch.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-blush-50/80 border border-blush-100/80 shadow-soft-sm">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white text-blush-700 shadow-sm'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              All Bouquets ({BOUQUET_PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('roses')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'roses'
                  ? 'bg-white text-blush-700 shadow-sm'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              Rose Bouquets
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mixed')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'mixed'
                  ? 'bg-white text-blush-700 shadow-sm'
                  : 'text-gray-600 hover:text-charcoal-900'
              }`}
            >
              Sunflowers & Plush
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {filteredBouquets.map((bouquet) => (
            <article
              key={bouquet.id}
              className="group bg-white rounded-3xl overflow-hidden border border-blush-100 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Container with Zoom & Tag */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush-50/50 cursor-pointer"
                onClick={() => onSelectBouquet(bouquet)}
              >
                <Image
                  src={bouquet.image}
                  alt={`${bouquet.name} - Handmade crochet bouquet by Crafts by Criselyn`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-white/95 text-blush-700 shadow-soft-sm border border-blush-100 backdrop-blur-sm">
                    <Heart className="w-3 h-3 text-blush-500 fill-blush-400" />
                    <span>{bouquet.tag}</span>
                  </span>
                </div>

                {/* Hover Quick-view pill button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectBouquet(bouquet);
                    }}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/95 text-charcoal-900 shadow-soft hover:bg-blush-500 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-blush-600 block mb-1">
                    {bouquet.categoryLabel}
                  </span>
                  <h3
                    onClick={() => onSelectBouquet(bouquet)}
                    className="font-serif text-xl font-medium text-charcoal-900 hover:text-blush-600 transition-colors cursor-pointer leading-snug"
                  >
                    {bouquet.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {bouquet.shortDescription}
                  </p>
                </div>

                {/* Price Area & Action Buttons */}
                <div className="mt-5 pt-4 border-t border-blush-50">
                  <div className="flex items-center justify-between mb-3.5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                        Pricing
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-blush-600 font-serif italic">
                        {bouquet.priceDisplay}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cream-100 text-amber-800 font-medium">
                      Custom Stems
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectBouquet(bouquet)}
                      className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 bg-blush-50 hover:bg-blush-100/70 border border-blush-200/60 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-blush-500" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={CONTACT_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 shadow-sm transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Order Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blush-50 via-white to-cream-50 border border-blush-100/90 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-soft-sm flex items-center justify-center text-blush-500 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-charcoal-900">
                Looking for custom colors or a personalized bouquet size?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Criselyn can customize wrapping paper, stem combinations, and ribbon shades just for you.
              </p>
            </div>
          </div>
          <a
            href={CONTACT_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-charcoal-900 hover:bg-blush-600 shadow-soft transition-colors"
          >
            <span>Inquire Custom Arrangement</span>
          </a>
        </div>
      </div>
    </section>
  );
};
