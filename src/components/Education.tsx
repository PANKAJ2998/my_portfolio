"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const credentials = [
  {
    program: "Computer Science & Engineering",
    degree: "B.Tech in CSE",
    institution: "Gurukula Kangri Vishwavidyalaya",
    period: "2024 — 2028",
    badge: "FULL-TIME DEGREE",
    badgeColor: "#00f0ff",
    score: "CGPA: 8.51 / 10.0",
    description:
      "Rigorous foundations in core computing: Object-Oriented Programming, Data Structures, Algorithms, Computer Systems Architecture, Database Management Systems, and Computer Networks.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS (SQL & NoSQL)",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    program: "Data Science and Applications",
    degree: "BS in Data Science",
    institution: "Indian Institute of Technology Madras",
    period: "2024 — 2028",
    badge: "PREMIER INSTITUTE",
    badgeColor: "#8b5cf6",
    score: "IIT Madras Degree Programme",
    description:
      "Comprehensive training in computational data science: mathematical statistics, linear algebra, applied machine learning, deep learning neural networks, and scalable data processing.",
    coursework: [
      "Machine Learning Techniques",
      "Python for Data Science",
      "Statistical Inference",
      "Deep Learning",
      "Data Engineering",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20 sm:py-24 relative flex flex-col items-center justify-center">
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
          <h2 className="section-title text-white">
            Education &amp; Institutional Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Formal technical education across core computer science and advanced data sciences.
          </p>
        </motion.div>

        {/* 2 Large Side-by-Side Credential Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.program}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
              className="p-6 sm:p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${cred.badgeColor}0f`,
                      borderColor: `${cred.badgeColor}30`,
                      color: cred.badgeColor,
                    }}
                  >
                    {cred.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cred.period}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {cred.program}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 mb-2">
                  {cred.institution}
                </div>
                <div className="text-xs font-mono text-slate-300 mb-4 inline-block px-2.5 py-1 rounded bg-[#131d33] border border-slate-800">
                  {cred.score}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cred.description}
                </p>
              </div>

              {/* Core Coursework */}
              <div className="pt-5 border-t border-slate-800/80">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Coursework &amp; Competencies
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cred.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-[#131d33] border border-slate-800 text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
