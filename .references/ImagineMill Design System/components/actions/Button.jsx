import React from 'react';

/**
 * ImagineMill primary action button.
 * Renders a <button> by default, or an <a> when `href` is provided.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'im-btn',
    `im-btn--${variant}`,
    `im-btn--${size}`,
    block ? 'im-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft ? <span className="im-btn__icon" aria-hidden="true" style={{ display: 'inline-flex' }}>{iconLeft}</span> : null}
      {children ? <span>{children}</span> : null}
      {iconRight ? <span className="im-btn__icon" aria-hidden="true" style={{ display: 'inline-flex' }}>{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} {...rest}>{content}</a>
    );
  }
  return (
    <button className={cls} disabled={disabled} aria-disabled={disabled || undefined} {...rest}>
      {content}
    </button>
  );
}
