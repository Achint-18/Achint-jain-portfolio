"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  pulsePhase: number;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Node count tailored to container size
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 45);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.5 + 0.25,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse attraction / tether lines
        const mdx = mouseX - nodes[i].x;
        const mdy = mouseY - nodes[i].y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 160) {
          const mAlpha = (1 - mDist / 160) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(45, 212, 191, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          node.pulsePhase += 0.02;
        }

        const currentRadius =
          node.radius + (Math.sin(node.pulsePhase) * 0.4);

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(currentRadius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha})`;
        ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60 transition-opacity duration-1000"
      />
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-sky-500/10 via-teal-500/5 to-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[400px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  );
}
