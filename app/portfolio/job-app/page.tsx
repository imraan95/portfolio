'use client'

import Image from "next/image"
import Link from "next/link"

export default function JobAppPage() {
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
                Job App - Marketing & Growth
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Leading growth initiatives for Jora's mobile app across Asian markets
              </p>
            </div>

            {/* Project Images */}
            <div className="flex justify-center gap-8 mb-12">
              <a 
                href="https://play.google.com/store/apps/details?id=com.jora.android"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[250px] h-[500px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/Job-App-Marketing-1.png"
                  alt="Job App Screenshot 1"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.jora.android"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[250px] h-[500px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/Job-App-Marketing-2.png"
                  alt="Job App Screenshot 2"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Role</h2>
                <p className="text-white/80">Product Marketing</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Timeline</h2>
                <p className="text-white/80">Jan 2021 - Dec 2022</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Markets</h2>
                <p className="text-white/80">36 Countries across Asia</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
                <p className="text-white/80 leading-relaxed">
                  Led comprehensive growth and marketing initiatives for Jora's mobile app across Asian markets, focusing on user acquisition, activation, and retention strategies. Managed substantial marketing budgets and implemented multi-channel marketing campaigns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Achievements</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Led app growth across 36 markets in Asia, significantly expanding user base
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Optimized signup and activation flow, improving conversion rates by 30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Managed monthly marketing budgets exceeding $200,000
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Successfully established partnerships with local employment agencies
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Marketing Strategy</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Implemented comprehensive marketing stack including SEO, SEM, and ASO
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Developed and executed email EDM marketing campaigns
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Coordinated influencer marketing initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Enhanced user experience through improved localization
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Link */}
            <div>
              <a 
                href="https://play.google.com/store/apps/details?id=com.jora.android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                View on Play Store
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