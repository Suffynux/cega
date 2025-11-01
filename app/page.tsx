"use client";

import Image from "next/image";
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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HubIcon from "@mui/icons-material/Hub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PaletteIcon from "@mui/icons-material/Palette";
import ScienceIcon from "@mui/icons-material/Science";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MemoryIcon from "@mui/icons-material/Memory";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GroupsIcon from "@mui/icons-material/Groups";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

  const audienceSegments = [
    {
      title: "Students & Trainees",
      description: "Upskilling with structured mentorship and real projects.",
      Icon: SchoolIcon,
    },
    {
      title: "Freelancers",
      description: "Grow your portfolio and tap into collaborative gigs.",
      Icon: WorkOutlineIcon,
    },
    {
      title: "Indie Developers & Small Studios",
      description: "Access production support to ship your next title.",
      Icon: HubIcon,
    },
    {
      title: "Startup Founders",
      description: "Validate ideas, secure funding, and scale with speed.",
      Icon: RocketLaunchIcon,
    },
    {
      title: "Creative Professionals",
      description:
        "Blend art and tech with a community that shares your vision.",
      Icon: PaletteIcon,
    },
    {
      title: "Educators & Researchers",
      description: "Co-create curriculum, research labs, and innovation hubs.",
      Icon: ScienceIcon,
    },
    {
      title: "Women in Tech & Gaming",
      description: "Join inclusive cohorts and supportive leadership circles.",
      Icon: Diversity3Icon,
    },
    {
      title: "Brands & Sponsors",
      description: "Activate partnerships with emerging gaming ventures.",
      Icon: HandshakeIcon,
    },
    {
      title: "Investors & VCs",
      description: "Source vetted teams ready for the next funding milestone.",
      Icon: AccountBalanceIcon,
    },
    {
      title: "Tech Enthusiasts",
      description:
        "Experiment with cutting-edge tools, engines, and workflows.",
      Icon: MemoryIcon,
    },
    {
      title: "Esports Players",
      description:
        "Train with top talent and build winning competitive rosters.",
      Icon: SportsEsportsIcon,
    },
    {
      title: "General Community",
      description: "Connect, collaborate, and celebrate the future of play.",
      Icon: GroupsIcon,
    },
  ];

  const MotionBox = motion(Box);

  const partnerLogos = [
    { src: "/workingWith/1.png", alt: "Odoo" },
    { src: "/workingWith/2.png", alt: "Huawei" },
    { src: "/workingWith/3.png", alt: "Tencent" },
    { src: "/workingWith/4.png", alt: "NetEase" },
    { src: "/workingWith/5.jpg", alt: "Game BCN" },
    { src: "/workingWith/6.webp", alt: "Homa" },
    { src: "/workingWith/7.avif", alt: "Partners" },
    { src: "/workingWith/8.png", alt: "Partner Eight" },
    { src: "/workingWith/9.png", alt: "Partner Nine" },
  ];

  const faqItems = [
    {
      question: "What is CEGA’s mission?",
      answer:
        "We exist to accelerate Pakistan’s gaming industry by elevating production quality, building globally recognised IPs, and forging international partnerships that unlock capital and mentorship.",
    },
    {
      question: "How does CEGA support early-stage founders?",
      answer:
        "From prototype to launch, founders receive structured mentorship, studio space, investor readiness sprints, and access to our global partner network.",
    },
    {
      question: "Can non-technical creatives join CEGA?",
      answer:
        "Absolutely. Artists, writers, producers, and sound designers collaborate with developers inside multidisciplinary squads that mirror modern game studios.",
    },
    {
      question: "What makes CEGA different from other incubators?",
      answer:
        "We are gaming-first. Every program, mentor, and tooling stack is curated for interactive entertainment — from live-ops coaching to playable testing labs.",
    },
    {
      question: "How do international partners work with CEGA?",
      answer:
        "Global studios and investors co-design bootcamps, sponsor cohorts, and source talent through CEGA, creating a bridge between Pakistan and worldwide markets.",
    },
    {
      question: "Where is CEGA headed next?",
      answer:
        "Our vision is to deliver record revenues for Pakistani studios, cultivate export-ready IPs, and cement the country as a regional hub for gaming innovation.",
    },
  ];

  const faqColumns = [
    faqItems.filter((_, index) => index % 2 === 0),
    faqItems.filter((_, index) => index % 2 === 1),
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

      {/* Audience Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-[#f5f8ff]">
        <motion.div
          className="pointer-events-none absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-[#87CBDE]/40 blur-3xl"
          initial={{ opacity: 0.45, y: 0 }}
          animate={{ opacity: [0.45, 0.7, 0.45], y: [0, -24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 right-1/5 h-72 w-72 rounded-full bg-[#173E81]/20 blur-[120px]"
          initial={{ opacity: 0.3, y: 0, scale: 1 }}
          animate={{
            opacity: [0.3, 0.55, 0.3],
            y: [0, 26, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#173E81] mb-4">
              Who Is It For?
            </h2>
            <p className="text-base text-[#47679d] max-w-3xl mx-auto font-outfit">
              Our programs unite creators, technologists, and partners from
              across the gaming ecosystem. Discover the communities that thrive
              inside CEGA.
            </p>
          </div>

          <Grid container spacing={3} justifyContent="center">
            {audienceSegments.map(({ title, description, Icon }, index) => (
              <Grid key={title} size={{ xs: 12, md: 4 }}>
                <MotionBox
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                    p: 3,
                    minHeight: "190px",
                    borderRadius: "18px",
                    border: "1px solid rgba(23,62,129,0.12)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(235,243,255,0.88))",
                    boxShadow: "0 12px 30px rgba(8,27,88,0.08)",
                    transition: "box-shadow 0.35s ease, background 0.35s ease",
                    "&:hover": {
                      boxShadow: "0 22px 45px rgba(8,27,88,0.18)",
                      background:
                        "linear-gradient(180deg, rgba(135,203,222,0.25), rgba(23,62,129,0.12))",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 40, color: "#27B2D7" }} />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, color: "#173E81" }}
                    className="font-orbitron"
                  >
                    {title}
                  </Typography>
                  <Typography
                    className="font-outfit"
                    variant="body2"
                    sx={{ color: "#4f6da5", lineHeight: 1.6 }}
                  >
                    {description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
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
      <section className="py-16 lg:py-24 bg-[#173E81]">
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
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.45 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#173E81]/60 mb-3">
              Partners
            </p>
            <motion.h2
              className="text-2xl font-semibold text-[#173E81]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              CEGA’s global and local trusted friends
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Marquee className="[--duration:28s] [--gap:3rem]">
              {partnerLogos.map((logo, idx) => (
                <motion.div
                  key={`${logo.src}-top`}
                  className="flex items-center justify-center rounded-2xl bg-white px-6 py-3 shadow-[0_12px_30px_rgba(8,27,88,0.06)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={40}
                    className="h-10 w-auto object-contain opacity-90"
                  />
                </motion.div>
              ))}
            </Marquee>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-[#13C2B6] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_18px_35px_rgba(19,194,182,0.32)] transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(19,194,182,0.4)]"
            >
              Become a Partner
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#173E81] sm:text-4xl">
              <span className="relative inline-block">
                <span className="relative z-10">Any questions on</span>
                <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-[#13C2B6]/40"></span>
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Projects?</span>
                <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-[#13C2B6]/40"></span>
              </span>
            </h2>
            <p className="font-outfit text-base text-[#4f6da5]">
              Excited to become part of Pakistan’s biggest gaming brand? Reach
              out and we will walk you through partnership, training, or startup
              support opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-xl"
          >
            <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_25px_80px_rgba(23,62,129,0.14)] sm:grid-cols-2">
              <div className="flex flex-col gap-2 border-b border-white/60 bg-gradient-to-br from-[#f7fbff] to-white p-8 sm:border-b-0 sm:border-r">
                <span className="text-xs uppercase tracking-[0.3em] text-[#13C2B6]">
                  Write to us
                </span>
                <a
                  className="text-lg font-semibold text-[#173E81]"
                  href="mailto:partner@cega.com.pk"
                >
                  partner@cega.com.pk
                </a>
                <p className="text-sm text-[#5f7cb3]">
                  We reply within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-2 bg-gradient-to-br from-white via-[#f3f7ff] to-white p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-[#13C2B6]">
                  Let’s talk
                </span>
                <a
                  className="text-lg font-semibold text-[#173E81]"
                  href="tel:+923001112324"
                >
                  +92 300 111 2324
                </a>
                <p className="text-sm text-[#5f7cb3]">
                  Schedule a strategy call with our venture team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#173E81]/60 mb-3">
              FAQs
            </p>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-[#173E81] mb-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Building the future of play with CEGA
            </motion.h2>
            <motion.p
              className="max-w-3xl mx-auto font-outfit text-base text-[#4f6da5]"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              viewport={{ once: true, amount: 0.65 }}
            >
              Explore how we enable founders, creatives, and partners while
              delivering on our mission to expand Pakistan’s gaming economy.
            </motion.p>
          </motion.div>

          <Grid container spacing={4}>
            {faqColumns.map((column, columnIndex) => (
              <Grid key={columnIndex} size={{ xs: 12, md: 6 }}>
                <div className="space-y-3">
                  {column.map((item, itemIndex) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: itemIndex * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      viewport={{ once: true, amount: 0.25 }}
                      whileHover={{ y: -6 }}
                    >
                      <Accordion
                        disableGutters
                        elevation={0}
                        square
                        sx={{
                          borderRadius: "18px",
                          border: "1px solid rgba(23,62,129,0.12)",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(235,243,255,0.9))",
                          boxShadow: "0 10px 28px rgba(8,27,88,0.08)",
                          overflow: "hidden",
                          "&:before": { display: "none" },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon sx={{ color: "#173E81" }} />
                          }
                          sx={{
                            px: 3,
                            py: 2.5,
                            "& .MuiAccordionSummary-content": {
                              alignItems: "center",
                            },
                          }}
                        >
                          <Typography
                            className="font-orbitron"
                            sx={{ fontWeight: 700, color: "#173E81" }}
                          >
                            {item.question}
                          </Typography>
                        </AccordionSummary>
                        <Divider sx={{ opacity: 0.3 }} />
                        <AccordionDetails sx={{ px: 3, py: 2 }}>
                          <Typography
                            className="font-outfit"
                            sx={{ color: "#4f6da5", lineHeight: 1.8 }}
                          >
                            {item.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </motion.div>
                  ))}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
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
                  <span className="text-sm font-medium text-white font-outfit">
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
                          className="md:w-50% font-outfit w-full inline-flex items-center justify-center px-8 py-4 bg-[#87CBDE] text-[#0a1630] font-semibold rounded-lg shadow-[0_20px_45px_rgba(135,203,222,0.25)] hover:bg-[#87CBDE]/90 transition-colors"
                        >
                          Apply for Incubation
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>

                      <button className="font-outfit w-50% inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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
