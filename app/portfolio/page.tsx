'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
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
      <style jsx global>{`
        .portfolio-card {
          background: linear-gradient(145deg, #1E1E2F 0%, #111827 100%);
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
        }

        .portfolio-card:hover .card-image {
          transform: scale(1.05);
        }

        .portfolio-card:hover .card-title {
          text-shadow: 0 0 15px rgba(236, 72, 153, 0.3);
        }

        .card-image {
          transition: transform 0.5s ease-in-out;
        }

        .gradient-border {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            45deg,
            rgba(236, 72, 153, 0.3),
            rgba(139, 92, 246, 0.3),
            rgba(236, 72, 153, 0.3)
          );
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }
      `}</style>

      <main className="py-4 md:py-8">
        <section className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation text-white">Portfolio</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Rome2Rio Projects */}
              <Link href="/portfolio/rome2rio" className="block">
                <div className="portfolio-card gradient-border p-6 md:p-8 rounded-xl border border-neutral-800/20 hover:border-transparent transition-colors">
                  <h2 className="card-title text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Marketplace Product</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="card-image w-full h-full relative">
                      <Image
                        src="/images/rome2rio-marketplace.jpg"
                        alt="Rome2Rio Marketplace"
                        fill
                        className="object-cover object-[-100px_0]"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-white/90 mb-4">
                    Led Rome2rio's hotels marketplace product and monetisation products including Ads
                  </p>
                  <ul className="text-white/80 space-y-2 mb-6">
                    <li>• Enhanced user experience with intuitive search and booking flow</li>
                    <li>• Implemented dynamic pricing and availability features</li>
                    <li>• Integrated multiple travel service providers</li>
                    <li>• Improved conversions by 1.5x and improved Ads monetisation by 2x</li>
                  </ul>
                </div>
              </Link>

              {/* Fintech App Project */}
              <Link href="/portfolio/fintech" className="block">
                <div className="portfolio-card gradient-border p-6 md:p-8 rounded-xl border border-neutral-800/20 hover:border-transparent transition-colors">
                  <h2 className="card-title text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Fintech Mobile App</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="card-image w-full h-full relative flex justify-center">
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
                  <p className="text-white/90 mb-4">
                    Developed and launched a comprehensive fintech platform for gig economy workers.
                  </p>
                  <ul className="text-white/80 space-y-2 mb-6">
                    <li>• Built and launched MVP in 2 months</li>
                    <li>• Achieved 90% month-over-month growth</li>
                    <li>• Successfully raised pre-seed funding</li>
                  </ul>
                </div>
              </Link>

              {/* Job App Marketing */}
              <Link href="/portfolio/job-app" className="block">
                <div className="portfolio-card gradient-border p-6 md:p-8 rounded-xl border border-neutral-800/20 hover:border-transparent transition-colors">
                  <h2 className="card-title text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Job App - Marketing</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="card-image w-full h-full relative flex justify-center">
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
                  <p className="text-white/90 mb-4">
                    Led comprehensive growth and marketing initiatives for Jora App across Asian markets.
                  </p>
                  <ul className="text-white/80 space-y-2 mb-6">
                    <li>• Led Jora App growth across Asia, focusing on user acquisition across 36 markets</li>
                    <li>• Optimized signups and activation flow from landing pages and SEM campaigns to App SERP by 30%</li>
                    <li>• Implemented comprehensive marketing stack including SEO, SEM, and ASO</li>
                    <li>• Partnered with local go-to-market partners like employment agencies to improve market share</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 