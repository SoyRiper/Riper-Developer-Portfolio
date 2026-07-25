import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Play, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');

  const getSimulatedLogs = (id: string) => {
    switch (id) {
      case 'p1':
        return [
          "> Initializing MetaTrader 5 API Connector...",
          "> Connecting to OANDA v20 REST Endpoint...",
          "> Subscribing WebSocket Ticks: EUR/USD & BTC/USD...",
          "> Quantitative Risk Calculation: Lot 0.05 | SL: 15pts",
          "✔ Order Executed: BUY 0.05 BTC/USD @ $94,200 [SUCCESS]"
        ];
      case 'p2':
        return [
          "> Starting NestJS Microservice Kernel...",
          "> Registering Supabase Auth Guards & JWT Module...",
          "> Compiling Coffee Analytics & Insights Routes...",
          "> POST /api/v1/insights/productivity 200 OK (24ms)",
          "✔ Enterprise NestJS API Ready for High Latency Traffic"
        ];
      case 'p3':
        return [
          "> Loading Web Audio & Python Flask Engine...",
          "> Generating Lofi Chord Sequence: Cmaj7 -> Am7 -> Dm7 -> G7...",
          "> Synthesizing MIDI stream file: lofi_beat_80bpm.mid...",
          "> Exporting Web Audio Stream & Buffer...",
          "✔ AI MIDI Track Rendered & Ready for Playback"
        ];
      case 'p4':
        return [
          "> Connecting to Google Gemini 2.5 Flash API...",
          "> Prompt Payload: 'Analyze caffeine degradation curve'...",
          "> Fetching Supabase User Profile & Coffee Logs...",
          "> AI Response received in 110ms",
          "✔ Smart Recommendation Rendered on React 19 Frontend"
        ];
      case 'p5':
        return [
          "> Executing PostgreSQL Migration: create_clans_table.sql...",
          "> Creating Indexes on User IDs, Clan Badges & Ranks...",
          "> SELECT * FROM clans WHERE active = true;",
          "> 24 Clans Loaded | 120 Members Active",
          "✔ SQL Relational Database Migrated & Fully Synced"
        ];
      case 'p6':
        return [
          "> Invoking C++17 Compiler via CMake Build System...",
          "> Linking Geode SDK Header Definitions & Hooks...",
          "> Detouring MenuLayer::init() in Geometry Dash Binary...",
          "> Injecting Custom Level Recommender UI Layer...",
          "✔ Native C++ Mod Injected into Game Engine Successfully"
        ];
      default:
        return [
          "> Starting project compilation...",
          "> Validating dependencies & build target...",
          "> Launching production service...",
          "✔ Application Status: ONLINE & READY"
        ];
    }
  };

  const fullLogs = getSimulatedLogs(project.id);

  const startSimulation = () => {
    setActiveLogs([]);
    setLogIndex(0);
    setCurrentText('');
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (logIndex < fullLogs.length) {
      const line = fullLogs[logIndex];
      let charIdx = 0;

      const charTimer = setInterval(() => {
        setCurrentText(line.slice(0, charIdx + 1));
        charIdx++;

        if (charIdx >= line.length) {
          clearInterval(charTimer);
          setActiveLogs((prev) => [...prev, line]);
          setCurrentText('');
          setLogIndex((prev) => prev + 1);
        }
      }, 15);

      return () => clearInterval(charTimer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, logIndex, fullLogs]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => {
        if (!isRunning && activeLogs.length === 0) {
          startSimulation();
        }
      }}
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

        {/* LIVE ANIMATED MINI TERMINAL */}
        <div className="bg-[#131416] border border-[#2A2C31] rounded-xl p-3.5 mb-5 font-mono text-[11px] space-y-1.5 transition-all">
          <div className="flex items-center justify-between text-[#8A8E95] text-[10px] pb-1.5 border-b border-[#2A2C31]">
            <span className="flex items-center gap-1 text-[#C5A880] font-bold">
              <Terminal size={12} /> Consola en Vivo
            </span>
            <button
              onClick={startSimulation}
              className="text-[#C5A880] hover:text-[#E5E5E0] bg-[#1E2024] border border-[#2A2C31] px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
            >
              {isRunning ? <RefreshCw size={10} className="animate-spin" /> : <Play size={10} />}
              <span>{isRunning ? 'Ejecutando...' : '▶ Simular'}</span>
            </button>
          </div>

          <div className="space-y-1 pt-1 min-h-[90px] max-h-[110px] overflow-y-auto">
            {activeLogs.map((log, lIdx) => (
              <div
                key={lIdx}
                className={`truncate ${
                  log.startsWith('✔')
                    ? 'text-[#C5A880] font-bold'
                    : log.startsWith('>')
                    ? 'text-[#E5E5E0]'
                    : 'text-[#8A8E95]'
                }`}
              >
                {log}
              </div>
            ))}

            {isRunning && currentText && (
              <div className="text-[#C5A880] font-semibold flex items-center gap-1">
                <span>{currentText}</span>
                <span className="w-1.5 h-3.5 bg-[#C5A880] animate-pulse"></span>
              </div>
            )}

            {!isRunning && activeLogs.length === 0 && (
              <div className="text-[#8A8E95] italic py-2 text-[10px]">
                Pasa el mouse o presiona '▶ Simular' para ejecutar comandos en vivo...
              </div>
            )}
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
