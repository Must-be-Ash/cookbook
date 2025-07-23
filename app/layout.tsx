import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const viewport: Viewport = {
  themeColor: "#e67e22",
};

export const metadata: Metadata = {
  title: "Cookbook | MiniKit Development Tutorials",
  description:
    "Learn to build MiniKit applications step-by-step with video tutorials. Master generative art, wallet integration, and deployment.",
  keywords: [
    "Cookbook",
    "MiniKit",
    "Tutorial",
    "Development",
    "Generative Art",
    "Wallet Integration",
    "Blockchain",
    "Next.js",
    "OnchainKit",
    "Farcaster",
  ],
  authors: [{ name: "Cookbook Team" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/cookbook.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/cookbook.png' },
    ],
    other: [
      { 
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192'
      },
      { 
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512'
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Cookbook | MiniKit Development Tutorials",
    description: "Learn to build MiniKit applications step-by-step with video tutorials. Master generative art, wallet integration, and deployment.",
    url: "https://cookbook.cam",
    siteName: "Cookbook",
    type: "website",
    images: [
      {
        url: "https://cookbook.cam/og.png",
        width: 1200,
        height: 630,
        alt: "Cookbook - MiniKit Development Tutorials",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookbook | MiniKit Development Tutorials",
    description: "Learn to build MiniKit applications step-by-step with video tutorials. Master generative art, wallet integration, and deployment.",
    images: ["https://cookbook.cam/og.png"],
  },
  metadataBase: new URL("https://cookbook.cam"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>

      <body className="font-sans antialiased bg-background text-text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
