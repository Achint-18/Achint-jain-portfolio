export interface SiteConfig {
  name: string;
  title: string;
  shortTitle: string;
  role: string;
  supportingPositioning: string;
  headlineDescription: string;
  location: string;
  url: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  ogImage: string;
  description: string;
  keywords: string[];
}

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://achint-jain-portfolio.vercel.app";
};

export const siteConfig: SiteConfig = {
  name: "Achint Jain",
  title: "Achint Jain | Computer Science Student & AI/ML Developer",
  shortTitle: "Achint Jain",
  role: "Computer Science Student | AI/ML Enthusiast",
  supportingPositioning: "Building intelligent products that solve real-world problems.",
  headlineDescription:
    "Computer Science student focused on AI/ML and Generative AI, building practical applications with modern AI technologies.",
  location: "Rajasthan, India",
  url: getBaseUrl(),
  email: "jachint85@gmail.com",
  github: "https://github.com/Achint-18",
  linkedin: "https://www.linkedin.com/in/achint-jain-82ba58329/",
  ogImage: "/og-image.png",
  description:
    "Portfolio of Achint Jain, a Computer Science & Engineering undergraduate from Rajasthan, India. Focused on Artificial Intelligence, Machine Learning, RAG pipelines, FastAPI backends, and practical Generative AI applications.",
  keywords: [
    "Achint Jain",
    "Achint Jain portfolio",
    "Achint Jain AI",
    "Achint Jain AI/ML",
    "Achint Jain developer",
    "Achint Jain Computer Science",
    "Achint Jain Rajasthan",
    "QuickNotesLab AI",
    "MaanVedh-AI",
    "Generative AI",
    "RAG systems",
    "FastAPI Next.js",
  ],
};
