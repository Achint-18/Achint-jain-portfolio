"use client";

import { educationData } from "@/data/portfolio";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle,
} from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
          <span className="w-2 h-0.5 bg-sky-400" />
          <span>05 / ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Formal Computer Science & Engineering Degree
        </h2>
      </div>

      {/* Main Education Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0f1118] to-[#090a0f] border border-white/[0.08] shadow-2xl relative overflow-hidden">
        {/* Ambient subtle glow background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Degree & Institution */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  Undergraduate Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {educationData.degree}
                </h3>
              </div>
            </div>

            <div className="text-sm sm:text-base text-zinc-300 font-medium">
              {educationData.institution}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400">
              {educationData.university}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>
                  {educationData.period} (Expected: {educationData.expectedGraduation})
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{educationData.location}</span>
              </div>
            </div>

            {/* CGPA Box */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Academic Performance
                </span>
                <div className="text-lg font-bold text-white font-mono mt-0.5">
                  CGPA: {educationData.cgpaVerified}
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
                Verified from official resume
              </span>
            </div>
          </div>

          {/* Right Column: Key Coursework */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-black/40 border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Rigorous Core Coursework</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {educationData.coursework.map((course) => (
                <div
                  key={course}
                  className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span className="truncate">{course}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.06]">
              Building algorithmic and systems discipline for scalable software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
