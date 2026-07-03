import React from 'react';

/** Circular avatar. Shows an image, or initials over the brand gradient. */
export function Avatar({ src, name = '', size = 'md', ring = false, className = '', ...rest }) {
  const cls = ['im-avatar', `im-avatar--${size}`, ring ? 'im-avatar--ring' : '', className].filter(Boolean).join(' ');
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span className={cls} title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initials}</span>}
    </span>
  );
}
