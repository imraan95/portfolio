'use client'

import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

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
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Professional Experience</h2>
                  
                  <div className="space-y-8">
                    {/* Rome2Rio */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                            <Image
                              src="/images/rome2rio-logo.png"
                              alt="Rome2Rio Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">SENIOR PRODUCT MANAGER (Full Time)</h3>
                            <p className="text-pink-500">
                              <a href="https://www.rome2rio.com" target="_blank" className="hover:text-pink-400 transition-colors">
                                Rome2Rio
                              </a>
                            </p>
                            <p className="text-sm text-neutral-400">Travel marketplace with &gt;50 million monthly visits</p>
                          </div>
                        </div>
                        <p className="text-white mt-2 md:mt-0">DEC 2022-Present</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Owning the accommodation product line (web & app) including Acquisition, Engagement, Conversion and Retention</li>
                        <li>Working with engineering, analytics, commercial and design teams to revamp existing product</li>
                        <li>Identifying market opportunities through market research, competitor research to shape product vision</li>
                        <li>Experienced in Agile methodologies & product delivery lifecycles</li>
                        <li>Undertaking growth experiments for funnel conversion</li>
                        <li>Leading a team of 9</li>
                        <li>Accountable for product innovation, OKRs & revenue share of product line</li>
                      </ul>
                    </div>

                    {/* MyGigsters */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                            <Image
                              src="/images/mygigsters-logo.png"
                              alt="MyGigsters Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">HEAD OF PRODUCT (Full Time)</h3>
                            <p className="text-pink-500">
                              <a href="https://mygigsters.com.au" target="_blank" className="hover:text-pink-400 transition-colors">
                                MyGigsters
                              </a>
                            </p>
                            <p className="text-sm text-neutral-400">Fintech Startup funded by the Australian Government</p>
                          </div>
                        </div>
                        <p className="text-white mt-2 md:mt-0">NOV 2020 - DEC 2022</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Managed life cycles of 2 product lines - accounting product and an investment tool</li>
                        <li>Owned product growth KPIs. M-o-M growth rate was 90% with a 40% retention rate</li>
                        <li>Setup & managed a remote cross-functional team of 2 BAs, 9 engineers & 2 designers</li>
                        <li>Launched MVP in less than 2 months through lean agile sprints & user interviews</li>
                        <li>Setup Analytics tech stack to measure and manage user journey map across all products & channels</li>
                        <li>Rolled out scalable and secure API stack</li>
                        <li>Pitched the product vision and pivotal in raising pre-seed round with top VCs like Startmate & Antler</li>
                      </ul>
                    </div>

                    {/* SEEK */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                            <Image
                              src="/images/seek-logo.png"
                              alt="Seek Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">PRODUCT MARKETING (Part time)</h3>
                            <p className="text-pink-500">
                              <a href="https://www.seek.com.au" target="_blank" className="hover:text-pink-400 transition-colors">
                                Seek
                              </a>
                            </p>
                            <p className="text-sm text-neutral-400">Global job search marketplace</p>
                          </div>
                        </div>
                        <p className="text-white mt-2 md:mt-0">JAN 2021-DEC 2022</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Worked on Acquisition, Activation and Retention for Native apps across 36 countries - candidate apps (B2C)</li>
                        <li>Managed monthly budgets of $200,000+ across marketing efforts and was accountable for P/L forecasting & reporting</li>
                        <li>Worked on Paid channels, ASO, Email EDM marketing, Influencer marketing</li>
                        <li>Worked with Apps product team on UAT, QA & Localisation to improve User Experience, user signup journey & ASO ranking</li>
                      </ul>
                    </div>

                    {/* 180 Degrees Consulting */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                            <Image
                              src="/images/180-degrees-consulting.png"
                              alt="180 Degrees Consulting Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">CONSULTING PROJECT TEAM LEAD (Freelance contract)</h3>
                            <p className="text-pink-500">
                              <a href="https://180dc.org" target="_blank" className="hover:text-pink-400 transition-colors">
                                180 Degrees Consulting
                              </a>
                            </p>
                            <p className="text-sm text-neutral-400">Largest global consulting organisation for Not-for-Profits</p>
                          </div>
                        </div>
                        <p className="text-white mt-2 md:mt-0">JULY 2020-OCT 2020</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Working on financing the internationally reputed 'Project Dastaan' which advised by high-profile historians, film-makers and advocates including Malala Yousafzai, Gabo Arora, Suroosh Alvi, William Dalrymple</li>
                        <li>Managing a diverse team to work on international distribution and technical partnerships for the VR documentary project</li>
                        <li>Working with internal and external stakeholders on project scoping, analysis, budgeting and timeline</li>
                        <li>Building out issue trees, performing root cause analysis and conducting a investment audit internally</li>
                      </ul>
                    </div>

                    {/* Freshworks */}
                    <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                            <Image
                              src="/images/freshworks-logo.png"
                              alt="Freshworks Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">BUSINESS ANALYST (Full Time)</h3>
                            <p className="text-pink-500">
                              <a href="https://www.freshworks.com" target="_blank" className="hover:text-pink-400 transition-colors">
                                Freshworks Inc.
                              </a>
                            </p>
                            <p className="text-sm text-neutral-400">US Based B2B SAAS Public Company</p>
                          </div>
                        </div>
                        <p className="text-white mt-2 md:mt-0">JULY 2017-JULY 2019</p>
                      </div>
                      <ul className="list-disc pl-5 space-y-2 text-white">
                        <li>Helped the SAAS business scale in revenue through market analysis and insights</li>
                        <li>Worked on analysis of portfolio products namely Freshdesk (customer support tool) and Freshservice (ITSM tool)</li>
                        <li>Worked with Presales and Product Managers to identify pain points and strategize appropriate solutions</li>
                        <li>Worked with sales/revenue leadership on campaigns to drive marketing efforts for various regions of the US Market</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar Content - 30% */}
              <div className="lg:w-[30%] space-y-8">
                {/* Education Section */}
                <section id="education" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Education</h2>
                  <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                    <div className="mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                          <Image
                            src="/images/Master-of-Business.png"
                            alt="Monash University Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Master Of Business</h3>
                          <p className="text-pink-500">Monash University, Australia</p>
                          <ul className="list-disc pl-5 mt-2 text-white">
                            <li>Graduated in the top 2 percentile</li>
                            <li>Dean's honor award</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden bg-neutral-900">
                          <Image
                            src="/images/Bachelor of IT.png"
                            alt="Anna University Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Bachelor of Technology in Information Technology</h3>
                          <p className="text-pink-500">College of Engineering Guindy, Anna University, India</p>
                          <ul className="list-disc pl-5 mt-2 text-white">
                            <li>Graduated First Class at the oldest engineering institute in Asia.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Technical Skills Section */}
                <section id="technical-skills" className="scroll-animation">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">Technical Skills</h2>
                  <div className="bg-neutral-900 p-6 md:p-8 rounded-xl border border-neutral-800 hover:border-indigo-900/50 transition-colors">
                    <ul className="space-y-4">
                      <li>
                        <h3 className="font-semibold text-pink-500">AI Tech Stack:</h3>
                        <p className="text-white">Cursor AI, Replit</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-pink-500">Project Management Stack:</h3>
                        <p className="text-white">JIRA, Trello, Miro, Confluence, Notion, Asana</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-pink-500">Analytics Stack:</h3>
                        <p className="text-white">Google Analytics, Looker, Firebase, Optimizely, Excel</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-pink-500">Web CMS:</h3>
                        <p className="text-white">Webflow, basic HTML/CSS, JS, Google Tag Manager and Hotjar</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-pink-500">Design Stack:</h3>
                        <p className="text-white">Adobe Suite, Figma, Sketch, Canva</p>
                      </li>
                      <li>
                        <h3 className="font-semibold text-pink-500">Marketing Stack:</h3>
                        <p className="text-white">Google Ads, Facebook Ads, LinkedIn Ads</p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            
            {/* Download Resume Button */}
            <div className="mt-16 mb-8 flex justify-center">
              <a 
                href="/Mohamed_Imraan_Resume.pdf" 
                download
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download ATS Resume
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 