import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Jørgen Nordahl · AI Lab',
  description: 'Practical experiments at the intersection of AI, ERP and organizational transformation.',
  openGraph: {
    title: 'Jørgen Nordahl · AI Lab',
    description: 'Practical experiments at the intersection of AI, ERP and organizational transformation.',
    url: 'https://jorgennordahl.no',
    siteName: 'Jørgen Nordahl AI Lab',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
