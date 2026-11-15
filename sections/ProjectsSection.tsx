"use client";

import { projectsData, Project } from "@/data/portfolio";
import {
  Github,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight,
  Maximize2,
  CheckCircle2,
} from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({
  onSelectProject,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>02 / FEATURED PROJECTS</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected AI Applications & Software Products
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Real-world systems engineered with modern AI pipelines, vector retrieval, and reliable backend infrastructure.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Click any card to inspect architecture
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#0c0d13]/80 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_rgba(56,189,248,0.12)] overflow-hidden"
          >
            {/* Top accent glow line */}
            <div
              className={`h-1 w-full bg-gradient-to-r ${project.accentColor}`}
            />

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              {/* Card Meta & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                  {project.category}
                </span>

                <span className="text-xs font-mono text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                {project.tagline}
              </p>

              {/* Problem & Solution Compact Flow */}
              <div className="mt-5 space-y-3 p-3.5 rounded-xl bg-black/40 border border-white/[0.04]">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block mb-0.5">
                    Problem
                  </span>
                  <p className="text-xs text-zinc-300 line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 block mb-0.5">
                    Solution
                  </span>
                  <p className="text-xs text-zinc-300 line-clamp-2">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Technical Highlights */}
              <div className="mt-5 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  Technical Highlights
                </span>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-zinc-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Qualitative Impact */}
              <div className="mt-5 pt-3 border-t border-white/[0.04] text-[11px] text-zinc-400 italic">
                &ldquo;{project.impact}&rdquo;
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="px-6 py-4 bg-black/40 border-t border-white/[0.06] flex items-center justify-between">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-500">
                  Code on request
                </span>
              )}

              <button
                onClick={() => onSelectProject(project)}
                className="flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Deep Dive</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
