// Shared helpers for the ImagineMill website UI kit.

// Lucide icon renderer. Usage: <Icon n="Play" s={18} c="var(--blue-500)" />
function Icon({ n, s = 20, c = 'currentColor', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide[n]) {
      ref.current.innerHTML = '';
      const el = window.lucide.createElement(window.lucide[n]);
      el.setAttribute('width', s);
      el.setAttribute('height', s);
      el.setAttribute('stroke', c);
      ref.current.appendChild(el);
    }
  }, [n, s, c]);
  return <span ref={ref} style={{ display: 'inline-flex', ...style }} aria-hidden="true" />;
}

// Gradient media panel used as a thumbnail / hero art placeholder.
function GradientMedia({ i = 0, children, style }) {
  const [from, to] = window.IM.GRADIENTS[i % window.IM.GRADIENTS.length];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `linear-gradient(135deg, ${from}, ${to})`,
      position: 'relative', overflow: 'hidden', ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }} />
      {children}
    </div>
  );
}

Object.assign(window, { Icon, GradientMedia });
