"use client";

import { experienceData } from "@/data/portfolio";
import {
  Briefcase,
  Users,
  Code2,
  CheckCircle2,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-14">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>04 / EXPERIENCE & LEADERSHIP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Practical Project Execution & Collaborative Problem Solving
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
          Demonstrated technical initiative through hands-on software development and high-intensity hackathon collaboration.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((exp) => {
          const isHackathon = exp.type === "Hackathon & Leadership";
          const Icon = isHackathon ? Users : Code2;

          return (
            <div
              key={exp.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#0c0d13]/70 border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-sky-400">
                      {exp.type}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {exp.title}
                </h3>
                <div className="text-sm font-medium text-zinc-400 mt-1">
                  {exp.organization}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {exp.summary}
                </p>

                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Core Focus & Contributions
                  </span>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-zinc-300 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-400/80 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies / Competencies tags */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
