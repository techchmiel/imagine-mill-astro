import React from 'react';

/** Labelled dropdown select. Pass `options` as strings or {value,label}. */
export function Select({
  label, hint, error, id, options = [], placeholder, className = '', containerClassName = '', children, ...rest
}) {
  const selId = id || (label ? `im-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const selCls = ['im-input', error ? 'im-input--error' : '', className].filter(Boolean).join(' ');
  return (
    <div className={['im-field', containerClassName].filter(Boolean).join(' ')}>
      {label ? <label className="im-field__label" htmlFor={selId}>{label}</label> : null}
      <select id={selId} className={selCls} aria-invalid={!!error || undefined} {...rest}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {children ? children : options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lab = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{lab}</option>;
        })}
      </select>
      {error ? <span className="im-field__hint" style={{ color: 'var(--red-600)' }}>{error}</span>
             : hint ? <span className="im-field__hint">{hint}</span> : null}
    </div>
  );
}
