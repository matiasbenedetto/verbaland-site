import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Verbaland',
  description: 'The smart conversation to accelerate your project.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
