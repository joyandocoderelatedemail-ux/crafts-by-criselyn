export interface TrustHighlight {
  id: string;
  title: string;
  description: string;
  iconName: 'Scissors' | 'Heart' | 'Gift' | 'Sparkles';
}

export const TRUST_HIGHLIGHTS: TrustHighlight[] = [
  {
    id: 'handmade',
    title: '100% Handmade',
    description: 'Carefully crafted by hand.',
    iconName: 'Scissors',
  },
  {
    id: 'love',
    title: 'Made with Love',
    description: 'Every bouquet is created with care.',
    iconName: 'Heart',
  },
  {
    id: 'gifting',
    title: 'Perfect for Gifting',
    description: 'A memorable gift for every occasion.',
    iconName: 'Gift',
  },
  {
    id: 'custom',
    title: 'Custom Orders',
    description: 'Create something special for someone special.',
    iconName: 'Sparkles',
  },
];
