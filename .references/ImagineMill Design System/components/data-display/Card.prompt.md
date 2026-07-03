One-line: The content card used across the ImagineMill blog and video library — a thumbnail plus title, excerpt, and a meta row; set `kind="video"` for a play overlay.

```jsx
<Card
  href="/posts/copilot-rollout"
  media="/thumbs/copilot.jpg"
  kind="video"
  badge={<Badge variant="navy">Video</Badge>}
  title="Rolling out Copilot without the chaos"
  excerpt="A calm, staged plan for admins bringing AI to Microsoft 365."
  meta={<><Avatar name="Jordan Vale" size="xs" /> <span>Jordan Vale · 8 min</span></>}
/>
```

Compose with `Badge`, `Tag`, and `Avatar`. Omit `media` for a text-only card, or pass a node as `media` for custom art. Use `children` to fully control the body.
