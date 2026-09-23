"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  FiShoppingBag,
  FiAward,
  FiCode,
  FiGitPullRequest,
  FiBookOpen,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

interface TimelineItem {
  number: string;
  org: string;
  title: string;
  role: string;
  period: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  tags: string[];
}

const timelineEntries: TimelineItem[] = [
  {
    number: "01",
    org: "Edunet Foundation (Microsoft AI NSI)",
    title: "AI / Machine Learning",
    role: "AI/ML Intern (Remote)",
    period: "APR 2025 — MAY 2025",
    icon: FiCode,
    description:
      "Engineered a Smart NLP Chatbot using Python, applying text preprocessing, tokenization, and model tuning techniques to improve response accuracy by 25% over baseline. Managed end-to-end ML pipeline from raw dataset prep to cloud deployment.",
    tags: ["Python", "NLP", "Machine Learning", "Tokenization", "Model Deployment"],
  },
  {
    number: "02",
    org: "CollegeMart.in",
    title: "Full-Stack Web Platform",
    role: "Founder & Lead Developer",
    period: "JUL 2024 — PRESENT",
    icon: FiShoppingBag,
    description:
      "Co-founded a student-focused marketplace designed to make buying and selling within college communities easier. Architected full-stack systems serving 1,000+ students, optimizing MongoDB indexing for 30% faster API queries and implementing secure JWT domain auth.",
    tags: ["React / Next.js", "Node.js", "Express", "MongoDB", "System Design"],
  },
  {
    number: "03",
    org: "IIIT Delhi & TechFest",
    title: "Hackathons & Coding Competitions",
    role: "Team Lead & Core Builder",
    period: "2025 — 2026",
    icon: FiAward,
    description:
      "Won 1st Place at Jnanagni National TechFest Hackathon 2025. Ranked 7th out of 100+ national teams at Industry Solve Hackathon 2026, IIIT Delhi, presenting RakshakEdge on-device threat detection.",
    tags: ["Hackathons", "Edge AI", "IoT / Hardware", "Rapid Prototyping"],
  },
  {
    number: "03",
    org: "Software Practice",
    title: "Technical Collaboration & Systems",
    role: "Software Engineering Practice",
    period: "2023",
    icon: FiCode,
    description:
      "Developed modular full-stack codebases, participated in peer code reviews, established continuous integration workflows, and built reusable component architectures.",
    tags: ["TypeScript", "REST APIs", "CI/CD", "Git Workflows"],
  },
  {
    number: "04",
    org: "GitHub Community",
    title: "Open Source Tooling",
    role: "Open Source Contributor",
    period: "2022 — 2023",
    icon: FiGitPullRequest,
    description:
      "Contributed bug fixes, performance patches, and developer documentation across open-source utility tools and community repositories on GitHub.",
    tags: ["Open Source", "Bug Fixes", "Documentation", "Community"],
  },
  {
    number: "05",
    org: "IIT Madras",
    title: "Academic Research & ML Exploration",
    role: "Data Science Scholar",
    period: "2022",
    icon: FiBookOpen,
    description:
      "Undertook in-depth studies in mathematical algorithms, computational data science, statistical inference, and machine learning foundations under IIT Madras faculty.",
    tags: ["Python", "Machine Learning", "Statistics", "Linear Algebra"],
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll progress through the experience timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 75%"],
  });

  // Smooth the scroll line fill
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="w-full py-20 sm:py-28 relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="section-container relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-14 sm:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            My career trajectory, professional builds, and technical milestones.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative max-w-6xl lg:max-w-7xl mx-auto w-full">
          {/* ── DESKTOP CENTER SPINE ── */}
          {/* Background Track */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-12 w-[2px] bg-slate-800/80 rounded-full pointer-events-none" />

          {/* Glowing Neon Laser Spine (Fills from top to bottom on scroll) */}
          <motion.div
            style={{
              scaleY,
              originY: 0,
              background:
                "linear-gradient(180deg, #a855f7 0%, #00f0ff 70%, #ffffff 100%)",
              boxShadow:
                "0 0 16px rgba(0, 240, 255, 0.9), 0 0 28px rgba(168, 85, 247, 0.75)",
            }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-12 w-[3px] rounded-full pointer-events-none z-10"
          />

          {/* ── MOBILE LEFT SPINE ── */}
          {/* Background Track */}
          <div className="md:hidden absolute left-5 top-4 bottom-10 w-[2px] bg-slate-800/80 rounded-full pointer-events-none" />

          {/* Glowing Neon Laser Spine (Mobile) */}
          <motion.div
            style={{
              scaleY,
              originY: 0,
              background:
                "linear-gradient(180deg, #a855f7 0%, #00f0ff 70%, #ffffff 100%)",
              boxShadow:
                "0 0 14px rgba(0, 240, 255, 0.9), 0 0 24px rgba(168, 85, 247, 0.7)",
            }}
            className="md:hidden absolute left-5 top-4 bottom-10 w-[3px] rounded-full pointer-events-none z-10"
          />

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24">
            {timelineEntries.map((entry, index) => {
              const Icon = entry.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={entry.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index}
                  variants={fadeUp}
                  className="relative flex flex-col md:flex-row items-center justify-between"
                >
                  {/* ── DESKTOP ALTERNATING SIDES ── */}

                  {/* LEFT COLUMN (Card if Even, Number + Date if Odd) */}
                  <div className="w-full md:w-[46%] hidden md:flex flex-col">
                    {isEven ? (
                      <TimelineCard entry={entry} Icon={Icon} />
                    ) : (
                      <div className="flex flex-col items-end text-right pr-8 space-y-3">
                        <span
                          className="font-mono text-6xl lg:text-8xl font-black select-none tracking-tighter text-transparent leading-none drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                          style={{
                            WebkitTextStroke: "2.5px rgba(168, 85, 247, 0.75)",
                          }}
                        >
                          {entry.number}
                        </span>
                        <div className="font-mono font-bold tracking-widest text-xs lg:text-sm text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] uppercase">
                          {entry.period}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER SPINE NODE & MARKER (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <div className="relative flex items-center justify-center">
                      {/* Pulse Ring */}
                      <div className="absolute w-8 h-8 rounded-full bg-purple-500/25 animate-ping" />
                      {/* Central Glowing Node Ring */}
                      <div className="w-6 h-6 rounded-full border-2 border-purple-400 bg-[#080c14] shadow-[0_0_18px_rgba(168,85,247,0.9)] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,1)]" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Number + Date if Even, Card if Odd) */}
                  <div className="w-full md:w-[46%] hidden md:flex flex-col">
                    {isEven ? (
                      <div className="flex flex-col items-start text-left pl-8 space-y-3">
                        <span
                          className="font-mono text-6xl lg:text-8xl font-black select-none tracking-tighter text-transparent leading-none drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                          style={{
                            WebkitTextStroke: "2.5px rgba(168, 85, 247, 0.75)",
                          }}
                        >
                          {entry.number}
                        </span>
                        <div className="font-mono font-bold tracking-widest text-xs lg:text-sm text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] uppercase">
                          {entry.period}
                        </div>
                      </div>
                    ) : (
                      <TimelineCard entry={entry} Icon={Icon} />
                    )}
                  </div>

                  {/* ── MOBILE LAYOUT (< 768px) ── */}
                  <div className="flex md:hidden w-full pl-12 relative flex-col">
                    {/* Node on mobile spine */}
                    <div className="absolute left-[13px] top-4 z-20">
                      <div className="w-5 h-5 rounded-full border-2 border-purple-400 bg-[#080c14] shadow-[0_0_14px_rgba(168,85,247,0.9)] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </div>
                    </div>

                    {/* Number & Date Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="font-mono text-4xl sm:text-5xl font-black select-none text-transparent leading-none"
                        style={{
                          WebkitTextStroke: "2px rgba(168, 85, 247, 0.75)",
                        }}
                      >
                        {entry.number}
                      </span>
                      <span className="font-mono font-bold text-[11px] tracking-wider text-purple-400 uppercase">
                        {entry.period}
                      </span>
                    </div>

                    <TimelineCard entry={entry} Icon={Icon} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  entry,
  Icon,
}: {
  entry: TimelineItem;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  // Subtle 3D tilt: max 5 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-3xl bg-[#0a0f1d]/90 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-[border-color,box-shadow] duration-300 p-6 sm:p-8 cursor-pointer"
      >
        {/* Content with 3D Depth */}
        <div style={{ transform: "translateZ(18px)" }}>
          {/* Top Pill & Icon */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#1a1233] border border-purple-500/40 text-purple-300 shadow-[0_0_14px_rgba(168,85,247,0.25)]">
              {entry.org}
            </span>
            <div className="w-11 h-11 rounded-2xl bg-[#0e1526] border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_16px_rgba(0,240,255,0.25)] group-hover:scale-110 transition-transform">
              <Icon size={20} />
            </div>
          </div>

          {/* Role & Subtitle */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-300 transition-colors">
            {entry.role}
          </h3>
          <div className="text-xs font-mono text-cyan-400/90 mb-3.5">
            {entry.title}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            {entry.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#111728] border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
