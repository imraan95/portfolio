import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import UTMTracker from './components/UTMTracker';

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
      <body className={inter.className}>
        <UTMTracker />
        <div className="flex flex-col min-h-screen bg-black text-foreground">
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end h-16">
                <div className="flex space-x-8 md:space-x-12">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-pink-500 transition-colors">
                    Home
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-pink-500 transition-colors">
                    Portfolio
                  </Link>
                  <Link href="/learnings" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-pink-500 transition-colors">
                    Learnings
                  </Link>
                  <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-pink-500 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          {children}
        </div>
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              source_tracking: true,
              allow_google_signals: true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
