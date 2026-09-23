"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiFirebase,
  SiPython,
  SiCplusplus,
  SiRedis,
  SiGraphql,
  SiFastapi,
  SiPrisma,
  SiLinux,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaAws, FaCss3Alt } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

type Category = "All" | "Languages" | "Frontend" | "Backend" | "Databases" | "Tools";

const CATEGORIES: Category[] = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

interface TechSkill {
  name: string;
  categories: Category[];
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
}

const TECH_STACK: TechSkill[] = [
  // Row 1 in Image 1
  {
    name: "JavaScript",
    categories: ["Languages", "Frontend"],
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    categories: ["Languages", "Frontend"],
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Java",
    categories: ["Languages"],
    icon: FaJava,
    color: "#E76F00",
  },
  {
    name: "HTML5",
    categories: ["Languages", "Frontend"],
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    categories: ["Languages", "Frontend"],
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  // Row 2 in Image 1
  {
    name: "React.js",
    categories: ["Frontend"],
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    categories: ["Frontend", "Backend"],
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    categories: ["Frontend"],
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    categories: ["Backend"],
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Express.js",
    categories: ["Backend"],
    icon: SiExpress,
    color: "#E2E8F0",
  },

  // Row 3 in Image 1
  {
    name: "MongoDB",
    categories: ["Databases"],
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    categories: ["Databases"],
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MySQL",
    categories: ["Databases"],
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Git",
    categories: ["Tools"],
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Docker",
    categories: ["Tools"],
    icon: SiDocker,
    color: "#2496ED",
  },

  // Row 4 in Image 1 & expanded stack
  {
    name: "AWS",
    categories: ["Tools"],
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Firebase",
    categories: ["Tools", "Databases"],
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "Python",
    categories: ["Languages", "Backend"],
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "C++",
    categories: ["Languages"],
    icon: SiCplusplus,
    color: "#00599C",
  },
  {
    name: "Redis",
    categories: ["Databases"],
    icon: SiRedis,
    color: "#DC382D",
  },
  {
    name: "FastAPI",
    categories: ["Backend"],
    icon: SiFastapi,
    color: "#009688",
  },
  {
    name: "GraphQL",
    categories: ["Backend"],
    icon: SiGraphql,
    color: "#E10098",
  },
  {
    name: "Prisma",
    categories: ["Databases"],
    icon: SiPrisma,
    color: "#5A67D8",
  },
  {
    name: "Linux",
    categories: ["Tools"],
    icon: SiLinux,
    color: "#FCC624",
  },
  {
    name: "VS Code",
    categories: ["Tools"],
    icon: TbBrandVscode,
    color: "#007ACC",
  },
  {
    name: "Postman",
    categories: ["Tools"],
    icon: SiPostman,
    color: "#FF6C37",
  },
  {
    name: "Figma",
    categories: ["Tools"],
    icon: SiFigma,
    color: "#F24E1E",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.categories.includes(activeCategory));

  return (
    <section
      id="skills"
      className="w-full py-20 sm:py-28 relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="section-container relative z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A curated list of technologies, frameworks, and developer tools I use daily to build
            high-performance systems.
          </p>
        </motion.div>

        {/* Filter Capsule Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#8b5cf6] text-white shadow-[0_0_22px_rgba(139,92,246,0.65)]"
                    : "bg-[#0c101d] text-slate-400 hover:text-white hover:bg-[#151c30] border border-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-2xl bg-[#090d18]/80 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/80 p-5 sm:p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.28)] transition-all duration-300 min-h-[145px] sm:min-h-[160px]"
                >
                  {/* Subtle inner card glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Brand Icon */}
                  <div className="relative z-10 mb-3.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      size={42}
                      style={{ color: tech.color }}
                      className="drop-shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                    />
                  </div>

                  {/* Tech Name */}
                  <span className="relative z-10 text-xs sm:text-sm font-semibold text-slate-200 tracking-wide group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
