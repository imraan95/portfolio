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
        {/* Experience Section */}
        <section id="experience" className="py-8 md:py-12 px-4 md:px-6">
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
      </main>
    </div>
  )
} 