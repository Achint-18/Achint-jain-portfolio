export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  problem: string;
  solution: string;
  impact: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  hasLiveDemoBadge?: boolean;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    associatedProjects?: string[]; // IDs of projects using this skill
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "Project Development" | "Hackathon & Leadership" | "Academic Initiative";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  location: string;
  period: string;
  expectedGraduation: string;
  cgpaVerified: string;
  cgpaNote: string;
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  skillsCovered: string[];
  status: "Completed" | "Verified";
  description: string;
}

export const projectsData: Project[] = [
  {
    id: "quicknoteslab-ai",
    name: "QuickNotesLab AI",
    category: "AI-Powered Learning Workspace",
    tagline: "Transforming long-form YouTube lecture transcripts into structured, revision-ready study notes.",
    description:
      "An AI-powered learning application that transforms YouTube lecture transcripts into structured study notes using a Retrieval-Augmented Generation (RAG) pipeline.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Google Gemini API",
      "SQLite",
      "Next.js",
    ],
    highlights: [
      "End-to-end RAG workflow for transcript processing",
      "High-speed context retrieval with FAISS vector indexing",
      "LLM-generated structured notes powered by Google Gemini API",
      "Asynchronous FastAPI backend with SQLite persistence",
      "Responsive, clean Next.js frontend interface",
      "Interactive Q&A over lecture content",
    ],
    problem:
      "Long-form educational lectures and technical video tutorials contain dense knowledge that is difficult to quickly review, search, and convert into structured revision material.",
    solution:
      "Automates transcript ingestion, applies semantic chunking and FAISS vector indexing, and uses LangChain with the Google Gemini API to generate structured notes and contextual answers.",
    impact:
      "Designed to make long-form educational content easier to convert into structured study material.",
    githubUrl: "https://github.com/Achint-18/QuickNotesLab-AI",
    hasLiveDemoBadge: true,
    featured: true,
    accentColor: "from-sky-500/20 to-teal-500/20",
  },
  {
    id: "maanvedh-ai",
    name: "MaanVedh-AI",
    category: "AI / BIS Standards Assistant",
    tagline: "Conversational intelligence assistant helping users navigate Indian Standards and BIS services.",
    description:
      "An AI-powered conversational assistant designed to help users find relevant information about Indian Standards and Bureau of Indian Standards (BIS) services through contextual AI.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "Google Gemini API",
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
    ],
    highlights: [
      "Domain-specific Retrieval-Augmented Generation (RAG)",
      "Context-aware responses referencing BIS regulatory standards",
      "Asynchronous REST backend built on FastAPI",
      "PostgreSQL for conversational persistence and metadata",
      "Modern Next.js & Tailwind CSS conversational interface",
      "High accuracy context extraction using Google Gemini API",
    ],
    problem:
      "Navigating regulatory Indian Standards and Bureau of Indian Standards (BIS) technical documentation is often complex, fragmented, and time-consuming for students, developers, and industry members.",
    solution:
      "Engineered an intelligent retrieval-augmented assistant that queries standard specifications and provides verifiable, structured conversational guidance via FastAPI and Google Gemini.",
    impact:
      "Built to make information from BIS-related sources easier to discover through conversational interaction.",
    githubUrl: "https://github.com/Achint-18",
    featured: true,
    accentColor: "from-purple-500/20 to-sky-500/20",
  },
  {
    id: "lost-and-found-portal",
    name: "Lost & Found Portal",
    category: "Desktop Application",
    tagline: "Reliable desktop management system for institutional item registration and retrieval.",
    description:
      "A desktop management application designed to organize, track, and search for lost and recovered items with local relational storage and user authentication.",
    technologies: ["Python", "Tkinter", "SQLite"],
    highlights: [
      "User authentication and session management",
      "Item registration with detailed categorization",
      "Keyword and status-based search indexing",
      "Full CRUD item management workflows",
      "Relational schema persistence using SQLite",
      "Clean event-driven desktop graphical user interface",
    ],
    problem:
      "Institutional and campus environments frequently suffer from manual, paper-based or uncoordinated lost item tracking, leading to unclaimed items and administrative delay.",
    solution:
      "Developed a clean, reliable desktop GUI in Python Tkinter backed by SQLite, providing instant search, structured status tracking, and secure authentication.",
    impact:
      "Built to demonstrate core software engineering fundamentals, state management, and reliable local relational database persistence.",
    githubUrl: "https://github.com/Achint-18",
    featured: true,
    accentColor: "from-emerald-500/20 to-teal-500/20",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "AI & Generative AI",
    skills: [
      {
        name: "Retrieval-Augmented Generation (RAG)",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "LLM Integration",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "Prompt Engineering",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "LangChain",
        associatedProjects: ["quicknoteslab-ai"],
      },
      {
        name: "FAISS",
        associatedProjects: ["quicknoteslab-ai"],
      },
      {
        name: "Google Gemini API",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      {
        name: "FastAPI",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "REST APIs",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
    ],
  },
  {
    title: "Programming",
    skills: [
      {
        name: "Python",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai", "lost-and-found-portal"],
      },
      {
        name: "Java",
      },
      {
        name: "C++",
      },
      {
        name: "C",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "SQLite",
        associatedProjects: ["quicknoteslab-ai", "lost-and-found-portal"],
      },
      {
        name: "PostgreSQL",
        associatedProjects: ["maanvedh-ai"],
      },
      {
        name: "MySQL",
      },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      {
        name: "Next.js",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "Tailwind CSS",
        associatedProjects: ["maanvedh-ai"],
      },
      {
        name: "JavaScript",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai"],
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai", "lost-and-found-portal"],
      },
      {
        name: "GitHub",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai", "lost-and-found-portal"],
      },
      {
        name: "VS Code",
      },
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      {
        name: "Data Structures & Algorithms",
      },
      {
        name: "Object-Oriented Programming",
        associatedProjects: ["lost-and-found-portal", "quicknoteslab-ai"],
      },
      {
        name: "DBMS",
        associatedProjects: ["quicknoteslab-ai", "maanvedh-ai", "lost-and-found-portal"],
      },
      {
        name: "Operating Systems",
      },
      {
        name: "Computer Networks",
      },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "hands-on-ai-dev",
    title: "Hands-on AI & Software Project Development",
    organization: "Independent & Collaborative Engineering",
    period: "2024 — Present",
    type: "Project Development",
    summary:
      "Designing and architecting practical AI applications, integrating modern LLMs with custom retrieval systems and full-stack interfaces.",
    highlights: [
      "Engineered end-to-end RAG workflows combining FAISS vector storage, LangChain orchestration, and Google Gemini API.",
      "Architected asynchronous REST micro-services and backends utilizing Python FastAPI.",
      "Developed responsive modern user interfaces with Next.js and Tailwind CSS connected to database storage.",
      "Practiced clean modular coding, version control with Git/GitHub, and core software engineering methodologies.",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "FAISS", "Google Gemini API", "Next.js", "PostgreSQL", "SQLite"],
  },
  {
    id: "sih-participation",
    title: "Smart India Hackathon (SIH) Participant",
    organization: "Smart India Hackathon",
    period: "2024",
    type: "Hackathon & Leadership",
    summary:
      "Collaborated in a high-intensity national hackathon environment addressing complex real-world problem statements.",
    highlights: [
      "Collaborated with peers under time constraints to design and prototype technology solutions for real-world challenges.",
      "Contributed to technical problem breakdown, architecture design, and rapid iterative prototyping.",
      "Demonstrated teamwork, active communication, and technical resilience during hackathon sprints.",
    ],
    technologies: ["Team Collaboration", "Problem Solving", "Rapid Prototyping", "Technical Presentation"],
  },
];

export const educationData: EducationItem = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "University College of Engineering, Banswara",
  university: "Govind Guru Tribal University (GGTU)",
  location: "Rajasthan, India",
  period: "2024 — 2028",
  expectedGraduation: "2028",
  cgpaVerified: "8.5 / 10",
  cgpaNote: "Current verified cumulative grade point average (8.5 / 10)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Discrete Mathematics",
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    id: "claude-101",
    name: "Claude 101",
    issuer: "Claude Academy",
    skillsCovered: ["Prompt Engineering", "LLM Reasoning", "Model Capabilities & Workflows"],
    status: "Completed",
    description:
      "Comprehensive grounding in foundational LLM interaction, structured prompting, and real-world AI reasoning workflows.",
  },
  {
    id: "ibm-gen-ai",
    name: "Getting Started with Generative AI",
    issuer: "IBM SkillsBuild",
    skillsCovered: ["Generative AI Concepts", "Foundation Models", "Ethics & Real-World Use Cases"],
    status: "Verified",
    description:
      "Foundational exploration of generative artificial intelligence architectures, prompt dynamics, and real-world application paradigms.",
  },
  {
    id: "ibm-ai-fundamentals",
    name: "AI Fundamentals: Language and Vision in AI",
    issuer: "IBM SkillsBuild",
    skillsCovered: ["Natural Language Processing", "Computer Vision", "AI Model Architectures"],
    status: "Verified",
    description:
      "In-depth foundational study of computational linguistics, vision processing models, and applied AI systems.",
  },
];

export const chessInterestsData = {
  title: "Chess & Strategic Problem Solving",
  role: "Chess Player & Analytical Thinker",
  description:
    "Beyond coding, Achint is an avid chess player. The game's emphasis on deep calculation, tactical foresight, positional pattern recognition, and adaptability strongly mirrors the iterative discipline required when architecting complex software and AI systems.",
  traits: [
    { label: "Calculation", desc: "Evaluating multi-step state transitions before committing moves" },
    { label: "Pattern Recognition", desc: "Identifying systemic structures and recurring architectural motifs" },
    { label: "Resilience", desc: "Balancing tactical offense with disciplined positional defense" },
  ],
};

export const currentlyExploring = [
  "Retrieval-Augmented Generation (RAG)",
  "Agentic AI & Tool-Use Workflows",
  "LLM Application Architectures",
  "Asynchronous FastAPI Backends",
  "Next.js Full-Stack Interfaces",
];
