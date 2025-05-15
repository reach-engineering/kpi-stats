import type { Metadata } from 'next'
import './globals.css'

import { VisualEditing } from 'next-sanity'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'

import { SanityLive } from '@/sanity/lib/live'
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
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang="en">
      <body className={inter.variable}>
        {isDraftMode && (
          <>
            {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
            <VisualEditing />
          </>
        )}

        {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
        <SanityLive />
        {/* TODO: Create Header */}
        {/* <Header/> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
