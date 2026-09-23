"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiZap,
  FiLayers,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCode,
  FiShare2,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const topics = [
  {
    title: "Advanced Next.js & RSC",
    desc: "React Server Components, streaming SSR, and edge route runtimes.",
    icon: FiZap,
    accent: "#00f0ff",
  },
  {
    title: "Generative AI & LLMs",
    desc: "Fine-tuning transformer models, embeddings, and autonomous agent loops.",
    icon: FiCpu,
    accent: "#8b5cf6",
  },
  {
    title: "System Design & Scale",
    desc: "High-throughput messaging, caching strategies, and partition tolerance.",
    icon: FiServer,
    accent: "#06b6d4",
  },
  {
    title: "Microservices Architecture",
    desc: "Decoupled domain services, gRPC communication, and API gateways.",
    icon: FiLayers,
    accent: "#a855f7",
  },
  {
    title: "Distributed Databases",
    desc: "Consistent hashing, vector stores, and transaction isolation levels.",
    icon: FiDatabase,
    accent: "#00f0ff",
  },
  {
    title: "Cloud Native & Docker",
    desc: "Containerization patterns, multi-stage builds, and serverless clusters.",
    icon: FiCloud,
    accent: "#38bdf8",
  },
  {
    title: "Rust for Systems",
    desc: "Memory safety without garbage collection and high-concurrency tooling.",
    icon: FiCode,
    accent: "#f97316",
  },
  {
    title: "RAG & Vector Search",
    desc: "Hybrid semantic search, chunking algorithms, and vector indexing.",
    icon: FiShare2,
    accent: "#10b981",
  },
];

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="w-full py-20 sm:py-24 relative flex flex-col items-center justify-center">
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
          <h2 className="section-title text-white">Currently Exploring</h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Technologies, research papers, and architectural concepts currently sharpening my focus.
          </p>
        </motion.div>

        {/* 4x2 Grid of Tech Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                variants={fadeUp}
                className="group p-5 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                    style={{
                      backgroundColor: `${t.accent}12`,
                      color: t.accent,
                      border: `1px solid ${t.accent}30`,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-sm text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
