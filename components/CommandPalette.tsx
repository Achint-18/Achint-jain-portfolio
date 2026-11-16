"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import {
  Search,
  FileText,
  Mail,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Award,
  Sparkles,
  Copy,
  Check,
  X,
  CornerDownLeft,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
  onTriggerChessEasterEgg?: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Actions" | "External" | "Interactive";
  icon: any;
  action: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenResumeModal,
  onTriggerChessEasterEgg,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigateTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    {
      id: "home",
      title: "Go to Home",
      subtitle: "Back to top hero section",
      category: "Navigation",
      icon: Home,
      action: () => navigateTo("#hero"),
    },
    {
      id: "projects",
      title: "View Featured Projects",
      subtitle: "QuickNotesLab AI, MaanVedh-AI, Lost & Found",
      category: "Navigation",
      icon: FolderGit2,
      action: () => navigateTo("#projects"),
    },
    {
      id: "about",
      title: "About Achint",
      subtitle: "Personal focus, core CS, and Generative AI",
      category: "Navigation",
      icon: User,
      action: () => navigateTo("#about"),
    },
    {
      id: "skills",
      title: "Explore Tech Stack & Skills",
      subtitle: "Python, RAG, LangChain, FAISS, FastAPI, Next.js",
      category: "Navigation",
      icon: Cpu,
      action: () => navigateTo("#skills"),
    },
    {
      id: "experience",
      title: "Experience & Leadership",
      subtitle: "Project Development & Smart India Hackathon",
      category: "Navigation",
      icon: Briefcase,
      action: () => navigateTo("#experience"),
    },
    {
      id: "certifications",
      title: "View Certifications",
      subtitle: "Claude Academy & IBM SkillsBuild",
      category: "Navigation",
      icon: Award,
      action: () => navigateTo("#certifications"),
    },
    {
      id: "resume-modal",
      title: "View & Download Resume",
      subtitle: "Inspect verified academic and technical credentials",
      category: "Actions",
      icon: FileText,
      action: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      id: "contact-mail",
      title: "Send Email (jachint85@gmail.com)",
      subtitle: "Compose an email immediately via mailto",
      category: "Actions",
      icon: Mail,
      action: () => {
        window.location.href = `mailto:${siteConfig.email}`;
        onClose();
      },
    },
    {
      id: "copy-email",
      title: copiedEmail ? "Email Copied!" : "Copy Email Address",
      subtitle: siteConfig.email,
      category: "Actions",
      icon: copiedEmail ? Check : Copy,
      action: copyEmail,
    },
    {
      id: "chess-easter-egg",
      title: "Inspect Chess & Tactical Strategy",
      subtitle: "Jump to analytical mindset & chess interactive board",
      category: "Interactive",
      icon: Sparkles,
      action: () => {
        navigateTo("#chess-section");
        if (onTriggerChessEasterEgg) onTriggerChessEasterEgg();
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      subtitle: "github.com/Achint-18",
      category: "External",
      icon: Github,
      action: () => {
        window.open(siteConfig.github, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/achint-jain-82ba58329",
      category: "External",
      icon: Linkedin,
      action: () => {
        window.open(siteConfig.linkedin, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery("");
          setSelectedIndex(0);
          inputRef.current?.focus();
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#0c0d12] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden text-foreground flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search sections..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-zinc-500 hover:text-zinc-300 rounded"
              aria-label="Clear query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/[0.06] border border-white/[0.1] rounded">
            ESC
          </kbd>
        </div>

        {/* Command List */}
        <div className="overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors duration-150 ${
                    isSelected
                      ? "bg-white/[0.09] text-white"
                      : "text-zinc-300 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg border transition-colors ${
                        isSelected
                          ? "bg-sky-500/20 border-sky-400/30 text-sky-300"
                          : "bg-white/[0.04] border-white/[0.06] text-zinc-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-white truncate">
                        {cmd.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-zinc-400" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-t border-white/[0.06] text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-zinc-600">Achint Jain Portfolio</span>
        </div>
      </div>
    </div>
  );
}
