"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Rocket, Code2, TrendingUp, Building2 } from "lucide-react";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVideos = ["/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4"] as const;
  const [activeVideo, setActiveVideo] = useState<(typeof heroVideos)[number]>(heroVideos[0]);

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveVideo((current) => {
        const currentIndex = heroVideos.indexOf(current);
        const nextIndex = (currentIndex + 1) % heroVideos.length;
        return heroVideos[nextIndex];
      });
    }, 10000);
    return () => clearInterval(rotation);
  }, [heroVideos]);

  return (
    <div className="min-h-screen bg-white font-orbitron">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <video
              key={activeVideo}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/cegaLogo.png"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-[#0a1630]/80 via-[#0a1630]/75 to-[#0a1630]/80" />
          <div className="pointer-events-none absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur">
                  <span className="text-sm font-medium text-white">Now Accepting Applications</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_15px_40px_rgba(10,22,48,0.65)]">
                  Accelerate Your
                  <span className="text-[#87CBDE]"> Gaming Startup</span>
                </h1>

                <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl drop-shadow-[0_10px_30px_rgba(10,22,48,0.65)]">
                  Join Southeast Asia&apos;s premier gaming and creative technology incubator. 
                  Get the funding, mentorship, and network you need to scale globally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#87CBDE] text-[#0a1630] font-semibold rounded-lg shadow-[0_20px_45px_rgba(135,203,222,0.25)] hover:bg-[#87CBDE]/90 transition-colors"
                    >
                      Apply for Incubation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>

                  <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Trusted by logos */}
            <div className="mt-12 lg:mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-100/80 text-center mb-4">Trusted by founders and partners</p>
              <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap opacity-90">
                {["Partner+One", "Partner+Two", "Partner+Three", "Partner+Four", "Partner+Five"].map((name, idx) => (
                  <img
                    key={idx}
                    src={`https://dummyimage.com/140x40/ffffff/4a5568.png&text=${name}`}
                    alt={name.replace("+", " ")}
                    className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#173E81] mb-4">From Learning to Launch: 4 Pillars of Growth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Four connected programs designed to take you from your first prototype to a funded, scalable venture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Incubation",
                description: "Enroll in your cohort now",
                href: "/incubation",
                img: "https://dummyimage.com/640x420/0f172a/ffffff.jpg&text=Incubation"
              },
              {
                title: "Training",
                description: "Register for FREE trainings",
                href: "/training",
                img: "https://dummyimage.com/640x420/1e293b/ffffff.jpg&text=Training"
              },
              {
                title: "Co-Working",
                description: "Join our FREE co-working",
                href: "/co-working",
                img: "https://dummyimage.com/640x420/0b1220/ffffff.jpg&text=Co-Working"
              },
              {
                title: "Community Centre",
                description: "Become part of CEGA community",
                href: "/community-centre",
                img: "https://dummyimage.com/640x420/111827/ffffff.jpg&text=Community"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <a href={card.href} className="block">
                  <div className="aspect-4/3 w-full overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#173E81]">{card.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#173E81] mb-6">
                Why Choose CEGA?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've helped hundreds of gaming startups transform from ideas into 
                profitable businesses with global reach.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Gaming Industry Focus",
                    description: "Deep expertise in gaming, esports, and interactive entertainment with specialized mentors who understand your market."
                  },
                  {
                    title: "Proven Track Record",
                    description: "95% of our alumni companies are still operating after 3 years, with an average of 300% revenue growth."
                  },
                  {
                    title: "Southeast Asian Gateway",
                    description: "Strategic location and partnerships to help you expand across the fastest-growing gaming markets in the world."
                  },
                  {
                    title: "End-to-End Support",
                    description: "From initial concept to Series A funding, we provide continuous support throughout your entire growth journey."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-6 h-6 bg-[#87CBDE] rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#173E81] mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0"
            >
              <div className="bg-linear-to-br from-[#173E81] to-[#87CBDE] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Companies Incubated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$50M+</div>
                    <div className="text-sm opacity-90">Capital Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Countries Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-sm opacity-90">Jobs Created</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur">
                  <p className="text-sm italic">
                    "CEGA provided the perfect combination of funding, mentorship, and network 
                    that helped us scale from 5 to 50 employees in just 18 months."
                  </p>
                  <div className="mt-3 text-sm">
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="opacity-90">Founder, GameStorm Studios</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#173E81]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Gaming Venture?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our next cohort of innovative gaming entrepreneurs. 
              Applications for our Q1 2026 batch are now open.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#87CBDE] text-[#173E81] font-semibold rounded-lg hover:bg-[#87CBDE]/90 transition-colors"
                >
                  Apply Now - Free Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
            
            <p className="mt-6 text-sm text-blue-200">
              Application deadline: March 15, 2026 • Program starts: April 1, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#87CBDE] mb-4">CEGA</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Southeast Asia's premier gaming and creative technology incubator, 
                building the next generation of successful gaming ventures.
              </p>
              <div className="text-sm text-gray-400">
                © 2025 CEGA. All rights reserved.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/incubation" className="hover:text-[#87CBDE] transition-colors">Incubation</Link></li>
                <li><Link href="/training" className="hover:text-[#87CBDE] transition-colors">Training</Link></li>
                <li><Link href="/co-working" className="hover:text-[#87CBDE] transition-colors">Co-working</Link></li>
                <li><Link href="/community-centre" className="hover:text-[#87CBDE] transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-[#87CBDE] transition-colors">About Us</Link></li>
                <li><Link href="/knowledge-hub" className="hover:text-[#87CBDE] transition-colors">Knowledge Hub</Link></li>
                <li><Link href="/contact" className="hover:text-[#87CBDE] transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
