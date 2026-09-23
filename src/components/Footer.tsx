"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiShare2, FiKey, FiClock, FiCheck } from "react-icons/fi";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("07:30 AM IST");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString("07:30 AM IST");
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setIsSubscribing(false);
        setSubscribed(false);
        setEmail("");
      }, 3500);
    }
  };

  return (
    <footer className="w-full pt-16 pb-12 border-t border-slate-800/80 bg-[#060a12] text-slate-300">
      <div className="section-container">
        {/* Top 4-Column Navigation & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Pankaj Singh
            </h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Let&apos;s create something amazing together
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 text-lg text-slate-400 mb-5">
              <a
                href="mailto:itspankaj0108@gmail.com"
                aria-label="Email"
                className="hover:text-white transition-colors p-1"
              >
                <FiMail size={18} />
              </a>
              <a
                href="https://github.com/PANKAJ2998"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors p-1"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-singh-6a7616323"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors p-1"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share / Twitter"
                className="hover:text-white transition-colors p-1"
              >
                <FiShare2 size={18} />
              </a>
              <a
                href="https://github.com/PANKAJ2998.gpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PGP Key"
                className="hover:text-white transition-colors p-1"
                title="GPG / Public Key"
              >
                <FiKey size={18} />
              </a>
            </div>

            {/* Live IST Time Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 select-none">
              <FiClock size={14} className="text-slate-400 shrink-0" />
              <span>{timeString}</span>
            </div>
          </div>

          {/* Column 2: Main Stuff */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold text-white mb-3.5 tracking-wide">
              Main Stuff
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-white transition-colors">
                  Milestones
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: My Accounts */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold text-white mb-3.5 tracking-wide">
              My Accounts
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-normal">
              <li>
                <a
                  href="https://github.com/PANKAJ2998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/pankajsingh0108/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Leetcode
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pankaj-singh-6a7616323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe to my newsletter */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold text-white mb-2 tracking-wide">
              Subscribe to my newsletter
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
              Whenever I post something, no spam!
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-2 rounded-full">
                <FiCheck size={14} />
                <span>Subscribed! No spam promised.</span>
              </div>
            ) : isSubscribing ? (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full max-w-xs">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-1.5 text-xs bg-[#0b101b] border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  autoFocus
                />
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors border border-slate-700"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSubscribing(false)}
                    className="px-2 py-1 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setIsSubscribing(true)}
                className="px-5 py-2 rounded-full border border-slate-700/90 hover:border-slate-500 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-transparent hover:bg-slate-800/40 transition-all duration-200"
              >
                Subscribe Now
              </button>
            )}
          </div>

        </div>

        {/* Bottom Centered Copyright */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col items-center justify-center text-center text-xs text-slate-400 font-mono space-y-1.5">
          <p>
            Copyright © 2026 Pankaj Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with Next.js</span>
            <span role="img" aria-label="rocket">🚀</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
