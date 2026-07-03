One-line: A colored note box for how-to and reference content — use `tip`, `info`, `warning`, and `danger` to guide readers through steps and gotchas.

```jsx
<Callout type="tip" title="Shortcut">
  Pin the admin center to your Microsoft 365 launcher for one-click access.
</Callout>
<Callout type="warning" title="Heads up">
  Changing this tenant setting can take up to 24 hours to propagate.
</Callout>
```

Types: `tip` (green), `info` (blue), `warning` (amber), `danger` (red). Default icons ship per type — override with `icon` or hide with `icon={null}`.
