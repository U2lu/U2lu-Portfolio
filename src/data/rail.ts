export interface RailItem {
  title: string;
  meta: string;
  /** Case study route. Every tile opens its own page. */
  href: string;
  /** Drop a file into public/posters/ and set this to e.g. '/posters/vibesfest-01.avif' */
  image?: string;
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
    meta: 'Design · Campaign',
    href: '/work/vibesfestng',
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
    meta: 'Design · Identity',
    href: '/work/owerri-sports-club',
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
    tone: 'paper',
  },
];
