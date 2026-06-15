import Link from 'next/link'

export const metadata = {
  title: 'About · Jørgen Nordahl AI Lab',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <p className="section-label">// about</p>
      <h1 className="font-mono text-3xl font-medium text-neutral-900 mb-8">Jørgen Nordahl</h1>

      <div className="prose text-neutral-600 leading-relaxed space-y-4 mb-12">
        <p>
          Business developer exploring how AI, ERP and people can build better organizations.
          Based in Bergen — working globally.
        </p>
        <p>
          This site is my lab: a place to document experiments, share what I learn, and build tools
          that make AI practical for real organizations. Not theory — working things.
        </p>
        <p>
          My focus is the intersection of Microsoft Dynamics 365, Model Context Protocol, agentic workflows,
          and the organizational culture required to make any of it stick.
        </p>
      </div>

      <div className="border-t border-neutral-100 pt-8">
        <p className="section-label">// get in touch</p>
        <div className="space-y-3">
          <Link href="mailto:hello@jorgennordahl.no" className="flex items-center gap-3 text-sm text-neutral-500 hover:text-teal-600 transition-colors">
            <span className="font-mono text-teal-600">→</span> hello@jorgennordahl.no
          </Link>
          <Link href="https://linkedin.com/in/" target="_blank" className="flex items-center gap-3 text-sm text-neutral-500 hover:text-teal-600 transition-colors">
            <span className="font-mono text-teal-600">→</span> LinkedIn
          </Link>
          <Link href="https://github.com/" target="_blank" className="flex items-center gap-3 text-sm text-neutral-500 hover:text-teal-600 transition-colors">
            <span className="font-mono text-teal-600">→</span> GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
