// Sample content for the ImagineMill website UI kit.
// Thumbnails use brand gradients (no stock photography in the system yet).
window.IM = {
  GRADIENTS: [
    ['#1080c0', '#38b0e8'],
    ['#101840', '#26326e'],
    ['#0a5c94', '#1e96d8'],
    ['#101840', '#0f74b4'],
    ['#1888c8', '#8fd4f2'],
    ['#1a2456', '#37458a'],
  ],
  TOPICS: ['Latest', 'Microsoft 365', 'Cloud', 'AI', 'Security', 'Admin'],
  FEATURED: {
    kind: 'article', topic: 'AI', topicVariant: 'red', badge: 'Featured',
    title: 'Rolling out Copilot without the chaos',
    excerpt: 'AI is arriving in every Microsoft 365 app whether you plan for it or not. Here is a calm, staged playbook for admins bringing Copilot to real people — with the guardrails that keep leadership comfortable.',
    author: 'Jordan Vale', role: 'Modern Work Lead', date: 'Jun 24, 2026', read: '9 min read', grad: 0,
  },
  POSTS: [
    { kind: 'video', topic: 'Microsoft 365', topicVariant: 'blue', badge: 'Video', title: 'Teams channels vs. chats: when to use which', excerpt: 'A 6-minute tour that finally makes the difference click for your whole team.', author: 'Priya Shah', date: 'Jun 21', read: '6 min', grad: 4 },
    { kind: 'article', topic: 'Security', topicVariant: 'red', badge: 'Guide', title: 'Tenant-wide sharing settings, explained', excerpt: 'What each toggle really does — and the safe defaults we recommend for most organizations.', author: 'Marcus Lee', date: 'Jun 18', read: '11 min', grad: 1 },
    { kind: 'article', topic: 'Cloud', topicVariant: 'green', badge: 'Guide', title: 'SharePoint or OneDrive? A decision map', excerpt: 'Stop guessing where files should live. One flowchart your users will actually follow.', author: 'Ada Okoro', date: 'Jun 15', read: '7 min', grad: 2 },
    { kind: 'video', topic: 'AI', topicVariant: 'red', badge: 'Video', title: 'Writing prompts that Copilot understands', excerpt: 'The four-part prompt formula we teach in every coaching session.', author: 'Jordan Vale', date: 'Jun 12', read: '8 min', grad: 3 },
    { kind: 'article', topic: 'Admin', topicVariant: 'blue', badge: 'How-to', title: 'Automating onboarding with Power Automate', excerpt: 'Give every new hire a perfect first day — without touching a checklist yourself.', author: 'Priya Shah', date: 'Jun 9', read: '10 min', grad: 5 },
    { kind: 'article', topic: 'Microsoft 365', topicVariant: 'blue', badge: 'Guide', title: 'The admin center tour every new admin needs', excerpt: 'Where everything lives, what to touch first, and what to leave alone.', author: 'Marcus Lee', date: 'Jun 5', read: '9 min', grad: 0 },
  ],
  ARTICLE: {
    topic: 'AI', topicVariant: 'red',
    title: 'Rolling out Copilot without the chaos',
    dek: 'A calm, staged playbook for bringing AI into Microsoft 365 — with the guardrails that keep leadership comfortable and users excited.',
    author: 'Jordan Vale', role: 'Modern Work Lead', date: 'June 24, 2026', read: '9 min read', grad: 0,
  },
};
