import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dongjun Hahm - Portfolio",
  description: "Student and Developer specializing in AI, Full-Stack Development, and Data Analytics",
  keywords: ["Dongjun Hahm", "Portfolio", "AI", "Full-Stack Developer", "Machine Learning", "React", "Next.js"],
  authors: [{ name: "Dongjun Hahm" }],
  creator: "Dongjun Hahm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dongjun-hahm.vercel.app",
    title: "Dongjun Hahm - Portfolio",
    description: "Student and Developer specializing in AI, Full-Stack Development, and Data Analytics",
    siteName: "Dongjun Hahm Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dongjun Hahm - Portfolio",
    description: "Student and Developer specializing in AI, Full-Stack Development, and Data Analytics",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
