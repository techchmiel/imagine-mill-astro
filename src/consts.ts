// Global site data for ImagineMill.
// Import from anywhere with: import { SITE_TITLE } from '../consts';

export const SITE_TITLE = 'ImagineMill';

/**
 * PortalSpark forms gateway (see the portalspark-forms repo).
 * Override locally with PUBLIC_FORMS_BASE=http://localhost:8788 in .env.
 */
export const FORMS_BASE = import.meta.env.PUBLIC_FORMS_BASE ?? 'https://forms.portalspark.com';
export const NEWSLETTER_FORM_KEY = 'imaginemill-newsletter';

export const SITE_TAGLINE = 'Modern workplace solutions';
export const SITE_DESCRIPTION =
	'Plain-spoken guides to Microsoft 365, cloud, and AI — for the people who keep modern workplaces running.';

/**
 * Platforms — the product areas an article covers.
 * An article can touch several (e.g. SharePoint + OneDrive).
 */
export interface Platform {
	name: string;
	blurb: string;
}

export const PLATFORMS: Record<string, Platform> = {
	'microsoft-365': {
		name: 'Microsoft 365',
		blurb: 'The suite as a whole — licensing, admin centers, and how the pieces fit together.',
	},
	sharepoint: {
		name: 'SharePoint',
		blurb: 'Sites, libraries, and the engine quietly running half of Microsoft 365.',
	},
	onedrive: {
		name: 'OneDrive',
		blurb: 'Personal files, syncing, and sharing without the “who can see this?” panic.',
	},
	teams: {
		name: 'Teams',
		blurb: 'Chats, channels, and meetings — collaboration without the noise.',
	},
	copilot: {
		name: 'Copilot & AI',
		blurb: 'AI in the tools you already use: what it can do, what it can see, and how to roll it out.',
	},
	azure: {
		name: 'Azure',
		blurb: 'The cloud platform underneath everything — explained for people who aren’t (yet) cloud architects.',
	},
	'power-platform': {
		name: 'Power Platform',
		blurb: 'Power Automate, Power Apps, and the automations that give you your afternoons back.',
	},
	security: {
		name: 'Security & Entra',
		blurb: 'Identity, access, and keeping the front door locked without locking out your own people.',
	},
};

/**
 * Categories — what kind of read an article is.
 * Exactly one per article; sets the badge color and reader expectation.
 */
export interface Category {
	name: string;
	blurb: string;
	/** Badge variant from the design system: info | success | danger | navy | warn | neutral */
	badge: 'info' | 'success' | 'danger' | 'navy' | 'warn' | 'neutral';
}

export const CATEGORIES: Record<string, Category> = {
	explainer: {
		name: 'Explainer',
		blurb: 'A hard topic, made genuinely understandable. No prior expertise assumed.',
		badge: 'info',
	},
	'how-to': {
		name: 'How-to',
		blurb: 'Step-by-step guides you can follow along with today.',
		badge: 'success',
	},
	'decision-guide': {
		name: 'Decision guide',
		blurb: 'This or that? A clear map for the choices everyone gets stuck on.',
		badge: 'navy',
	},
	strategy: {
		name: 'Strategy',
		blurb: 'Rollouts, adoption, and governance — for the people planning the change.',
		badge: 'danger',
	},
};

/**
 * Audiences — who an article is written for.
 */
export const AUDIENCES: Record<string, string> = {
	everyone: 'Everyone',
	'power-users': 'Power users',
	admins: 'Admins',
	leaders: 'Leaders',
};

export function platformName(slug: string): string {
	return PLATFORMS[slug]?.name ?? slug;
}

export function categoryName(slug: string): string {
	return CATEGORIES[slug]?.name ?? slug;
}

/** Rough reading time from a markdown body, in minutes. */
export function readingTime(body: string | undefined): number {
	if (!body) return 1;
	const words = body.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}
