import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, CornerDownLeft } from 'lucide-react';
import { ResumeData } from '../types';

interface TerminalProps {
  data: ResumeData;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ data }) => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'init',
      output: (
        <div className="text-xs space-y-1 font-mono text-[#C5A880]">
          <p>⚡ Entorno interactivo de Cesar Morales (SoyRiper) — Full-Stack Engineer</p>
          <p className="text-[#8A8E95]">Escribe <span className="text-[#E5E5E0] font-bold">'help'</span> para listar comandos o usa las acciones rápidas.</p>
        </div>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="text-xs font-mono space-y-1 text-[#E5E5E0]">
            <p className="text-[#C5A880] font-bold">Comandos disponibles:</p>
            <p><span className="text-[#C5A880] font-bold">whoami</span>    - Biografía y rol de Cesar Morales</p>
            <p><span className="text-[#C5A880] font-bold">projects</span>  - Ver los 6 repositorios de GitHub</p>
            <p><span className="text-[#C5A880] font-bold">skills</span>    - Ver stack de tecnologías</p>
            <p><span className="text-[#C5A880] font-bold">contact</span>   - Canales directos de contacto</p>
            <p><span className="text-[#C5A880] font-bold">clear</span>     - Limpiar pantalla</p>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-1">
            <p className="text-[#C5A880] font-bold">{data.fullName} (@{data.handle})</p>
            <p>Role: {data.title}</p>
            <p>Ubicación: {data.location}</p>
            <p className="text-[#8A8E95] font-light mt-1">{data.bio}</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-2">
            <p className="text-[#C5A880] font-bold">📂 Repositorios en GitHub:</p>
            {data.projects.map((p, i) => (
              <div key={i} className="pl-2 border-l border-[#C5A880]/50">
                <span className="text-[#E5E5E0] font-bold">{p.title}</span> ({p.badge})
                <br />
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-[#C5A880] underline">
                  {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-1">
            <p className="text-[#C5A880] font-bold">🛠️ Stack de Desarrollo:</p>
            {data.skillGroups.map((g, i) => (
              <p key={i}>
                <span className="text-[#8A8E95] font-bold">[{g.category}]:</span> {g.skills.join(', ')}
              </p>
            ))}
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-1">
            <p className="text-[#C5A880] font-bold">📬 Contacto Directo:</p>
            <p>Email: <a href={`mailto:${data.contact.email}`} className="text-[#C5A880] underline">{data.contact.email}</a></p>
            <p>LinkedIn: <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#C5A880] underline">{data.contact.linkedin}</a></p>
            <p>GitHub: <a href={data.contact.github} target="_blank" rel="noreferrer" className="text-[#C5A880] underline">{data.contact.github}</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = (
          <span className="text-xs font-mono text-rose-400">
            Comando no válido: '{cmdStr}'. Escribe 'help' para comandos disponibles.
          </span>
        );
    }

    setHistory((prev) => [...prev, { cmd: cmdStr, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl overflow-hidden shadow-none">
      {/* Header */}
      <div className="bg-[#131416] px-4 py-3 border-b border-[#2A2C31] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <span className="ml-2 text-xs font-mono text-[#8A8E95] flex items-center gap-1.5">
            <TerminalIcon size={13} className="text-[#C5A880]" /> cesar@soyriper-environment
          </span>
        </div>
        <span className="text-[10px] text-[#C5A880] font-mono border border-[#2A2C31] px-2 py-0.5 rounded">
          SYSTEM ACTIVE
        </span>
      </div>

      {/* Quick Action Buttons */}
      <div className="bg-[#181a1d] px-4 py-2 border-b border-[#2A2C31] flex flex-wrap gap-2 text-xs font-mono">
        <span className="text-[#8A8E95] self-center text-[11px]">Acción:</span>
        <button onClick={() => handleCommand('whoami')} className="px-2.5 py-1 bg-[#131416] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded hover:border-[#C5A880]/50 transition-colors flex items-center gap-1">
          <Play size={10} /> whoami
        </button>
        <button onClick={() => handleCommand('projects')} className="px-2.5 py-1 bg-[#131416] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded hover:border-[#C5A880]/50 transition-colors flex items-center gap-1">
          <Play size={10} /> projects
        </button>
        <button onClick={() => handleCommand('skills')} className="px-2.5 py-1 bg-[#131416] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded hover:border-[#C5A880]/50 transition-colors flex items-center gap-1">
          <Play size={10} /> skills
        </button>
        <button onClick={() => handleCommand('contact')} className="px-2.5 py-1 bg-[#131416] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded hover:border-[#C5A880]/50 transition-colors flex items-center gap-1">
          <Play size={10} /> contact
        </button>
      </div>

      {/* Terminal Output */}
      <div className="p-4 h-60 overflow-y-auto font-mono text-xs space-y-3 bg-[#131416]">
        {history.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#8A8E95]">
              <span className="text-[#C5A880]">cesar@soyriper:~$</span>
              <span className="text-[#E5E5E0]">{h.cmd}</span>
            </div>
            <div className="pl-3">{h.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="bg-[#181a1d] p-3 border-t border-[#2A2C31] flex items-center gap-2">
        <span className="text-[#C5A880] font-mono text-xs">cesar@soyriper:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe 'help', 'projects' o 'whoami'..."
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-[#E5E5E0] placeholder-[#8A8E95]"
        />
        <button type="submit" className="p-1.5 bg-[#C5A880] text-[#131416] font-bold rounded hover:bg-[#D8BC95] transition-colors">
          <CornerDownLeft size={13} />
        </button>
      </form>
    </div>
  );
};
