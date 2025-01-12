'use client'

import Image from "next/image"
import Link from "next/link"

export default function WebAdsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-4 mb-8">
              <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-white">Ads Product - Web App</h1>
            </nav>

            {/* Back Button */}
            <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-8 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 transform group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span className="hidden md:inline">Back to Portfolio</span>
            </Link>

            {/* Project Header */}
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
                Ads Product - Web App
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Enhancing ad relevance and performance for improved monetization
              </p>
            </div>

            {/* Project Image */}
            <div className="relative h-[280px] md:h-[350px] mb-12 rounded-xl overflow-hidden">
              <a 
                href="https://www.rome2rio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/Ads-product.png"
                  alt="Web App Ads Product"
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
                <p className="text-white/80">20% CTR Improvement</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
                <p className="text-white/80 leading-relaxed">
                  Led the enhancement of the web app advertising platform, focusing on improving ad relevance, performance metrics, and overall monetization strategy through innovative solutions and data-driven optimization.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Achievements</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Introduced premium ad placements with enhanced visibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Implemented dynamic targeting algorithms for better ad relevance
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Achieved 20% improvement in Click-Through Rates (CTR)
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Optimized ad placement strategy based on user behavior analysis
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Technical Implementation</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Developed sophisticated targeting algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Implemented A/B testing framework for ad placement optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Enhanced analytics tracking for better performance insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 