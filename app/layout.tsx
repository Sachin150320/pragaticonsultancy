import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Best Admission Consultancy in Bangalore | Pragati Educational Consultancy',
    template: '%s | Pragati Educational Consultancy',
  },
  description:
    'Pragati Educational Consultancy provides guidance for medical, dental, nursing and other professional admissions in Karnataka.',
  keywords: [
    'Admission Consultancy in Bangalore',
    'Education Consultancy Bangalore',
    'Medical Admission Consultancy',
    'MBBS Admission Karnataka',
    'NEET Admission Consultancy',
    'Nursing Admission Karnataka',
    'Pragati Educational Consultancy',
  ],
  authors: [
    {
      name: 'Pragati Educational Consultancy',
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}