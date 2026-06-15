import PacMan from "@/components/PacMan";
import Link from 'next/link'
import { experiments } from '@/lib/experiments'
import { getArticles } from '@/lib/articles'

export default async function Home() {
  const articles = await getArticles()
  const featured = experiments.filter(e => e.featured)

  return (
    <div>
      {/* Hero */}
      <section className="relative px-8 pt-20 pb-16 border-b border-neutral-100 overflow-hidden min-h-[340px]">
        <div className="relative z-10 max-w-lg">
          <p className="font-mono text-xs text-teal-600 uppercase tracking-widest mb-5">
            // practical ai · erp · organizational transformation
          </p>
          <h1 className="font-mono text-5xl font-medium leading-tight text-neutral-900">
            Jørgen Nordahl<br />
            <span className="text-teal-600">AI Lab</span>
          </h1>
          <p className="mt-5 text-neutral-500 text-base leading-relaxed max-w-lg">
            Practical experiments at the intersection of AI, ERP and organizational transformation.
          </p>
          <div className="flex gap-3 mt-8">
            <Link href="/experiments" className="btn-primary">explore experiments →</Link>
            <Link href="/articles" className="btn-ghost">read articles</Link>
          </div>
        </div>
        <PacMan />
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 divide-x divide-neutral-100 border-b border-neutral-100">
        {[
          { label: '// role', title: 'Business Developer', desc: 'Strategy, partnerships and growth' },
          { label: '// focus', title: 'Tech-driven', desc: 'Using technology as a growth engine' },
          { label: '// base', title: 'Bergen, NO', desc: 'Global reach' },
        ].map(item => (
          <div key={item.label} className="px-8 py-7">
            <p className="font-mono text-[10px] uppercase tracking-widest text-teal-600 mb-2">{item.label}</p>
            <p className="font-medium text-neutral-900 mb-1">{item.title}</p>
            <p className="text-sm text-neutral-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Active experiments */}
      <section className="px-8 py-10 border-b border-neutral-100">
        <div className="flex items-baseline justify-between mb-6">
          <p className="section-label">// active experiments</p>
          <Link href="/experiments" className="font-mono text-xs text-teal-600 hover:underline">all experiments →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featured.map(exp => (
            <Link key={exp.slug} href={`/experiments/${exp.slug}`} className="group bg-neutral-50 border border-neutral-100 rounded-xl p-5 hover:border-teal-200 transition-colors">
              <span className={exp.status === 'active' ? 'status-active' : 'status-wip'}>
                {exp.status === 'active' ? 'active' : 'in progress'}
              </span>
              <p className="font-medium text-neutral-900 mt-3 mb-2 group-hover:text-teal-600 transition-colors">{exp.title}</p>
              <p className="text-sm text-neutral-400 leading-relaxed">{exp.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="px-8 py-10 border-b border-neutral-100">
        <div className="flex items-baseline justify-between mb-6">
          <p className="section-label">// latest articles</p>
          <Link href="/articles" className="font-mono text-xs text-teal-600 hover:underline">all articles →</Link>
        </div>
        <div className="divide-y divide-neutral-100">
          {articles.slice(0, 4).map(article => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="flex items-start gap-5 py-4 group">
              <span className="font-mono text-xs text-neutral-300 mt-0.5 min-w-[60px]">{article.date}</span>
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-1.5 group-hover:text-teal-600 transition-colors">{article.title}</p>
                <span className="tag">{article.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Demos strip */}
      <section className="px-8 py-10">
        <div className="flex items-baseline justify-between mb-6">
          <p className="section-label">// demos & tools</p>
          <Link href="/demos" className="font-mono text-xs text-teal-600 hover:underline">all demos →</Link>
        </div>
        <div className="divide-y divide-neutral-100">
          {[
            { icon: '⬡', name: 'MCP Server — D365 FO', desc: 'Open source connector for AI agents', badge: 'github' },
            { icon: '◈', name: 'ERP Chatbot', desc: 'Natural language queries against Dynamics 365', badge: 'live' },
            { icon: '◎', name: 'AI First Operating Model', desc: 'Slide deck & framework', badge: 'slides' },
          ].map(demo => (
            <div key={demo.name} className="flex items-center gap-4 py-4">
              <span className="text-teal-600 text-lg w-6">{demo.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">{demo.name}</p>
                <p className="text-xs text-neutral-400">{demo.desc}</p>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">{demo.badge}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
