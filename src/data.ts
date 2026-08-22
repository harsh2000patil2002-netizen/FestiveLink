export type PackageId = 'basic' | 'standard' | 'premium';

export interface PackageInfo {
  id: PackageId;
  name: string;
  price: number;
  subtitle: string;
  idealFor: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  /** features shown in the live order summary */
  summaryFeatures: string[];
  photoLimit: string;
  videoAllowed: boolean;
  cta: string;
  accent: string; // tailwind color token base, e.g. 'forest'
}

export type TemplatePackage = PackageId;

export interface TemplateInfo {
  id: string;
  name: string;
  pkg: TemplatePackage;
  description: string;
  /** visual theme used by the mini preview */
  theme: 'divine' | 'rangoli' | 'traditional' | 'cinematic' | 'family' | 'glow' | 'royal' | 'grand' | 'experience';
  image: string;
  accent: string; // hex
  bg: string; // hex or gradient
}

export interface FaqItem {
  q: string;
  a: string;
}

export const WHATSAPP_NUMBER = '918208146862'; // configurable — country code + number, digits only

export const PACKAGES: PackageInfo[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 150,
    subtitle: 'Simple, Beautiful & Essential',
    idealFor: 'Small family celebrations',
    features: [
      'Attractive invitation website',
      'Event details',
      'Date, time and venue',
      '1 photo section',
      'Share button',
      '1 theme design',
      'Mobile-friendly design',
    ],
    summaryFeatures: ['Event Details', '1 Photo', 'Share Button'],
    photoLimit: '1 photo',
    videoAllowed: false,
    cta: 'Explore Basic Designs',
    accent: 'forest',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 200,
    subtitle: 'More Engaging, More Special',
    idealFor: 'Families who want a richer experience',
    badge: 'MOST POPULAR',
    highlighted: true,
    features: [
      'Everything in Basic',
      'Photo gallery — 5 to 10 photos',
      'Video section',
      'Live location / Google Maps',
      'Music',
      'Animation effects',
      'Event schedule / itinerary',
      'Mobile-friendly design',
    ],
    summaryFeatures: ['Photo Gallery', 'Video', 'Music', 'Animations', 'Google Maps'],
    photoLimit: '5–10 photos',
    videoAllowed: true,
    cta: 'Explore Standard Designs',
    accent: 'saffron',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 399,
    subtitle: 'Complete Premium Experience',
    idealFor: 'Grand celebrations & maximum personalization',
    badge: 'BEST VALUE',
    features: [
      'Everything in Standard',
      'Unlimited photo gallery',
      'Custom invitation link option',
      'RSVP / attendance confirmation',
      'Event countdown / timeline',
      'Premium animation effects',
      'Personalized experience',
      'Premium support',
    ],
    summaryFeatures: ['Unlimited Photos', 'Video', 'RSVP', 'Countdown', 'Premium Support'],
    photoLimit: 'Unlimited photos',
    videoAllowed: true,
    cta: 'Explore Premium Designs',
    accent: 'plum',
  },
];

export const COMPARISON_ROWS: { label: string; basic: boolean; standard: boolean; premium: boolean }[] = [
  { label: 'Invitation Website', basic: true, standard: true, premium: true },
  { label: 'Event Details', basic: true, standard: true, premium: true },
  { label: 'Photo Section', basic: true, standard: true, premium: true },
  { label: 'Photo Gallery', basic: false, standard: true, premium: true },
  { label: 'Video', basic: false, standard: true, premium: true },
  { label: 'Google Maps', basic: false, standard: true, premium: true },
  { label: 'Music', basic: false, standard: true, premium: true },
  { label: 'Animations', basic: false, standard: true, premium: true },
  { label: 'Event Schedule', basic: false, standard: true, premium: true },
  { label: 'Custom Link', basic: false, standard: false, premium: true },
  { label: 'RSVP', basic: false, standard: false, premium: true },
  { label: 'Countdown', basic: false, standard: false, premium: true },
  { label: 'Premium Support', basic: false, standard: false, premium: true },
];

export const TEMPLATES: TemplateInfo[] = [
  // Basic
  {
    id: 'divine-simple',
    name: 'Divine Simple',
    pkg: 'basic',
    description: 'Minimal Ganpati, a glowing diya and elegant typography.',
    theme: 'divine',
    image: 'https://images.pexels.com/photos/2430288/pexels-photo-2430288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#3d6b36',
    bg: 'linear-gradient(160deg, #faf5e9, #f3e9cf)',
  },
  {
    id: 'rangoli-blessings',
    name: 'Rangoli Blessings',
    pkg: 'basic',
    description: 'A clean rangoli-inspired invitation with warm tones.',
    theme: 'rangoli',
    image: 'https://images.pexels.com/photos/14304140/pexels-photo-14304140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#d3580b',
    bg: 'linear-gradient(160deg, #fff6ec, #ffe9cf)',
  },
  {
    id: 'traditional-bappa',
    name: 'Traditional Bappa',
    pkg: 'basic',
    description: 'A classic Indian festive aesthetic with marigold garlands.',
    theme: 'traditional',
    image: 'https://images.pexels.com/photos/9598323/pexels-photo-9598323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#a8410b',
    bg: 'linear-gradient(160deg, #faf5e9, #ecdcb0)',
  },
  // Standard
  {
    id: 'cinematic-bappa',
    name: 'Cinematic Bappa',
    pkg: 'standard',
    description: 'An animated Ganpati reveal with a photo gallery.',
    theme: 'cinematic',
    image: 'https://images.pexels.com/photos/18523414/pexels-photo-18523414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#ef7111',
    bg: 'linear-gradient(160deg, #1f3d2b, #16301f)',
  },
  {
    id: 'family-celebration',
    name: 'Family Celebration',
    pkg: 'standard',
    description: 'A photo-focused invitation that centres your family.',
    theme: 'family',
    image: 'https://images.pexels.com/photos/9345665/pexels-photo-9345665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#bd8826',
    bg: 'linear-gradient(160deg, #fbf6e8, #f5e7c0)',
  },
  {
    id: 'festive-glow',
    name: 'Festive Glow',
    pkg: 'standard',
    description: 'Music and animation with vibrant festive effects.',
    theme: 'glow',
    image: 'https://images.pexels.com/photos/34431714/pexels-photo-34431714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#fb8f2c',
    bg: 'linear-gradient(160deg, #4d1a17, #6b241e)',
  },
  // Premium
  {
    id: 'royal-bappa',
    name: 'Royal Bappa',
    pkg: 'premium',
    description: 'A luxury gold and deep green design with ornate detail.',
    theme: 'royal',
    image: 'https://images.pexels.com/photos/33714524/pexels-photo-33714524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#d4a23a',
    bg: 'linear-gradient(160deg, #16301f, #1f3d2b)',
  },
  {
    id: 'grand-celebration',
    name: 'Grand Celebration',
    pkg: 'premium',
    description: 'A rich photo and video storytelling experience.',
    theme: 'grand',
    image: 'https://images.pexels.com/photos/38543747/pexels-photo-38543747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#71458c',
    bg: 'linear-gradient(160deg, #4a2b5c, #2c1640)',
  },
  {
    id: 'divine-experience',
    name: 'Divine Experience',
    pkg: 'premium',
    description: 'A cinematic reveal with premium effects and RSVP.',
    theme: 'experience',
    image: 'https://images.pexels.com/photos/28304951/pexels-photo-28304951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: '#e0b95a',
    bg: 'linear-gradient(160deg, #3a1412, #6b241e)',
  },
];

export const FAQS: FaqItem[] = [
  {
    q: 'What is a digital invitation?',
    a: 'A personalized invitation website that can be opened and shared through a single link.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. Just send us your details and media — we handle everything else.',
  },
  {
    q: 'Can I add my own photos?',
    a: 'Yes. Photo limits depend on the package — 1 for Basic, 5–10 for Standard, and unlimited for Premium.',
  },
  {
    q: 'Can I add a video?',
    a: 'Yes, with the Standard and Premium packages.',
  },
  {
    q: 'Can I change the design?',
    a: 'Yes. Choose another available template before placing your request.',
  },
  {
    q: 'Can I add my own message?',
    a: 'Yes — every package lets you write a custom invitation message.',
  },
  {
    q: 'How will I receive the invitation?',
    a: 'You receive a shareable FestiveLink URL that opens beautifully on any phone.',
  },
  {
    q: 'Can I share it on WhatsApp?',
    a: 'Yes. One link works on WhatsApp, Instagram, SMS and more.',
  },
  {
    q: 'How long does it take?',
    a: 'Delivery time will be confirmed after your order.',
  },
];

export const FAMILY_PHOTO =
  'https://images.pexels.com/photos/9345672/pexels-photo-9345672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const GANESHA_HERO =
  'https://images.pexels.com/photos/24783925/pexels-photo-24783925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const DIYA_IMAGE =
  'https://images.pexels.com/photos/8887157/pexels-photo-8887157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const MARIGOLD_IMAGE =
  'https://images.pexels.com/photos/14304140/pexels-photo-14304140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
