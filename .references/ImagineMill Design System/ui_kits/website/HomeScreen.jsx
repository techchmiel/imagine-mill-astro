// Home / landing screen for ImagineMill.
const { Card, Badge, Tag, Tabs, Avatar, Button: HButton } = window.ImagineMillDesignSystem_ef9c8c;

function MetaRow({ author, date, read }) {
  return (
    <>
      <Avatar name={author} size="xs" />
      <span style={{ color: 'var(--text-body)', fontWeight: 600 }}>{author}</span>
      <span style={{ color: 'var(--gray-300)' }}>·</span>
      <span>{date}</span>
      {read ? <><span style={{ color: 'var(--gray-300)' }}>·</span><span>{read}</span></> : null}
    </>
  );
}

function PostCard({ p }) {
  return (
    <Card
      href="#" kind={p.kind}
      media={<GradientMedia i={p.grad} />}
      badge={<Badge variant={p.kind === 'video' ? 'navy' : 'info'}>{p.badge}</Badge>}
      title={p.title}
      excerpt={p.excerpt}
      meta={<MetaRow author={p.author} date={p.date} read={p.read} />}
    />
  );
}

function Hero({ f, onOpen }) {
  return (
    <section style={{
      background: 'var(--gradient-screen-soft)',
      borderBottom: '1px solid var(--blue-100)',
    }}>
      <div style={{
        maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '48px var(--gutter) 56px',
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span className="im-eyebrow" style={{ color: 'var(--red-500)' }}>Featured · {f.topic}</span>
            <span className="im-node" style={{ color: 'var(--green-500)', width: 12, height: 12 }} />
          </div>
          <h1 style={{ fontSize: 46, lineHeight: 1.08, margin: '0 0 18px', color: 'var(--navy-800)' }}>{f.title}</h1>
          <p style={{ fontSize: 18, color: 'var(--text-body)', maxWidth: '52ch', margin: '0 0 26px' }}>{f.excerpt}</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <HButton variant="primary" size="lg" iconRight={<Icon n="ArrowRight" s={18} c="#fff" />} onClick={onOpen}>Read the guide</HButton>
            <HButton variant="secondary" size="lg" iconLeft={<Icon n="Youtube" s={18} c="var(--navy-800)" />} onClick={onOpen}>Watch series</HButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 28, fontSize: 14, color: 'var(--text-muted)' }}>
            <Avatar name={f.author} size="sm" ring />
            <span><b style={{ color: 'var(--navy-800)' }}>{f.author}</b> · {f.role}</span>
            <span style={{ color: 'var(--gray-300)' }}>·</span><span>{f.read}</span>
          </div>
        </div>
        <div style={{ aspectRatio: '4 / 3', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)', cursor: 'pointer' }} onClick={onOpen}>
          <GradientMedia i={f.grad}>
            <div style={{ position: 'absolute', inset: 0, margin: 'auto', width: 72, height: 72,
              borderRadius: 999, background: 'rgba(16,24,64,0.72)', display: 'flex',
              alignItems: 'center', justifyContent: 'center' }}>
              <Icon n="Play" s={28} c="#fff" />
            </div>
          </GradientMedia>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="im-circuit-bg" style={{ borderRadius: 'var(--radius-2xl)', margin: '64px 0 0',
      padding: '52px 48px', textAlign: 'center', color: 'var(--text-on-navy)' }}>
      <hr className="im-signal-rule" style={{ width: 60, margin: '0 auto 22px' }} />
      <h2 style={{ color: '#fff', fontSize: 32, margin: '0 0 12px' }}>One clear email a week.</h2>
      <p style={{ color: 'var(--text-on-navy-muted)', maxWidth: '46ch', margin: '0 auto 26px', fontSize: 17 }}>
        The best of ImagineMill — new guides, videos, and the M365 changes that actually matter. No noise.
      </p>
      <form onClick={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto' }}>
        <input className="im-input" placeholder="you@company.com" style={{ flex: 1 }} />
        <HButton variant="green" size="md">Subscribe</HButton>
      </form>
    </section>
  );
}

function HomeScreen({ onOpen }) {
  const [topic, setTopic] = React.useState('Latest');
  const posts = topic === 'Latest' ? window.IM.POSTS : window.IM.POSTS.filter((p) => p.topic === topic);
  return (
    <div>
      <Hero f={window.IM.FEATURED} onOpen={onOpen} />
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '48px var(--gutter) 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 22 }}>
          <h2 style={{ margin: 0, fontSize: 28 }}>Fresh from the mill</h2>
          <Tabs items={window.IM.TOPICS} value={topic} onChange={setTopic} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {(posts.length ? posts : window.IM.POSTS).map((p, i) => (
            <div key={i} onClick={onOpen} style={{ cursor: 'pointer' }}><PostCard p={p} /></div>
          ))}
        </div>
        <Newsletter />
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, PostCard, MetaRow });
