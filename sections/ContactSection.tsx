"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export default function ContactSection({
  onOpenResumeModal,
}: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#10121b] via-[#0b0c11] to-[#070709] border border-white/[0.1] p-8 sm:p-14 lg:p-16 overflow-hidden text-center flex flex-col items-center">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-sky-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>LET&apos;S BUILD SOMETHING USEFUL</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
          Have an idea, opportunity, or project in mind?
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
          I&apos;m always interested in building useful technology, exploring AI, and connecting with people working on interesting problems. Whether it&apos;s an AI/ML internship, a software project, or an engineering collaboration — feel free to reach out.
        </p>

        {/* Email Direct Action Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>Let&apos;s Connect ({siteConfig.email})</span>
          </a>

          <button
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-teal-400" />
                <span className="text-teal-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Secondary Connect Links */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] w-full max-w-md flex items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <span className="text-zinc-700">•</span>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <span className="text-zinc-700">•</span>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
