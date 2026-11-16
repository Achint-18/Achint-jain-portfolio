"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  educationData,
  projectsData,
  certificationsData,
  experienceData,
} from "@/data/portfolio";
import { Github, Linkedin } from "@/components/icons/SocialIcons";
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  MapPin,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate an authentic markdown/text resume file download
    const resumeText = `# ${siteConfig.name}
${siteConfig.role}
Location: ${siteConfig.location}
Email: ${siteConfig.email}
GitHub: ${siteConfig.github}
LinkedIn: ${siteConfig.linkedin}

==================================================
SUMMARY
==================================================
${siteConfig.headlineDescription}
${siteConfig.supportingPositioning}

==================================================
EDUCATION
==================================================
${educationData.degree}
${educationData.institution}
${educationData.university}
Period: ${educationData.period} (Expected: ${educationData.expectedGraduation})
Verified CGPA: ${educationData.cgpaVerified}
Key Coursework: ${educationData.coursework.join(", ")}

==================================================
FEATURED PROJECTS
==================================================
1. ${projectsData[0].name} (${projectsData[0].category})
   Tech: ${projectsData[0].technologies.join(", ")}
   Highlights:
   - ${projectsData[0].highlights.join("\n   - ")}
   - GitHub: ${projectsData[0].githubUrl}
   - Impact: ${projectsData[0].impact}

2. ${projectsData[1].name} (${projectsData[1].category})
   Tech: ${projectsData[1].technologies.join(", ")}
   Highlights:
   - ${projectsData[1].highlights.join("\n   - ")}
   - GitHub: ${projectsData[1].githubUrl}
   - Impact: ${projectsData[1].impact}

3. ${projectsData[2].name} (${projectsData[2].category})
   Tech: ${projectsData[2].technologies.join(", ")}
   Highlights:
   - ${projectsData[2].highlights.join("\n   - ")}
   - GitHub: ${projectsData[2].githubUrl}
   - Impact: ${projectsData[2].impact}

==================================================
EXPERIENCE & LEADERSHIP
==================================================
- ${experienceData[0].title} (${experienceData[0].organization}, ${experienceData[0].period})
  ${experienceData[0].summary}
  Tech: ${experienceData[0].technologies.join(", ")}

- ${experienceData[1].title} (${experienceData[1].organization}, ${experienceData[1].period})
  ${experienceData[1].summary}

==================================================
CERTIFICATIONS
==================================================
${certificationsData
  .map(
    (c) =>
      `- ${c.name} — ${c.issuer}\n  Skills: ${c.skillsCovered.join(", ")}`
  )
  .join("\n")}
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Achint_Jain_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#0c0d12] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08] bg-[#090a0e]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="resume-modal-title"
                className="text-sm font-semibold text-white tracking-tight"
              >
                Achint Jain — Verified Resume Overview
              </h2>
              <p className="text-[11px] text-zinc-400">
                Official academic & technical portfolio records
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              aria-label="Download resume"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 text-xs font-medium text-sky-300 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? "Downloaded!" : "Download"}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7 text-xs sm:text-sm bg-[#08080a]">
          {/* Resume Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </h1>
              <p className="text-sky-400 font-mono text-xs sm:text-sm mt-0.5">
                {siteConfig.role}
              </p>
              <p className="text-zinc-400 text-xs mt-1">
                {siteConfig.supportingPositioning}
              </p>
            </div>

            <div className="flex flex-col gap-1 text-zinc-400 text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  github.com/Achint-18
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-2 hover:underline"
                >
                  linkedin.com/in/achint-jain-82ba58329
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              Education
            </h3>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="font-semibold text-white text-sm">
                  {educationData.degree}
                </h4>
                <span className="text-zinc-400 font-mono text-xs">
                  {educationData.period} (Expected: {educationData.expectedGraduation})
                </span>
              </div>
              <div className="text-zinc-300">
                {educationData.institution} • {educationData.university}
              </div>
              <div className="flex items-center gap-2 text-xs pt-1">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono font-medium">
                  CGPA: {educationData.cgpaVerified}
                </span>
                <span className="text-zinc-500 text-[11px]">
                  (Cumulative Grade Point Average: 8.5/10)
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Key Technical Projects
            </h3>
            <div className="space-y-4">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">
                        {project.name}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-mono px-2 py-0.5 rounded bg-white/[0.04]">
                        {project.category}
                      </span>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1"
                      >
                        Source Code <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-zinc-400 italic">
                    Impact: {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathons */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Experience & Leadership
            </h3>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="font-semibold text-white">{exp.title}</div>
                    <div className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs text-sky-400 font-mono">
                    {exp.organization}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-semibold text-white truncate">
                      {cert.name}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.08] bg-[#090a0e] text-xs text-zinc-400 font-mono">
          <span>Official Academic & Project Portfolio</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Close window
          </button>
        </div>
      </div>
    </div>
  );
}
