"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX, FiArrowUpRight, FiTerminal, FiGithub, FiFileText } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contributions", href: "#contributions" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.endsWith(".pdf")) {
      window.open(href, "_blank");
      return;
    }
    if (href.startsWith("/")) return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080c14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 font-bold tracking-tight text-base shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.45)] transition-all shrink-0 bg-slate-800">
              <Image
                src="/pankaj-profile.jpg"
                alt="Pankaj Singh"
                fill
                sizes="40px"
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="text-white font-extrabold tracking-tight text-base sm:text-lg group-hover:text-cyan-400 transition-colors">
              Pankaj Singh
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5 bg-[#0d1424]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/PANKAJ2998"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-slate-800 transition-all hidden sm:flex items-center"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>

            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-slate-800 transition-all"
            >
              {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 bg-slate-800/40 hover:bg-slate-800/80 transition-all"
            >
              <FiFileText size={13} className="text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Let&apos;s Talk</span>
              <FiArrowUpRight size={14} />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-4 right-4 z-50 rounded-2xl p-4 bg-[#0d1424]/95 border border-slate-800 backdrop-blur-2xl shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                >
                  <span>Let&apos;s Talk</span>
                  <FiArrowUpRight size={15} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
