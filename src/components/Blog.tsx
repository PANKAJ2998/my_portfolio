"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {

  return (
    <section id="blog" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="section-label">Blog</p>
            <h2 className="section-title">
              Thoughts &{" "}
              <span className="gradient-text">Learnings</span>
            </h2>
            <p className="mt-3 text-base max-w-md" style={{ color: "var(--fg-muted)" }}>
              Writing about things I build, lessons I learn, and problems I solve.
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-ghost gap-2 text-sm shrink-0 self-start sm:self-auto"
          >
            All posts <FiArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Coming Soon card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border p-12 text-center relative overflow-hidden flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24, transparent)" }}
          />
          <h3
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Coming Soon..
          </h3>
          <p className="text-sm sm:text-base max-w-md" style={{ color: "var(--fg-muted)" }}>
            Articles, case studies, and engineering deep dives are currently in the works.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
