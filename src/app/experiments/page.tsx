import Link from 'next/link'
import { experiments } from '@/lib/experiments'

export const metadata = {
  title: 'Experiments · Jørgen Nordahl AI Lab',
}

export default function ExperimentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <p className="section-label">// experiments</p>
      <h1 className="font-mono text-3xl font-medium text-neutral-900 mb-3">Active experiments</h1>
      <p className="text-neutral-400 text-sm mb-10">Things I am currently building, testing and learning from.</p>
      <div className="grid grid-cols-1 gap-4">
        {experiments.map(exp => (
          <Link
            key={exp.slug}
            href={`/experiments/${exp.slug}`}
            className="group bg-neutral-50 border border-neutral-100 rounded-xl p-6 hover:border-teal-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={exp.status === 'active' ? 'status-active' : 'status-wip'}>
                {exp.status === 'active' ? 'active' : 'in progress'}
              </span>
              <span className="font-mono text-xs text-neutral-300">{exp.date}</span>
            </div>
            <h2 className="font-medium text-neutral-900 mb-2 group-hover:text-teal-600 transition-colors">{exp.title}</h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">{exp.description}</p>
            <div className="flex gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="tag-neutral">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
