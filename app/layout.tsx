import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'ScanAP - AI-Powered APK Security Analysis',
  description: 'Protect your device from malware, spyware, trackers, and dangerous permissions with AI-powered APK security analysis. Analyze any APK before installing it.',
  keywords: ['APK', 'security', 'malware', 'Android', 'scanner', 'virus', 'spyware', 'tracker', 'analysis'],
  authors: [{ name: 'ScanAP' }],
  openGraph: {
    title: 'ScanAP - AI-Powered APK Security Analysis',
    description: 'Protect your device from malware, spyware, trackers, and dangerous permissions with AI-powered APK security analysis.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScanAP - AI-Powered APK Security Analysis',
    description: 'Protect your device from malware, spyware, trackers, and dangerous permissions with AI-powered APK security analysis.',
  },
}

export const viewport: Viewport = {
  themeColor: '#10131A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-[#10131A]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
