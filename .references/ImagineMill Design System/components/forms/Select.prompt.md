One-line: A labelled dropdown with the brand's custom chevron — use for filters and form choices.

```jsx
<Select label="Topic" placeholder="Choose a topic"
  options={['Microsoft 365', 'Cloud', 'AI', 'Security']} />
<Select label="Role" options={[{value:'admin',label:'IT Admin'},{value:'user',label:'End user'}]} />
```

Accepts string or `{value,label}` options, plus native select attributes. Supports `hint` and `error` like `Input`.
