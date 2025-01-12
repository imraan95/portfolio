'use client'

import { useEffect } from "react"

export default function LearningsPage() {
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
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Learnings</h1>
            <p className="text-xl text-white/80">Coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  )
} 