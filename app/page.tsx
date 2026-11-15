"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import EducationSection from "@/sections/EducationSection";
import CertificationsSection from "@/sections/CertificationsSection";
import ChessSection from "@/sections/ChessSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ResumeModal from "@/components/ResumeModal";
import ProjectModal from "@/components/ProjectModal";

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-sky-500/20 selection:text-white">
      {/* Subtle top scroll indicator */}
      <ScrollProgress />

      {/* Modern sticky navigation bar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <AboutSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection onSelectProject={setSelectedProject} />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ChessSection />
        <ContactSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Modals and Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
