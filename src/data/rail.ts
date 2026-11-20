export interface RailItem {
  title: string;
  meta: string;
  /** Case study route. Every tile opens its own page. */
  href: string;
  /** Artwork for the tile. Engineering items stay typographic on purpose. */
  image?: string;
  /** Intrinsic size of `image`, so the browser reserves the right box. */
  width?: number;
  height?: number;
  alt?: string;
  tone?: 'wash' | 'paper' | 'ink';
}

/**
 * The rail is the site's one motion moment. Five pieces, alternating
 * design and engineering, plus a closing link tile.
 */
export const rail: RailItem[] = [
  {
    title: 'VibesfestNG',
    meta: 'Design · 2025',
    href: '/work/vibesfestng',
    image: '/shots/vibesfestng-01-flyer.webp',
    width: 1080,
    height: 1350,
    alt: 'VibesfestNG announcement flyer, artists cut out on a yellow field',
    tone: 'ink',
  },
  {
    title: 'Weather App',
    meta: 'Engineering · 2026',
    href: '/work/weather-app',
    tone: 'wash',
  },
  {
    title: 'Owerri Sports Club',
    meta: 'Design · 2025–26',
    href: '/work/owerri-sports-club',
    image: '/shots/owerri-01-adults.webp',
    width: 1080,
    height: 1080,
    alt: 'Adults Party flier for Owerri Sports Club',
    tone: 'paper',
  },
  {
    title: 'Premier League Predictions',
    meta: 'Engineering · In progress',
    href: '/work/premier-league-prediction',
    tone: 'wash',
  },
  {
    title: 'Graphic Posters',
    meta: 'Design · Series',
    href: '/work/graphic-posters',
    image: '/shots/posters-03-pastures.webp',
    width: 1200,
    height: 1500,
    alt: 'PASTURES poster from the graphic poster series',
    tone: 'paper',
  },
];
