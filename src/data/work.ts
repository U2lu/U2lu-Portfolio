export type Discipline = 'engineering' | 'design';

export interface WorkItem {
  title: string;
  slug: string;
  discipline: Discipline;
  year: string;
  summary: string;
  stack?: string[];
  href: string;
  hrefLabel: string;
  status?: 'shipped' | 'in-progress';
}

/** Stage 1 index data. Stage 3 moves this into MDX content collections. */
export const engineering: WorkItem[] = [
  {
    title: 'Weather App',
    slug: 'weather-app',
    discipline: 'engineering',
    year: '2026',
    summary:
      'Live conditions from a public API, with every state built on purpose: loading, empty, error, stale, offline.',
    stack: ['React', 'TypeScript'],
    href: 'https://github.com/U2lu/Weather-app',
    hrefLabel: 'GitHub',
    status: 'in-progress',
  },
  {
    title: 'Premier League Prediction App',
    slug: 'premier-league-prediction',
    discipline: 'engineering',
    year: '2026',
    summary:
      'Fixture predictions for the Premier League. Python and FastAPI behind React — the first project where I owned a whole stack.',
    stack: ['Python', 'FastAPI', 'React'],
    href: 'https://github.com/U2lu/Premier-League-Prediction-App',
    hrefLabel: 'GitHub',
    status: 'in-progress',
  },
];

export const design: WorkItem[] = [
  {
    title: 'VibesfestNG',
    slug: 'vibesfestng',
    discipline: 'design',
    year: '2026',
    summary: 'Campaign and event visual system for a Nigerian music festival.',
    href: 'https://www.behance.net/gallery/249724575/VibesfestNG-Projects',
    hrefLabel: 'Behance',
  },
  {
    title: 'Owerri Sports Club',
    slug: 'owerri-sports-club',
    discipline: 'design',
    year: '2026',
    summary: 'Identity and collateral for a local sports club.',
    href: 'https://www.behance.net/gallery/249676593/Owerri-Sports-Club',
    hrefLabel: 'Behance',
  },
  {
    title: 'Graphic Posters',
    slug: 'graphic-posters',
    discipline: 'design',
    year: '2026',
    summary: 'A poster series. Type, colour and composition with no client brief to hide behind.',
    href: 'https://www.behance.net/gallery/249749543/Graphic-Posters',
    hrefLabel: 'Behance',
  },
];
