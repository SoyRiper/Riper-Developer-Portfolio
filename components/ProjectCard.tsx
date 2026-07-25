import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getProjectHighlights = (id: string) => {
    switch (id) {
      case 'p1':
        return [
          "Ejecución cuantitativa en tiempo real con latencia <10ms",
          "Conexión directa vía sockets a MetaTrader 5 y OANDA v20 API",
          "Dashboard interactivo en Electron.js con gestión de riesgo"
        ];
      case 'p2':
        return [
          "Arquitectura modular limpia (Clean Architecture / SOLID) en NestJS",
          "Persistencia relacional en Supabase / PostgreSQL con JWT Auth",
          "Endpoints REST optimizados con alta disponibilidad"
        ];
      case 'p3':
        return [
          "Motor de síntesis de audio en Python Flask y Web Audio API",
          "Generación y manipulación de partituras y acordes MIDI en vivo",
          "Exportador directo de pistas .mid multicanal"
        ];
      case 'p4':
        return [
          "Integración directa con el modelo Google Gemini 2.5 Flash API",
          "Recomendaciones inteligentes según hábitos de consumo",
          "Interfaz reactiva construida en React 19 y Framer Motion"
        ];
      case 'p5':
        return [
          "Gestión de comunidad, clanes y perfiles de miembros",
          "Scripts de migración SQL para estructura de tablas relacionales",
          "Catálogo interactivo de medallas e insignias"
        ];
      case 'p6':
        return [
          "Desarrollo nativo en C++17 usando CMake build system",
          "Hook sobre MenuLayer utilizando el framework SDK de Geode",
          "Recomendación dinámica de niveles directamente en Geometry Dash"
        ];
      default:
        return [
          "Código listo para entorno de producción",
          "Integración limpia de dependencias y servicios",
          "Despliegue automatizado y probado"
        ];
    }
  };

  const highlights = getProjectHighlights(project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className="bg-[#1E2024] border border-[#2A2C31] p-6 rounded-2xl hover:border-[#C5A880]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
    >
      <div>
        {/* Top Badge & External Link */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-2.5 py-1 rounded-md bg-[#131416] border border-[#2A2C31] text-[11px] font-mono text-[#C5A880] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            {project.badge}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8E95] hover:text-[#C5A880] transition-colors p-1"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <h3 className="text-lg font-bold text-[#E5E5E0] mb-2 font-display group-hover:text-[#C5A880] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-xs text-[#8A8E95] mb-5 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Feature & Architecture Highlights Panel */}
        <div className="bg-[#131416] border border-[#2A2C31] rounded-xl p-3.5 mb-5 space-y-2 font-mono text-[11px]">
          <div className="text-[#C5A880] font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-[#2A2C31]">
            <Activity size={12} /> Aspectos Clave de Ingeniería:
          </div>

          <div className="space-y-1.5 pt-1">
            {highlights.map((h, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2 text-[#E5E5E0]/90 text-[11px] leading-snug">
                <CheckCircle2 size={13} className="text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-[#2A2C31]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(project.tags || []).map((t, tIdx) => (
            <span key={tIdx} className="text-[10px] font-mono text-[#8A8E95] bg-[#131416] px-2 py-0.5 rounded border border-[#2A2C31]">
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-[#131416] hover:bg-[#2A2C31] border border-[#2A2C31] hover:border-[#C5A880]/50 text-[#E5E5E0] hover:text-[#C5A880] rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2"
        >
          <Github size={14} /> Ver Repositorio en GitHub
        </a>
      </div>
    </motion.div>
  );
};
