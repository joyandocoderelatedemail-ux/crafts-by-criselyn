'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, CONTACT_INFO } from '@/data/bouquets';

export const ImageShowcase: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
  }, [lightboxIndex]);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blush-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blush-100 text-blush-700 text-xs font-medium tracking-wide uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-blush-500 fill-blush-300" />
            <span>Artisan Lookbook</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight">
            Handmade Floral Showcase
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 font-light">
            A glimpse into our lovingly crafted crochet and ribbon bouquets. Click any photo to view in high detail.
          </p>
        </div>

        {/* Pinterest / Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg cursor-pointer bg-blush-50 transition-all duration-300 transform hover:-translate-y-1 ${
                index === 0
                  ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-[500px]'
                  : index === 3
                  ? 'md:col-span-2 aspect-[16/9] md:h-[280px]'
                  : 'aspect-[4/5] md:h-[280px]'
              }`}
            >
              <Image
                src={item.image}
                alt={`${item.title} - ${item.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Pill on top left */}
              <div className="absolute top-4 left-4 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-charcoal-800 backdrop-blur-sm shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Zoom pill indicator on top right */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-charcoal-800 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-serif text-xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-blush-100 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
                <div className="mt-3 flex items-center space-x-2 text-xs font-medium text-white/90">
                  <span className="underline decoration-blush-400 underline-offset-4">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image modal"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-soft transition-all focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-soft transition-all focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Arrow */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-charcoal-900 flex items-center justify-center shadow-soft transition-all focus:outline-none md:hidden"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Section */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[480px] bg-blush-50/30">
              <Image
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain p-2"
              />
            </div>

            {/* Sidebar Details Section */}
            <div className="w-full md:w-80 p-6 bg-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-blush-100">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-blush-100 text-blush-700 uppercase tracking-wider mb-2">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {GALLERY_ITEMS[lightboxIndex].subtitle}
                </p>

                <div className="mt-6 pt-4 border-t border-blush-50 space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                    <span>Custom orders open</span>
                  </div>
                  <p className="text-xs text-blush-600 italic font-medium">
                    Message Criselyn to request this exact style or modify colors.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-2.5">
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order This Style</span>
                </a>
                <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                  <span>Photo {lightboxIndex + 1} of {GALLERY_ITEMS.length}</span>
                  <span>Use ← → to navigate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
