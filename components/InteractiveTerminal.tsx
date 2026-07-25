import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { ResumeData } from '../types';

interface TerminalProps {
  data: ResumeData;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ data }) => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'welcome',
      output: (
        <div className="text-xs space-y-1 font-mono text-cyan-400">
          <p>⚡ Terminal de Cesar Morales (SoyRiper) v2.5.0 [x86_64-win32]</p>
          <p className="text-zinc-400">Escribe <span className="text-emerald-400 font-bold">'help'</span> para ver comandos disponibles o usa los accesos rápidos abajo.</p>
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
          <div className="text-xs font-mono space-y-1 text-zinc-300">
            <p className="text-cyan-400 font-bold">Comandos disponibles:</p>
            <p><span className="text-emerald-400 font-bold">whoami</span>    - Información de Cesar Morales / SoyRiper</p>
            <p><span className="text-emerald-400 font-bold">projects</span>  - Lista de los 6 repositorios de GitHub</p>
            <p><span className="text-emerald-400 font-bold">skills</span>    - Stack tecnológico completo</p>
            <p><span className="text-emerald-400 font-bold">contact</span>   - Enlaces a LinkedIn, GitHub y Email</p>
            <p><span className="text-emerald-400 font-bold">clear</span>     - Limpiar la pantalla de la terminal</p>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-cyan-400 font-bold">{data.fullName} ({data.handle})</p>
            <p>Role: {data.title}</p>
            <p>Ubicación: {data.location}</p>
            <p className="text-zinc-400 font-light mt-1">{data.bio}</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs font-mono text-zinc-300 space-y-2">
            <p className="text-cyan-400 font-bold">📂 Repositorios Públicos en GitHub:</p>
            {data.projects.map((p, i) => (
              <div key={i} className="pl-2 border-l border-cyan-500/40">
                <span className="text-emerald-400 font-bold">{p.title}</span> ({p.badge})
                <br />
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline hover:text-white">
                  {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-cyan-400 font-bold">🛠️ Arsenal Técnico:</p>
            {data.skillGroups.map((g, i) => (
              <p key={i}>
                <span className="text-purple-400 font-bold">[{g.category}]:</span> {g.skills.join(', ')}
              </p>
            ))}
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-cyan-400 font-bold">📬 Información de Contacto:</p>
            <p>Email: <a href={`mailto:${data.contact.email}`} className="text-emerald-400 underline">{data.contact.email}</a></p>
            <p>LinkedIn: <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{data.contact.linkedin}</a></p>
            <p>GitHub: <a href={data.contact.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{data.contact.github}</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = (
          <span className="text-xs font-mono text-rose-400">
            Comando no reconocido: '{cmdStr}'. Escribe 'help' para ver la lista de comandos.
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
    <div className="bg-[#0b0e14] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40">
      {/* Terminal Header */}
      <div className="bg-[#121722] px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-cyan-400/80 flex items-center gap-1.5">
            <TerminalIcon size={13} /> bash — cesar@soyriper-laptop:~
          </span>
        </div>
        <div className="text-[11px] font-mono text-zinc-500 hidden sm:block">
          Interactive CLI
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="bg-[#0e131d] px-4 py-2 border-b border-zinc-800 flex flex-wrap gap-2 text-xs font-mono">
        <span className="text-zinc-500 self-center text-[11px]">Ejecutar:</span>
        <button onClick={() => handleCommand('whoami')} className="px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 rounded hover:bg-cyan-900/60 transition-colors flex items-center gap-1">
          <Play size={10} /> whoami
        </button>
        <button onClick={() => handleCommand('projects')} className="px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded hover:bg-emerald-900/60 transition-colors flex items-center gap-1">
          <Play size={10} /> projects
        </button>
        <button onClick={() => handleCommand('skills')} className="px-2.5 py-1 bg-purple-950/60 border border-purple-500/30 text-purple-300 rounded hover:bg-purple-900/60 transition-colors flex items-center gap-1">
          <Play size={10} /> skills
        </button>
        <button onClick={() => handleCommand('contact')} className="px-2.5 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded hover:bg-zinc-700 transition-colors flex items-center gap-1">
          <Play size={10} /> contact
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-3">
        {history.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-emerald-400">cesar@soyriper:~$</span>
              <span className="text-white">{h.cmd}</span>
            </div>
            <div className="pl-4">{h.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={onSubmit} className="bg-[#0e131d] p-3 border-t border-cyan-500/20 flex items-center gap-2">
        <span className="text-emerald-400 font-mono text-xs">cesar@soyriper:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un comando ('help', 'projects', 'whoami')..."
          className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-zinc-600"
        />
        <button type="submit" className="p-1.5 bg-cyan-500 text-black rounded hover:bg-cyan-400 transition-colors">
          <CornerDownLeft size={14} />
        </button>
      </form>
    </div>
  );
};
