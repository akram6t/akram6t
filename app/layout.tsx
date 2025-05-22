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
    icon: 'https://s3.tebi.io/portfolio/IMG20240531184412_1747911922553_Edited%281%29.jpg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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