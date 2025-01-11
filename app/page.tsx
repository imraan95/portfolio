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

      {/* Navigation */}
      <header className="flex flex-col md:flex-row md:items-center justify-between py-4 px-4 md:px-6 border-b border-neutral-800/50">
        <Link href="/" className="text-lg font-semibold text-center md:text-left mb-4 md:mb-0">
          Mohamed Imraan Iqbal
        </Link>
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6">
          <Link href="#about" className="text-sm text-white hover:text-white/80 transition-colors">About</Link>
          <Link href="#experience" className="text-sm text-white hover:text-white/80 transition-colors">Experience</Link>
          <Link href="#education" className="text-sm text-white hover:text-white/80 transition-colors">Education</Link>
          <Link href="#skills" className="text-sm text-white hover:text-white/80 transition-colors">Skills</Link>
          <Link href="#soft-skills" className="text-sm text-white hover:text-white/80 transition-colors">Soft Skills</Link>
          <Link href="mailto:m.imraan95@gmail.com" className="text-sm text-white hover:text-white/80 transition-colors">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 md:px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col items-center mb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-8 fade-in relative">
                <Image
                  src="/images/Profile Pic.jpeg"
                  alt="Mohamed Imraan Iqbal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight fade-in delay-1 text-center px-4">
                Mohamed Imraan Iqbal
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

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 px-4 md:px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 scroll-animation">Professional Experience</h2>
            
            <div className="space-y-12">
              {/* Rome2Rio */}
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Senior Product Manager</h3>
                      <p className="text-pink-500">
                        <a href="https://www.rome2rio.com" target="_blank" className="hover:text-pink-400 transition-colors">
                          Rome2Rio
                        </a>
                      </p>
                    </div>
                    <p className="text-white">Dec 2022 - Present</p>
                  </div>
                  <p className="text-white italic mb-4">Owns all monetisation products including Conversion, and Ads across rome2rio and omio.com Ads</p>
                  <ul className="space-y-2 text-white">
                    <li>• Owning the accommodation product line (web & app) including Acquisition, Engagement, Conversion and Retention</li>
                    <li>• Working with engineering, analytics, commercial and design teams to revamp existing product</li>
                    <li>• Identifying market opportunities through market research, competitor research to shape product vision</li>
                    <li>• Leading a team of 9</li>
                    <li>• Undertaking growth experiments for funnel conversion</li>
                    <li>• Accountable for product innovation, OKRs & revenue share of product line</li>
                  </ul>
                </div>
              </div>

              {/* MyGigsters */}
              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Head of Product</h3>
                      <p className="text-pink-500">
                        <a href="https://www.mygigsters.com.au" target="_blank" className="hover:text-pink-400 transition-colors">
                          MyGigsters
                        </a>
                      </p>
                    </div>
                    <p className="text-white">Nov 2020 - Dec 2022</p>
                  </div>
                  <p className="text-white italic mb-4">Fintech Startup funded by the Australian Government</p>
                  <ul className="space-y-2 text-white">
                    <li>• Managed life cycles of 2 product lines - accounting product and an investment tool</li>
                    <li>• Owned product growth KPIs with M-o-M growth rate of 90% and 40% retention rate</li>
                    <li>• Setup & managed a remote cross-functional team of 2 BAs, 9 engineers & 2 designers</li>
                    <li>• Launched MVP in less than 2 months through lean agile sprints & user interviews</li>
                    <li>• Setup Analytics tech stack to measure and manage user journey map across all products & channels</li>
                    <li>• Pitched the product vision and pivotal in raising pre-seed round with top VCs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-20 px-4 md:px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 scroll-animation">Education</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-2 text-white">Master of Business</h3>
                  <p className="text-pink-500 mb-4">Monash University, Australia</p>
                  <ul className="space-y-2 text-white">
                    <li>• Graduated in the top 2 percentile</li>
                    <li>• Dean's honor award</li>
                  </ul>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-2 text-white">Bachelor of Technology in Information Technology</h3>
                  <p className="text-pink-500 mb-4">College of Engineering Guindy, Anna University, India</p>
                  <ul className="space-y-2 text-white">
                    <li>• Graduated First Class at the oldest engineering institute in Asia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 px-4 md:px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 scroll-animation">Technical Skills</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Project Management Stack</h3>
                  <p className="text-white">JIRA, Trello, Miro, Confluence, Notion, Asana</p>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Analytics Stack</h3>
                  <p className="text-white">Google Analytics, Looker, Firebase, Optimizely, Excel</p>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-2">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Design Stack</h3>
                  <p className="text-white">Adobe Suite, Figma, Sketch, Canva</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section id="soft-skills" className="py-12 md:py-20 px-4 md:px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 scroll-animation">Soft Skills</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="scroll-animation">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Bias towards action</h3>
                  <p className="text-white">Quick decision-making and proactive problem-solving approach</p>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-1">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Empathy</h3>
                  <p className="text-white">Understanding and relating to team members and stakeholders</p>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-2">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Critical thinking</h3>
                  <p className="text-white">Analytical approach to problem-solving and decision-making</p>
                </div>
              </div>

              <div className="scroll-animation scroll-delay-3">
                <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-semibold mb-4 text-white">Motivated and driven</h3>
                  <p className="text-white">Self-starter with a strong focus on achieving goals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-neutral-800/50 scroll-animation">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="text-xs md:text-sm text-white text-center md:text-left">
              © 2024 Mohamed Imraan Iqbal. All rights reserved.
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