export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  recommendedColors: string;
  iconType: 'birthday' | 'anniversary' | 'valentine' | 'graduation' | 'mothers-day' | 'just-because';
}

export const OCCASIONS_DATA: OccasionItem[] = [
  {
    id: 'birthdays',
    title: 'Birthdays',
    subtitle: 'Celebrate their milestone',
    tagline: 'Bright, joyous stems that celebrate another year of happiness and wonder.',
    recommendedColors: 'Pastel pinks, sunny yellow sunflowers, confetti wraps',
    iconType: 'birthday',
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries',
    subtitle: 'Everlasting romance',
    tagline: 'Flowers that never wilt, symbolizing love that grows stronger year after year.',
    recommendedColors: 'Deep velvet crimson, blush rose, pearl champagne',
    iconType: 'anniversary',
  },
  {
    id: 'valentines-day',
    title: 'Valentine\'s Day',
    subtitle: 'From the heart',
    tagline: 'A romantic, heartfelt gesture that stays beautiful on their desk forever.',
    recommendedColors: 'Blush pink, ruby scarlet, layered white tissue',
    iconType: 'valentine',
  },
  {
    id: 'graduations',
    title: 'Graduations',
    subtitle: 'Proud achievements',
    tagline: 'Commemorate hard work and dreams realized with a vibrant keepsake bouquet.',
    recommendedColors: 'Sunflower yellows, school pride custom ribbon accents',
    iconType: 'graduation',
  },
  {
    id: 'mothers-day',
    title: 'Mother\'s Day',
    subtitle: 'Honoring mom\'s warmth',
    tagline: 'Show unconditional gratitude to the most special woman with flowers made to treasure.',
    recommendedColors: 'Soft petal pink, soothing cream, delicate garden tones',
    iconType: 'mothers-day',
  },
  {
    id: 'just-because',
    title: 'Just Because',
    subtitle: 'A sweet surprise',
    tagline: 'No special date required — brighten someone\'s ordinary Tuesday with a handmade smile.',
    recommendedColors: 'Custom cheerful colors & mini bouquet arrangements',
    iconType: 'just-because',
  },
];
