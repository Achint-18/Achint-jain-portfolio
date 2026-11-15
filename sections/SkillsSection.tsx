"use client";

import { useState } from "react";
import { skillCategoriesData, projectsData, Project } from "@/data/portfolio";
import {
  Cpu,
  Layers,
  Sparkles,
  Database,
  Code,
  Wrench,
  BookOpen,
  ArrowRight,
  FolderGit2,
} from "lucide-react";

interface SkillsSectionProps {
  onSelectProject: (project: Project) => void;
}

const categoryIcons: Record<string, any> = {
  "AI & Generative AI": Sparkles,
  "Backend & APIs": Cpu,
  Programming: Code,
  Databases: Database,
  "Web Technologies": Layers,
  "Tools & Workflow": Wrench,
  "Core Computer Science": BookOpen,
};

export default function SkillsSection({ onSelectProject }: SkillsSectionProps) {
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    associatedProjects?: string[];
  } | null>(null);

  const matchedProjects = hoveredSkill?.associatedProjects
    ? projectsData.filter((p) =>
        hoveredSkill.associatedProjects?.includes(p.id)
      )
    : [];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>03 / TECHNICAL STACK & ECOSYSTEM</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Categorized Competencies & Tools
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Practical technologies applied across projects, backend architectures, and AI pipelines.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 self-start md:self-auto">
            Practical skill level: Intermediate & Hands-on
          </div>
        </div>
      </div>

      {/* Interactive Ecosystem Indicator Banner */}
      <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-sky-500/[0.08] via-teal-500/[0.05] to-transparent border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-zinc-300 font-mono">
            {hoveredSkill ? (
              <>
                Active Tech Focus:{" "}
                <span className="text-white font-semibold">
                  {hoveredSkill.name}
                </span>
              </>
            ) : (
              "Hover any technology below to see its connected real-world project applications"
            )}
          </span>
        </div>

        {matchedProjects.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-zinc-500 font-mono text-[11px]">
              Implemented in:
            </span>
            {matchedProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] text-xs font-medium text-sky-300 transition-all"
              >
                <FolderGit2 className="w-3 h-3" />
                <span>{p.name}</span>
                <ArrowRight className="w-2.5 h-2.5 text-zinc-400" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategoriesData.map((category) => {
          const Icon = categoryIcons[category.title] || Code;
          return (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#0c0d13]/70 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-white/[0.04] text-sky-400 border border-white/[0.06]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill?.name === skill.name;
                    const hasProjects =
                      skill.associatedProjects &&
                      skill.associatedProjects.length > 0;

                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => {
                          if (hasProjects) {
                            const p = projectsData.find(
                              (item) => item.id === skill.associatedProjects![0]
                            );
                            if (p) onSelectProject(p);
                          }
                        }}
                        className={`text-xs font-mono px-3 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${
                          isHovered
                            ? "bg-sky-500/20 border-sky-400/40 text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.25)] scale-105"
                            : "bg-white/[0.03] border-white/[0.06] text-zinc-300 hover:bg-white/[0.07] hover:text-white"
                        }`}
                      >
                        <span>{skill.name}</span>
                        {hasProjects && (
                          <span className="w-1 h-1 rounded-full bg-teal-400/80" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
