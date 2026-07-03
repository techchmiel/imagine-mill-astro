// Blog article reading view.
const { Tag: ATag, Avatar: AAvatar, Callout, CodeBlock, Button: AButton, Badge: ABadge } = window.ImagineMillDesignSystem_ef9c8c;

function ArticleScreen({ onBack }) {
  const a = window.IM.ARTICLE;
  return (
    <article>
      {/* Header band */}
      <div style={{ background: 'var(--gradient-screen-soft)', borderBottom: '1px solid var(--blue-100)' }}>
        <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '32px var(--gutter) 44px' }}>
          <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none',
            border: 'none', cursor: 'pointer', color: 'var(--blue-700)', fontFamily: 'var(--font-display)',
            fontWeight: 600, fontSize: 14, padding: 0, marginBottom: 22 }}>
            <Icon n="ArrowLeft" s={16} c="var(--blue-700)" /> All articles
          </button>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
            <ATag variant={a.topicVariant}>{a.topic}</ATag>
            <AedgeReading />
          </div>
          <h1 style={{ fontSize: 44, lineHeight: 1.08, margin: '0 0 16px', color: 'var(--navy-800)' }}>{a.title}</h1>
          <p style={{ fontSize: 20, color: 'var(--text-body)', margin: '0 0 28px', lineHeight: 1.5 }}>{a.dek}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <AAvatar name={a.author} size="md" ring />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy-800)' }}>{a.author}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{a.role} · {a.date} · {a.read}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <AButton variant="secondary" size="sm" iconLeft={<Icon n="Bookmark" s={16} c="var(--navy-800)" />}>Save</AButton>
              <AButton variant="ghost" size="sm" iconLeft={<Icon n="Share2" s={16} c="var(--navy-700)" />}>Share</AButton>
            </div>
          </div>
        </div>
      </div>

      {/* Hero art */}
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ aspectRatio: '16/7', marginTop: -20, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)' }}>
          <GradientMedia i={a.grad} />
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '44px var(--gutter) 0',
        fontSize: 18, lineHeight: 1.7, color: 'var(--text-body)' }}>
        <p style={{ fontSize: 20 }}><span style={{ float: 'left', fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 62, lineHeight: 0.8, color: 'var(--blue-500)', margin: '6px 12px 0 0' }}>C</span>
          opilot is not a switch you flip on a Friday afternoon. It is a change to how people write, meet, and
          make decisions — and like any change, it lands best when it is planned, paced, and explained.</p>
        <p>Below is the same three-phase approach we walk through with every coaching client. It keeps IT in
          control, gives leadership the reporting they want, and — most importantly — leaves users feeling
          helped rather than surprised.</p>

        <h2 style={{ fontSize: 28, marginTop: 40 }}>Phase 1 — Prepare the ground</h2>
        <p>Before a single license is assigned, get your data house in order. Copilot can only surface what a
          user already has permission to see, so oversharing becomes visible fast.</p>

        <Callout type="tip" title="Start here">
          Run a sharing audit before you assign any Copilot licenses. It is the single highest-leverage hour
          you will spend in the whole rollout.
        </Callout>

        <p style={{ marginTop: 24 }}>Use this to tighten tenant-wide sharing to a sensible default:</p>
        <CodeBlock language="PowerShell" filename="Prep-Copilot.ps1"
          code={`Connect-SPOService -Url https://contoso-admin.sharepoint.com\n\n# Restrict external sharing to existing guests only\nSet-SPOTenant -SharingCapability ExistingExternalUserSharingOnly\n\n# Surface files shared with 'Everyone' for review\nGet-SPOSite -Limit All | Where-Object { $_.SharingCapability -eq 'ExternalUserSharingOnly' }`} />

        <h2 style={{ fontSize: 28, marginTop: 40 }}>Phase 2 — Pilot with real work</h2>
        <p>Pick fifteen to twenty people across three teams — not just the enthusiasts. Give them real tasks,
          a shared channel to compare notes, and a weekly 30-minute clinic.</p>

        <Callout type="warning" title="Avoid the demo trap">
          Impressive demos do not predict daily value. Measure whether pilot users reach for Copilot
          unprompted in week three. That is your real signal.
        </Callout>

        <h2 style={{ fontSize: 28, marginTop: 40 }}>Phase 3 — Scale with confidence</h2>
        <p>Roll out by team, not by headcount. Pair every wave with a short live session and a one-page
          cheat sheet, and keep the clinic running for a month after each wave.</p>

        {/* Tag footer */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '40px 0 8px', paddingTop: 28,
          borderTop: '1px solid var(--border-subtle)' }}>
          <ATag variant="red">AI</ATag><ATag>Copilot</ATag><ATag variant="green">Rollout</ATag><ATag variant="blue">Admin</ATag>
        </div>
      </div>

      {/* Author card */}
      <div style={{ maxWidth: 'var(--container-md)', margin: '32px auto 0', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center', background: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
          <AAvatar name={a.author} size="lg" ring />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--navy-800)' }}>{a.author}</div>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-muted)' }}>
              {a.role} at PortalSpark. Jordan helps modern-work teams adopt Microsoft 365 and AI without the drama.</p>
          </div>
          <AButton variant="ink" iconLeft={<Icon n="Calendar" s={16} c="#fff" />}>Book a session</AButton>
        </div>
      </div>
    </article>
  );
}

function AedgeReading() {
  return <ABadge variant="neutral"><Icon n="Clock" s={12} c="var(--gray-500)" /> 9 min read</ABadge>;
}

Object.assign(window, { ArticleScreen });
