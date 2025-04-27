import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Providers from '@/providers/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js Anime App',
  description:
    'Built with Next.js + Shadcn UI + Tailwind CSS. Explore a wide collection of anime with our user-friendly platform.',
  keywords: 'anime, next.js, shadcn UI, tailwind CSS',
  robots: 'index, follow',
  openGraph: {
    title: 'Next.js Anime App',
    description:
      'Built with Next.js + Shadcn UI + Tailwind CSS. Explore a wide collection of anime with our user-friendly platform.',
    url: 'https://next-js-anime-web.vercel.app',
    siteName: 'Next.js Anime App',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
