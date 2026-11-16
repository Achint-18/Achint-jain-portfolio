"use client";

import { siteConfig } from "@/data/siteConfig";
import HeroVisual from "@/components/HeroVisual";
import {
  ArrowDown,
  ArrowRight,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* Background Interactive AI Node Constellation & Ambient Glow */}
      <HeroVisual />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-md mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-300">
            COMPUTER SCIENCE STUDENT • AI/ML
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] sm:leading-[1.05]">
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-sky-400">
            Achint Jain.
          </span>
        </h1>

        {/* Supporting Headline */}
        <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 max-w-3xl leading-snug">
          I build intelligent products that solve real-world problems.
        </h2>

        {/* Supporting Description */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          {siteConfig.headlineDescription}
        </p>

        {/* Location & Status Indicator */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{siteConfig.location}</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/[0.08] border border-teal-500/20 text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Open to AI/ML & Software Internships</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA: View Projects */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>

          {/* Primary CTA: Resume (View & Download) */}
          <button
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>View & Download Resume</span>
          </button>

          {/* Secondary CTA: Contact Me */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors text-sm font-medium"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* "Currently Exploring" Live Status Bar */}
        <div className="mt-12 sm:mt-14 w-full max-w-2xl p-3 sm:p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-400 font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
            </span>
            <span className="text-zinc-300 font-medium">Currently exploring:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">
              Generative AI
            </span>
            <span className="px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-300">
              RAG Systems
            </span>
            <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
              LLM Applications
            </span>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
