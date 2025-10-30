"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Variants } from "framer-motion";
import { toast } from "react-toastify";

const navLinks = [
  { label: "Incubation", href: "/incubation" },
  { label: "Training", href: "/training" },
  { label: "Co-working", href: "/co-working" },
  { label: "Community Centre", href: "/community-centre" },
  { label: "About CEGA", href: "/about" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleToastMessage = ()=>{
    toast.error("Website is under maintenace")
  }
  // Desktop menu animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  // Mobile menu animation
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#87CBDE]/20 shadow-sm"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="text-3xl font-black tracking-widest"
                style={{ color: "#173E81", fontFamily: "Orbitron, sans-serif" }}
              >
                CEGA
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 relative group"
                    style={{ color: "#173E81", fontFamily: "Orbitron, sans-serif" }}
                  >
                    {link.label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: "#87CBDE" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button - Desktop */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/signup"
                className="px-6 py-2.5 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 tracking-wide"
                style={{ backgroundColor: "#87CBDE", color: "#173E81", fontFamily: "Orbitron, sans-serif" }}
              >
                APPLY NOW
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#173E81" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#87CBDE]/20 shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <Link

                    
                    href={link.href}
                  onClick={() => {
  closeMenu();

}}

                    className="block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                    style={{ color: "#173E81", fontFamily: "Orbitron, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button - Mobile */}
              <motion.div
                className="pt-4 border-t border-[#87CBDE]/20"
                variants={mobileItemVariants}
              >
                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 text-base font-bold rounded-full shadow-lg transition-all duration-300 tracking-wide"
                  style={{ backgroundColor: "#87CBDE", color: "#173E81", fontFamily: "Orbitron, sans-serif" }}
                >
                  APPLY NOW
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
