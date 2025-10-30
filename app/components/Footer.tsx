"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Rocket, Code2, TrendingUp, Building2, Instagram, Linkedin, RedoDotIcon, Youtube, Twitter } from "lucide-react";
import { Grid } from "@mui/material";

export default function Footer() {
  return (
        
    <footer className="bg-[#0A1630] text-white py-16 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173E81]/40 to-transparent opacity-40" />
    
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#87CBDE]"
            >
              CEGA
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Southeast Asia's premier gaming and creative technology incubator —
              empowering startups to grow through innovation, mentorship, and global reach.
            </p>
            <div className="text-sm text-gray-500 pt-4">
              © {new Date().getFullYear()} CEGA. All rights reserved.
            </div>
          </div>
    
          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-[#87CBDE]">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              {["Incubation", "Training", "Co-working", "Community"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#87CBDE] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
    
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-[#87CBDE]">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { name: "About Us", href: "/about" },
                { name: "Knowledge Hub", href: "/knowledge-hub" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#87CBDE] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
    
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center space-x-6"
        >
          {[
            {
              href: "https://www.instagram.com/cegaofficialpk/",
              icon: "instagram",
              label: "Instagram",
            },
            {
              href: "https://www.linkedin.com/company/cegaofficialpk/",
              icon: "linkedin",
              label: "LinkedIn",
            },
            {
              href: "https://www.reddit.com/user/CegaOfficialPk/",
              icon: "reddit",
              label: "Reddit",
            },
            {
              href: "https://www.youtube.com/@cegaofficialpk",
              icon: "youtube",
              label: "YouTube",
            },
            {
              href: "https://x.com/CegaOfficialPk",
              icon: "twitter",
              label: "Twitter",
            },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[#87CBDE] hover:text-white transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon === "instagram" && <Instagram className="w-6 h-6" />}
              {social.icon === "linkedin" && <Linkedin className="w-6 h-6" />}
              {social.icon === "reddit" && <RedoDotIcon className="w-6 h-6" />}
              {social.icon === "youtube" && <Youtube className="w-6 h-6" />}
              {social.icon === "twitter" && <Twitter className="w-6 h-6" />}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
    }