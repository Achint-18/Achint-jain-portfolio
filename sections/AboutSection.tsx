"use client";

import { currentlyExploring } from "@/data/portfolio";
import {
  Code,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>01 / ABOUT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Building practical software, not just studying theory.
        </h2>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Vision & Identity Statement */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal className="w-36 h-36" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
              I&apos;m Achint, a Computer Science undergraduate focused on practical AI/ML engineering and Generative AI applications.
            </h3>

            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              While deep theoretical understanding of algorithms and system architectures is vital, my greatest excitement comes from turning ideas into working, dependable applications that solve real-life challenges.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              From building Retrieval-Augmented Generation (RAG) pipelines that turn sprawling video transcripts into concise study workspaces, to designing domain-specific assistants that help people navigate complex standards, I focus on building software that provides immediate, tangible utility.
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Hands-on Prototyping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Core CS Rigor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Product Focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas & Currently Exploring */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card: Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="p-2.5 w-fit rounded-lg bg-sky-500/10 text-sky-400 mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1.5">
                Generative AI & RAG
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Exploring vector indexing (FAISS), chunking strategies, prompt engineering, and LLM orchestration to build context-aware assistants.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="p-2.5 w-fit rounded-lg bg-teal-500/10 text-teal-400 mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1.5">
                Backend & APIs
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Developing asynchronous RESTful services using Python and FastAPI, integrated with structured relational databases (PostgreSQL & SQLite).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="p-2.5 w-fit rounded-lg bg-purple-500/10 text-purple-400 mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1.5">
                Modern Full-Stack
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Crafting clean, responsive user interfaces using Next.js and Tailwind CSS that connect seamlessly with backend intelligence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
              <div className="p-2.5 w-fit rounded-lg bg-indigo-500/10 text-indigo-400 mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1.5">
                Core CS Fundamentals
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Strengthening data structures, algorithms, object-oriented principles, operating systems, and database management systems.
              </p>
            </div>
          </div>

          {/* Card: Active Exploration Vectors */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
              Actively Exploring & Refining:
            </span>
            <div className="flex flex-wrap gap-2">
              {currentlyExploring.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
