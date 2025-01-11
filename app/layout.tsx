import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imraan - Tech Product Leader",
  description: "Tech Product Leader specializing in Digital SAAS, Fintech, Marketplace and Consumer products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/rocket-favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-black text-foreground">
          {/* Navigation */}
          <header className="flex justify-end py-4 px-4 md:px-6 border-b border-neutral-800/50">
            <nav className="flex flex-wrap justify-end items-center gap-3 md:gap-6">
              <Link href="/" className="text-sm text-white hover:text-white/80 transition-colors">Home</Link>
              <Link href="/portfolio" className="text-sm text-white hover:text-white/80 transition-colors">Portfolio</Link>
              <Link href="/resume" className="text-sm text-white hover:text-white/80 transition-colors">Resume</Link>
              <Link href="/contact" className="text-sm text-white hover:text-white/80 transition-colors">Contact</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
