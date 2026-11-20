import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const figure = z
  .object({
    /** Path under /public, e.g. '/shots/weather-01.avif'. Leave out to render a placeholder. */
    src: z.string().optional(),
    alt: z.string(),
    caption: z.string().optional(),
    kind: z.enum(['screenshot', 'render', 'poster']).default('screenshot'),
    /** Intrinsic pixel size, so the browser reserves the right box before the image decodes. */
    width: z.number().int().positive().optional(),
    height: z.number().int().positive().optional(),
  })
  .refine((f) => !f.src || (f.width !== undefined && f.height !== undefined), {
    message: 'width and height are required when a figure has a src',
  });

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    discipline: z.enum(['engineering', 'design']),
    year: z.string(),
    summary: z.string().max(220),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['shipped', 'in-progress']).default('shipped'),
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
    behance: z.string().url().optional(),
    order: z.number().default(99),
    figures: z.array(figure).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
