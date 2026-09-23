"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. Scene & Camera Setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── 2. Create Cyber / Neural 3D Mesh Group ──
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Position mesh slightly to the right on larger screens, centered on mobile
    const updateMeshPosition = () => {
      if (window.innerWidth >= 1024) {
        mainGroup.position.set(1.4, 0, 0);
      } else {
        mainGroup.position.set(0, -0.2, 0);
      }
    };
    updateMeshPosition();

    // Outer Cyber Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const outerMesh = new THREE.LineSegments(outerEdges, outerMat);
    mainGroup.add(outerMesh);

    // Outer Vertex Nodes (Glowing Dots on vertices)
    const vertexMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(outerGeo, vertexMat);
    mainGroup.add(vertexPoints);

    // Inner Cyber Core (Geometric Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.2, 1);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const innerMesh = new THREE.LineSegments(innerEdges, innerMat);
    mainGroup.add(innerMesh);

    // Orbiting Cyber Ring
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // Second inclined counter-orbit ring
    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh2);

    // ── 3. Autonomous Floating Background Dots & Particles ──
    const particleCount = 380;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number }[] = [];
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0xa855f7);
    const skyColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread across a broad 3D volume
      particlePositions[i3] = (Math.random() - 0.5) * 16;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Subtle autonomous drifting velocity
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.002,
      });

      // Palette distribution
      const rand = Math.random();
      const chosenColor = rand < 0.5 ? cyanColor : rand < 0.8 ? skyColor : purpleColor;
      particleColors[i3] = chosenColor.r;
      particleColors[i3 + 1] = chosenColor.g;
      particleColors[i3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── 4. Mouse Interactive Parallax Tracking ──
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.45;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── 5. Resize Handling ──
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateMeshPosition();
    };

    window.addEventListener("resize", handleResize);

    // ── 6. Animation Loop ──
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous rotation of the outer mesh
        outerMesh.rotation.y += 0.003;
        outerMesh.rotation.x += 0.0015;
        vertexPoints.rotation.y += 0.003;
        vertexPoints.rotation.x += 0.0015;

        // Counter-rotation of the inner core
        innerMesh.rotation.y -= 0.005;
        innerMesh.rotation.z += 0.003;

        // Rings rotation
        ringMesh.rotation.z += 0.004;
        ringMesh2.rotation.z -= 0.003;

        // Subtle breathing scale pulse
        const breath = 1 + Math.sin(elapsedTime * 1.5) * 0.035;
        mainGroup.scale.set(breath, breath, breath);

        // Interactive mouse parallax damping (lerp)
        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.04;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.04;

        // Scroll responsive dynamic rotation and depth shift
        mainGroup.rotation.z = scrollY * 0.0012;

        // Floating particles drift & rotation
        particles.rotation.y = elapsedTime * 0.015 + scrollY * 0.0005;
        particles.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

        // Update individual particle positions slightly
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          positions[i3] += particleVelocities[i].x;
          positions[i3 + 1] += particleVelocities[i].y;
          positions[i3 + 2] += particleVelocities[i].z;

          // Boundary wrap
          if (Math.abs(positions[i3]) > 8) particleVelocities[i].x *= -1;
          if (Math.abs(positions[i3 + 1]) > 6) particleVelocities[i].y *= -1;
          if (Math.abs(positions[i3 + 2]) > 5) particleVelocities[i].z *= -1;
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 7. Cleanup on Unmount ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      // Dispose geometries & materials
      outerGeo.dispose();
      outerEdges.dispose();
      outerMat.dispose();
      vertexMat.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
