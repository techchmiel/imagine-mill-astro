One-line: A pill-shaped topic chip carrying the brand's circuit-node marker — use for article/video categories and filters.

```jsx
<Tag href="/topics/m365">Microsoft 365</Tag>
<Tag variant="green">Cloud</Tag>
<Tag variant="red">AI</Tag>
<Tag variant="solid" node={false}>Admin</Tag>
```

Variants: `blue` (default), `green`, `red`, `solid` (navy). Set `node={false}` to drop the leading marker. Provide `href` to make it a link.
