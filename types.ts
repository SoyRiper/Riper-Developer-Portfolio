export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  badge?: string;
  codeSnippet?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ProfilePhotos {
  real: string;
  avatar: string;
}

export interface ResumeData {
  fullName: string;
  handle: string;
  title: string;
  bio: string;
  location: string;
  contact: ContactInfo;
  photos: ProfilePhotos;
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: Experience[];
}
