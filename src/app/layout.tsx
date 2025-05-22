import type { Metadata } from 'next'
import './globals.css'

import { Inter } from 'next/font/google'

import Footer from '@/sections/Footer'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    template: '%s | KPI Stats',
    default: 'Home'
  },
  description: 'The home of KPI Stats'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* TODO: Create Header */}
        {/* <Header/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
