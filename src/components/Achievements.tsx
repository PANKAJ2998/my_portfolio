"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    title: "7th / 100+ Teams",
    subtitle: "Industry Solve Hackathon 2026",
    org: "IIIT Delhi",
    color: "#fbbf24",
  },
  {
    icon: "🥇",
    title: "1st Place",
    subtitle: "Jnanagni TechFest Hackathon 2025",
    org: "National Level",
    color: "#f59e0b",
  },
  {
    icon: "💻",
    title: "Active Member",
    subtitle: "IITM Coding Club",
    org: "IIT Madras",
    color: "#fcd34d",
  },
  {
    icon: "🎖️",
    title: "Microsoft AI NSI",
    subtitle: "Edunet Foundation × Microsoft",
    org: "AI Internship Certificate",
    color: "#06b6d4",
  },
];

// Duplicate for seamless loop
const items = [...achievements, ...achievements, ...achievements];

export default function Achievements() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="achievements" className="py-16 overflow-hidden relative">
      {/* Fade edges */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 px-6"
      >
        <p className="section-label text-center">Achievements</p>
        <h2 className="section-title text-center">
          Recognition & <span className="gradient-text">Wins</span>
        </h2>
      </motion.div>

      {/* Ticker */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5"
          style={{
            animation: "ticker 30s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl border shrink-0 transition-all duration-300 hover:scale-[1.02] cursor-default"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: `${a.color}22`,
                minWidth: "280px",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border"
                style={{
                  backgroundColor: `${a.color}12`,
                  borderColor: `${a.color}33`,
                }}
              >
                {a.icon}
              </div>
              <div>
                <p className="font-extrabold text-sm" style={{ color: a.color }}>
                  {a.title}
                </p>
                <p className="font-semibold text-xs" style={{ color: "var(--fg)" }}>
                  {a.subtitle}
                </p>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  {a.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
