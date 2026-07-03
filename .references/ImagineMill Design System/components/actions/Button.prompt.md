One-line: The primary call-to-action button in the ImagineMill display voice — use for any clickable action, and set `href` to render a link that looks identical.

```jsx
<Button variant="primary" size="md" iconRight={<ArrowRight size={18} />}>
  Read the guide
</Button>
<Button variant="secondary">Watch on YouTube</Button>
<Button variant="ink" href="/coaching">Book coaching</Button>
```

Variants: `primary` (brand blue, the default CTA), `ink` (navy, high-contrast secondary CTA), `green` (positive / subscribe), `secondary` (outline on white), `ghost` (low-emphasis, toolbar), `danger` (destructive). Sizes: `sm` / `md` / `lg`. Pass `iconLeft` / `iconRight` (Lucide icons recommended), `block` for full-width, `disabled` to dim + block interaction.
