import { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils/cn'
import { Header } from '../components/Header'
import { ThemeProvider } from '../components/theme-provider'
import { Footer } from '../components/Footer'
import Script from 'next/script'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}  className={cn(
        "px-4 flex flex-col min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Script
          defer
          data-domain="conradtheprogrammer.com"
          src="https://plausible.io/js/script.js"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 h-full flex flex-col justify-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}