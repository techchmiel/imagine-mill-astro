import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AUDIENCES, CATEGORIES, PLATFORMS } from './consts';

const platformSlugs = Object.keys(PLATFORMS) as [string, ...string[]];
const categorySlugs = Object.keys(CATEGORIES) as [string, ...string[]];
const audienceSlugs = Object.keys(AUDIENCES) as [string, ...string[]];

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Taxonomy — see src/consts.ts for the allowed values.
			platforms: z.array(z.enum(platformSlugs)).min(1),
			category: z.enum(categorySlugs),
			tags: z.array(z.string()).default([]),
			audience: z.enum(audienceSlugs).default('everyone'),
			// Homepage hero slot; keep to a single post at a time.
			featured: z.boolean().default(false),
			// Picks the gradient-art variant for posts without a heroImage (0–5).
			heroStyle: z.number().int().min(0).max(5).optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
