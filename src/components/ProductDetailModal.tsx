'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle, Phone, Heart, Sparkles, Check, Flower2 } from 'lucide-react';
import { Bouquet, CONTACT_INFO } from '@/data/bouquets';

interface ProductDetailModalProps {
  bouquet: Bouquet | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  bouquet,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (bouquet) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bouquet, onClose]);

  if (!bouquet) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl my-8 border border-blush-100 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-soft transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Bouquet Image */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[460px] bg-blush-50/50">
          <Image
            src={bouquet.image}
            alt={bouquet.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-blush-700 shadow-soft-sm backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-500" />
              <span>{bouquet.tag}</span>
            </span>
          </div>
        </div>

        {/* Right: Details & Order CTA */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-blush-600 block mb-1">
              {bouquet.categoryLabel}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900 leading-tight">
              {bouquet.name}
            </h2>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light">
              {bouquet.fullDescription}
            </p>

            {/* Included Elements */}
            <div className="mt-5 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                Arrangement Features
              </span>
              <div className="flex flex-wrap gap-1.5">
                {bouquet.flowers.map((fl, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs bg-blush-50 text-blush-800 border border-blush-100"
                  >
                    <Flower2 className="w-3 h-3 text-blush-500" />
                    <span>{fl}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="mt-4 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">
                Color Palette
              </span>
              <div className="flex flex-wrap gap-1.5">
                {bouquet.colors.map((c, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full text-[11px] bg-cream-100 text-amber-900 font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Price section */}
            <div className="mt-6 p-4 rounded-2xl bg-blush-50/60 border border-blush-100/80">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block">
                Pricing & Inquiries
              </span>
              <p className="font-serif text-xl font-bold text-blush-700 italic mt-0.5">
                {bouquet.priceDisplay}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {bouquet.priceNote}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-4 border-t border-blush-100 space-y-2.5">
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 shadow-soft transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire This Bouquet on Facebook</span>
            </a>

            <div className="flex items-center justify-between text-xs text-gray-500 px-2">
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blush-600 underline">
                Call {CONTACT_INFO.phoneFormatted}
              </a>
              <span>Lead time: 2–5 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
