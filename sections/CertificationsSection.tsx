"use client";

import { certificationsData } from "@/data/portfolio";
import { Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>06 / CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Verified AI & Industry Certifications
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
          Structured credentials validating competencies across Generative AI, LLM prompting, and foundational AI systems.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="p-6 sm:p-7 rounded-2xl bg-[#0c0d13]/70 border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{cert.status}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {cert.name}
              </h3>
              <div className="text-xs font-mono text-sky-400 mt-1">
                {cert.issuer}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Covered Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
