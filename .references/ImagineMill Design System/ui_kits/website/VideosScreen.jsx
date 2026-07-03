// Video library screen with a featured player and grid.
const { Card: VCard, Badge: VBadge, Tag: VTag, Avatar: VAvatar, Button: VButton, IconButton: VIconBtn } = window.ImagineMillDesignSystem_ef9c8c;

function VideosScreen({ onOpen }) {
  const vids = window.IM.POSTS.filter((p) => p.kind === 'video').concat(
    window.IM.POSTS.filter((p) => p.kind === 'article').map((p) => ({ ...p, kind: 'video', badge: 'Video' }))
  );
  const feat = window.IM.POSTS.find((p) => p.kind === 'video');
  return (
    <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '40px var(--gutter) 0' }}>
      <div style={{ marginBottom: 8 }}>
        <span className="im-eyebrow" style={{ color: 'var(--red-500)' }}>Video Library</span>
      </div>
      <h1 style={{ fontSize: 40, margin: '0 0 8px' }}>Watch &amp; learn</h1>
      <p style={{ fontSize: 18, color: 'var(--text-muted)', maxWidth: '56ch', margin: '0 0 32px' }}>
        Short, practical walkthroughs for Microsoft 365, cloud, and AI. New videos every week.</p>

      {/* Featured player */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 28, marginBottom: 48 }}>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-subtle)' }}>
          <div style={{ aspectRatio: '16/9', position: 'relative', cursor: 'pointer' }} onClick={onOpen}>
            <GradientMedia i={feat.grad}>
              <div style={{ position: 'absolute', inset: 0, margin: 'auto', width: 80, height: 80, borderRadius: 999,
                background: 'rgba(16,24,64,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon n="Play" s={32} c="#fff" />
              </div>
              <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(10,15,46,0.85)',
                color: '#fff', padding: '3px 8px', borderRadius: 6, fontFamily: 'var(--font-mono)', fontSize: 12 }}>6:24</div>
            </GradientMedia>
          </div>
          {/* Player control bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: 'var(--navy-900)' }}>
            <VIconBtn label="Play" variant="solid"><Icon n="Play" s={16} c="#fff" /></VIconBtn>
            <div style={{ flex: 1, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '34%', borderRadius: 3, background: 'var(--gradient-signal)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-navy-muted)' }}>2:11 / 6:24</span>
            <Icon n="Volume2" s={18} c="var(--text-on-navy-muted)" />
            <Icon n="Maximize2" s={17} c="var(--text-on-navy-muted)" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <VBadge variant="danger" dot>Now playing</VBadge>
            <VTag variant={feat.topicVariant} node={false}>{feat.topic}</VTag>
          </div>
          <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>{feat.title}</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 20px' }}>{feat.excerpt}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22, fontSize: 14 }}>
            <VAvatar name={feat.author} size="sm" />
            <span style={{ fontWeight: 600, color: 'var(--navy-800)' }}>{feat.author}</span>
            <span style={{ color: 'var(--gray-300)' }}>·</span>
            <span style={{ color: 'var(--text-muted)' }}>12k views</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <VButton variant="green" iconLeft={<Icon n="Bell" s={16} c="#fff" />}>Subscribe</VButton>
            <VButton variant="secondary" iconLeft={<Icon n="ListPlus" s={16} c="var(--navy-800)" />}>Add to list</VButton>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 20, margin: '0 0 20px' }}>Up next</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22 }}>
        {vids.slice(0, 4).map((p, i) => (
          <div key={i} onClick={onOpen} style={{ cursor: 'pointer' }}>
            <VCard href="#" kind="video" media={<GradientMedia i={p.grad} />}
              badge={<VBadge variant="navy">Video</VBadge>} title={p.title}
              meta={<><VAvatar name={p.author} size="xs" /><span>{p.author}</span></>} />
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { VideosScreen });
