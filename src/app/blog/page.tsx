import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog — Pankaj Singh",
  description:
    "Writing about full-stack development, machine learning, and lessons from building CollegeMart.",
};

export default function BlogPage() {

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors hover:text-amber-500"
          style={{ color: "var(--fg-muted)" }}
        >
          <FiArrowLeft size={15} />
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2"
            style={{ letterSpacing: "0.18em" }}
          >
            Blog
          </p>
          <h1
            className="font-black mb-4 tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--fg)", lineHeight: 1.1 }}
          >
            Thoughts &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Learnings
            </span>
          </h1>
          <p className="text-base max-w-md" style={{ color: "var(--fg-muted)" }}>
            Writing about things I build, lessons I learn, and problems I solve — from{" "}
            <span className="text-amber-500 font-semibold">real production experience</span>.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div
          className="rounded-2xl border p-12 sm:p-16 text-center relative overflow-hidden flex flex-col items-center justify-center my-8"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          {/* Subtle top accent gradient */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #f59e0b, #fbbf24, transparent)" }}
          />
          {/* Background radial glow */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 50% 30%, #f59e0b12, transparent 75%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-lg">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border"
              style={{ backgroundColor: "#f59e0b15", borderColor: "#f59e0b33", color: "#f59e0b" }}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Under Construction
            </span>

            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coming Soon..
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
              Articles, case studies, and engineering deep dives are currently in the works. Stay tuned!
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: "#f59e0b",
                color: "#080c14",
                boxShadow: "0 4px 20px rgba(245, 158, 11, 0.25)",
              }}
            >
              <FiArrowLeft size={16} />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
