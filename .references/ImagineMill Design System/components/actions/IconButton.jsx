import React from 'react';

/**
 * Compact square button for a single icon. Provide an accessible `label`.
 */
export function IconButton({
  variant = 'plain',
  size = 'md',
  label,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'im-iconbtn',
    `im-iconbtn--${size}`,
    variant !== 'plain' ? `im-iconbtn--${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return <a href={href} className={cls} aria-label={label} title={label} {...rest}>{children}</a>;
  }
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>{children}</button>
  );
}
