'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustHighlights } from '@/components/TrustHighlights';
import { FeaturedBouquets } from '@/components/FeaturedBouquets';
import { ThreeDGallerySection } from '@/components/ThreeDGallerySection';
import { ImageShowcase } from '@/components/ImageShowcase';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { OccasionsSection } from '@/components/OccasionsSection';
import { OrderSection } from '@/components/OrderSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { FloatingActions } from '@/components/FloatingActions';
import { Bouquet } from '@/data/bouquets';

export default function Home() {
  const [selectedBouquet, setSelectedBouquet] = useState<Bouquet | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blush-200 selection:text-blush-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Brand Highlights */}
        <TrustHighlights />

        {/* 4. Featured Bouquets Catalog */}
        <FeaturedBouquets onSelectBouquet={(b) => setSelectedBouquet(b)} />

        {/* 5. 3D Stellar Orbit Gallery Animation */}
        <ThreeDGallerySection />

        {/* 6. Image Showcase (Instagram/Pinterest Style Lookbook) */}
        <ImageShowcase />

        {/* 7. About Crafts by Criselyn */}
        <AboutSection />

        {/* 8. Why Choose Crochet Bouquets? */}
        <WhyChooseUs />

        {/* 9. Perfect for Every Occasion */}
        <OccasionsSection />

        {/* 10. Order Section (CTA) */}
        <OrderSection />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Bouquet Details */}
      <ProductDetailModal
        bouquet={selectedBouquet}
        onClose={() => setSelectedBouquet(null)}
      />

      {/* Floating Quick Actions (Facebook & Phone) */}
      <FloatingActions />
    </div>
  );
}
