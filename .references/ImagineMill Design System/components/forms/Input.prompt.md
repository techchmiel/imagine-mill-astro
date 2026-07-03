One-line: A labelled text field for forms (newsletter sign-up, contact, search) with built-in hint and error styling.

```jsx
<Input label="Work email" type="email" placeholder="you@company.com"
  hint="We send one digest a week. No spam." />
<Input label="Tenant name" error="That tenant doesn't exist." defaultValue="contos" />
```

Pass any native input attribute (`type`, `placeholder`, `value`, `onChange`…). Use `hint` for help text and `error` for validation.
