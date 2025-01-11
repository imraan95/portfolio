'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function ResumePage() {
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
        <div className="px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 scroll-animation">Resume</h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content - 70% */}
              <div className="lg:w-[70%] space-y-8">
                {/* Experience Section */}
                <section id="experience" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
                  
                  <div className="space-y-8">
                    {/* Rome2Rio */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
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
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Led the development of Rome2Rio's marketplace product</li>
                        <li>Improved conversion rates through A/B testing and user research</li>
                        <li>Managed relationships with key stakeholders and partners</li>
                      </ul>
                    </div>

                    {/* Previous Experience */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">Product Manager</h3>
                          <p className="text-pink-500">
                            <a href="https://www.seek.com.au" target="_blank" className="hover:text-pink-400 transition-colors">
                              SEEK
                            </a>
                          </p>
                        </div>
                        <p className="text-white">Jan 2020 - Nov 2022</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Led product strategy for key business initiatives</li>
                        <li>Developed and executed product roadmap</li>
                        <li>Collaborated with cross-functional teams</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Technical Skills Section */}
                <section id="technical-skills" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
                  <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-pink-500">Product Management</h3>
                        <ul className="list-disc pl-5 space-y-1 text-white">
                          <li>Agile/Scrum</li>
                          <li>User Stories</li>
                          <li>Product Strategy</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-pink-500">Analytics</h3>
                        <ul className="list-disc pl-5 space-y-1 text-white">
                          <li>Google Analytics</li>
                          <li>SQL</li>
                          <li>Data Analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-pink-500">Tools</h3>
                        <ul className="list-disc pl-5 space-y-1 text-white">
                          <li>Jira</li>
                          <li>Confluence</li>
                          <li>Figma</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar Content - 30% */}
              <div className="lg:w-[30%] space-y-8">
                {/* Education Section */}
                <section id="education" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6">Education</h2>
                  <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white">Master of Information Technology</h3>
                      <p className="text-pink-500">University of Melbourne</p>
                      <p className="text-white">2018 - 2020</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Bachelor of Engineering</h3>
                      <p className="text-pink-500">Anna University</p>
                      <p className="text-white">2013 - 2017</p>
                    </div>
                  </div>
                </section>

                {/* Soft Skills Section */}
                <section id="soft-skills" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
                  <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800">
                    <ul className="list-disc pl-5 space-y-2 text-white">
                      <li>Leadership</li>
                      <li>Communication</li>
                      <li>Problem Solving</li>
                      <li>Team Collaboration</li>
                      <li>Strategic Thinking</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 