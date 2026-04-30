import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SaaS Portfolio Studio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <header className="border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
            <Link href="/" className="font-semibold">Portfolio Studio</Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/assets">Assets</Link>
              <Link href="/bundles">Bundles</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
