"use client";

import { chessInterestsData } from "@/data/portfolio";
import ChessWidget from "@/components/ChessWidget";
import { Sparkles, Brain, Target, Shield } from "lucide-react";

export default function ChessSection() {
  return (
    <section id="chess-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-10 rounded-2xl bg-[#090a10] border border-white/[0.08] relative overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column: Description & Strategic Parallels */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase">
              <span className="w-2 h-0.5 bg-teal-400" />
              <span>07 / PERSONAL INTEREST & MINDSET</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {chessInterestsData.title}
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {chessInterestsData.description}
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {chessInterestsData.traits.map((trait) => (
                <div
                  key={trait.label}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1"
                >
                  <span className="font-semibold text-white text-xs block">
                    {trait.label}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Chess Micro-Board */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <ChessWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
