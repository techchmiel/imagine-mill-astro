One-line: A square, icon-only button for toolbars, cards, and media controls — always pass `label` for accessibility.

```jsx
<IconButton label="Play video" variant="solid"><Play size={18} /></IconButton>
<IconButton label="Share" variant="outline"><Share2 size={18} /></IconButton>
<IconButton label="More"><MoreHorizontal size={20} /></IconButton>
```

Variants: `plain` (transparent, hover fill), `solid` (brand blue), `outline`. Sizes `sm`/`md`/`lg` map to 32/40/48px squares. Put a Lucide icon as the child.
