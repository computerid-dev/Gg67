export type Language = 'id' | 'en';

export type AnimationPreset = 'zoom-in' | 'zoom-out' | 'fade-up' | 'flip-zoom' | 'blur-zoom';

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number; // 1-100
  iconName?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'ai' | 'design';
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  description: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ProfileData {
  name: string;
  nickname: string;
  role: string;
  subRole: string;
  location: string;
  bio: string;
  longBio: string;
  avatar: string;
  availableForHire: boolean;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  cvUrl: string;
  stats: {
    yearsExp: number;
    projectsDone: number;
    satisfiedClients: number;
    codeCommits: number;
  };
}

export interface ThemeConfig {
  id: string;
  name: string;
  bgClass: string;
  cardBgClass: string;
  accentClass: string;
  textAccentClass: string;
  borderClass: string;
  glowColor: string;
}
