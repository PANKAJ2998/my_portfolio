"use client";

import { motion } from "framer-motion";
import { FiGithub, FiGitCommit, FiGitPullRequest, FiStar, FiArrowRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const stats = [
  { label: "Repositories", value: "30+", icon: FiGithub, color: "#00f0ff" },
  { label: "Total Commits", value: "1,240+", icon: FiGitCommit, color: "#38bdf8" },
  { label: "Pull Requests", value: "85+", icon: FiGitPullRequest, color: "#8b5cf6" },
  { label: "Stars & Forks", value: "120+", icon: FiStar, color: "#facc15" },
];

const monthLabels = [
  { name: "Sep", col: 0 },
  { name: "Oct", col: 4 },
  { name: "Nov", col: 9 },
  { name: "Dec", col: 13 },
  { name: "Jan", col: 18 },
  { name: "Feb", col: 22 },
  { name: "Mar", col: 26 },
  { name: "Apr", col: 31 },
  { name: "May", col: 35 },
  { name: "Jun", col: 40 },
  { name: "Jul", col: 43 },
  { name: "Aug", col: 48 },
];

// 52 weeks x 7 days matching the exact GitHub contribution pattern from reference image
const contributionWeeks: number[][] = [
  // Sep (weeks 0-3)
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 0, 0, 0, 0],
  // Oct (weeks 4-7)
  [0, 2, 0, 0, 3, 0, 0],
  [0, 2, 3, 0, 0, 0, 2],
  [0, 0, 2, 0, 0, 2, 0],
  [0, 0, 0, 2, 0, 0, 0],
  // Nov (weeks 8-12)
  [0, 0, 1, 0, 2, 0, 0],
  [0, 1, 0, 2, 0, 0, 1],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 4],
  [0, 0, 0, 1, 0, 0, 0],
  // Dec (weeks 13-17)
  [0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 2, 0, 0, 1],
  // Jan (weeks 18-21)
  [0, 0, 4, 0, 0, 0, 0],
  [0, 0, 3, 0, 2, 0, 2],
  [0, 0, 1, 3, 0, 4, 1],
  [0, 0, 4, 3, 4, 0, 0],
  // Feb (weeks 22-25)
  [0, 0, 0, 0, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  // Mar (weeks 26-29)
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  // Apr (weeks 30-34)
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  // May (weeks 35-38)
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  // Jun (weeks 39-42)
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  // Jul (weeks 43-47) - dense green activity columns
  [0, 4, 3, 0, 0, 4, 4],
  [0, 4, 0, 0, 3, 3, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  // Aug (weeks 48-51)
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const languages = [
  { name: "TypeScript", pct: 54, color: "#3178c6" },
  { name: "Python", pct: 22, color: "#3572a5" },
  { name: "JavaScript", pct: 14, color: "#f7df1e" },
  { name: "HTML / CSS", pct: 10, color: "#e34c26" },
];

export default function Contributions() {
  return (
    <section id="contributions" className="w-full py-20 sm:py-24 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="section-title text-white">
            Code, Contributions &amp; Open Source
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Consistent dedication to craft, open source, and continuous learning through daily shipping.
          </p>
        </motion.div>

        {/* 4 Stats Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                className="p-5 sm:p-6 rounded-2xl bg-[#0d1424] border border-slate-800 text-center flex flex-col items-center justify-center hover:border-slate-700 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: `${stat.color}15`,
                    color: stat.color,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authentic GitHub Contribution Graph Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={2}
          variants={fadeUp}
          className="p-5 sm:p-7 rounded-2xl bg-[#0d1424] border border-slate-800 mb-8 overflow-hidden shadow-lg"
        >
          {/* Scrollable container on mobile */}
          <div className="overflow-x-auto pb-2 -mx-1 px-1">
            <div className="min-w-[660px]">
              {/* Month Labels along the top */}
              <div
                className="grid gap-[3px] mb-2 text-[11px] font-mono text-slate-400 select-none"
                style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
              >
                {Array.from({ length: 52 }).map((_, i) => {
                  const month = monthLabels.find((m) => m.col === i);
                  return (
                    <div key={i} className="text-left">
                      {month ? month.name : ""}
                    </div>
                  );
                })}
              </div>

              {/* 52 Weeks x 7 Days Heatmap Grid */}
              <div
                className="grid gap-[3px]"
                style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
              >
                {contributionWeeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((level, di) => {
                      const bgClass =
                        level === 0
                          ? "bg-[#161f30]"
                          : level === 1
                          ? "bg-[#0e4429]"
                          : level === 2
                          ? "bg-[#006d32]"
                          : level === 3
                          ? "bg-[#26a641]"
                          : "bg-[#39d353]";

                      return (
                        <div
                          key={di}
                          className={`aspect-square w-full rounded-[2px] transition-transform duration-150 hover:scale-125 cursor-pointer ${bgClass}`}
                          title={`Contributions: ${level === 0 ? "No" : level * 2} commits`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Heatmap Footer: Contribution summary and Less/More Legend */}
              <div className="flex items-center justify-between mt-4 text-xs font-mono text-slate-400 select-none">
                <span className="text-slate-300">
                  286 contributions in the last year
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Less</span>
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161f30] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353] inline-block" />
                  <span className="text-slate-400">More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Language Breakdown Bar */}
          <div className="pt-6 mt-5 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
              <span>Language Distribution</span>
              <span>100% Verified</span>
            </div>

            {/* Segmented Bar */}
            <div className="h-2.5 w-full rounded-full overflow-hidden flex mb-3">
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                  title={`${l.name}: ${l.pct}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: l.color }}
                  />
                  <span className="text-slate-300">{l.name}</span>
                  <span className="text-slate-400">({l.pct}%)</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile CTA Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUp}
          className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1424] to-[#121c33] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div>
            <h4 className="text-white font-bold text-base mb-1">
              Explore 30+ Public Repositories on GitHub
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Including CollegeMate, machine learning pipelines, and full-stack utilities.
            </p>
          </div>

          <a
            href="https://github.com/PANKAJ2998"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan py-2.5 px-5 text-xs font-bold gap-2 shrink-0 w-full sm:w-auto"
          >
            <span>Visit GitHub Profile</span>
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
