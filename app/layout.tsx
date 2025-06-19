import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AppHeader from "@/components/integrations/app-header"
import AppFooter from "@/components/integrations/app-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sweepo - Connect Your Data Sources",
  description: "Integrate apps, databases, and files to bring all your data into Sweepo for analysis.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <div className="page-background-gradient" />
            <AppHeader />
            <main className="flex-grow">{children}</main>
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
