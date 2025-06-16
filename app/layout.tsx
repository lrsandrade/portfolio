import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import SiteWrapper from "@/components/site-wrapper"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "laryssa andrade",
  description: "portfólio",
  icons: {
    icon: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} ${roboto.variable} flex flex-col min-h-screen`}>
        <SiteWrapper>{children}</SiteWrapper>
      </body>
    </html>
  )
}
