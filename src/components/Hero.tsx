"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
  FiTwitter,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Hero3DScene from "./Hero3DScene";

const socials = [
  { label: "GitHub", href: "https://github.com/PANKAJ2998", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pankaj-singh-6a7616323", icon: FiLinkedin },
  { label: "Twitter", href: "https://x.com", icon: FiTwitter },
  { label: "LeetCode", href: "https://leetcode.com/u/pankajsingh0108/", icon: SiLeetcode },
  { label: "Email", href: "mailto:itspankaj0108@gmail.com", icon: FiMail },
];

const techBadges = [
  "Next.js",
  "TypeScript",
  "React.js",
  "Python",
  "Node.js",
  "PostgreSQL",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* ── 3D Interactive Cyber/Neural Mesh & Floating Autonomous Particles ── */}
      <Hero3DScene />

      {/* ── Ambient Background Lighting ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Top-left cyan glow */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Center-right purple glow */}
        <div
          className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center justify-center">
          {/* ── LEFT: Headline & Bio ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold leading-[1.14] tracking-tight text-white mb-6 text-4xl sm:text-5xl lg:text-6xl"
            >
              Building digital
              <br />
              experiences that
              <br />
              solve <span className="gradient-text">real-world</span>
              <br />
              problems.
            </motion.h1>

            {/* Subtitle Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mb-8"
            >
              Hi, I&apos;m <span className="text-white font-bold">Pankaj Singh</span>, a full-stack developer
              and Data Science student based in Delhi. I specialize in building scalable web applications,
              intelligent systems, and data-driven solutions with modern technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-9 w-full"
            >
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-cyan gap-2 text-sm font-bold tracking-wide w-full sm:w-auto"
              >
                <span>Explore My Projects</span>
                <FiArrowRight size={16} />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Pankaj_Singh_Resume.pdf"
                className="btn-ghost gap-2 text-sm w-full sm:w-auto"
              >
                <FiDownload size={15} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Profiles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                Quick Profiles:
              </span>
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-[#0d1424] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal Mockup & Integrated Stats ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4 w-full max-w-lg mx-auto"
          >
            {/* Terminal Window */}
            <div className="terminal-window border border-slate-800/90 rounded-2xl bg-[#090d18] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <FiCode size={13} className="text-cyan-400" />
                  <span>pankaj@dev-machine:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Window Body with Code */}
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <div className="text-slate-400">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="text-slate-400">=</span> &#123;
                </div>
                <div className="pl-3 sm:pl-4 space-y-1 my-1 text-[11px] sm:text-xs">
                  <div>
                    <span className="text-slate-300">name:</span>{" "}
                    <span className="text-emerald-400">&quot;Pankaj Singh&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">role:</span>{" "}
                    <span className="text-emerald-400">&quot;Full-Stack &amp; AI Engineer&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">location:</span>{" "}
                    <span className="text-emerald-400">&quot;Delhi, India&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">education:</span> &#91;
                    <span className="text-amber-300">&quot;IIT Madras&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;B.Tech CSE&quot;</span>&#93;,
                  </div>
                  <div>
                    <span className="text-slate-300">stack:</span> &#91;
                    <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;TypeScript&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;Node.js&quot;</span>&#93;,
                  </div>
                  <div>
                    <span className="text-slate-300">status:</span>{" "}
                    <span className="text-cyan-400">&quot;Building next-gen systems&quot;</span>,
                  </div>
                  <div>
                    <span className="text-slate-300">focus:</span>{" "}
                    <span className="text-purple-300">&quot;Scalable Architecture &amp; ML&quot;</span>
                  </div>
                </div>
                <div className="text-slate-400">&#125;;</div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 font-bold">&gt;</span>
                  <span className="text-slate-300">pankaj.getAvailability()</span>
                  <span className="animate-blink text-cyan-400 ml-1">▋</span>
                </div>
              </div>

              {/* Integrated Stat Bar directly inside terminal footer */}
              <div className="grid grid-cols-3 border-t border-slate-800 bg-[#0c1220] py-3 px-2 sm:px-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-white">3+</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Years Exp
                  </div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-lg sm:text-xl font-extrabold text-cyan-400">25K+</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Lines Code
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-white">15+</div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Projects Done
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Badges below Terminal */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 px-1">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#0d1424] border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
