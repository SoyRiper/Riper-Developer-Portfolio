import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Play, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic simulated logs per project type
  const getSimulatedLogs = (id: string) => {
    switch (id) {
      case 'p1':
        return [
          "> Connecting to MetaTrader 5 API...",
          "> Stream ticks: EURUSD 1.0842 / BTCUSD $94,200",
          "> Risk Strategy: 0.05 lot | SL: 15pts TP: 45pts",
          "✔ Order Executed: BUY 0.05 BTCUSD"
        ];
      case 'p2':
        return [
          "> Initializing NestJS App Module...",
          "> Mounting Supabase Auth Guards...",
          "> POST /api/insights/coffee-analytics 200 OK",
          "✔ Enterprise API Online & Scalable"
        ];
      case 'p3':
        return [
          "> Loading MIDI Synthesis Engine...",
          "> Synthesizing Lofi chord progression...",
          "> Generating MIDI file: lofi_track_80bpm.mid",
          "✔ Web Audio API Output Ready"
        ];
      case 'p4':
        return [
          "> Initializing Google Gemini AI Model...",
          "> Prompt: 'Optimize caffeine intake for 8-hour dev sprint'",
          "> AI Output generated in 140ms",
          "✔ Supabase Realtime State Synced"
        ];
      case 'p5':
        return [
          "> Running SQL Migration: create_clans_table.sql",
          "> Indexing user permissions & clan badges...",
          "> Query: SELECT * FROM clans WHERE active = true",
          "✔ PostgreSQL DB Migrated Successfully"
        ];
      case 'p6':
        return [
          "> Compiling C++17 Geode Mod Layer...",
          "> Linking CMake dependencies with Geode SDK...",
          "> Injecting MenuLayer hook into Geometry Dash",
          "✔ Native C++ Mod Loaded into Game Engine"
        ];
      default:
        return [
          "> Starting application service...",
          "> Compiling assets & dependencies...",
          "> Ready for production deployment."
        ];
    }
  };

  const logs = getSimulatedLogs(project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#1E2024] border border-[#2A2C31] p-6 rounded-2xl hover:border-[#C5A880]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
    >
      <div>
        {/* Top Badge & Link */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-2.5 py-1 rounded-md bg-[#131416] border border-[#2A2C31] text-[11px] font-mono text-[#C5A880] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
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

        {/* Live Mini Terminal simulation on hover/scroll */}
        <div className="bg-[#131416] border border-[#2A2C31] rounded-xl p-3 mb-5 font-mono text-[11px] space-y-1.5 transition-all">
          <div className="flex items-center justify-between text-[#8A8E95] text-[10px] pb-1 border-b border-[#2A2C31]">
            <span className="flex items-center gap-1 text-[#C5A880]">
              <Terminal size={11} /> Terminal Simulación
            </span>
            <span>{isHovered ? 'EJECUTANDO EN VIVO' : 'PAUSADO'}</span>
          </div>

          <div className="space-y-1 pt-1">
            {logs.slice(0, isHovered ? 4 : 2).map((log, lIdx) => (
              <motion.div
                key={lIdx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: lIdx * 0.05 }}
                className={`truncate ${log.startsWith('✔') ? 'text-[#C5A880] font-bold' : 'text-[#8A8E95]'}`}
              >
                {log}
              </motion.div>
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
