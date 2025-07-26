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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <GoogleAnalytics />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <script
          id="__verbaland-widget"
          src="https://verba.land/app/widget.js?projectId=c6ba2f7e-e610-4b93-a3a1-762e42ce6e87&welcomeMessage=Hi! welcome to Verbaland. How can I help you?"
        />
      </body>
    </html>
  )
}
