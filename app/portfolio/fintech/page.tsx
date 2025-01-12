'use client'

import Image from "next/image"
import Link from "next/link"

export default function FintechPage() {
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
                  <span className="text-white">Fintech Mobile App</span>
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
                Fintech Mobile App
              </h1>
              <p className="text-xl text-white/80 mb-6">
                A comprehensive fintech platform empowering gig economy workers
              </p>
            </div>

            {/* Project Images */}
            <div className="flex justify-center gap-8 mb-12">
              <a 
                href="https://mygigsters.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[175px] h-[350px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/fintech-mobile-app-1.png"
                  alt="Fintech App Screenshot 1"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </a>
              <a 
                href="https://mygigsters.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[175px] h-[350px] rounded-xl overflow-hidden"
              >
                <Image
                  src="/images/fintech-mobile-app-2.png"
                  alt="Fintech App Screenshot 2"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Business Scale</h2>
                <p className="text-white/80">$200k</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-pink-500">Impact</h2>
                <p className="text-white/80">0 to 1 Journey</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Problem</h2>
                <p className="text-white/80 leading-relaxed">
                  How might we enable gig workers who do not have the legal protections of regular salaried employees be more financially secure
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What I Did</h2>
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Strategised MVP feature to solve the problem including Bank account sync for tax benefits, mileage tracking, and early pay features
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Hired a remote product and marketing team to bring founder's vision to life
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    Setup analytics stack to bring 'data' to each idea and vision
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">What Happened</h2>
                <p className="text-white/80 leading-relaxed">
                  Grew 90% MoM. Raised pre seed round from top Aussie VCs like Startmate, Antler and the Vic state government
                </p>
              </div>
            </div>

            {/* Project Link */}
            <div>
              <a 
                href="https://mygigsters.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                Visit MyGigsters
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