import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akram | Portfolio',
  description: 'Professional portfolio of a software engineer specializing in web development, showcasing projects, skills, and contact information.',
  icons: {
    icon: '/akram_1.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/akram_1.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/akram_1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/akram_1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
          <div className="grain"></div>
        </div>
      </body>
    </html>
  )
}