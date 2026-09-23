"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  z: number; // 3D depth factor (0.4 to 1.6)
  size: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
}

export default function GlobalParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const isMobile = width < 768;
    const particleCount = isMobile ? 45 : 85;
    const connectionDistance = isMobile ? 95 : 130;

    const colors = [
      "rgba(0, 240, 255, ",   // Cyan
      "rgba(56, 189, 248, ",  // Sky Blue
      "rgba(168, 85, 247, ",  // Purple
      "rgba(124, 58, 237, ",  // Violet
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const z = Math.random() * 1.2 + 0.4; // 3D depth
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const alpha = Math.random() * 0.45 + 0.25;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        z,
        size: Math.random() * 1.8 * z + 0.9,
        vx: (Math.random() - 0.5) * 0.45 * z,
        vy: (Math.random() - 0.5) * 0.45 * z,
        color: colorBase,
        alpha,
      });
    }

    // Scroll parallax tracking
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let scrollVelocity = 0;
    let targetScrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      // Responsive scroll impulse
      targetScrollVelocity = delta * 1.2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Mouse interaction tracking
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Resize handling
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth scroll velocity damping with responsive inertia
      scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.15;
      targetScrollVelocity *= 0.92; // smooth decay

      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Natural organic floating drift
        p.x += p.vx;
        p.y += p.vy;

        // Pronounced 3D scroll parallax movement (dots move when scrolling!)
        p.y -= scrollVelocity * p.z * 1.4;
        p.x += Math.sin(p.y * 0.005) * scrollVelocity * 0.15 * p.z;

        // Mouse gentle repulsion
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        // Screen boundary wrap with margin
        if (p.x < -30) p.x = width + 30;
        else if (p.x > width + 30) p.x = -30;

        if (p.y < -30) p.y = height + 30;
        else if (p.y > height + 30) p.y = -30;

        // Draw particle dot with glowing cyber style
        const isSquare = i % 4 === 0; // mix of cyber square pixels and circular dots like Image 1
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = p.color.includes("0, 240, 255") ? "#00f0ff" : "#a855f7";
        ctx.shadowBlur = p.size * 3.5;

        if (isSquare) {
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size * 1.2, p.size * 1.2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Reset shadow for performance
        ctx.shadowBlur = 0;

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDistance) {
            const lineAlpha = (1 - cdist / connectionDistance) * 0.16 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
}
