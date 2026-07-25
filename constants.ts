import { ResumeData } from './types';

export const INITIAL_RESUME: ResumeData = {
  fullName: "RIPER (SoyRiper)",
  title: "FULL-STACK & SYSTEMS SOFTWARE ENGINEER",
  summary: "Desarrollador Full-Stack y de Sistemas con experiencia en la construcción de plataformas de alta velocidad, backend escalables (NestJS/Node/Python), motores de trading algorítmico (MetaTrader 5/OANDA) e integración de modelos de Inteligencia Artificial (Google Gemini API). Enfocado en arquitectura limpia, rendimiento y código listo para producción.",
  contact: {
    email: "andradescesar2024@gmail.com",
    linkedin: "linkedin.com/in/soyriper",
    github: "github.com/SoyRiper",
    location: "Remote / Global"
  },
  skillGroups: [
    {
      category: "Backend & Enterprise APIs",
      skills: ["NestJS", "Node.js", "Python", "TypeScript", "SQL"]
    },
    {
      category: "Frontend & UI/UX",
      skills: ["React", "Vite", "Framer Motion", "TailwindCSS", "HTML5"]
    },
    {
      category: "FinTech & Low-Latency Systems",
      skills: ["C++", "MetaTrader 5", "OANDA API", "WebSockets", "Linux"]
    },
    {
      category: "AI Integration & Data",
      skills: ["Gemini AI", "Supabase", "PostgreSQL", "Docker", "Git"]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "VelocityTrader — Algorithmic Trading Platform",
      description: "Plataforma de trading algorítmico y análisis de divisas/criptomonedas en tiempo real con ejecución directa vía MetaTrader 5 API y OANDA.",
      tags: ["Python", "MetaTrader 5", "OANDA API", "Electron", "WebSockets"],
      githubUrl: "https://github.com/SoyRiper/VelocityTrader-Algorithmic-Platform",
      badge: "FinTech & Trading"
    },
    {
      id: "p2",
      title: "Denail — Enterprise NestJS Backend API",
      description: "API empresarial con arquitectura modular limpia (Clean Architecture) para análisis de hábitos y productividad en el ecosistema Denail AI.",
      tags: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "REST API"],
      githubUrl: "https://github.com/SoyRiper/Denail-Backend-NestJS",
      badge: "Backend Enterprise"
    },
    {
      id: "p3",
      title: "AI-MIDI Music Studio",
      description: "Estudio Full-Stack de composición musical e Inteligencia Artificial para la síntesis, manipulación de acordes y generación de archivos MIDI en tiempo real.",
      tags: ["Python", "Flask", "React", "Vite", "Web Audio API"],
      githubUrl: "https://github.com/SoyRiper/AI-MIDI-Music-Studio",
      badge: "Audio & AI"
    },
    {
      id: "p4",
      title: "Denail AI Coffee Machine App",
      description: "Aplicación web interactiva para cafetera inteligente potenciada por la API de Google Gemini y gestión serverless con Supabase.",
      tags: ["React 19", "TypeScript", "Gemini AI", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/SoyRiper/Cafe-pagina-Denail",
      badge: "AI & Full-Stack"
    },
    {
      id: "p5",
      title: "RCorps — Community & Clan Management",
      description: "Plataforma web comunitaria para administración de perfiles, clanes, badges e historial de miembros con persistencia de base de datos SQL.",
      tags: ["HTML5", "JavaScript ES6+", "SQL Database", "Responsive CSS"],
      githubUrl: "https://github.com/SoyRiper/RCorps",
      badge: "Web Platform"
    },
    {
      id: "p6",
      title: "Geometry Dash Level Recommender Mod",
      description: "Mod nativo en C++17 desarrollado sobre el framework Geode para filtrado y recomendación dinámica de niveles de la comunidad.",
      tags: ["C++17", "CMake", "Geode SDK", "Native Development"],
      githubUrl: "https://github.com/SoyRiper/gd-level-recommender",
      badge: "C++ & Game Dev"
    }
  ],
  experience: [
    {
      id: '1',
      role: "Full-Stack & Systems Engineer",
      company: "Proyectos Independientes / Freelance",
      period: "2023 - Presente",
      description: [
        "Diseño e implementación de arquitectura backend modular en NestJS/TypeScript con integración a Supabase PostgreSQL.",
        "Desarrollo de bots de trading de alta velocidad en Python comunicados mediante WebSockets con terminales de MetaTrader 5 y OANDA v20 API.",
        "Integración de agentes e APIs de Inteligencia Artificial (Google Gemini AI API) en aplicaciones web interactivas construidas con React 19 y Vite."
      ]
    },
    {
      id: '2',
      role: "Software & Web Developer",
      company: "Desarrollo de Software & Client Solutions",
      period: "2021 - 2023",
      description: [
        "Creación de plataformas de gestión comunitaria utilizando HTML5, JavaScript ES6+ y consultas de base de datos SQL personalizadas.",
        "Construcción de aplicaciones nativas y mods en C++ utilizando CMake y SDKs especializados."
      ]
    }
  ]
};