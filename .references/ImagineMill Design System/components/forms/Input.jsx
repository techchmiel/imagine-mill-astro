import React from 'react';

/** Labelled text input. Wraps label, field, hint and error state. */
export function Input({
  label, hint, error, id, className = '', containerClassName = '', ...rest
}) {
  const inputId = id || (label ? `im-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputCls = ['im-input', error ? 'im-input--error' : '', className].filter(Boolean).join(' ');
  return (
    <div className={['im-field', containerClassName].filter(Boolean).join(' ')}>
      {label ? <label className="im-field__label" htmlFor={inputId}>{label}</label> : null}
      <input id={inputId} className={inputCls} aria-invalid={!!error || undefined} {...rest} />
      {error ? <span className="im-field__hint" style={{ color: 'var(--red-600)' }}>{error}</span>
             : hint ? <span className="im-field__hint">{hint}</span> : null}
    </div>
  );
}
