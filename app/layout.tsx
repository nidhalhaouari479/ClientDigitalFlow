import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Client Digital Flow - Software Solutions',
    template: '%s | Client Digital Flow',
  },
  description:
    'Client Digital Flow designs, develops and scales digital products, software platforms and AI-powered solutions. Web, mobile, SaaS, ERP/CRM, AI automation and more.',
  generator: 'v0.app',
  keywords: [
    'software development',
    'AI solutions',
    'SaaS development',
    'web development',
    'mobile app development',
    'ERP CRM',
    'business automation',
  ],
  openGraph: {
    title: 'Client Digital Flow - Software Solutions',
    description:
      'Building digital products that move businesses forward. Web, mobile, SaaS, AI and automation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
