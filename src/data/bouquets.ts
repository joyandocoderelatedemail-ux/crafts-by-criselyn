export interface Bouquet {
  id: string;
  name: string;
  category: 'roses' | 'mixed' | 'custom';
  categoryLabel: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  originalImage: string;
  priceDisplay: string;
  priceNote: string;
  flowers: string[];
  colors: string[];
  occasions: string[];
  dimensions?: string;
  featured: boolean;
  aspectRatio: 'tall' | 'square' | 'wide';
}

export const BOUQUET_PRODUCTS: Bouquet[] = [
  {
    id: 'blush-crimson-elegance',
    name: 'Blush & Crimson Elegance',
    category: 'roses',
    categoryLabel: 'Rose Bouquets',
    tag: 'Bestseller',
    shortDescription: 'Delicate pastel blush and passionate crimson satin roses wrapped in pure white folded paper.',
    fullDescription: 'Handcrafted with precision and delicate attention to every petal fold. This signature bouquet combines soft baby blush pink roses with dramatic deep crimson blossoms, enveloped in layered airy white tissue and premium waterproof gift wrap.',
    image: '/images/bouquets/blush-crimson-elegance.jpg',
    originalImage: '/images/bouquets/1fc09d00-65fc-4ab8-9d6c-a72fb157cba9.jfif',
    priceDisplay: 'Message us for price',
    priceNote: 'Custom sizes and stem counts available upon inquiry',
    flowers: ['Satin Ribbon Roses', 'Blush Petals', 'Deep Crimson Petals', 'Decorative Wrapper'],
    colors: ['Soft Blush Pink', 'Crimson Red', 'Pure White'],
    occasions: ['Valentine\'s Day', 'Anniversaries', 'Birthdays', 'Romantic Gestures'],
    featured: true,
    aspectRatio: 'tall',
  },
  {
    id: 'sunshine-tulip-harmony',
    name: 'Sunshine & Tulip Harmony',
    category: 'mixed',
    categoryLabel: 'Mixed & Plush',
    tag: 'Cozy Favorite',
    shortDescription: 'Vibrant crochet sunflower paired with soft chenille pink tulips, perfect for cozy table settings.',
    fullDescription: 'An uplifting combination of handcrafted warmth! Features a golden-yellow blooming sunflower with textured center, surrounded by plush velvety pink tulips and velvety ribbed green foliage. Displayed gracefully in a clear glass keepsake jar.',
    image: '/images/bouquets/sunshine-tulip-harmony.jpg',
    originalImage: '/images/bouquets/324e15d6-6b59-4810-bc3c-b8f33a4616c0.jfif',
    priceDisplay: 'Message us for price',
    priceNote: 'Available as a potted jar arrangement or wrapped hand-tied bouquet',
    flowers: ['Crochet Sunflower', 'Plush Pink Tulips', 'Handcrafted Foliage', 'Glass Display Jar'],
    colors: ['Golden Yellow', 'Warm Earth Brown', 'Pastel Pink', 'Sage Green'],
    occasions: ['Graduations', 'Get Well Soon', 'Birthdays', 'Home Decor'],
    featured: true,
    aspectRatio: 'tall',
  },
  {
    id: 'rose-bloom-arrangement',
    name: 'Rosé Bloom Classic Arrangement',
    category: 'roses',
    categoryLabel: 'Rose Bouquets',
    tag: 'Customer Choice',
    shortDescription: 'Multi-toned pink and crimson rose arrangement with ruffled petal framing for timeless elegance.',
    fullDescription: 'A romantic showstopper highlighting crisp, geometric petal origami craftsmanship. Each rose is painstakingly hand-spun with satin sheen ribbon to capture natural light, finished with cloud-like ruffled organza wrap.',
    image: '/images/bouquets/rose-bloom-arrangement.jpg',
    originalImage: '/images/bouquets/8351426a-68f9-410e-8830-81ac32a8a637.jfif',
    priceDisplay: 'Message us for price',
    priceNote: 'Inquire to personalize ribbon tones and wrapping themes',
    flowers: ['Multi-toned Satin Roses', 'Cloud Ruffle Underlay', 'Signature Gift Wrap'],
    colors: ['Pastel Rose', 'Wine Burgundy', 'Champagne Pearl'],
    occasions: ['Anniversaries', 'Mother\'s Day', 'Prom & Formals', 'Just Because'],
    featured: true,
    aspectRatio: 'tall',
  },
  {
    id: 'midnight-scarlet-roses',
    name: 'Midnight Scarlet Rose Bouquet',
    category: 'roses',
    categoryLabel: 'Rose Bouquets',
    tag: 'Deep Romance',
    shortDescription: 'All-scarlet satin roses boasting velvety deep-red luster, framed by snowy scalloped wrappers.',
    fullDescription: 'For grand romantic declarations and timeless impressions. A rich clutch of deep scarlet velvet-finish roses, perfectly bloomed and nestled in architectural layered white collar wrapping.',
    image: '/images/bouquets/midnight-scarlet-roses.jpg',
    originalImage: '/images/bouquets/b220a450-6959-4223-a853-261f11a08201.jfif',
    priceDisplay: 'Message us for price',
    priceNote: 'Pair with custom greeting card and fairy lights upon request',
    flowers: ['Deep Scarlet Roses', 'Textured Scalloped Collar', 'Luxury Outer Wrap'],
    colors: ['Velvet Scarlet', 'Midnight Crimson', 'Frost White'],
    occasions: ['Valentine\'s Day', 'Proposals', 'Anniversaries', 'Milestone Celebrations'],
    featured: true,
    aspectRatio: 'square',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-1',
    title: 'Blush & Crimson Elegance',
    subtitle: 'Signature hand-folded satin rose cluster in pastel pink and rich wine red.',
    image: '/images/bouquets/blush-crimson-elegance.jpg',
    category: 'Rose Bouquets',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'gallery-2',
    title: 'Sunshine & Tulip Jar Display',
    subtitle: 'Warm ambient lighting accenting plush crochet sunflower and velvety tulips.',
    image: '/images/bouquets/sunshine-tulip-harmony.jpg',
    category: 'Sunflower & Tulips',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'gallery-3',
    title: 'Rosé Petal Craftsmanship',
    subtitle: 'Intricate petal symmetry catching gentle studio highlights.',
    image: '/images/bouquets/rose-bloom-arrangement.jpg',
    category: 'Artisan Detail',
    span: 'col-span-1 md:col-span-1 row-span-1',
  },
  {
    id: 'gallery-4',
    title: 'Midnight Scarlet Collection',
    subtitle: 'Dramatic royal red rose bouquet draped in ruffled white paper wrap.',
    image: '/images/bouquets/midnight-scarlet-roses.jpg',
    category: 'Romantic Collection',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export const CONTACT_INFO = {
  businessName: 'Crafts by Criselyn',
  ownerName: 'Criselyn Tullao',
  tagline: 'Handmade with love, one stitch at a time.',
  phone: '09630478946',
  phoneFormatted: '0963 047 8946',
  facebookUrl: 'https://www.facebook.com/criselyn.tullao',
  facebookDisplay: 'facebook.com/criselyn.tullao',
  location: 'Philippines',
  fulfillment: 'Handmade to order · Local pickup & courier delivery available',
};
