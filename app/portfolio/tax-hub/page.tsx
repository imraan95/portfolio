'use client'

import Image from "next/image"
import Link from "next/link"

export default function TaxHubPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1000px] mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-4 mb-8">
              <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-white">B2B CRM for Accountants</h1>
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
                B2B CRM for Accountants
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Streamlining client management and tax lodgment for accountants
              </p>
            </div>

            {/* Project Image */}
            <div className="relative h-[280px] md:h-[350px] mb-12 rounded-xl overflow-hidden">
              <a 
                href="https://www.mygigsters.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src="/images/Tax-hub.png"
                  alt="B2B CRM for Accountants"
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
                <p className="text-white/80">MVP Stage</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Impact</h2>
                <p className="text-white/80">20 Clients Onboarded</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Problem</h2>
                <p className="text-white/80 leading-relaxed">
                  How might we help accountants be more efficient and productive with their client management
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What I Did</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Partnered with 20 accountant clients for user research and problem solving
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Led a cross functional team of engineers and designers to launch a CRM platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Platform included Bank sync API integrations that directly simplified tax books of clients
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What Happened</h2>
                <p className="text-white/80 leading-relaxed">
                  Doubled accountant productivity and reduced manhours greatly. Helped pitch seed fundraising
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 