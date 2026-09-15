'use client';

import React, { useState } from 'react';
import {
  Facebook,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';
import { CONTACT_INFO, BOUQUET_PRODUCTS } from '@/data/bouquets';

export const ContactSection: React.FC = () => {
  const [selectedBouquet, setSelectedBouquet] = useState(BOUQUET_PRODUCTS[0].name);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [customColors, setCustomColors] = useState('Classic Blush & Crimson');
  const [recipientName, setRecipientName] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate a pre-filled friendly inquiry message
  const generatedMessage = `Hello Criselyn! 🌸 I am interested in inquiring about a handmade bouquet from Crafts by Criselyn.

• Bouquet Style: ${selectedBouquet}
• Occasion: ${selectedOccasion}
• Preferred Colors: ${customColors || 'Default'}
${recipientName ? `• For: ${recipientName}\n` : ''}${customNote ? `• Notes/Special Requests: ${customNote}\n` : ''}
Could you please share the pricing and lead time for this arrangement? Thank you so much!`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenFacebook = () => {
    // Open Facebook profile / messenger
    window.open(CONTACT_INFO.facebookUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white via-blush-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blush-100 text-blush-700 text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blush-500" />
            <span>Get in Touch</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal-900 tracking-tight">
            Let's Create Something Special
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-500 font-light">
            We are always happy to answer your questions, discuss custom color schemes, or prepare your special gift.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Facebook Card */}
            <div className="bg-white rounded-3xl p-7 border border-blush-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-blue-50 text-[#1877F2] p-3.5 flex items-center justify-center flex-shrink-0 shadow-soft-sm">
                  <Facebook className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                    Facebook Page & Messenger
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mt-0.5">
                    Crafts by Criselyn
                  </h3>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-blush-600 hover:text-blush-700 font-medium mt-1 group"
                  >
                    <span>{CONTACT_INFO.facebookDisplay}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    Message Criselyn directly on Facebook to view recent custom batches, send reference photos, and confirm orders.
                  </p>

                  <div className="mt-5">
                    <a
                      href={CONTACT_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message Us on Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone / Mobile Card */}
            <div className="bg-white rounded-3xl p-7 border border-blush-100 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 p-3.5 flex items-center justify-center flex-shrink-0 shadow-soft-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                    Contact Number
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mt-0.5">
                    {CONTACT_INFO.phoneFormatted}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Available for calls and direct text inquiries
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={`sms:${CONTACT_INFO.phone}`}
                      className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-700 bg-blush-50 hover:bg-blush-100 border border-blush-200/60 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-blush-500" />
                      <span>Send SMS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="bg-blush-50/60 rounded-3xl p-6 border border-blush-100 space-y-3">
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <MapPin className="w-4 h-4 text-blush-500 flex-shrink-0" />
                <span>Handmade in the Philippines · Nationwide courier delivery available</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-600">
                <Clock className="w-4 h-4 text-blush-500 flex-shrink-0" />
                <span>Lead time typically 2–5 days depending on stem complexity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Order Inquiry Message Builder */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-blush-100 shadow-soft-lg">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-blush-100">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
                  Custom Order Inquiry Helper
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Customize your preferences below to generate a ready-to-send inquiry for Criselyn.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blush-50 text-blush-700 border border-blush-200">
                Quick Assist
              </span>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleOpenFacebook(); }} className="space-y-4">
              {/* Select Bouquet */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                  1. Desired Bouquet Style
                </label>
                <select
                  value={selectedBouquet}
                  onChange={(e) => setSelectedBouquet(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 text-sm text-gray-800 bg-white transition-all outline-none"
                >
                  {BOUQUET_PRODUCTS.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.categoryLabel})
                    </option>
                  ))}
                  <option value="Custom Mixed Request">Custom Mixed Request (I have reference photos)</option>
                </select>
              </div>

              {/* Grid: Occasion & Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    2. Occasion
                  </label>
                  <select
                    value={selectedOccasion}
                    onChange={(e) => setSelectedOccasion(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 text-sm text-gray-800 bg-white transition-all outline-none"
                  >
                    <option value="Birthday">Birthday 🎂</option>
                    <option value="Anniversary">Anniversary 💗</option>
                    <option value="Valentine's Day">Valentine's Day 🌸</option>
                    <option value="Graduation">Graduation 🎓</option>
                    <option value="Mother's Day">Mother's Day 💐</option>
                    <option value="Just Because">Just Because ✨</option>
                    <option value="Special Celebration">Special Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    3. Color Palette Preference
                  </label>
                  <input
                    type="text"
                    value={customColors}
                    onChange={(e) => setCustomColors(e.target.value)}
                    placeholder="e.g., Soft Pink & White, Crimson, Yellow"
                    className="w-full px-4 py-2.5 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 text-sm text-gray-800 placeholder-gray-400 bg-white transition-all outline-none"
                  />
                </div>
              </div>

              {/* Optional Recipient or Note */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Recipient Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. For my Mom, For Sarah"
                    className="w-full px-4 py-2.5 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 text-sm text-gray-800 placeholder-gray-400 bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-800 mb-1.5">
                    Need By Date / Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g., Need by Friday, include card"
                    className="w-full px-4 py-2.5 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 text-sm text-gray-800 placeholder-gray-400 bg-white transition-all outline-none"
                  />
                </div>
              </div>

              {/* Preview Box */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Generated Message Preview
                  </label>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="text-xs font-medium text-blush-600 hover:text-blush-700 flex items-center space-x-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 rounded-2xl bg-blush-50/70 border border-blush-100 text-xs text-gray-700 whitespace-pre-line font-mono leading-relaxed select-all">
                  {generatedMessage}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blush-500 via-blush-600 to-blush-700 hover:from-blush-600 hover:to-blush-800 shadow-soft transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via Facebook</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center justify-center space-x-2 py-3.5 px-5 rounded-2xl text-sm font-medium text-charcoal-800 bg-white hover:bg-blush-50 border border-blush-200 transition-colors"
                >
                  <Copy className="w-4 h-4 text-blush-500" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
