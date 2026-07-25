import { ResumeData } from './types';

export const INITIAL_RESUME: ResumeData = {
  fullName: "Cesar Enrique Morales Andrades",
  handle: "SoyRiper / Riper",
  title: "Senior Full-Stack & Systems Engineer | Co-Founder at Denail",
  bio: "Ingeniero de Software especializado en la construcción de arquitecturas backend escalables (NestJS, TypeScript, Python, SQL), interfaces web reactivas de alta fidelidad (React 19, Vite, Framer Motion), motores de trading algorítmico (MetaTrader 5, OANDA) e integraciones avanzadas con Inteligencia Artificial (Google Gemini API). Enfocado en código mantenible, alta disponibilidad y soluciones orientadas al usuario final.",
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
      skills: ["NestJS", "TypeScript", "Node.js", "Python 3", "PostgreSQL", "Supabase"]
    },
    {
      category: "Frontend & UI Engineering",
      skills: ["React 19", "Vite", "Framer Motion", "TailwindCSS", "HTML5 Semántico", "JavaScript ES6+"]
    },
    {
      category: "FinTech & Systems Programming",
      skills: ["C++17", "MetaTrader 5 SDK", "OANDA v20 API", "WebSockets", "Linux", "CMake"]
    },
    {
      category: "AI Integration & Tools",
      skills: ["Google Gemini API", "Gemma LLMs", "Android Native", "Docker", "Git / GitHub CLI"]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "VelocityTrader — Algorithmic Crypto & Forex Platform",
      description: "Plataforma de trading algorítmico y análisis financiero cuantitativo en tiempo real conectada a MetaTrader 5 y OANDA v20 REST API.",
      tags: ["Python 3", "MetaTrader 5", "OANDA API", "Electron.js", "WebSockets"],
      githubUrl: "https://github.com/SoyRiper/VelocityTrader-Algorithmic-Platform",
      badge: "FinTech & Trading",
      codeSnippet: `# MetaTrader 5 Execution Kernel - VelocityTrader
import MetaTrader5 as mt5

def execute_algorithmic_trade(symbol, order_type, volume, sl_points, tp_points):
    if not mt5.initialize():
        raise Exception("MT5 Initialization failed")
    
    tick = mt5.symbol_info_tick(symbol)
    price = tick.ask if order_type == 'BUY' else tick.bid
    point = mt5.symbol_info(symbol).point
    
    request = {
        "action": mt5.TRADE_ACTION_DEAL,
        "symbol": symbol,
        "volume": volume,
        "type": mt5.ORDER_TYPE_BUY if order_type == 'BUY' else mt5.ORDER_TYPE_SELL,
        "price": price,
        "sl": price - (sl_points * point) if order_type == 'BUY' else price + (sl_points * point),
        "tp": price + (tp_points * point) if order_type == 'BUY' else price - (tp_points * point),
        "deviation": 10,
        "magic": 202607,
        "comment": "VelocityTrader AI AutoExecution",
        "type_time": mt5.ORDER_TIME_GTC,
    }
    result = mt5.order_send(request)
    return result.retcode == mt5.TRADE_RETCODE_DONE`
    },
    {
      id: "p2",
      title: "Denail — Enterprise NestJS Backend API",
      description: "Arquitectura backend empresarial diseñada bajo principios SOLID y Clean Architecture para la plataforma inteligente Denail.",
      tags: ["NestJS", "TypeScript", "Supabase", "PostgreSQL", "JWT Auth"],
      githubUrl: "https://github.com/SoyRiper/Denail-Backend-NestJS",
      badge: "Backend Enterprise",
      codeSnippet: `// NestJS Coffee Insights Controller
@Controller('insights')
@UseGuards(JwtAuthGuard)
export class InsightsController {
  constructor(private readonly insightsService: InsightsService) {}

  @Get('user-productivity')
  async getProductivityMetrics(@Req() req: RequestWithUser) {
    const userId = req.user.id;
    return await this.insightsService.calculateCaffeineEffect(userId);
  }
}`
    },
    {
      id: "p3",
      title: "AI-MIDI Music Studio",
      description: "Estudio de producción musical e Inteligencia Artificial Full-Stack para composición, síntesis y generación en tiempo real de secuencias MIDI.",
      tags: ["Python Flask", "React 18", "Web Audio API", "Mido", "Music21"],
      githubUrl: "https://github.com/SoyRiper/AI-MIDI-Music-Studio",
      badge: "Audio & AI Engine",
      codeSnippet: `# MIDI Generation Engine
from mido import Message, MidiFile, MidiTrack

def generate_lofi_progression(chords, bpm=80):
    mid = MidiFile()
    track = MidiTrack()
    mid.tracks.append(track)
    
    ticks_per_beat = mid.ticks_per_beat
    for chord in chords:
        for note in chord:
            track.append(Message('note_on', note=note, velocity=64, time=0))
        track.append(Message('note_off', note=chord[0], velocity=64, time=ticks_per_beat * 2))
    
    mid.save('lofi_output.mid')
    return True`
    },
    {
      id: "p4",
      title: "Denail AI Coffee Machine Web App",
      description: "Plataforma web reactiva impulsada por Google Gemini API para recomendación inteligente de cafés según nivel de energía y tareas diarias.",
      tags: ["React 19", "TypeScript", "Google Gemini API", "Framer Motion", "Supabase"],
      githubUrl: "https://github.com/SoyRiper/Cafe-pagina-Denail",
      badge: "AI & Full-Stack",
      codeSnippet: `// Gemini AI Smart Recommendation Hook
export const useGeminiCoffeeAI = () => {
  const getAIRecommendation = async (mood: string, task: string) => {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: \`Suggest the best coffee for mood: \${mood} and task: \${task}\`,
    });
    return response.text;
  };
  return { getAIRecommendation };
};`
    },
    {
      id: "p5",
      title: "RCorps — Community & Clan Platform",
      description: "Sistema web interactivo para gestión de comunidades, clanes, perfiles de usuario y catálogo de medallas con persistencia en SQL.",
      tags: ["HTML5", "JavaScript ES6+", "SQL Migration", "Responsive Layout"],
      githubUrl: "https://github.com/SoyRiper/RCorps",
      badge: "Web Platform",
      codeSnippet: `-- SQL Migration Script for Clans & User Roles
CREATE TABLE IF NOT EXISTS clans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    tag VARCHAR(10) NOT NULL,
    leader_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
    },
    {
      id: "p6",
      title: "Geometry Dash Level Recommender Mod",
      description: "Mod desarrollado en C++17 para Geometry Dash utilizando el SDK de Geode para recomendación dinámica de niveles de la comunidad.",
      tags: ["C++17", "CMake", "Geode SDK", "Native Game Modding"],
      githubUrl: "https://github.com/SoyRiper/gd-level-recommender",
      badge: "C++ & Game Dev",
      codeSnippet: `// Geode Mod Entrypoint in C++
#include <Geode/Geode.hpp>
#include <Geode/modify/MenuLayer.hpp>

using namespace geode::prelude;

class $modify(MyMenuLayer, MenuLayer) {
    bool init() {
        if (!MenuLayer::init()) return false;
        
        auto btn = CCMenuItemSpriteExtra::create(
            CCSprite::create("recommender_icon.png"),
            this,
            menu_selector(MyMenuLayer::onRecommendLevels)
        );
        return true;
    }
};`
    }
  ],
  experience: [
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