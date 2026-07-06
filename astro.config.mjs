// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://imaginemill.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Oxanium',
			cssVariable: '--font-oxanium',
			weights: [500, 600, 700, 800],
			styles: ['normal'],
			fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Hanken Grotesk',
			cssVariable: '--font-hanken',
			weights: [400, 500, 600, 700, 800],
			styles: ['normal', 'italic'],
			fallbacks: ['Segoe UI', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-jetbrains',
			weights: [400, 500, 700],
			styles: ['normal'],
			fallbacks: ['ui-monospace', 'Menlo', 'monospace'],
		},
	],
});
