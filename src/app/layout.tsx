import './globals.css'
import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'

const inter = Readex_Pro({ subsets: ['latin'],  })

export const metadata: Metadata = {
  title: 'food app',
  description: 'food application landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
