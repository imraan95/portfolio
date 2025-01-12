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
    <div className="min-h-screen bg-black text-white">
      <main className="py-4 md:py-8">
        <div className="px-4 md:px-6">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation text-white">Learnings</h1>
            
            {/* Content will be added later */}
            <div className="text-white/80">
              Coming soon...
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 