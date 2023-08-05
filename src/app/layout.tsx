import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'

const reader_pro = Readex_Pro({ subsets: ['arabic'], weight: ['400','500','600','700'] })

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
      <body className={reader_pro.className} suppressHydrationWarning={true}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
