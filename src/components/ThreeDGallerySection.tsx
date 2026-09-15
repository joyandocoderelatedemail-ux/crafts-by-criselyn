'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Sparkles } from 'lucide-react';

// Dynamic import with SSR disabled for WebGL canvas compatibility
const StellarCardGallerySingle = dynamic(
  () => import('@/components/ui/3d-image-gallery'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[650px] lg:h-[750px] rounded-3xl bg-charcoal-900 border border-blush-200/40 flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-blush-400 border-t-transparent animate-spin" />
        <p className="text-sm font-serif text-blush-200 tracking-wider">
          Entering 3D Floral Stellar Galaxy...
        </p>
      </div>
    ),
  }
);

export const ThreeDGallerySection: React.FC = () => {
  return (
    <section id="3d-gallery" className="py-20 lg:py-28 bg-[#0d0c0d] text-white relative overflow-hidden">
      {/* Glow highlights */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold tracking-wide uppercase mb-3 border border-pink-500/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Interactive 3D Experience</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Explore Bouquets in 3D Orbit
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 font-light">
            Rotate our celestial collection in full 3D space. Click any floating bouquet to open the interactive details view and order.
          </p>
        </div>

        {/* 3D Gallery Canvas */}
        <StellarCardGallerySingle />
      </div>
    </section>
  );
};
