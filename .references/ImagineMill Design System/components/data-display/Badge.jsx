import React from 'react';

/** Small status/label pill in the display typeface. */
export function Badge({ variant = 'neutral', dot = false, className = '', children, ...rest }) {
  const cls = ['im-badge', `im-badge--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot ? <span className="im-badge__dot" /> : null}
      {children}
    </span>
  );
}
