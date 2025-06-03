import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata = {
  title: "X-Clone - Modern Social Platform",
  description: "A Twitter/X clone built with Next.js featuring real-time posts, interactions, and social networking functionality.",
  icons: {
    icon: "/Twitter-logo.png",
    apple: "/Twitter-logo.png",
    shortcut: "/Twitter-logo.png",
  },
  openGraph: {
    title: "X-Clone - Modern Social Platform",
    description: "Connect, share, and engage with others on this Twitter/X-inspired platform built with Next.js.",
    url: "http://localhost:3000/",
    siteName: "X-Clone",
    images: [
      {
        url: "/Twitter-logo.png",
        width: 1200,
        height: 630,
        alt: "X-Clone Social Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X-Clone - Modern Social Platform",
    description: "Experience Twitter/X-like functionality with this Next.js powered social platform.",
    images: ["/Twitter-logo.png"],
    creator: "@yourusername",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}