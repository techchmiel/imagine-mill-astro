# ImagineMill

ImagineMill is a free learning resource for **Microsoft 365, cloud, and AI**, written for the people who keep modern workplaces running — everyday users, accidental admins, power users, and the leaders making rollout decisions. Owned by PortalSpark (the commercial coaching side); the site itself stays non-commercial. Tagline: **"Modern workplace solutions."**

The editorial promise, in one line: **hard topics, made genuinely understandable — without watering them down.**

## Voice and tone (read this before writing anything)

The voice is a warm, plain-spoken expert — the colleague who actually explains things. Enthusiastic and generous, never condescending, never breathless.

- Speak to the reader as **"you"**, refer to the brand as **"we"**.
- **Sentence case everywhere** — headings, buttons, labels. The only all-caps is the eyebrow/label treatment (`FEATURED · AI`).
- **Name the pain, then relieve it.** Openings drop the reader into a recognizable workplace moment (the 4:55pm delete, the exec back from a conference) before explaining anything.
- **Explain every technical term at first use.** Product names (Copilot, SharePoint, Entra) are treated as familiar friends; acronyms get unpacked.
- **Concrete beats vague.** "93 days", "20–50 licenses", "two clicks" — real numbers, never invented statistics. If a fact can go stale (prices!), describe the structure and say why the number is omitted.
- **Humor is welcome, grounded in business life** — recurring characters (Dave and his tidy recycle bin), dry asides ("entire job titles exist for this"), never wacky, never at the reader's expense. Roughly one smile per section, not per sentence.
- **Analogies carry the explainers**: Copilot is a brilliant intern, Conditional Access is a bouncer, Azure is an empty lot vs. the M365 furnished apartment. One strong analogy per article, sustained throughout, beats five weak ones.
- **No emoji, ever.** The brand's visual punctuation is the circuit node, not emoji.
- End articles with a memorable restatement, not a summary list — and where natural, a link into a related article ("*Next up: …*").

House-style headline shapes: "Rolling out Copilot without the chaos", "SharePoint or OneDrive? A decision map", "Conditional Access, explained for normal humans".

## Content strategy

Every article is exactly one **category** (sets reader expectation + badge color), one or more **platforms**, free-form **tags**, and one **audience**. Definitions live in `src/consts.ts` — extend there first; the schema in `src/content.config.ts` validates against it.

- **Categories:** `explainer` (concept, no prior expertise), `how-to` (follow-along steps), `decision-guide` (this-or-that with a clear map), `strategy` (rollouts/governance for planners).
- **Platforms:** microsoft-365, sharepoint, onedrive, teams, copilot, azure, power-platform, security.
- **Audiences:** everyone, power-users, admins, leaders.
- Topic selection rule: write what people actually search ("what's the difference", "where did my file go", "which license"), not product news. Evergreen structure > announcements.
- Articles cross-link to each other liberally — the site is designed to inspire clicking around, and internal links are part of that.
- Exactly **one post** carries `featured: true` at a time (homepage hero). Move the flag when publishing something hero-worthy.

### Writing a new article (checklist)

1. `src/content/blog/<kebab-slug>.mdx` — the file name becomes the URL (`/articles/<slug>/`).
2. Frontmatter: `title`, `description` (it's the card excerpt *and* the article lede — write it as a hook, ~2 sentences), `pubDate`, `platforms`, `category`, `tags`, `audience`, optional `heroStyle` (0–5 picks the gradient-art variant), optional `featured`.
3. **Ground fact-heavy claims** in Microsoft Learn (use the Microsoft Learn MCP tools) — licensing, retention windows, feature availability all drift. Prefer stable facts; omit prices.
4. Use `<Callout>` (import from `../../components/Callout.astro`; types: tip/info/warning/danger) for the one or two things a skimmer must not miss. Tables for comparisons. `##` sections with sentence-case headings.
5. No hero image needed — every post gets deterministic on-brand circuit art from its slug (`GradientArt.astro`).
6. Target 900–1,400 words. Long enough to educate, short enough to finish at a desk.

## Design system

Source of truth: `.references/ImagineMill Design System/` (read its `readme.md` before visual work). The tokens and component CSS are **copied** into `src/styles/` — if the reference system changes, re-sync `tokens/*.css` and `components.css`.

- Palette: navy `#101840` ink, circuit-blue gradient `#1080C0→#38B0E8` (primary), signal green `#78C040`, signal red `#B82028` (a spark, never a field). Neutrals are navy-tuned; shadows navy-tinted, never black.
- Type: **Oxanium** (display — headings, eyebrows, buttons), **Hanken Grotesk** (body), **JetBrains Mono** (code). Self-hosted via Astro's fonts API in `astro.config.mjs`; the design-system CSS consumes them through `--font-display/-body/-mono`.
- Signature motifs: rounded-square **nodes** (`.im-node`), the green→blue→red **signal rule** (`.im-signal-rule`), blueprint-grid navy backgrounds (`.im-circuit-bg`). Use these instead of decorative icons or stock imagery. **No photography** — media areas use generated gradient + circuit art.
- Reusable classes are already global: `.im-btn`, `.im-badge`, `.im-tag`, `.im-card`, `.im-callout`, `.im-eyebrow`, `.im-container`. Prefer them over new one-off styles; page-specific styling goes in scoped `<style>` blocks.
- Motion: quick and purposeful (200ms), hover = lift + blue border/glow, press = 1px down. Respect `prefers-reduced-motion` (handled globally).

## Architecture

- **Routes:** `/` (hero + latest + topic cards), `/articles/` (all posts, client-side platform/type filters, deep-linkable via `?platform=&category=`), `/articles/[slug]/`, `/platforms|categories|tags/[x]/` (shared `TaxonomyPage` layout), `/topics/` (directory), `/about/`, `/404`, `/rss.xml`, `/search.json`.
- **Search:** `search.json.ts` builds a plain-text index at compile time; `SearchOverlay.astro` is a dependency-free command palette (⌘K / Ctrl+K / `/`, arrows + enter). Every term must match; title > taxonomy > description > body.
- **Layouts:** `BaseLayout` (head/header/footer/search shell) → `BlogPost` (article view, computes related posts by shared platforms/tags) and `TaxonomyPage`.
- **Reading time** is computed from the body (`readingTime()` in consts) — never hand-written.
- **Forms** (newsletter subscribe on the home band, `/unsubscribe/`) POST to the shared PortalSpark forms gateway (`portalspark-forms` repo → `forms.portalspark.com`), which upserts a SharePoint list via Graph. The base URL is `FORMS_BASE` in consts; for local dev run the gateway (`php -S localhost:8788 -t public`, `APP_ENV=dev`) and set `PUBLIC_FORMS_BASE=http://localhost:8788` in `.env`. Forms carry a `website` honeypot and a JS-set `ts` field — keep both when touching them.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Before calling work done: `npm run build` (must pass; it validates every article's frontmatter against the schema) and click through home → article → tag → search on the dev server. Frontmatter dates are UTC — `FormattedDate` renders with `timeZone: 'UTC'`; keep it that way or dates shift a day.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
