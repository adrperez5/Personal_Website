// Portfolio data type definitions

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Bio {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Proficiency {
  name: string;
  level: number;
  icon: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}

export interface CodeExample {
  title: string;
  language: string;
  code: string;
}

export interface ProjectDetails {
  description: string;
  techStack: string[];
  architecture: string;
  images: string[];
  codeExamples: CodeExample[];
  liveUrl: string;
  repoUrl: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  featured: boolean;
  details: ProjectDetails;
}

export interface PortfolioData {
  bio: Bio;
  skills: Skills;
  proficiencies: Proficiency[];
  certificates: Certificate[];
  interests: string[];
  projects: Project[];
}
