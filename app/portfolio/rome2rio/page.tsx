'use client'

import Image from "next/image"
import Link from "next/link"

export default function Rome2rioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1000px] mx-auto">
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
            <div className="relative h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden">
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
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Scale</h2>
                <p className="text-white/80">$50M</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Timeline</h2>
                <p className="text-white/80">Dec 2022 - Present</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Tech Stack</h2>
                <p className="text-white/80">React, Node.js, PostgreSQL</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
                <p className="text-white/80 leading-relaxed">
                  Led the development and optimization of Rome2rio's hotels marketplace product, focusing on enhancing user experience and improving monetization through strategic product improvements and data-driven decision making.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Achievements</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Enhanced user experience with intuitive search and booking flow, resulting in improved user engagement metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Implemented dynamic pricing and availability features to optimize revenue generation
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Successfully integrated multiple travel service providers, expanding the marketplace offerings
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Improved conversions by 1.5x through continuous optimization and A/B testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Enhanced Ads monetization by 2x through strategic placement and targeting improvements
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Project Challenges</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Integrating multiple service providers while maintaining a consistent user experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Optimizing the booking flow to reduce friction and improve conversion rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Balancing user experience with monetization goals
                  </li>
                </ul>
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