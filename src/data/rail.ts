export interface RailItem {
  title: string;
  meta: string;
  href: string;
  /** Drop a file into public/posters/ and set this to e.g. '/posters/vibesfest-01.avif' */
  image?: string;
  alt?: string;
  tone?: 'wash' | 'paper' | 'ink';
  external?: boolean;
}

/**
 * The rail is the site's one motion moment. Five pieces, alternating
 * design and engineering, plus a closing link tile.
 */
export const rail: RailItem[] = [
  {
    title: 'VibesfestNG',
    meta: 'Design · Campaign',
    href: 'https://www.behance.net/gallery/249724575/VibesfestNG-Projects',
    tone: 'ink',
    external: true,
  },
  {
    title: 'Weather App',
    meta: 'Engineering · 2026',
    href: 'https://github.com/U2lu/Weather-app',
    tone: 'wash',
    external: true,
  },
  {
    title: 'Owerri Sports Club',
    meta: 'Design · Identity',
    href: 'https://www.behance.net/gallery/249676593/Owerri-Sports-Club',
    tone: 'paper',
    external: true,
  },
  {
    title: 'Premier League Predictions',
    meta: 'Engineering · In progress',
    href: 'https://github.com/U2lu/Premier-League-Prediction-App',
    tone: 'wash',
    external: true,
  },
  {
    title: 'Graphic Posters',
    meta: 'Design · Series',
    href: 'https://www.behance.net/gallery/249749543/Graphic-Posters',
    tone: 'paper',
    external: true,
  },
];
