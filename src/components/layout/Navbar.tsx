"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";
import Magnetic from "../ui/Magnetic";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Edu", href: "#education" },
  { name: "Exp", href: "#experience" },
  { name: "Pubs", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-background/40 backdrop-blur-xl border-b border-foreground/5 py-4"
          : "bg-transparent py-8"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              A<span className="text-primary">.</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <Magnetic key={link.name} strength={0.2}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </Magnetic>
              ))}
              <div className="w-[1px] h-4 bg-foreground/10" />
              <ThemeToggle />
              <Magnetic strength={0.2}>
                <a
                  href="/Abhishek-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-foreground text-background text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg"
                >
                  Resume
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-6">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-2xl h-screen absolute top-full left-0 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-[70vh] space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black tracking-tighter hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

