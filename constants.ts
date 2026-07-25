import { ResumeData } from './types';

export const INITIAL_RESUME: ResumeData = {
  fullName: "Cesar Enrique Morales Andrades",
  handle: "SoyRiper / Riper",
  title: "Senior Full-Stack & Systems Engineer | Co-Founder at Denail",
  bio: "Ingeniero de Software especializado en la construcción de arquitecturas backend escalables (NestJS, FastAPI, Python, TypeScript, SQL), interfaces web reactivas de alta fidelidad (React 19, Vite, Framer Motion), motores de trading algorítmico (MetaTrader 5, OANDA) y proyectos socio-integradores de gestión empresarial (REEBCA). Enfocado en código limpio, automatización de despliegues VPS y soluciones orientadas al usuario final.",
  location: "Los Teques, Estado Miranda | Remote Global",
  contact: {
    email: "andradescesar2024@gmail.com",
    linkedin: "https://www.linkedin.com/in/cesar-enrique-morales-andrades-0803ba33b/",
    github: "https://github.com/SoyRiper",
    location: "Remote / Global"
  },
  photos: {
    real: "/assets/cesar_real.jpg",
    avatar: "/assets/riper_avatar.png"
  },
  skillGroups: [
    {
      category: "Backend & Server Architecture",
      skills: ["FastAPI", "NestJS", "Python 3", "TypeScript", "Node.js", "PostgreSQL", "Supabase"]
    },
    {
      category: "Frontend & UI Engineering",
      skills: ["React 19", "Vite", "Framer Motion", "TailwindCSS", "HTML5 Semántico", "JavaScript ES6+"]
    },
    {
      category: "FinTech & Systems Programming",
      skills: ["C++17", "MetaTrader 5 SDK", "OANDA v20 API", "WebSockets", "Linux VPS", "CMake"]
    },
    {
      category: "AI Integration & DevOps",
      skills: ["Google Gemini API", "Gemma LLMs", "Nginx", "Systemd", "Docker", "Git / GitHub CLI"]
    }
  ],
  projects: [
    {
      id: "p0",
      title: "REEBCA — Enterprise Appointment & Inventory Platform",
      description: "Plataforma web empresarial desarrollada como Proyecto Socio-Integrador para agendamiento de citas, control de inventario de insumos y despliegue automatizado en VPS.",
      tags: ["FastAPI", "Python 3.10+", "React 18", "PostgreSQL", "Nginx VPS", "Systemd"],
      githubUrl: "https://github.com/SoyRiper/REEBCA-Management-Platform",
      badge: "Enterprise Platform"
    },
    {
      id: "p1",
      title: "VelocityTrader — Algorithmic Crypto & Forex Platform",
      description: "Plataforma de trading algorítmico y análisis financiero cuantitativo en tiempo real conectada a MetaTrader 5 y OANDA v20 REST API.",
      tags: ["Python 3", "MetaTrader 5", "OANDA API", "Electron.js", "WebSockets"],
      githubUrl: "https://github.com/SoyRiper/VelocityTrader-Algorithmic-Platform",
      badge: "FinTech & Trading"
    },
    {
      id: "p2",
      title: "Denail — Enterprise NestJS Backend API",
      description: "Arquitectura backend empresarial diseñada bajo principios SOLID y Clean Architecture para la plataforma inteligente Denail.",
      tags: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "JWT Auth"],
      githubUrl: "https://github.com/SoyRiper/Denail-Backend-NestJS",
      badge: "Backend Enterprise"
    },
    {
      id: "p3",
      title: "AI-MIDI Music Studio",
      description: "Estudio de producción musical e Inteligencia Artificial Full-Stack para composición, síntesis y generación en tiempo real de secuencias MIDI.",
      tags: ["Python Flask", "React 18", "Web Audio API", "Mido", "Music21"],
      githubUrl: "https://github.com/SoyRiper/AI-MIDI-Music-Studio",
      badge: "Audio & AI Engine"
    },
    {
      id: "p4",
      title: "Denail AI Coffee Machine Web App",
      description: "Plataforma web reactiva impulsada por Google Gemini API para recomendación inteligente de cafés según nivel de energía y tareas diarias.",
      tags: ["React 19", "TypeScript", "Google Gemini API", "Framer Motion", "Supabase"],
      githubUrl: "https://github.com/SoyRiper/Cafe-pagina-Denail",
      badge: "AI & Full-Stack"
    },
    {
      id: "p5",
      title: "RCorps — Community & Clan Platform",
      description: "Sistema web interactivo para gestión de comunidades, clanes, perfiles de usuario y catálogo de medallas con persistencia en SQL.",
      tags: ["HTML5", "JavaScript ES6+", "SQL Migration", "Responsive Layout"],
      githubUrl: "https://github.com/SoyRiper/RCorps",
      badge: "Web Platform"
    },
    {
      id: "p6",
      title: "Geometry Dash Level Recommender Mod",
      description: "Mod desarrollado en C++17 para Geometry Dash utilizando el SDK de Geode para recomendación dinámica de niveles de la comunidad.",
      tags: ["C++17", "CMake", "Geode SDK", "Native Game Modding"],
      githubUrl: "https://github.com/SoyRiper/gd-level-recommender",
      badge: "C++ & Game Dev"
    }
  ],
  experience: [
    {
      id: "0",
      role: "Lead Full-Stack Developer",
      company: "Proyecto Socio-Integrador REEBCA (IUTA)",
      period: "2025 - 2026",
      description: [
        "Diseñé la arquitectura backend completa en FastAPI (Python 3.10+) con PostgreSQL para agendamiento de citas e inventarios.",
        "Desarrollé la interfaz frontend en React 18 con autenticación de usuarios y paneles de control administrativo.",
        "Implementé scripts automatizados de despliegue en servidor VPS Linux utilizando Nginx, Systemd y Gunicorn."
      ]
    },
    {
      id: "1",
      role: "Co-Founder & Lead Developer",
      company: "Denail (AI & Coffee Tech Platform)",
      period: "2024 - Presente",
      description: [
        "Lideré la arquitectura de software de Denail, integrando NestJS, Supabase y Google Gemini AI API para analítica de consumo e inteligencia artificial.",
        "Desarrollé la interfaz web responsiva en React 19 y TypeScript con animaciones fluidas para experiencia de usuario de alto impacto."
      ]
    },
    {
      id: "2",
      role: "Full-Stack & Systems Developer",
      company: "Proyectos Independientes & FinTech",
      period: "2022 - 2024",
      description: [
        "Creé VelocityTrader: motor de trading algorítmico en Python conectado a MetaTrader 5 y OANDA v20 API para trading de divisas y cripto.",
        "Diseñé e implementé el backend de AI-MIDI Music Studio para síntesis de audio en tiempo real y composición de partituras.",
        "Desarrollé mods nativos en C++17 utilizando CMake y SDKs especializados."
      ]
    }
  ]
};