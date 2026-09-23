"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu } from "react-icons/fi";

export default function InitializingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  useEffect(() => {
    // Lock body scrolling during initialization
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = Date.now();
    const duration = 2000; // 2 seconds total

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            setHasExited(true);
            document.body.style.overflow = "";
          }, 600); // Allow fade out exit animation
        }, 300);
      }
    }, 25);

    // Allow user to skip with Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        setIsComplete(true);
        setHasExited(true);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  if (hasExited) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080c14] text-white select-none overflow-hidden"
          style={{ width: "100vw", height: "100vh" }}
        >
          {/* Ambient Glowing Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
                filter: "blur(90px)",
              }}
            />
            {/* Cyber Grid */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            {/* Subtle Scanlines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.5) 50%)",
                backgroundSize: "100% 4px",
              }}
            />
          </div>

          {/* Futuristic Corner HUD Brackets */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40 pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40 pointer-events-none" />

          {/* Main Center Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
            {/* Circular Profile Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-5 sm:mb-6"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-500 shadow-[0_0_35px_rgba(0,240,255,0.35)]">
                <div className="relative w-full h-full rounded-full overflow-hidden border border-cyan-400/40 bg-[#0d1424]">
                  <Image
                    src="/pankaj-profile.jpg"
                    alt="Pankaj Singh"
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Name with Futuristic Glow & Subtitle Centered Between Sections */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col items-center mb-6 sm:mb-7"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.35)] mb-3">
                Pankaj <span className="gradient-text">Singh</span>
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-400 uppercase">
                Full-Stack Developer &amp; AI Enthusiast
              </p>
            </motion.div>

            {/* Initializing Terminal Bar Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full max-w-sm bg-[#0a0f1d]/90 border border-slate-800/90 rounded-xl p-4 backdrop-blur-md shadow-2xl"
            >
              {/* Terminal Progress Header */}
              <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                <span className="text-cyan-400 flex items-center gap-1.5 font-semibold">
                  <FiCpu className="w-3.5 h-3.5 animate-spin text-cyan-400" style={{ animationDuration: "3s" }} />
                  {progress < 100 ? "INITIALIZING..." : "SYSTEM READY"}
                </span>
                <span className="text-slate-300 font-bold tabular-nums">
                  {progress}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-[1px] border border-slate-700/50">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.7)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Info */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center px-6 text-[11px] font-mono text-slate-600 tracking-widest pointer-events-none">
            <span>LOCATION: NEW DELHI, INDIA // 28.6139° N, 77.2090° E</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
