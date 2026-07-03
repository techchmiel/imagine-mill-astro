One-line: A horizontal underline tab bar for switching between content views (e.g. Articles / Videos / Guides) with an animated brand-gradient indicator.

```jsx
<Tabs
  items={['Latest', 'Microsoft 365', 'Cloud', 'AI']}
  defaultValue="Latest"
  onChange={(v) => setFilter(v)}
/>
```

Works uncontrolled (`defaultValue`) or controlled (`value` + `onChange`). Items may be strings or `{value,label}`.
