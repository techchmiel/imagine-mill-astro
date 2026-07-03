import React from 'react';

/** Dark terminal-style code block with a title bar and language label. */
export function CodeBlock({ code, language = 'powershell', filename, className = '', children, ...rest }) {
  const cls = ['im-code', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="im-code__bar">
        <span className="im-code__dots">
          <span className="im-code__dot" style={{ background: 'var(--red-500)' }} />
          <span className="im-code__dot" style={{ background: 'var(--green-500)' }} />
          <span className="im-code__dot" style={{ background: 'var(--blue-400)' }} />
        </span>
        {filename ? <span style={{ marginLeft: 4 }}>{filename}</span> : null}
        <span className="im-code__lang">{language}</span>
      </div>
      <pre><code>{code != null ? code : children}</code></pre>
    </div>
  );
}
