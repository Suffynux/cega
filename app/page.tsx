"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Users,
  Rocket,
  Code2,
  TrendingUp,
  Building2,
  Instagram,
  Linkedin,
  RedoDotIcon,
  Youtube,
  Twitter,
} from "lucide-react";
import SignupPage from "./signup/page";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { AuroraText } from "@/components/ui/aurora-text";
import { Marquee } from "@/components/ui/marquee";
import { MarqueeDemoVertical } from "@/components/ui/Review";

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVideos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
  ] as const;
  const [activeVideo, setActiveVideo] = useState<(typeof heroVideos)[number]>(
    heroVideos[0]
  );
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
  ];

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
      <Hero activeVideo={activeVideo} />

      {/* 4 Pillars Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#173E81] mb-4">
              From Learning to Launch: 4 Pillars of Growth
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto font-outfit md:text-2xl">
              <AuroraText>
                Four connected programs designed to take you from your first
                prototype to a funded, scalable venture.
              </AuroraText>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Incubation",
                description:
                  "Cohort-based mentoring, market validation and go-to-market support.",
                href: "/incubation",
                img: "/images/icubation.jpeg",
                accent: "#173E81",
              },
              {
                title: "Training",
                description:
                  "Hands-on workshops: Unity, Unreal, live ops, and backend tooling.",
                href: "/training",
                img: "/images/training.jpg",
                accent: "#13577a",
              },
              {
                title: "Co-Working",
                description:
                  "Free desks, meeting rooms, and labs — purpose-built for production.",
                href: "/co-working",
                img: "/images/coWorking.jpeg",
                accent: "#0d2a55",
              },
              {
                title: "Community Centre",
                description:
                  "Events, networking, and community support for founders and creators.",
                href: "/community-centre",
                img: "/images/comunity.jpg",
                accent: "#2a6b8f",
              },
            ].map((card, idx) => (
              <motion.div
                className="font-orbitron"
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <Card
                  elevation={6}
                  className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform  font-orbitron"
                  sx={{ borderRadius: 2 }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      className="font-orbitron"
                      image={card.img}
                      alt={card.title}
                      sx={{ objectFit: "cover", height: "220px" }}
                    />

                    {/* subtle overlay and badge */}
                    <Box
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold font-orbitron"
                      sx={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}
                    >
                      {card.title}
                    </Box>
                    <Box
                      className="absolute inset-0  font-orbitron"
                      sx={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(10,22,48,0.55) 100%)",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ pt: 4, pb: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      className=" font-orbitron"
                      sx={{ color: card.accent, fontWeight: 700 }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                      className="font-outfit"
                    >
                      {card.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Button
                      className=" font-orbitron"
                      size="small"
                      href={card.href}
                      sx={{ textTransform: "none", color: "#173E81" }}
                    >
                      Learn more
                    </Button>
                    <Box sx={{ flex: 1 }} />
                    <Button
                      size="small"
                      variant="contained"
                      href={card.href}
                      sx={{
                        background: "linear-gradient(90deg,#87CBDE,#173E81)",
                        textTransform: "none",
                      }}
                    >
                      Apply
                    </Button>
                  </CardActions>
                </Card>
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
              <p className="text-lg text-gray-600 mb-8 font-outfit">
                We've helped hundreds of gaming startups transform from ideas
                into profitable businesses with global reach.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Gaming Industry Focus",
                    description:
                      "Deep expertise in gaming, esports, and interactive entertainment with specialized mentors who understand your market.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "95% of our alumni companies are still operating after 3 years, with an average of 300% revenue growth.",
                  },
                  {
                    title: "Southeast Asian Gateway",
                    description:
                      "Strategic location and partnerships to help you expand across the fastest-growing gaming markets in the world.",
                  },
                  {
                    title: "End-to-End Support",
                    description:
                      "From initial concept to Series A funding, we provide continuous support throughout your entire growth journey.",
                  },
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
                      <h3 className="font-semibold text-[#173E81] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-outfit">
                        {item.description}
                      </p>
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
              <div className="bg-linear-to-br from-[#173E81] to-[#2093b3] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">
                      Companies Incubated
                    </div>
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
                  <p className="text-sm italic font-outfit">
                    "CEGA provided the perfect combination of funding,
                    mentorship, and network that helped us scale from 5 to 50
                    employees in just 18 months."
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
      <section className="py-16 lg:py-24 bg-[#173E81] mb-3">
        <div className="max-w-7xl mx-auto flex flex-col-reverse items-center gap-10 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl space-y-6 text-center lg:space-y-8 lg:text-left"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Gaming Venture?
            </h2>
            <p className="font-outfit text-lg text-blue-100">
              Join our next cohort of innovative gaming entrepreneurs.
              Applications for our Q1 2026 batch are now open.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#87CBDE] text-[#173E81] font-semibold rounded-lg hover:bg-[#87CBDE]/90 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <button className="inline-flex items-center justify-center px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Application deadline: March 15, 2026 • Program starts: April 1,
              2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MarqueeDemoVertical />
          </motion.div>
        </div>
      </section>
      <section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <SignupPage homepage={true} />
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export function Hero({ activeVideo, incubation, training, coWorking }: any) {
  return (
    <>
      <section
        className={`relative min-h-screen ${
          incubation || training || coWorking
            ? "pt-24 pb-32 md:pt-55 lg:pb-44"
            : "pt-24 pb-16 lg:pt-32 lg:pb-24"
        }`}
      >
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
                  <span className="text-sm font-medium text-white">
                    Now Accepting Applications
                  </span>
                </div>

                {coWorking ? (
                  <>
                    <h1 className=" text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-[0_15px_40px_rgba(10,22,48,0.65)]">
                      A Workspace Built for
                      <span className="text-[#87CBDE]">
                        {" "}
                        Game &amp; Animation Teams
                      </span>
                    </h1>

                    <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl drop-shadow-[0_10px_30px_rgba(10,22,48,0.65)]">
                      Free desks, meeting rooms, labs, and blazing
                      internet—purpose-built for production.
                      <br />
                      <strong>Open 9:00 AM – 6:00 PM.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/co-working"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#87CBDE] text-[#0a1630] font-semibold rounded-lg shadow-[0_20px_45px_rgba(135,203,222,0.25)] hover:bg-[#87CBDE]/90 transition-colors"
                      >
                        Book a Desk
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.a>

                      <a
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                        href="/co-working#facilities"
                      >
                        See Facilities
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <h1 className="text-center md:text-left text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_15px_40px_rgba(10,22,48,0.65)]">
                      {training
                        ? "Empowering the Next Generation of"
                        : "Accelerate Your"}{" "}
                      <span className="text-[#87CBDE]">
                        {training ? "Game Developers" : "Startup"}
                      </span>
                    </h1>

                    <p className="text-center md:text-left font-outfit text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl drop-shadow-[0_10px_30px_rgba(10,22,48,0.65)]">
                      {training ? (
                        <>
                          Join our free, hands-on training program for aspiring
                          developers. Learn from industry mentors, master
                          essential tools, and kickstart your journey in game
                          development.
                        </>
                      ) : (
                        <>
                          Join our comprehensive incubation program to scale
                          your startup with mentorship, funding, and a global
                          network.
                        </>
                      )}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href="/signup"
                          className="md:w-50% w-full inline-flex items-center justify-center px-8 py-4 bg-[#87CBDE] text-[#0a1630] font-semibold rounded-lg shadow-[0_20px_45px_rgba(135,203,222,0.25)] hover:bg-[#87CBDE]/90 transition-colors"
                        >
                          Apply for Incubation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>

                      <button className="w-50% inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            {/* Trusted by logos — only show if NOT incubation */}
            {!incubation && !training && !coWorking && (
              <div className="mt-[50px] lg:mt-16">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-100/80 text-center mb-4">
                  Trusted by founders and partners
                </p>
                <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap opacity-95">
                  {[
                    { src: "/brandLogo/brandLogo.jpg", alt: "CEGA" },
                    { src: "/brandLogo/egonLogo.jpg", alt: "Egon" },
                    { src: "/brandLogo/hum_network.png", alt: "HUM Network" },
                    { src: "/brandLogo/logo.webp", alt: "Partner Logo" },
                    { src: "/brandLogo/Lums-Logo.png", alt: "LUMS" },
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center bg-white/90 dark:bg-black/70 rounded-md p-2 shadow-sm hover:scale-[1.03] transition-transform"
                      style={{ width: 140, height: 44 }}
                    >
                      {logo.src.includes("logo.webp") ? (
                        /* logo.webp has white on white background — show brand text instead */
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-[#173E81] text-white w-8 h-8 flex items-center justify-center font-semibold">
                            SS
                          </div>
                          <div className="text-sm font-medium text-[#173E81]">
                            SectionSoft
                          </div>
                        </div>
                      ) : (
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-h-8 w-auto object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
