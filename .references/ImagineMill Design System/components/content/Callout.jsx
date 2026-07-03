import React from 'react';

const DEFAULT_ICONS = {
  info: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  tip: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 8a6 6 0 0 0-12 0c0 1 .3 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg>,
  warning: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>,
  danger: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9z"/><path d="M12 8v4M12 16h.01"/></svg>,
};

/** Highlighted note block for tutorials — tip, info, warning, danger. */
export function Callout({ type = 'info', title, icon, className = '', children, ...rest }) {
  const cls = ['im-callout', `im-callout--${type}`, className].filter(Boolean).join(' ');
  const glyph = icon !== undefined ? icon : DEFAULT_ICONS[type];
  return (
    <div className={cls} role="note" {...rest}>
      {glyph ? <span className="im-callout__icon" aria-hidden="true">{glyph}</span> : null}
      <div className="im-callout__content">
        {title ? <p className="im-callout__title">{title}</p> : null}
        <div className="im-callout__body">{children}</div>
      </div>
    </div>
  );
}
