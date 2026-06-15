import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export const metadata = {
  title: 'Articles · Jørgen Nordahl AI Lab',
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <p className="section-label">// articles</p>
      <h1 className="font-mono text-3xl font-medium text-neutral-900 mb-10">Writing</h1>
      <div className="divide-y divide-neutral-100">
        {articles.map(article => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="flex gap-6 py-6 group">
            <span className="font-mono text-xs text-neutral-300 mt-1 min-w-[70px]">{article.date}</span>
            <div>
              <h2 className="font-medium text-neutral-900 mb-2 group-hover:text-teal-600 transition-colors">{article.title}</h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">{article.excerpt}</p>
              <span className="tag">{article.tag}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
