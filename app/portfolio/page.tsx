'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const observerRef = new IntersectionObserver((entries) => {
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
      observerRef.observe(element);
    });

    return () => observerRef.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <section className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation text-white">Portfolio</h1>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {/* Rome2Rio Projects */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Marketplace Product</h2>
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
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Fintech Mobile App</h2>
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
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Job App - Marketing</h2>
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

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-neutral-900 p-2 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-neutral-900 p-2 rounded-full border border-neutral-800 hover:bg-neutral-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(totalItems)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-pink-500' : 'bg-neutral-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 