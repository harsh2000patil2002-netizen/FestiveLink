export type PackageId = 'basic' | 'standard' | 'premium';

export type TemplateStyle =
  | 'minimal'
  | 'traditional'
  | 'modern'
  | 'luxury'
  | 'photo'
  | 'cinematic'
  | 'nature'
  | 'rangoli';

export type TemplateTheme =
  | 'divine-blessings'
  | 'simple-bappa'
  | 'rangoli-celebration'
  | 'traditional-ganpati'
  | 'green-blessings'
  | 'golden-diya'
  | 'cinematic-bappa'
  | 'family-celebration'
  | 'festive-glow'
  | 'bappa-memories'
  | 'divine-garden'
  | 'modern-rangoli'
  | 'royal-bappa'
  | 'divine-experience'
  | 'grand-celebration'
  | 'luxury-ganpati'
  | 'memories-of-bappa'
  | 'festival-night';

export interface PackageInfo {
  id: PackageId;
  name: string;
  price: number;
  subtitle: string;
  idealFor: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  summaryFeatures: string[];
  photoLimit: string;
  videoAllowed: boolean;
  cta: string;
  accent: string;
}

export type TemplatePackage = PackageId;

export interface TemplateInfo {
  id: string;
  name: string;
  pkg: TemplatePackage;
  price: number;
  style: TemplateStyle;
  description: string;
  features: string[];
  theme: TemplateTheme;
  image: string;
  accent: string;
  bg: string;
  /** whether the invitation uses a dark background */
  dark: boolean;
  /** gallery layout shown in the live preview */
  gallery: 'single' | 'polaroid' | 'masonry' | 'carousel' | 'filmstrip' | 'floating' | 'cinematic' | 'fullscreen';
  /** sample images used inside the live preview */
  sampleImages: string[];
  /** sample video poster */
  sampleVideo?: { poster: string; label: string };
  /** tagline shown on the reveal screen */
  revealTagline: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const WHATSAPP_NUMBER = '918208146862';

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

// ---- Sample content used inside live previews (easy to replace) ----
const FAMILY_1 = 'https://images.pexels.com/photos/9345672/pexels-photo-9345672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FAMILY_2 = 'https://images.pexels.com/photos/9345665/pexels-photo-9345665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FAMILY_3 = 'https://images.pexels.com/photos/9345668/pexels-photo-9345668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FAMILY_4 = 'https://images.pexels.com/photos/8819157/pexels-photo-8819157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FAMILY_5 = 'https://images.pexels.com/photos/9345633/pexels-photo-9345633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const FAMILY_6 = 'https://images.pexels.com/photos/32483859/pexels-photo-32483859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const GANESHA_1 = 'https://images.pexels.com/photos/31278279/pexels-photo-31278279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_2 = 'https://images.pexels.com/photos/33714524/pexels-photo-33714524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_3 = 'https://images.pexels.com/photos/9908090/pexels-photo-9908090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_4 = 'https://images.pexels.com/photos/33639566/pexels-photo-33639566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_5 = 'https://images.pexels.com/photos/28770082/pexels-photo-28770082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_6 = 'https://images.pexels.com/photos/18523414/pexels-photo-18523414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_7 = 'https://images.pexels.com/photos/28299170/pexels-photo-28299170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_8 = 'https://images.pexels.com/photos/9598323/pexels-photo-9598323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_9 = 'https://images.pexels.com/photos/34297331/pexels-photo-34297331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_10 = 'https://images.pexels.com/photos/28281248/pexels-photo-28281248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_11 = 'https://images.pexels.com/photos/33694500/pexels-photo-33694500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_12 = 'https://images.pexels.com/photos/33705612/pexels-photo-33705612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_13 = 'https://images.pexels.com/photos/33796381/pexels-photo-33796381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_14 = 'https://images.pexels.com/photos/28388588/pexels-photo-28388588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_15 = 'https://images.pexels.com/photos/32967231/pexels-photo-32967231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_16 = 'https://images.pexels.com/photos/24783925/pexels-photo-24783925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_17 = 'https://images.pexels.com/photos/38543747/pexels-photo-38543747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const GANESHA_18 = 'https://images.pexels.com/photos/28304951/pexels-photo-28304951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const DIYA_1 = 'https://images.pexels.com/photos/34431714/pexels-photo-34431714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DIYA_2 = 'https://images.pexels.com/photos/34497048/pexels-photo-34497048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DIYA_3 = 'https://images.pexels.com/photos/31104752/pexels-photo-31104752.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DIYA_4 = 'https://images.pexels.com/photos/5959508/pexels-photo-5959508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DIYA_5 = 'https://images.pexels.com/photos/10178166/pexels-photo-10178166.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const DIYA_6 = 'https://images.pexels.com/photos/14399577/pexels-photo-14399577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const RANGOLI_1 = 'https://images.pexels.com/photos/34400038/pexels-photo-34400038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const RANGOLI_2 = 'https://images.pexels.com/photos/34400019/pexels-photo-34400019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const RANGOLI_3 = 'https://images.pexels.com/photos/34400035/pexels-photo-34400035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const RANGOLI_4 = 'https://images.pexels.com/photos/34473412/pexels-photo-34473412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const MARIGOLD_1 = 'https://images.pexels.com/photos/12718218/pexels-photo-12718218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const MARIGOLD_2 = 'https://images.pexels.com/photos/12087682/pexels-photo-12087682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const MARIGOLD_3 = 'https://images.pexels.com/photos/11255470/pexels-photo-11255470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const LEAVES_1 = 'https://images.pexels.com/photos/15737814/pexels-photo-15737814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const LEAVES_2 = 'https://images.pexels.com/photos/8382125/pexels-photo-8382125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const LEAVES_3 = 'https://images.pexels.com/photos/6298029/pexels-photo-6298029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const FAMILY_GALLERY = [FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5, FAMILY_6];

export const TEMPLATES: TemplateInfo[] = [
  // ==================== BASIC — 6 templates ====================
  {
    id: 'divine-blessings',
    name: 'Divine Blessings',
    pkg: 'basic',
    price: 150,
    style: 'minimal',
    description: 'Minimal Ganpati, cream background, glowing diya and elegant typography.',
    features: ['Beautiful Reveal', 'Event Information', '1 Photo', 'Simple Animations', 'Easy Sharing'],
    theme: 'divine-blessings',
    image: GANESHA_1,
    accent: '#3d6b36',
    bg: 'linear-gradient(160deg, #faf5e9, #f3e9cf)',
    dark: false,
    gallery: 'single',
    sampleImages: [FAMILY_1],
    revealTagline: 'A divine celebration awaits...',
  },
  {
    id: 'simple-bappa',
    name: 'Simple Bappa',
    pkg: 'basic',
    price: 150,
    style: 'minimal',
    description: 'Clean modern layout with a large Ganpati image and simple event details.',
    features: ['Modern Layout', 'Large Ganpati Image', 'Event Details', '1 Photo', 'Share Button'],
    theme: 'simple-bappa',
    image: GANESHA_3,
    accent: '#5d8a55',
    bg: 'linear-gradient(160deg, #f2f6f1, #dde8da)',
    dark: false,
    gallery: 'single',
    sampleImages: [FAMILY_2],
    revealTagline: 'Bappa welcomes you...',
  },
  {
    id: 'rangoli-celebration',
    name: 'Rangoli Celebration',
    pkg: 'basic',
    price: 150,
    style: 'rangoli',
    description: 'Rangoli-focused design with an animated rangoli reveal.',
    features: ['Animated Rangoli Reveal', 'Event Details', '1 Photo', 'Warm Colors', 'Share Button'],
    theme: 'rangoli-celebration',
    image: RANGOLI_1,
    accent: '#d3580b',
    bg: 'linear-gradient(160deg, #fff6ec, #ffe9cf)',
    dark: false,
    gallery: 'single',
    sampleImages: [FAMILY_3],
    revealTagline: 'A colorful celebration begins...',
  },
  {
    id: 'traditional-ganpati',
    name: 'Traditional Ganpati',
    pkg: 'basic',
    price: 150,
    style: 'traditional',
    description: 'Classic Indian festive design with marigold, diya and traditional borders.',
    features: ['Classic Indian Design', 'Marigold Borders', 'Diya Animation', '1 Photo', 'Share Button'],
    theme: 'traditional-ganpati',
    image: GANESHA_8,
    accent: '#a8410b',
    bg: 'linear-gradient(160deg, #faf5e9, #ecdcb0)',
    dark: false,
    gallery: 'single',
    sampleImages: [FAMILY_4],
    revealTagline: 'Tradition meets celebration...',
  },
  {
    id: 'green-blessings',
    name: 'Green Blessings',
    pkg: 'basic',
    price: 150,
    style: 'nature',
    description: 'Natural leaves, bamboo, earthy green and warm gold tones.',
    features: ['Natural Leaf Theme', 'Earthy Green & Gold', 'Event Details', '1 Photo', 'Share Button'],
    theme: 'green-blessings',
    image: LEAVES_1,
    accent: '#3d6b36',
    bg: 'linear-gradient(160deg, #f2f6f1, #bcd2b6)',
    dark: false,
    gallery: 'single',
    sampleImages: [FAMILY_5],
    revealTagline: 'Nature blesses your celebration...',
  },
  {
    id: 'golden-diya',
    name: 'Golden Diya',
    pkg: 'basic',
    price: 150,
    style: 'traditional',
    description: 'Dark warm background with a glowing diya and gold typography.',
    features: ['Glowing Diya', 'Gold Typography', 'Dark Warm Background', '1 Photo', 'Share Button'],
    theme: 'golden-diya',
    image: DIYA_1,
    accent: '#d4a23a',
    bg: 'linear-gradient(160deg, #4d1a17, #6b241e)',
    dark: true,
    gallery: 'single',
    sampleImages: [FAMILY_6],
    revealTagline: 'Let the light guide you...',
  },

  // ==================== STANDARD — 6 templates ====================
  {
    id: 'cinematic-bappa',
    name: 'Cinematic Bappa',
    pkg: 'standard',
    price: 200,
    style: 'cinematic',
    description: 'Cinematic Ganpati reveal with photos, video section and dramatic transitions.',
    features: ['Animated Reveal', 'Photo Gallery', 'Video', 'Music', 'Google Maps', 'Event Schedule'],
    theme: 'cinematic-bappa',
    image: GANESHA_6,
    accent: '#ef7111',
    bg: 'linear-gradient(160deg, #1f3d2b, #16301f)',
    dark: true,
    gallery: 'cinematic',
    sampleImages: [FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4],
    sampleVideo: { poster: FAMILY_4, label: 'A Special Message From Our Family' },
    revealTagline: 'A cinematic celebration awaits...',
  },
  {
    id: 'family-celebration',
    name: 'Family Celebration',
    pkg: 'standard',
    price: 200,
    style: 'photo',
    description: 'Family-photo-focused design with beautiful photo transitions.',
    features: ['Photo Gallery', 'Photo Transitions', 'Video', 'Music', 'Google Maps', 'Event Schedule'],
    theme: 'family-celebration',
    image: FAMILY_1,
    accent: '#bd8826',
    bg: 'linear-gradient(160deg, #fbf6e8, #f5e7c0)',
    dark: false,
    gallery: 'masonry',
    sampleImages: [FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5],
    sampleVideo: { poster: FAMILY_5, label: 'A Special Message From Our Family' },
    revealTagline: 'Your family story, beautifully told...',
  },
  {
    id: 'festive-glow',
    name: 'Festive Glow',
    pkg: 'standard',
    price: 200,
    style: 'cinematic',
    description: 'Warm orange and gold visual style with glowing particles and festive animations.',
    features: ['Glowing Particles', 'Photo Gallery', 'Video', 'Music', 'Google Maps', 'Animations'],
    theme: 'festive-glow',
    image: DIYA_2,
    accent: '#fb8f2c',
    bg: 'linear-gradient(160deg, #4d1a17, #6b241e)',
    dark: true,
    gallery: 'floating',
    sampleImages: [FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5],
    sampleVideo: { poster: FAMILY_3, label: 'A Special Message From Our Family' },
    revealTagline: 'Let the festivities glow...',
  },
  {
    id: 'bappa-memories',
    name: 'Bappa Memories',
    pkg: 'standard',
    price: 200,
    style: 'photo',
    description: 'Photo-storytelling experience with Polaroid and photo-card animations.',
    features: ['Polaroid Animations', 'Photo Gallery', 'Video', 'Music', 'Google Maps', 'Event Schedule'],
    theme: 'bappa-memories',
    image: FAMILY_2,
    accent: '#9c6c1f',
    bg: 'linear-gradient(160deg, #faf5e9, #ecdcb0)',
    dark: false,
    gallery: 'polaroid',
    sampleImages: [FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5],
    sampleVideo: { poster: FAMILY_1, label: 'A Special Message From Our Family' },
    revealTagline: 'Cherished memories with Bappa...',
  },
  {
    id: 'divine-garden',
    name: 'Divine Garden',
    pkg: 'standard',
    price: 200,
    style: 'nature',
    description: 'Green leaves, flowers, Ganpati and elegant natural design.',
    features: ['Natural Garden Theme', 'Photo Gallery', 'Video', 'Music', 'Google Maps', 'Event Schedule'],
    theme: 'divine-garden',
    image: GANESHA_7,
    accent: '#5d8a55',
    bg: 'linear-gradient(160deg, #f2f6f1, #8fb087)',
    dark: false,
    gallery: 'masonry',
    sampleImages: [FAMILY_3, FAMILY_4, FAMILY_5, FAMILY_6, FAMILY_1],
    sampleVideo: { poster: FAMILY_6, label: 'A Special Message From Our Family' },
    revealTagline: 'A garden of blessings awaits...',
  },
  {
    id: 'modern-rangoli',
    name: 'Modern Rangoli',
    pkg: 'standard',
    price: 200,
    style: 'rangoli',
    description: 'Modern geometric rangoli with interactive scroll animations.',
    features: ['Geometric Rangoli', 'Scroll Animations', 'Photo Gallery', 'Video', 'Music', 'Google Maps'],
    theme: 'modern-rangoli',
    image: RANGOLI_2,
    accent: '#d3580b',
    bg: 'linear-gradient(160deg, #fff6ec, #ffd09c)',
    dark: false,
    gallery: 'carousel',
    sampleImages: [FAMILY_4, FAMILY_5, FAMILY_6, FAMILY_1, FAMILY_2],
    sampleVideo: { poster: FAMILY_2, label: 'A Special Message From Our Family' },
    revealTagline: 'A modern celebration unfolds...',
  },

  // ==================== PREMIUM — 6 templates ====================
  {
    id: 'royal-bappa',
    name: 'Royal Bappa',
    pkg: 'premium',
    price: 399,
    style: 'luxury',
    description: 'Deep green and antique gold with premium Ganpati artwork.',
    features: ['Advanced Reveal', 'Unlimited Gallery', 'Video', 'Music', 'Countdown', 'RSVP', 'Premium Effects'],
    theme: 'royal-bappa',
    image: GANESHA_2,
    accent: '#d4a23a',
    bg: 'linear-gradient(160deg, #16301f, #1f3d2b)',
    dark: true,
    gallery: 'cinematic',
    sampleImages: [FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5, FAMILY_6],
    sampleVideo: { poster: FAMILY_1, label: 'A Royal Message From Our Family' },
    revealTagline: 'A royal celebration awaits...',
  },
  {
    id: 'divine-experience',
    name: 'Divine Experience',
    pkg: 'premium',
    price: 399,
    style: 'cinematic',
    description: 'Cinematic full-screen reveal with diya, particles and rangoli.',
    features: ['Cinematic Full-Screen Reveal', 'Unlimited Gallery', 'Video', 'Music', 'Countdown', 'RSVP'],
    theme: 'divine-experience',
    image: GANESHA_18,
    accent: '#e0b95a',
    bg: 'linear-gradient(160deg, #3a1412, #6b241e)',
    dark: true,
    gallery: 'fullscreen',
    sampleImages: [FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5, FAMILY_6, FAMILY_1],
    sampleVideo: { poster: FAMILY_4, label: 'A Divine Message From Our Family' },
    revealTagline: 'A divine experience awaits...',
  },
  {
    id: 'grand-celebration',
    name: 'Grand Celebration',
    pkg: 'premium',
    price: 399,
    style: 'cinematic',
    description: 'Large-scale celebration design with photos, video and timeline.',
    features: ['Large-Scale Design', 'Unlimited Gallery', 'Video', 'Music', 'Timeline', 'RSVP', 'Countdown'],
    theme: 'grand-celebration',
    image: GANESHA_17,
    accent: '#71458c',
    bg: 'linear-gradient(160deg, #4a2b5c, #2c1640)',
    dark: true,
    gallery: 'filmstrip',
    sampleImages: [FAMILY_3, FAMILY_4, FAMILY_5, FAMILY_6, FAMILY_1, FAMILY_2],
    sampleVideo: { poster: FAMILY_5, label: 'A Grand Message From Our Family' },
    revealTagline: 'A grand celebration awaits...',
  },
  {
    id: 'luxury-ganpati',
    name: 'Luxury Ganpati',
    pkg: 'premium',
    price: 399,
    style: 'luxury',
    description: 'Dark premium background with gold typography and elegant transitions.',
    features: ['Dark Premium Theme', 'Gold Typography', 'Unlimited Gallery', 'Video', 'Music', 'RSVP', 'Countdown'],
    theme: 'luxury-ganpati',
    image: GANESHA_4,
    accent: '#d4a23a',
    bg: 'linear-gradient(160deg, #16301f, #0a1a12)',
    dark: true,
    gallery: 'floating',
    sampleImages: [FAMILY_4, FAMILY_5, FAMILY_6, FAMILY_1, FAMILY_2, FAMILY_3],
    sampleVideo: { poster: FAMILY_6, label: 'A Luxury Message From Our Family' },
    revealTagline: 'Luxury meets devotion...',
  },
  {
    id: 'memories-of-bappa',
    name: 'Memories of Bappa',
    pkg: 'premium',
    price: 399,
    style: 'photo',
    description: 'Highly visual family storytelling with cinematic photo transitions.',
    features: ['Cinematic Photo Transitions', 'Unlimited Gallery', 'Video', 'Music', 'Timeline', 'RSVP'],
    theme: 'memories-of-bappa',
    image: FAMILY_3,
    accent: '#bd8826',
    bg: 'linear-gradient(160deg, #1f3d2b, #264420)',
    dark: true,
    gallery: 'cinematic',
    sampleImages: [FAMILY_5, FAMILY_6, FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4],
    sampleVideo: { poster: FAMILY_1, label: 'Our Family Memories' },
    revealTagline: 'Memories worth celebrating...',
  },
  {
    id: 'festival-night',
    name: 'Festival Night',
    pkg: 'premium',
    price: 399,
    style: 'cinematic',
    description: 'Dark night theme with glowing diyas, stars, particles and Ganpati reveal.',
    features: ['Night Theme', 'Glowing Diyas', 'Star Particles', 'Unlimited Gallery', 'Video', 'Music', 'RSVP', 'Countdown'],
    theme: 'festival-night',
    image: DIYA_5,
    accent: '#e0b95a',
    bg: 'linear-gradient(160deg, #0a0a14, #1a1530)',
    dark: true,
    gallery: 'fullscreen',
    sampleImages: [FAMILY_6, FAMILY_1, FAMILY_2, FAMILY_3, FAMILY_4, FAMILY_5],
    sampleVideo: { poster: FAMILY_3, label: 'A Festival Night Message' },
    revealTagline: 'A festival night awaits...',
  },
];

export const STYLE_FILTERS: { id: TemplateStyle; label: string }[] = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'modern', label: 'Modern' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'photo', label: 'Photo Focused' },
  { id: 'cinematic', label: 'Cinematic' },
  { id: 'nature', label: 'Nature' },
  { id: 'rangoli', label: 'Rangoli' },
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

export const FAMILY_PHOTO = FAMILY_1;
export const GANESHA_HERO = GANESHA_16;
export const DIYA_IMAGE = DIYA_1;
export const MARIGOLD_IMAGE = MARIGOLD_1;
