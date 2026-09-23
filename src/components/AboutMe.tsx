"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function AboutMe() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth 3D tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  // Subtle 3D tilt: max 5-6 degrees for elegant interactive feel
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
    <section
      id="about"
      className="w-full py-16 sm:py-24 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        {/* 3D Perspective Wrapper */}
        <div style={{ perspective: 1200 }} className="w-full">
          {/* Card Container with Purple Border & Interactive 3D Tilt */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
            className="relative w-full rounded-2xl sm:rounded-3xl border border-purple-500/35 bg-[#0b0f19]/75 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-[0_0_35px_rgba(139,92,246,0.12)] hover:shadow-[0_0_55px_rgba(139,92,246,0.25)] hover:border-purple-500/55 transition-[border-color,box-shadow] duration-500"
          >
            {/* Top Centered Heading inside Card */}
            <div className="mb-8 sm:mb-12 text-center" style={{ transform: "translateZ(20px)" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                About Me
              </h2>
            </div>

            {/* Main Content Layout */}
            <div
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* ── LEFT: Circular Profile Image ── */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative group cursor-pointer">
                  {/* Outer ambient glow ring - only visible on hover */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-purple-500 opacity-0 blur-xl group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

                  {/* Circular frame */}
                  <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full p-[2px] bg-slate-700/50 group-hover:bg-gradient-to-tr group-hover:from-cyan-400 group-hover:via-sky-400 group-hover:to-purple-500 group-hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] transition-all duration-500">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0f1d] border border-white/10 group-hover:border-cyan-400/30 transition-colors duration-500">
                      <Image
                        src="/pankaj-profile.jpg"
                        alt="Pankaj Singh"
                        fill
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      {/* Subtle Cinematic Bottom Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Name in Big Letters, Subtitle & Description ── */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left pl-0 lg:pl-2">
                {/* My Name in Big Letters */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-3 flex flex-wrap items-baseline gap-2.5 sm:gap-3">
                  <span>Pankaj <span className="gradient-text">Singh</span></span>
                  <span className="text-base sm:text-xl font-medium text-cyan-400 tracking-normal">
                    (Founder @ CollegeMart)
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg font-mono font-medium text-slate-300 flex flex-wrap items-center gap-2 mb-6">
                  <span>Software Engineer</span>
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Full Stack Developer</span>
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Open Source Contributor</span>
                </p>

                {/* Narrative Description */}
                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    I&apos;m a full-stack developer and Computer Science student passionate about building scalable,
                    high-performance web applications and data-driven systems. Currently pursuing dual technical
                    education with a <span className="text-cyan-400 font-semibold">BS in Data Science from IIT Madras</span>{" "}
                    and <span className="text-white font-semibold">B.Tech in CSE</span>.
                  </p>
                  <p className="text-slate-400 text-sm sm:text-base">
                    Whether architecting production platforms like CollegeMart (serving 1,000+ students), fine-tuning
                    machine learning models, or automating deployment pipelines, I take full ownership from system design
                    to high-fidelity implementation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
