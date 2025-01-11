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
    <div className="min-h-screen bg-black text-foreground">
      <main className="py-12 md:py-20">
        <section className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 scroll-animation">Portfolio</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Rome2Rio Projects */}
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h2 className="text-2xl font-semibold text-white mb-4">Rome2Rio Monetization</h2>
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/rome2rio.png"
                      alt="Rome2Rio Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white mb-4">
                    Led the monetization strategy for Rome2Rio, implementing new revenue streams and optimizing existing ones.
                  </p>
                  <ul className="text-white space-y-2">
                    <li>• Increased conversion rates by 25%</li>
                    <li>• Implemented new ad placement strategy</li>
                    <li>• Optimized user journey for better monetization</li>
                  </ul>
                </div>
              </div>

              {/* MyGigsters Projects */}
              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h2 className="text-2xl font-semibold text-white mb-4">MyGigsters Platform</h2>
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/mygigsters.png"
                      alt="MyGigsters Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white mb-4">
                    Developed and launched a comprehensive fintech platform for gig economy workers.
                  </p>
                  <ul className="text-white space-y-2">
                    <li>• Built and launched MVP in 2 months</li>
                    <li>• Achieved 90% month-over-month growth</li>
                    <li>• Successfully raised pre-seed funding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 