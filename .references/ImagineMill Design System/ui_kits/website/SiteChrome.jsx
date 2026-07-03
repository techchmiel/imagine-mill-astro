// Header + Footer chrome for the ImagineMill site.
const { Button, IconButton, Tag } = window.ImagineMillDesignSystem_ef9c8c;

function Header({ current, onNav }) {
  const links = [
    ['home', 'Home'],
    ['articles', 'Articles'],
    ['videos', 'Videos'],
    ['coaching', 'Coaching'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '0 var(--gutter)',
        height: 68, display: 'flex', alignItems: 'center', gap: 28,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('home'); }}
           style={{ display: 'flex', alignItems: 'center', flex: 'none' }}>
          <img src="../../assets/logos/imaginemill-suitebar.png" alt="ImagineMill" style={{ height: 30 }} />
        </a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
          {links.map(([id, label]) => (
            <a key={id} href="#" onClick={(e) => { e.preventDefault(); onNav(id); }}
               style={{
                 fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                 letterSpacing: '0.02em', padding: '8px 12px', borderRadius: 8,
                 color: current === id ? 'var(--blue-700)' : 'var(--navy-700)',
                 background: current === id ? 'var(--blue-050)' : 'transparent',
               }}>
              {label}
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <IconButton label="Search"><Icon n="Search" s={19} /></IconButton>
          <Button variant="primary" size="sm" iconLeft={<Icon n="Bell" s={16} c="#fff" />}
                  onClick={() => onNav('home')}>Subscribe</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNav }) {
  const cols = [
    ['Learn', ['Articles', 'Video library', 'Guides', 'Glossary']],
    ['Topics', ['Microsoft 365', 'Cloud', 'AI & Copilot', 'Security']],
    ['PortalSpark', ['Coaching', 'Workshops', 'About', 'Contact']],
  ];
  return (
    <footer className="im-circuit-bg" style={{ marginTop: 80, color: 'var(--text-on-navy)' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '56px var(--gutter) 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <img src="../../assets/logos/imaginemill-icon.png" alt="" style={{ height: 44, marginBottom: 14 }} />
            <p style={{ color: 'var(--text-on-navy-muted)', fontSize: 14, maxWidth: 260, margin: 0, lineHeight: 1.6 }}>
              Modern workplace understanding — free guidance on Microsoft 365, cloud, and AI. A PortalSpark resource.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              {['Youtube', 'Linkedin', 'Rss'].map((n) => (
                <span key={n} style={{
                  width: 38, height: 38, borderRadius: 8, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', background: 'rgba(255,255,255,0.06)', color: 'var(--blue-200)',
                }}><Icon n={n} s={18} c="var(--blue-200)" /></span>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--blue-300)', marginBottom: 14 }}>{h}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map((it) => (
                  <li key={it}><a href="#" onClick={(e) => { e.preventDefault(); onNav('coaching'); }}
                    style={{ color: 'var(--text-on-navy-muted)', fontSize: 14 }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 44, paddingTop: 22,
          borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'var(--text-on-navy-muted)' }}>
          <span>© 2026 ImagineMill · Owned by PortalSpark</span>
          <span style={{ marginLeft: 'auto' }}>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
