import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#fff5f7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://crafts-by-criselyn.vercel.app'),
  title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
  description:
    'Beautiful handmade crochet bouquets crafted with love by Crafts by Criselyn. Perfect for birthdays, anniversaries, gifts, graduations, and special occasions.',
  keywords: [
    'crochet bouquets',
    'handmade flowers',
    'Crafts by Criselyn',
    'satin rose bouquet',
    'crochet sunflower',
    'everlasting flowers',
    'gifts philippines',
    'valentines bouquet',
    'graduation flowers',
    'criselyn tullao',
  ],
  authors: [{ name: 'Crafts by Criselyn' }],
  creator: 'Crafts by Criselyn',
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://crafts-by-criselyn.vercel.app',
    title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
    description:
      'Beautiful handmade crochet bouquets crafted with love by Crafts by Criselyn. Perfect for birthdays, anniversaries, gifts, graduations, and special occasions.',
    siteName: 'Crafts by Criselyn',
    images: [
      {
        url: '/images/bouquets/blush-crimson-elegance.jpg',
        width: 800,
        height: 1200,
        alt: 'Crafts by Criselyn - Handcrafted Crochet & Ribbon Flower Bouquet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crafts by Criselyn | Handmade Crochet Bouquets',
    description:
      'Beautiful handmade crochet bouquets crafted with love by Crafts by Criselyn. Everlasting blooms made stitch by stitch.',
    images: ['/images/bouquets/blush-crimson-elegance.jpg'],
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌸</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#262425] min-h-screen selection:bg-blush-200 selection:text-blush-900">
        {children}
      </body>
    </html>
  );
}
