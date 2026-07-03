// PortalSpark coaching services screen (the commercial side).
const { Button: CButton, Badge: CBadge, Callout: CCallout, Avatar: CAvatar } = window.ImagineMillDesignSystem_ef9c8c;

function PlanCard({ featured, name, price, unit, blurb, features, cta }) {
  return (
    <div style={{
      background: featured ? 'var(--navy-800)' : 'var(--surface-card)',
      color: featured ? 'var(--text-on-navy)' : 'var(--text-body)',
      border: featured ? '1px solid var(--navy-700)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)', padding: 30, boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
      position: 'relative', display: 'flex', flexDirection: 'column',
    }}>
      {featured ? <div style={{ position: 'absolute', top: 20, right: 20 }}><CBadge variant="info">Most popular</CBadge></div> : null}
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20,
        color: featured ? '#fff' : 'var(--navy-800)' }}>{name}</div>
      <div style={{ margin: '14px 0 6px', display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42,
          color: featured ? '#fff' : 'var(--navy-800)' }}>{price}</span>
        <span style={{ color: featured ? 'var(--text-on-navy-muted)' : 'var(--text-muted)', fontSize: 14 }}>{unit}</span>
      </div>
      <p style={{ fontSize: 14, color: featured ? 'var(--text-on-navy-muted)' : 'var(--text-muted)', margin: '0 0 20px' }}>{blurb}</p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        {features.map((f) => (
          <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14 }}>
            <Icon n="Check" s={18} c={featured ? 'var(--green-400)' : 'var(--green-600)'} />
            <span style={{ color: featured ? '#dbe6fb' : 'var(--text-body)' }}>{f}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 26 }}>
        <CButton variant={featured ? 'green' : 'secondary'} block>{cta}</CButton>
      </div>
    </div>
  );
}

function CoachingScreen() {
  return (
    <div>
      {/* Hero */}
      <div className="im-circuit-bg" style={{ color: 'var(--text-on-navy)' }}>
        <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', padding: '64px var(--gutter)', textAlign: 'center' }}>
          <img src="../../assets/logos/imaginemill-icon.png" alt="" style={{ height: 52, marginBottom: 18 }} />
          <span className="im-eyebrow" style={{ color: 'var(--blue-300)' }}>PortalSpark Coaching</span>
          <h1 style={{ color: '#fff', fontSize: 46, lineHeight: 1.1, margin: '14px auto 16px', maxWidth: '18ch' }}>
            Guidance that turns overwhelm into momentum</h1>
          <p style={{ color: 'var(--text-on-navy-muted)', fontSize: 19, maxWidth: '54ch', margin: '0 auto 30px' }}>
            The blog and videos are free, forever. When your team needs hands-on help, PortalSpark coaching
            takes you the rest of the way.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <CButton variant="primary" size="lg" iconRight={<Icon n="ArrowRight" s={18} c="#fff" />}>Book a discovery call</CButton>
            <CButton variant="secondary" size="lg">See how it works</CButton>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', padding: '56px var(--gutter) 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 style={{ fontSize: 32, margin: '0 0 10px' }}>Ways to work together</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 17, margin: 0 }}>Every engagement starts with a free call. No pressure, ever.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, alignItems: 'stretch' }}>
          <PlanCard name="Office Hours" price="$180" unit="/ session"
            blurb="A focused hour to unblock a specific problem."
            features={['60-minute live video call', 'Screen-share troubleshooting', 'Written follow-up notes', 'Recording to keep']}
            cta="Book an hour" />
          <PlanCard featured name="Adoption Sprint" price="$2,400" unit="/ month"
            blurb="Hands-on partnership through a rollout."
            features={['Weekly working sessions', 'Custom rollout playbook', 'Admin + end-user training', 'Slack access between calls', 'Leadership reporting pack']}
            cta="Start a sprint" />
          <PlanCard name="Team Workshop" price="$1,200" unit="/ workshop"
            blurb="A half-day, tailored to your stack."
            features={['Up to 25 attendees', 'Tailored to your tenant', 'Hands-on exercises', 'Cheat sheets for everyone']}
            cta="Plan a workshop" />
        </div>

        <div style={{ marginTop: 40, maxWidth: 'var(--container-md)', marginLeft: 'auto', marginRight: 'auto' }}>
          <CCallout type="info" title="Not sure which fits?">
            Most teams start with a single Office Hours session, then move into a Sprint once we have found the
            real bottleneck together. Book the call and we will figure it out.
          </CCallout>
        </div>

        {/* Testimonial */}
        <div style={{ margin: '48px auto 0', maxWidth: 'var(--container-md)', textAlign: 'center' }}>
          <hr className="im-signal-rule" style={{ width: 54, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, lineHeight: 1.4,
            color: 'var(--navy-800)', margin: '0 0 20px' }}>
            "We went from dreading Copilot to leading with it. PortalSpark gave us a plan our whole leadership
            team could get behind."</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <CAvatar name="Dana Reyes" size="md" ring />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--navy-800)' }}>Dana Reyes</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>IT Director, Northwind Traders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CoachingScreen });
