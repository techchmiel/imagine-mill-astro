import React from 'react';

/** Topic / category chip. Renders an <a> when `href` is set, else a <span>. */
export function Tag({ variant = 'blue', node = true, href, className = '', children, ...rest }) {
  const cls = ['im-tag', variant !== 'blue' ? `im-tag--${variant}` : '', className].filter(Boolean).join(' ');
  const inner = (
    <>
      {node ? <span className="im-tag__node" aria-hidden="true" /> : null}
      {children}
    </>
  );
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <span className={cls} {...rest}>{inner}</span>;
}
