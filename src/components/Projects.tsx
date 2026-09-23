"use client";

import { motion } from "framer-motion";
import { FiGitBranch, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  const gridClass =
    projects.length === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
      : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch";

  return (
    <section id="projects" className="w-full py-20 sm:py-24 relative flex flex-col items-center justify-center">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="section-title text-white">Featured Projects</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A selection of projects demonstrating engineering quality, UI craftsmanship, and technical depth.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className={gridClass}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
              className="relative group h-full flex flex-col"
            >
              {/* Elevated Card */}
              <div className="relative h-full rounded-2xl bg-[#0f172a]/95 border border-slate-800/90 group-hover:border-slate-700 hover:border-cyan-500/40 transition-all duration-300 ease-out transform group-hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
                
                {/* Card Thumbnail / Preview Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#090d16] select-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Status Pill Badge (Top Right) */}
                  {project.status && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/65 backdrop-blur-md text-slate-100 border border-white/15 shadow-sm">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded bg-[#090e1a] border border-slate-700/60 text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer: Code and Live Demo Actions */}
                    <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 text-sm text-slate-400">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group/link"
                        >
                          <FiGitBranch className="text-base text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group/link"
                        >
                          <FiExternalLink className="text-base text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
