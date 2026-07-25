import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Zap, Activity, Globe } from 'lucide-react';

export const ArchitectureMetrics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reebca' | 'backend' | 'fintech' | 'ai'>('reebca');

  const architectures = {
    reebca: {
      title: "Plataforma Empresarial REEBCA (FastAPI, React 18, VPS & PostgreSQL)",
      metrics: [
        { label: "Tiempo Respuesta API", value: "< 18ms", desc: "API REST asíncrona construida con FastAPI & Uvicorn" },
        { label: "Despliegue VPS", value: "Automatizado", desc: "Scripts Python para Nginx, Gunicorn y Systemd Daemon" },
        { label: "Gestión de Datos", value: "PostgreSQL", desc: "Módulos de agendamiento, clientes e inventario de insumos" }
      ],
      flow: ["React 18 Frontend", "FastAPI / Uvicorn Server", "PostgreSQL Engine", "Linux VPS / Nginx Reverse Proxy"]
    },
    backend: {
      title: "Arquitectura Backend Empresarial (NestJS & Supabase)",
      metrics: [
        { label: "Tiempo de Respuesta API", value: "< 24ms", desc: "Endpoints optimizados con NestJS y JWT Guard" },
        { label: "Manejo de Solicitudes", value: "+100k/día", desc: "Persistencia escalable en PostgreSQL / Supabase" },
        { label: "Estructura de Código", value: "SOLID", desc: "Clean Architecture con módulos independientes" }
      ],
      flow: ["Cliente React 19", "Guards & Pipes NestJS", "Servicios de Dominio", "Base de Datos Supabase"]
    },
    fintech: {
      title: "Motor de Trading Algorítmico & Cuantitativo (MT5 & OANDA)",
      metrics: [
        { label: "Latencia de Ejecución", value: "< 10ms", desc: "Comunicación directa por sockets con MetaTrader 5" },
        { label: "Protocolo de Datos", value: "WebSockets", desc: "Transmisión de ticks y libro de órdenes en tiempo real" },
        { label: "Gestión de Riesgo", value: "Automatizada", desc: "Cálculo en vivo de Stop Loss & Take Profit" }
      ],
      flow: ["Terminal MT5 / OANDA", "Socket Receiver Python 3", "Risk Management Engine", "Electron Dashboard"]
    },
    ai: {
      title: "Integración de IA & Procesamiento de Audio (Gemini & MIDI Engine)",
      metrics: [
        { label: "Generación de Prompts", value: "110ms", desc: "Invocación a la API de Google Gemini 2.5 Flash" },
        { label: "Síntesis de Audio", value: "Real-Time", desc: "Generación y renderizado de archivos MIDI en tiempo real" },
        { label: "Procesamiento Web", value: "Web Audio API", desc: "Buffer multicanal e interfaz reactiva" }
      ],
      flow: ["Prompt de Usuario", "Gemini AI Model / Flask Backend", "MIDI Synthesizer Engine", "Web Audio Player"]
    }
  };

  const current = architectures[activeTab];

  return (
    <div className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl p-6 md:p-8 space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-[#2A2C31]">
        <button
          onClick={() => setActiveTab('reebca')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'reebca'
              ? 'bg-[#C5A880] text-[#131416] font-bold shadow-md'
              : 'bg-[#131416] text-[#8A8E95] border border-[#2A2C31] hover:text-[#E5E5E0]'
          }`}
        >
          <Globe size={14} /> REEBCA (FastAPI + VPS)
        </button>
        <button
          onClick={() => setActiveTab('backend')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'backend'
              ? 'bg-[#C5A880] text-[#131416] font-bold shadow-md'
              : 'bg-[#131416] text-[#8A8E95] border border-[#2A2C31] hover:text-[#E5E5E0]'
          }`}
        >
          <Server size={14} /> NestJS Enterprise
        </button>
        <button
          onClick={() => setActiveTab('fintech')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'fintech'
              ? 'bg-[#C5A880] text-[#131416] font-bold shadow-md'
              : 'bg-[#131416] text-[#8A8E95] border border-[#2A2C31] hover:text-[#E5E5E0]'
          }`}
        >
          <Zap size={14} /> FinTech & Trading
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
            activeTab === 'ai'
              ? 'bg-[#C5A880] text-[#131416] font-bold shadow-md'
              : 'bg-[#131416] text-[#8A8E95] border border-[#2A2C31] hover:text-[#E5E5E0]'
          }`}
        >
          <Cpu size={14} /> AI & Audio Engine
        </button>
      </div>

      {/* Architecture Title */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-[#E5E5E0] font-display flex items-center gap-2">
          <Activity size={18} className="text-[#C5A880]" /> {current.title}
        </h3>
      </div>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {current.metrics.map((m, idx) => (
          <div key={idx} className="bg-[#131416] border border-[#2A2C31] p-4 rounded-xl space-y-1">
            <span className="text-[11px] font-mono text-[#8A8E95]">{m.label}</span>
            <div className="text-2xl font-bold text-[#C5A880] font-mono">{m.value}</div>
            <p className="text-xs text-[#E5E5E0]/80 font-light">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Pipeline Flow Diagram */}
      <div className="bg-[#131416] border border-[#2A2C31] p-4 rounded-xl space-y-3 font-mono text-xs">
        <span className="text-[#8A8E95] text-[11px] font-bold block">// Flujo de Datos e Infraestructura:</span>
        <div className="flex flex-wrap items-center gap-2">
          {current.flow.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="px-3 py-1.5 bg-[#1E2024] border border-[#2A2C31] rounded-lg text-[#E5E5E0]">
                {step}
              </span>
              {idx < current.flow.length - 1 && (
                <span className="text-[#C5A880] font-bold">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
