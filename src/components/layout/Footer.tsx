import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 px-8 py-5 flex items-center justify-between">
      <span className="font-mono text-xs text-neutral-400">© 2025 Jørgen Nordahl · AI Lab</span>
      <div className="flex gap-5">
        <Link href="https://linkedin.com/in/" className="text-xs text-neutral-400 hover:text-teal-600 transition-colors" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/" className="text-xs text-neutral-400 hover:text-teal-600 transition-colors" target="_blank">GitHub</Link>
        <Link href="mailto:hello@jorgennordahl.no" className="text-xs text-neutral-400 hover:text-teal-600 transition-colors">Email</Link>
      </div>
    </footer>
  )
}
