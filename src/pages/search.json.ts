import { getCollection } from 'astro:content';
import { categoryName, platformName } from '../consts';

/** Strip markdown/MDX down to plain text for the search index. */
function plainText(body: string | undefined): string {
	if (!body) return '';
	return body
		.replace(/^import .*$/gm, '') // MDX imports
		.replace(/```[\s\S]*?```/g, ' ') // fenced code blocks
		.replace(/<[^>]+>/g, ' ') // JSX/HTML tags
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links → text
		.replace(/[#>*_`~|-]+/g, ' ') // md syntax
		.replace(/\s+/g, ' ')
		.trim();
}

export async function GET() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	const index = posts
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((post) => ({
			url: `/articles/${post.id}/`,
			title: post.data.title,
			description: post.data.description,
			category: categoryName(post.data.category),
			platforms: post.data.platforms.map(platformName),
			tags: post.data.tags,
			body: plainText(post.body),
		}));
	return new Response(JSON.stringify(index), {
		headers: { 'Content-Type': 'application/json' },
	});
}
