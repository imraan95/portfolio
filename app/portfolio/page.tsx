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
    <div className="min-h-screen bg-black text-white pt-16 md:pt-20">
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
        <div className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Portfolio</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
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
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-500">Problem</h3>
                      <p className="text-white/90">Diversify revenue share from transport revenue stream</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">What I did</h3>
                      <p className="text-white/90">Click to find out</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">Spoiler</h3>
                      <p className="text-white/90">Improved cross-sell rev share by 1.5x</p>
                    </div>
                  </div>
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
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-500">Problem</h3>
                      <p className="text-white/90">How might we help gig workers be more financially secure</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">What I did</h3>
                      <p className="text-white/90">Click to find out</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">Spoiler</h3>
                      <p className="text-white/90">Had a growth rate of 90% MoM; raised seed round</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* B2B CRM for Accountants */}
              <Link href="/portfolio/tax-hub" className="block">
                <div className="portfolio-card gradient-border p-6 md:p-8 rounded-xl border border-neutral-800/20 hover:border-transparent transition-colors">
                  <h2 className="card-title text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">B2B CRM for Accountants</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="card-image w-full h-full relative">
                      <a 
                        href="https://www.mygigsters.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/Tax-hub.png"
                          alt="B2B CRM for Accountants"
                          fill
                          className="object-cover object-[-100px_0]"
                          priority
                        />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-500">Problem</h3>
                      <p className="text-white/90">How do we better help accountants manage their clients and lodge their clients' tax returns</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">What I did</h3>
                      <p className="text-white/90">Click to find out</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">Spoiler</h3>
                      <p className="text-white/90">Launched MVP and onboarded 20 clients</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Web App Ads Product */}
              <Link href="/portfolio/web-ads" className="block">
                <div className="portfolio-card gradient-border p-6 md:p-8 rounded-xl border border-neutral-800/20 hover:border-transparent transition-colors">
                  <h2 className="card-title text-2xl font-semibold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Ads Product - Web App</h2>
                  <div className="h-[300px] md:h-[400px] relative mb-6 rounded-lg overflow-hidden">
                    <div className="card-image w-full h-full relative">
                      <a 
                        href="https://www.rome2rio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/Ads-product.png"
                          alt="Web App Ads Product"
                          fill
                          className="object-cover object-[-100px_0]"
                          priority
                        />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-500">Problem</h3>
                      <p className="text-white/90">How to improve ad relevance and performance</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">What I did</h3>
                      <p className="text-white/90">Click to find out</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">Spoiler</h3>
                      <p className="text-white/90">Introduced sponsored listings ad strategy; Achieved 20% CTR improvement</p>
                    </div>
                  </div>
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
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-pink-500">Problem</h3>
                      <p className="text-white/90">Penetrate new markets within Asia and protect market share of group from growing competitor</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">What I did</h3>
                      <p className="text-white/90">Click to find out</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-pink-500">Spoiler</h3>
                      <p className="text-white/90">Improved brand positioning and GTM market share by 30% in new markets</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 