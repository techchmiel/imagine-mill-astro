import React from 'react';

/**
 * Content card for blog articles and YouTube videos.
 * Composable via props; renders as a link when `href` is set.
 */
export function Card({
  media,
  kind = 'article',        // 'article' | 'video'
  badge,                   // React node rendered top-left over media
  title,
  excerpt,
  meta,                    // React node rendered in the footer
  href,
  interactive = true,
  className = '',
  children,
  ...rest
}) {
  const Root = href ? 'a' : 'div';
  const cls = ['im-card', (interactive || href) ? 'im-card--interactive' : '', className]
    .filter(Boolean).join(' ');

  return (
    <Root href={href} className={cls} style={href ? { color: 'inherit' } : undefined} {...rest}>
      {media !== undefined && (
        <div className="im-card__media">
          {typeof media === 'string'
            ? <img src={media} alt={title || ''} />
            : media}
          {badge ? <div className="im-card__media-badge">{badge}</div> : null}
          {kind === 'video' ? (
            <div className="im-card__play" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          ) : null}
        </div>
      )}
      <div className="im-card__body">
        {children ? children : (
          <>
            {title ? <h3 className="im-card__title">{title}</h3> : null}
            {excerpt ? <p className="im-card__excerpt">{excerpt}</p> : null}
            {meta ? <div className="im-card__meta">{meta}</div> : null}
          </>
        )}
      </div>
    </Root>
  );
}
