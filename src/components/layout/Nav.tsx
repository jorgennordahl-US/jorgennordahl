'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { href: '/experiments', label: 'experiments' },
  { href: '/articles', label: 'articles' },
  { href: '/demos', label: 'demos' },
  { href: '/about', label: 'about' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <header className="border-b border-neutral-100 px-8 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur z-50">
      <Link href="/" className="font-mono text-sm font-medium text-neutral-900 hover:text-teal-600 transition-colors">
        Jørgen Nordahl <span className="text-teal-600">AI Lab</span>
      </Link>
      <nav className="flex gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'text-sm transition-colors',
              pathname?.startsWith(href)
                ? 'text-teal-600'
                : 'text-neutral-400 hover:text-neutral-700'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
