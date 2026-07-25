export interface ContactInfo {
  email: string;
  phone: string;
  whatsappUrl: string;
  linkedin: string;
  github: string;
  discord: string;
  roblox?: string;
  location: string;
}

export interface ProfilePhotos {
  real: string;
  avatar: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  badge: string;
  codeSnippet?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ResumeData {
  fullName: string;
  handle: string;
  discordTag: string;
  robloxHandle?: string;
  title: string;
  bio: string;
  location: string;
  contact: ContactInfo;
  photos: ProfilePhotos;
  skillGroups: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
}
