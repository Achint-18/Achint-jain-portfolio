"use client";

import { siteConfig } from "@/data/siteConfig";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-10 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-semibold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-xs text-zinc-400 mt-0.5">
              Computer Science Student • AI/ML Enthusiast
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-600" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-zinc-500 font-mono text-center md:text-right">
            © 2026 Achint Jain. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
