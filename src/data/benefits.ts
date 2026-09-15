export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Clock' | 'SparkleHand' | 'Gem' | 'HeartHand';
  detail: string;
}

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'long-lasting',
    title: 'Long-Lasting',
    description: 'A beautiful keepsake that can be enjoyed long after the special occasion.',
    iconName: 'Clock',
    detail: 'Never wilts, fades, or requires water. Stays fresh year after year.',
  },
  {
    id: 'handmade',
    title: 'Handmade',
    description: 'Each piece carries the charm of something carefully crafted by hand.',
    iconName: 'SparkleHand',
    detail: 'Stitched and folded with individual attention to every single petal.',
  },
  {
    id: 'unique',
    title: 'Unique',
    description: 'A creative alternative to traditional flower bouquets.',
    iconName: 'Gem',
    detail: 'Stands out from ordinary florists with custom artisanal textures.',
  },
  {
    id: 'meaningful-gift',
    title: 'Meaningful Gift',
    description: 'Perfect for expressing love, appreciation, congratulations, or friendship.',
    iconName: 'HeartHand',
    detail: 'Shows genuine thought and sentimental care for your loved ones.',
  },
];
