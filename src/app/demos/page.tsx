export const metadata = {
  title: 'Demos · Jørgen Nordahl AI Lab',
}

const demos = [
  {
    icon: '⬡',
    name: 'MCP Server — D365 FO',
    desc: 'Open source connector exposing Dynamics 365 Finance & Operations to AI agents via Model Context Protocol.',
    badge: 'github',
    href: 'https://github.com/',
  },
  {
    icon: '◈',
    name: 'ERP Chatbot',
    desc: 'Natural language interface for querying and interacting with Dynamics 365 data.',
    badge: 'live',
    href: '#',
  },
  {
    icon: '◎',
    name: 'AI First Operating Model',
    desc: 'Framework and slide deck from Bergen Tech Meetup. What it means to actually be AI-first.',
    badge: 'slides',
    href: '#',
  },
]

export default function DemosPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <p className="section-label">// demos & tools</p>
      <h1 className="font-mono text-3xl font-medium text-neutral-900 mb-3">Demos & tools</h1>
      <p className="text-neutral-400 text-sm mb-10">Things you can try, use or fork.</p>
      <div className="space-y-4">
        {demos.map(demo => (
          <a
            key={demo.name}
            href={demo.href}
            target={demo.href.startsWith('http') ? '_blank' : undefined}
            className="flex items-start gap-5 p-6 bg-neutral-50 border border-neutral-100 rounded-xl hover:border-teal-200 transition-colors group"
          >
            <span className="text-teal-600 text-xl mt-0.5">{demo.icon}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium text-neutral-900 group-hover:text-teal-600 transition-colors">{demo.name}</h2>
                <span className="font-mono text-[10px] text-neutral-400 bg-white border border-neutral-200 px-2 py-0.5 rounded">{demo.badge}</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">{demo.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
