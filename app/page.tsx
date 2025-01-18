'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Mail as MailIcon } from 'lucide-react'
import { Linkedin as LinkedInIcon } from 'lucide-react'

export default function HomePage() {
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
      <main className="pt-24 md:pt-32">
        <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-8">
            <Image
              src="/images/Profile Pic.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              Hi, I'm Imraan 👋
            </h1>
            <p className="text-xl text-center text-white/80 max-w-2xl">
              Tech Product Leader specializing in Digital SAAS, Fintech, Marketplace and Consumer products
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Link href="/portfolio" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">View Portfolio</Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors">Get in Touch</Link>
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <Link href="mailto:m.imraan95@gmail.com">
                <MailIcon className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/mohamedimraan/?utm_source=portfolio&utm_medium=profile&utm_campaign=networking" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
              </Link>
            </div>
            <div className="mt-16"></div>
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
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white opacity-50">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </main>
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
    </div>
  )
}