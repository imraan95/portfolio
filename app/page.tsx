'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Page() {
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
    <div className="flex flex-col min-h-screen bg-black text-foreground">
      {/* Navigation */}
      <header className="flex justify-end py-4 px-4 md:px-6 border-b border-neutral-800/50">
        <nav className="flex flex-wrap justify-end items-center gap-3 md:gap-6">
          <Link href="/" className="text-sm text-white hover:text-white/80 transition-colors">Home</Link>
          <Link href="/portfolio" className="text-sm text-white hover:text-white/80 transition-colors">Portfolio</Link>
          <Link href="/resume" className="text-sm text-white hover:text-white/80 transition-colors">Resume</Link>
          <Link href="mailto:m.imraan95@gmail.com" className="text-sm text-white hover:text-white/80 transition-colors">Contact</Link>
        </nav>
      </header>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-8 fade-in relative">
                <Image
                  src="/images/Profile Pic.jpeg"
                  alt="Imraan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight fade-in delay-1 text-center px-4">
                Imraan
              </h1>
              <div className="max-w-2xl text-center px-4">
                <p className="text-xl md:text-2xl text-white mb-3 md:mb-4 fade-in delay-2">
                  Tech Product Leader
                </p>
                <p className="text-lg md:text-xl text-white mb-4 fade-in delay-2">
                  Digital SAAS, Fintech, Marketplace and Consumer products
                </p>
                <div className="flex justify-center gap-4 md:gap-6 text-white mb-6 md:mb-8 fade-in delay-2">
                  <span className="flex items-center gap-2 text-sm md:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Melbourne, Australia
                  </span>
                </div>
              </div>
              <div className="flex justify-center space-x-4 fade-in delay-3">
                <Link href="mailto:m.imraan95@gmail.com" target="_blank">
                  <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/mohamed-imraan/" target="_blank">
                  <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 right-8 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-50">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </section>

        <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-neutral-800/50 scroll-animation">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="text-xs md:text-sm text-white text-center md:text-left">
              © 2024 Imraan. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:m.imraan95@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <span className="sr-only">Email</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-imraan/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}