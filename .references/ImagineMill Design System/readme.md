# ImagineMill Design System

**ImagineMill** is a brand, blog, and YouTube channel offering guidance on **Microsoft 365, cloud, and AI** for the people who keep modern workplaces running — everyday users, super users, admins, and management teams. It is owned by **PortalSpark**, which provides the commercial side (coaching, workshops). ImagineMill itself is a largely non-commercial learning resource; the tagline is **"Modern Workplace Solutions."**

The brand voice is **enthusiastic, welcoming, and generous** — an expert friend who is genuinely excited to help you understand modern technology.

> **Design brief from the owner:** *"I love the font and colors, but the monitor [icon] is perhaps a bit boring and uninspired. Keep what I love and improve on the rest."* This system keeps the exact logo palette and the geometric wordmark voice, and grows a fresher **circuit-node graphic language** (traces, connection nodes, the green→blue→red signal) out of the details already inside the monitor icon — so the brand feels more alive without losing what the owner loves.

## Sources provided
- Logo files supplied by the owner (in `/uploads`, copied into `/assets/logos`):
  `full-logo-wide-transparent.png`, `full-logo-wide.jpg`, `FullLogo.jpeg/png` (stacked),
  `IconOnly.png`, `IconOnly_Transparent.png`, `TextOnly_NoBuffer.png` (wordmark),
  `suite-bar-logo.png` (small horizontal lockup).
- No codebase, Figma file, website, or existing style guide was provided. All tokens below are derived by sampling the logo artwork directly; the component inventory is authored from scratch, sized to a blog/video/coaching brand.

---

## Content fundamentals — how ImagineMill writes

**Voice:** warm, plain-spoken expert. Excited to share, never condescending. Think "the colleague who actually explains things."

- **Person:** Speak to the reader as **"you"**; refer to the brand/coaches as **"we."** ("Here is the approach *we* walk through with every client so *you* stay in control.")
- **Casing:** **Sentence case** for all headings and buttons — never Title Case in UI. The *only* all-caps is the display-font eyebrow/label treatment (e.g. `FEATURED · AI`), echoing the logo tagline.
- **Tone:** Confident and reassuring. Name the pain ("without the chaos", "stop guessing"), then relieve it. Short sentences. Active voice.
- **Clarity over jargon:** Technical terms are used but always explained. Prefer "sharing settings" to acronyms where possible; when using product names (Copilot, SharePoint, Power Automate) treat them as familiar friends.
- **Numbers & specifics:** Concrete beats vague ("a 6-minute tour", "fifteen to twenty people", "one clear email a week"). Avoid invented statistics.
- **Emoji:** **Not used.** The brand's visual "punctuation" is the circuit **node** marker (a small rounded square), not emoji. Do not introduce emoji into ImagineMill copy.
- **CTA style:** Verb-first and friendly — "Read the guide", "Watch the series", "Book a discovery call", "Subscribe". Reassure next to commercial CTAs ("No pressure, ever.").

**Example headlines (house style):**
- "Rolling out Copilot without the chaos"
- "SharePoint or OneDrive? A decision map"
- "The admin center tour every new admin needs"
- "One clear email a week."

---

## Visual foundations

**Color.** The palette is taken straight from the logo and is the non-negotiable heart of the brand:
- **Brand navy `#101840`** — the monitor body. The ink, the anchor, dark surfaces, footer.
- **Circuit blue `#1080C0 → #38B0E8`** — the glowing screen gradient. Primary action color and the signature `--gradient-screen` wash. Core solid = `blue-500 #1E96D8`.
- **Signal green `#78C040`** — the circuit nodes. Growth, success, positive actions (Subscribe).
- **Signal red `#B82028`** — the tagline color. Emphasis, alerts, the "AI" topic accent. Used sparingly as a spark, not a field.
- **Neutrals** are subtly **navy-tuned** (cool grays), never pure black. Shadows are navy-tinted too.
Full ramps live in `tokens/colors.css` and the **Colors** cards.

**Typography.**
- **Display — Oxanium** (Google Fonts): geometric, cut-cornered, techy. Carries the logo's voice into all headings, eyebrows, buttons, and labels. *(Substitution — see Font note below.)*
- **Body/UI — Hanken Grotesk**: warm, friendly, highly legible humanist sans. Everything readable — article body, UI text.
- **Mono — JetBrains Mono**: PowerShell/CLI snippets and keystrokes (this is a tech-education brand, so code is first-class).
- Headings are **sentence case**, tight tracking (`-0.01em`). Eyebrows/labels are **uppercase, wide-tracked** (`0.12–0.24em`) in the display font.

**Backgrounds.** Three registers: plain white/`gray-050` for reading; a **soft blue screen wash** (`--gradient-screen-soft`) for hero and section bands; and the **navy circuit grid** (`.im-circuit-bg` — a faint blueprint grid over navy, sometimes with a soft radial screen-glow) for the footer, newsletter, and coaching hero. No stock photography ships yet — media areas use the **brand gradient + circuit grid** as placeholder art (see Caveats).

**The circuit motif (the "improved" layer).** Extracted from the monitor's internals:
- **Connection nodes** — small rounded squares (`--radius-node: 8px`), outlined (3px) or filled, in green/blue/red. Used as list markers, tag dots, decorative accents (`.im-node`).
- **Signal rule** — a thin `green → blue → red` gradient hairline (`.im-signal-rule` / `--gradient-signal`) used to open sections.
- **Traces** — thin connector lines between nodes for decorative diagrams.

**Corner radii.** Friendly but crisp, keyed to the node shape: buttons `10px`, cards `14px`, large panels `20–28px`, pills for tags. Nothing fully sharp; nothing overly bubbly.

**Shadows / elevation.** Soft, **navy-tinted** (`rgba(16,24,64,…)`), never black. Cards rest at `--shadow-sm`, lift to `--shadow-lg` on hover. Brand elements can use a colored **glow** on hover (`--shadow-glow-blue` / `-green`) — the "screen turning on" feel.

**Borders.** Hairline `1px` in cool gray for card/field edges; `1.5px` for inputs; the chunky `3px` node outline is reserved for the motif.

**Motion.** Purposeful and quick. Standard `200ms` ease; hover lifts use a gentle ease-out; a subtle spring (`--ease-spring`) for playful accents (play button pop). **Hover** = lift + blue border + optional glow (and, on tags/buttons, a small color deepening). **Press** = `translateY(1px)` (a real "click"), plus the pressed brand color. No infinite/looping decoration. Respect `prefers-reduced-motion`.

**Transparency & blur.** Used deliberately: the sticky header is translucent white with `blur(12px)`; media overlays use semi-opaque navy scrims behind play buttons. Not used decoratively elsewhere.

**Imagery vibe (intended).** Cool, bright, clean, optimistic — screen-lit blues, plenty of white space. When real photography is added it should feel modern and calm, cool-leaning, never grainy or moody.

---

## Iconography

- **System:** [**Lucide**](https://lucide.dev) (via CDN `unpkg.com/lucide`) — clean, rounded, consistent **2px stroke** outline icons. Their friendly-but-technical feel matches the brand; stroke weight pairs well with Hanken Grotesk and the node motif. **This is a substitution** (no icon set was provided) — swap for a licensed/self-hosted set in production if desired.
- **Usage:** Line icons at `16–20px` in UI, up to `28–32px` for feature moments (play buttons). Color from tokens (`currentColor`, brand blue, or on-navy muted). The `IconButton` component wraps single icons.
- **The node marker** (`.im-node`, `Tag`'s dot) is the brand's own iconographic signature — prefer it over decorative icons for list bullets and tag markers.
- **Emoji / unicode as icons:** not used. A few tiny inline SVGs ship inside components (Callout default glyphs, Card play triangle, Select chevron) so those primitives are self-contained; everything else uses Lucide.

---

## Components (`/components`)

React primitives — `import { Name } from` the compiled bundle, or `window.<Namespace>.<Name>` in card HTML. Each has a `.d.ts` (props), `.prompt.md` (usage), and a `@dsCard` demo.

- **actions/** — `Button` (primary · ink · green · secondary · ghost · danger; sm/md/lg; icon slots; renders `<a>` with `href`), `IconButton` (plain · solid · outline).
- **data-display/** — `Badge` (status pills), `Tag` (topic chips with the node marker), `Card` (article & video content card — the site workhorse), `Avatar` (image or initials over the brand gradient).
- **content/** — `Callout` (tip · info · warning · danger note boxes for tutorials), `CodeBlock` (dark terminal-style snippets with node-colored window dots).
- **forms/** — `Input` (labelled text field + hint/error), `Select` (labelled dropdown with brand chevron).
- **navigation/** — `Tabs` (underline bar with the animated gradient indicator).

## UI kits (`/ui_kits`)

- **website/** — the **ImagineMill site**, an interactive click-through: **Home** (featured hero, topic tabs, article/video grid, newsletter), **Article** (long-form reading view with callouts, code, author card), **Videos** (featured player + library grid), **Coaching** (PortalSpark plans, testimonial). Open `ui_kits/website/index.html`.

## Slides (`/slides`)

- Branded 16:9 sample slides (title, section, content, big-quote, video/comparison) using the foundations and logos. Open `slides/index.html`.

## Foundations (`/guidelines`)

Specimen cards for the **Design System** tab: Colors (navy, blue, green, red, neutrals, status, gradients), Type (display, body, mono, scale, eyebrow), Spacing (scale, radii, shadows), Brand (logo lockups, icon/stacked, circuit motif, backgrounds).

---

## File index / manifest
- `styles.css` — global entry point (import this one file). Imports the token + base + component CSS below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css` — CSS custom properties, `@font-face`/Google Fonts import, and base element + brand-utility styles.
- `components/components.css` — component class styles (referenced by the JSX primitives).
- `components/<group>/<Name>.{jsx,d.ts,prompt.md}` + a `*.card.html` demo per group.
- `guidelines/*.card.html` — foundation specimen cards.
- `ui_kits/website/*` — the website UI kit (`index.html` + screen JSX + `data.js`).
- `slides/*` — sample branded slides.
- `assets/logos/*` — brand logos & icon.
- `SKILL.md` — Agent-Skill wrapper so this system can be used from Claude Code.

---

## Caveats & substitutions (please review)
1. **Display font is a substitution.** The logo wordmark appears to be a custom/proprietary geometric face. **Oxanium** (Google Fonts) is the closest free match — same beveled, circuit-cut character. **If you have the real font file, send it and it will be swapped in.**
2. **Icon set is a substitution** — **Lucide** stands in since none was provided. Confirm or replace for production.
3. **No reversed / dark logo.** The supplied wordmark is navy and disappears on dark backgrounds, so lockups are shown only on light/blue grounds; the footer & dark heroes use the **icon** mark. A white/reversed wordmark would round this out — **can you provide one?**
4. **No photography.** Media/thumbnail areas use on-brand gradient + circuit-grid placeholders. Point us to a photo library or approve the gradient-art direction.
5. **Body & mono fonts (Hanken Grotesk, JetBrains Mono) were chosen** to pair with the brand — happy to adjust to your preference.
