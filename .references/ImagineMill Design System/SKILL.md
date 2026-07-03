---
name: imaginemill-design
description: Use this skill to generate well-branded interfaces and assets for ImagineMill (a Microsoft 365 / cloud / AI education brand and blog by PortalSpark), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — the single global entry point. Link it and you get all tokens, fonts, base styles, and component classes.
- `tokens/` — colors, typography, spacing, effects (radii/shadows/motion), base element styles + brand utilities (`.im-eyebrow`, `.im-signal-rule`, `.im-node`, `.im-circuit-bg`, `.im-gradient-text`).
- `components/` — React primitives (Button, IconButton, Badge, Tag, Card, Avatar, Callout, CodeBlock, Input, Select, Tabs). Each has a `.d.ts` and `.prompt.md`.
- `ui_kits/website/` — the full ImagineMill site (home, article, videos, coaching) as an interactive reference.
- `slides/` — branded 16:9 sample slides.
- `guidelines/` — foundation specimen cards.
- `assets/logos/` — logos & icon.

## Brand in one breath
Palette straight from the logo: **navy `#101840`**, **circuit-blue gradient `#1080C0→#38B0E8`**, **signal green `#78C040`**, **signal red `#B82028`**. Display font **Oxanium** (geometric, cut-cornered), body **Hanken Grotesk**, mono **JetBrains Mono**. Voice: enthusiastic, welcoming, plain-spoken; sentence case; "you"/"we"; no emoji. Signature graphic: the **circuit-node** motif (rounded-square nodes, green→blue→red signal rule, blueprint-grid navy backgrounds). Icons: **Lucide**.

Note: the display font and icon set are close substitutions (no originals were provided) — see Caveats in `readme.md`.
