"use client";

import { useEffect } from "react";
import { Project } from "@/data/portfolio";
import { Github } from "@/components/icons/SocialIcons";
import {
  X,
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#0d0e14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#090a0f]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 border border-sky-500/20 text-sky-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Title & Tagline */}
          <div>
            <h2
              id="project-modal-title"
              className="text-2xl font-bold tracking-tight text-white"
            >
              {project.name}
            </h2>
            <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-medium text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            )}

            {project.hasLiveDemoBadge && (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span>Demo Architecture Implemented</span>
              </div>
            )}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Problem Statement
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                Technical Solution
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              Key Technical Capabilities & Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Qualitative Impact */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-transparent to-transparent border border-sky-500/20">
            <span className="text-[11px] font-mono text-sky-400 block mb-1">
              Product Impact:
            </span>
            <p className="text-xs sm:text-sm text-zinc-200 font-medium">
              &ldquo;{project.impact}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3.5 border-t border-white/[0.08] bg-[#090a0f]">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
