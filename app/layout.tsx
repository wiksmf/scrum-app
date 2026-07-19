import type { Metadata } from 'next'
import { Geist, Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ScrumAI — Sprint planning for modern teams',
  description: 'AI-powered scrum planning with real-time collaboration',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value

  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable} ${theme ?? ''} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
