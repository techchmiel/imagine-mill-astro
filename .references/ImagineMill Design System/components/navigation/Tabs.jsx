import React from 'react';

/** Underline tab bar. Controlled via `value`/`onChange`, or uncontrolled with `defaultValue`. */
export function Tabs({ items = [], value, defaultValue, onChange, className = '', ...rest }) {
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : internal;

  const select = (val) => {
    if (value === undefined) setInternal(val);
    if (onChange) onChange(val);
  };

  return (
    <div className={['im-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {items.map((it) => {
        const val = typeof it === 'string' ? it : it.value;
        const lab = typeof it === 'string' ? it : it.label;
        const isActive = val === active;
        return (
          <button
            key={val}
            role="tab"
            aria-selected={isActive}
            className={['im-tab', isActive ? 'im-tab--active' : ''].filter(Boolean).join(' ')}
            onClick={() => select(val)}
          >
            {lab}
          </button>
        );
      })}
    </div>
  );
}
