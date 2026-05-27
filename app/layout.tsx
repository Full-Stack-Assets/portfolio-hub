import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: {
    default: "Portfolio Hub",
    template: "%s | Portfolio Hub",
  },
  description:
    "A unified portfolio of 26 AI-powered tools for SaaS founders, operators, and product teams.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
