export interface Project {
    title: string;
    description: string;
    category: string;
    images: string[];
    technologies: string[];
    live: string;
    github: string;
    createdAt: string;
  }
  
  export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
  }
  
  export interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
  }
  
  export interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    value: string;
    link: string;
  }