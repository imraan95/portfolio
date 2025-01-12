'use client'

import Image from "next/image"
import Link from "next/link"

export default function Rome2rioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1000px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <span className="text-white">Rome2Rio Marketplace Product</span>
                </li>
              </ol>
            </nav>

            {/* Back Button */}
            <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-8 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Portfolio
            </Link>

            {/* Project Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
                Rome2Rio Marketplace Product
              </h1>
              <p className="text-xl text-white/80 mb-6">
                A comprehensive travel marketplace solution serving over 50 million monthly visitors
              </p>
            </div>

            {/* Project Image */}
            <div className="relative h-[280px] md:h-[350px] mb-12 rounded-xl overflow-hidden">
              <a 
                href="https://www.rome2rio.com/map/Melbourne/Amsterdam#h"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/rome2rio-marketplace.jpg"
                  alt="Rome2Rio Marketplace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Business Scale</h2>
                <p className="text-white/80">$50M</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Impact</h2>
                <p className="text-white/80">1.5x growth</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Problem</h2>
                <p className="text-white/80 leading-relaxed">
                  How might we diversify our revenue stream and lower our transport bookings reliance which is hitting a plateau for growth
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What I Did</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Researched the market, data and users
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Strategised creating an accommodation onsite experience, setup a team and launched the product
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Optimised the experience through growth experiments across the funnel including acquiring traffic, activation rate onsite, and conversion rate
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What Happened</h2>
                <p className="text-white/80 leading-relaxed">
                  Improve revenue per share from accom by 1.5x, added +20M in annual net revenue. Consulted to duplicate the same accom experience success for parent group omio.com
                </p>
              </div>
            </div>

            {/* Project Link */}
            <div>
              <a 
                href="https://www.rome2rio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                Visit Rome2Rio
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 