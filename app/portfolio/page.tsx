'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function PortfolioPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <section className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text">Portfolio</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Rome2Rio Projects */}
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                  <h2 className="text-2xl font-semibold text-white mb-4">Marketplace Product</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/rome2rio-marketplace.jpg"
                      alt="Rome2Rio Marketplace"
                      fill
                      className="object-cover object-[-100px_0]"
                      priority
                    />
                  </div>
                  <p className="text-white mb-4">
                    Led Rome2rio's hotels marketplace product and monetisation products including Ads
                  </p>
                  <ul className="text-white space-y-2 mb-6">
                    <li>• Enhanced user experience with intuitive search and booking flow</li>
                    <li>• Implemented dynamic pricing and availability features</li>
                    <li>• Integrated multiple travel service providers</li>
                    <li>• Improved conversions by 1.5x and improved Ads monetisation by 2x</li>
                  </ul>
                  <a 
                    href="https://www.rome2rio.com/map/Melbourne/Rome#trips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
                  >
                    View product
                  </a>
                </div>
              </div>

              {/* Fintech App Project */}
              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                  <h2 className="text-2xl font-semibold text-white mb-4">Fintech Mobile App</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="flex justify-center h-full">
                      <div className="relative w-[185px] h-full">
                        <Image
                          src="/images/fintech-mobile-app-1.png"
                          alt="Fintech App Screenshot 1"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-[185px] h-full">
                        <Image
                          src="/images/fintech-mobile-app-2.png"
                          alt="Fintech App Screenshot 2"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-4">
                    Developed and launched a comprehensive fintech platform for gig economy workers.
                  </p>
                  <ul className="text-white space-y-2 mb-6">
                    <li>• Built and launched MVP in 2 months</li>
                    <li>• Achieved 90% month-over-month growth</li>
                    <li>• Successfully raised pre-seed funding</li>
                  </ul>
                  <a 
                    href="https://mygigsters.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
                  >
                    View product
                  </a>
                </div>
              </div>

              {/* Job App Marketing */}
              <div className="scroll-animation scroll-delay-2">
                <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                  <h2 className="text-2xl font-semibold text-white mb-4">Job App - Marketing</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="flex justify-center h-full">
                      <div className="relative w-[185px] h-full">
                        <Image
                          src="/images/Job-App-Marketing-1.png"
                          alt="Job App Marketing Screenshot 1"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-[185px] h-full">
                        <Image
                          src="/images/Job-App-Marketing-2.png"
                          alt="Job App Marketing Screenshot 2"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-white mb-4">
                    Led comprehensive growth and marketing initiatives for Jora App across Asian markets.
                  </p>
                  <ul className="text-white space-y-2 mb-6">
                    <li>• Led Jora App growth across Asia, focusing on user acquisition across 36 markets</li>
                    <li>• Optimized signups and activation flow from landing pages and SEM campaigns to App SERP by 30%</li>
                    <li>• Implemented comprehensive marketing stack including SEO, SEM, and ASO</li>
                    <li>• Partnered with local go-to-market partners like employment agencies to improve market share</li>
                  </ul>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.jora.android&hl=en_AU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
                  >
                    View product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 