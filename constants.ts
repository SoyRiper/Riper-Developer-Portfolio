import { ResumeData } from './types';

export const INITIAL_RESUME: ResumeData = {
  fullName: "Cesar Enrique Morales Andrades",
  handle: "SoyRiper / Riper",
  discordTag: "@soyriper",
  robloxHandle: "@Riperdeveloper",
  title: "Ingeniero en Informática y Software | Senior Full-Stack & Systems Engineer (4+ Años Exp.)",
  bio: "Ingeniero en Informática y Software con más de 4 años de experiencia diseñando y construyendo arquitecturas backend escalables (FastAPI, NestJS, Python 3, PostgreSQL), aplicaciones web reactivas (React 19, Vite, TailwindCSS), bots de automatización multi-dispositivo (Python, Selenium, Android ADB Tools), plataformas comunitarias (RCorps), soluciones móviles y desktop (Flutter, Android Studio, Electron.js) y desarrollo de videojuegos en Roblox Studio (Luau, Rojo SDK).",
  location: "Los Teques, Estado Miranda | Remote Global",
  contact: {
    email: "andradescesar2024@gmail.com",
    phone: "+58 424-7674770",
    whatsappUrl: "https://wa.me/584247674770",
    linkedin: "https://www.linkedin.com/in/cesar-enrique-morales-andrades-0803ba33b/",
    github: "https://github.com/SoyRiper",
    discord: "https://discord.com/users/soyriper",
    roblox: "https://www.roblox.com/search/users?keyword=Riperdeveloper",
    location: "Remote / Global"
  },
  photos: {
    real: "/assets/cesar_real.jpg",
    avatar: "/assets/riper_avatar.png"
  },
  skillGroups: [
    {
      category: "Backend & Systems (Python / Node / C++)",
      skills: ["FastAPI", "NestJS", "Python 3 (AsyncIO)", "TypeScript", "Node.js", "C++17", "PostgreSQL", "Supabase"]
    },
    {
      category: "Frontend & Web Architecture",
      skills: ["React 19", "Vite", "Framer Motion", "TailwindCSS", "HTML5 Semántico", "JavaScript ES6+"]
    },
    {
      category: "Roblox Game Dev & Mobile Apps",
      skills: ["Roblox Studio (Luau)", "Rojo Workflow", "Flutter", "Android Studio (ADB)", "Electron.js"]
    },
    {
      category: "Python Automation & Infrastructure",
      skills: ["Selenium ADB Bots", "MetaTrader 5 SDK", "OANDA API", "Linux VPS (Nginx)", "Docker", "Git CLI"]
    }
  ],
  projects: [
    {
      id: "p0",
      title: "REEBCA — Enterprise Appointment & Inventory Platform",
      description: "Plataforma web empresarial desarrollada como Proyecto Socio-Integrador para agendamiento de citas, control de inventario de insumos y despliegue automatizado en servidor VPS Linux.",
      tags: ["FastAPI", "Python 3.10+", "React 18", "PostgreSQL", "Nginx VPS", "Systemd"],
      githubUrl: "https://github.com/SoyRiper/REEBCA-Management-Platform",
      badge: "Enterprise Platform"
    },
    {
      id: "p_rcorps",
      title: "RCorps — Community & Clan Management Platform",
      description: "Plataforma web interactiva para gestión de comunidades, clanes, perfiles de usuario y catálogo de medallas con estructura de base de datos relacional SQL.",
      tags: ["HTML5", "JavaScript ES6+", "SQL Migration", "Responsive UI"],
      githubUrl: "https://github.com/SoyRiper/RCorps",
      badge: "Web Community Platform"
    },
    {
      id: "p1_denail",
      title: "Denail — Official Tech Platform Landing & Web App",
      description: "Plataforma web oficial de captura de correos, gestión de usuarios e interfaz inteligente para la startup Denail.",
      tags: ["React 19", "TypeScript", "TailwindCSS", "Supabase", "Vite"],
      githubUrl: "https://github.com/SoyRiper/Denail-Landing-Web",
      badge: "Full-Stack Web App"
    },
    {
      id: "p2_bot",
      title: "Telecom & Multi-Device Android ADB Automator Bot",
      description: "Bot de automatización multi-dispositivo y control telefónico en vivo utilizando Selenium, Python 3, Android ADB Platform Tools y Electron.",
      tags: ["Python 3", "Electron.js", "Selenium", "Android ADB", "WebSockets"],
      githubUrl: "https://github.com/SoyRiper/Telecom-Android-Automator-Bot",
      badge: "Python & ADB Automation"
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
      id: "exp_senior",
      role: "Ingeniero de Software Senior & Full-Stack Developer",
      company: "Proyectos Independientes & Consultoría",
      period: "2022 - Presente (4+ Años)",
      description: [
        "Lideré el desarrollo e ingeniería de software de múltiples soluciones empresariales, desde APIs en FastAPI/NestJS hasta aplicaciones web en React 19.",
        "Desarrollé bots avanzados de automatización en Python integrando Selenium y Android ADB Platform Tools para control multi-dispositivo.",
        "Construí motores de trading algorítmico, plataformas comunitarias SQL (RCorps) y sistemas cuantitativos conectados a MetaTrader 5 y OANDA."
      ]
    },
    {
      id: "roblox",
      role: "Roblox Game Developer & Scripter",
      company: "Comunidad Roblox Studio (@Riperdeveloper)",
      period: "2023 - Presente",
      description: [
        "Desarrollé experiencias y mecánicas de juego en Roblox Studio utilizando Luau, POO y la suite de compilación Rojo.",
        "Implementé físicas de vehículos, sistemas de inventario, animaciones nativas e integración de datos guardados (DataStores)."
      ]
    },
    {
      id: "0",
      role: "Lead Full-Stack Developer & Systems Architect",
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
      role: "Co-Founder & Lead Engineer",
      company: "Denail (AI & Coffee Tech Platform)",
      period: "2024 - Presente",
      description: [
        "Lideré la arquitectura de software de Denail, integrando NestJS, Supabase y Google Gemini AI API para analítica de consumo e inteligencia artificial.",
        "Desarrollé la interfaz web responsiva en React 19 y TypeScript con animaciones fluidas para experiencia de usuario de alto impacto."
      ]
    }
  ]
};