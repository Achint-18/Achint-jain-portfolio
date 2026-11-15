"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  Menu,
  X,
  FileText,
  Github,
  Linkedin,
  Command,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  onOpenCommandPalette,
  onOpenResumeModal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08080a]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-sky-400/40 transition-colors">
            <span className="font-mono text-sm font-semibold tracking-wider text-sky-400">
              AJ
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm tracking-tight text-white flex items-center gap-1.5">
              Achint Jain
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-tight hidden sm:block">
              AI/ML Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/[0.1] shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-zinc-300 transition-colors"
          >
            <Command className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-mono text-[11px] text-zinc-400">⌘K</span>
          </button>

          {/* Social Links */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Resume Modal Button */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-xs font-medium text-white transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.04)] hover:shadow-[0_0_16px_rgba(56,189,248,0.15)]"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenCommandPalette}
            aria-label="Search"
            className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0c0d12]/95 border border-white/[0.1] backdrop-blur-xl shadow-2xl flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-1.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="h-[1px] bg-white/[0.08] my-1" />

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] text-zinc-300 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] text-zinc-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
