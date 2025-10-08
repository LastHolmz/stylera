import localFont from 'next/font/local'
import type React from 'react'
import type { Metadata } from 'next'
// import { GeistMono } from 'geist/font/mono'
import { Figtree, Cairo } from 'next/font/google'
import { LanguageProvider } from '@/contexts/language-context'
import FontDirectionWrapper from '@/contexts/FontWrapper'
import { Toaster } from 'sonner'
import './globals.css'

const nasalization = localFont({
  src: './../public/fonts/FontsFree-Net-nasalization-rg.ttf',
  variable: '--font-english',
  display: 'swap',
})

const geDinar = localFont({
  src: './../public/fonts/GE-Dinar-One-Medium.otf',
  variable: '--font-arabic',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StyleraTech | Software Solutions',
  description:
    'StyleraTech is a software development company specializing in modern web technologies and advanced IT solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${nasalization.variable} ${geDinar.variable} ${figtree.variable} ${cairo.variable} antialiased`}
      >
        <LanguageProvider>
          <FontDirectionWrapper>{children}</FontDirectionWrapper>
          <Toaster position='bottom-right' />
        </LanguageProvider>
      </body>
    </html>
  )
}
