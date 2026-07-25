import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { ResumeData } from '../types';

interface TerminalProps {
  data: ResumeData;
}

export const InteractiveTerminal: React.FC<TerminalProps> = ({ data }) => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([]);
  const [input, setInput] = useState('');
  const [typingText, setTypingText] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const initLogs = [
    "cesar@soyriper:~$ npx load-profile --user 'Cesar Morales'",
    "✔ Backend Server: NestJS / Python MT5 / Supabase [ONLINE]",
    "✔ Frontend Engine: React 19 / Vite / Framer Motion [ONLINE]",
    "✔ Public Repositories: 6 Repositories Ready"
  ];

  // Animated typewriter when section comes into view or hover
  useEffect(() => {
    setHistory([]);
    let currentLineIndex = 0;

    const runTypewriter = () => {
      if (currentLineIndex < initLogs.length) {
        const line = initLogs[currentLineIndex];
        let charIndex = 0;

        const charInterval = setInterval(() => {
          setTypingText(line.slice(0, charIndex + 1));
          charIndex++;

          if (charIndex >= line.length) {
            clearInterval(charInterval);
            setHistory((prev) => [
              ...prev,
              {
                cmd: currentLineIndex === 0 ? 'init' : 'system',
                output: <span className="text-[#C5A880]">{line}</span>
              }
            ]);
            setTypingText('');
            currentLineIndex++;
            setTimeout(runTypewriter, 200);
          }
        }, 20);
      }
    };

    runTypewriter();
  }, []);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="text-xs font-mono space-y-1 text-[#E5E5E0]">
            <p className="text-[#C5A880] font-bold">Comandos disponibles:</p>
            <p><span className="text-[#C5A880] font-bold">whoami</span>    - Biografía de Cesar Morales</p>
            <p><span className="text-[#C5A880] font-bold">projects</span>  - Lista interactiva de repositorios</p>
            <p><span className="text-[#C5A880] font-bold">skills</span>    - Stack de tecnologías Full-Stack</p>
            <p><span className="text-[#C5A880] font-bold">contact</span>   - Enlaces a LinkedIn, GitHub y Email</p>
            <p><span className="text-[#C5A880] font-bold">clear</span>     - Limpiar la pantalla</p>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-1">
            <p className="text-[#C5A880] font-bold">{data?.fullName} (@{data?.handle})</p>
            <p>Role: {data?.title}</p>
            <p>Ubicación: {data?.location}</p>
            <p className="text-[#8A8E95] font-light mt-1">{data?.bio}</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs font-mono text-[#E5E5E0] space-y-2">
            <p className="text-[#C5A880] font-bold">📂 Repositorios Públicos:</p>
            {(data?.projects || []).map((p, i) => (
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
            <p className="text-[#C5A880] font-bold">🛠️ Stack Tecnológico:</p>
            {(data?.skillGroups || []).map((g, i) => (
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
            <p>Email: <a href={`mailto:${data?.contact?.email}`} className="text-[#C5A880] underline">{data?.contact?.email}</a></p>
            <p>LinkedIn: <a href={data?.contact?.linkedin} target="_blank" rel="noreferrer" className="text-[#C5A880] underline">{data?.contact?.linkedin}</a></p>
            <p>GitHub: <a href={data?.contact?.github} target="_blank" rel="noreferrer" className="text-[#C5A880] underline">{data?.contact?.github}</a></p>
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl overflow-hidden shadow-none hover:border-[#C5A880]/40 transition-colors"
    >
      {/* Terminal Header */}
      <div className="bg-[#131416] px-4 py-3 border-b border-[#2A2C31] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <span className="ml-2 text-xs font-mono text-[#8A8E95] flex items-center gap-1.5">
            <TerminalIcon size={13} className="text-[#C5A880]" /> cesar@soyriper-terminal
          </span>
        </div>
        <span className="text-[10px] text-[#C5A880] font-mono border border-[#2A2C31] px-2 py-0.5 rounded flex items-center gap-1">
          <Sparkles size={10} /> REPOSITORIO ACTIVO
        </span>
      </div>

      {/* Quick Action Buttons */}
      <div className="bg-[#181a1d] px-4 py-2 border-b border-[#2A2C31] flex flex-wrap gap-2 text-xs font-mono">
        <span className="text-[#8A8E95] self-center text-[11px]">Acciones Rápidas:</span>
        {['whoami', 'projects', 'skills', 'contact'].map((cmd) => (
          <motion.button
            key={cmd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 bg-[#131416] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded hover:border-[#C5A880]/50 transition-all flex items-center gap-1"
          >
            <Play size={10} /> {cmd}
          </motion.button>
        ))}
      </div>

      {/* Terminal Output Stream */}
      <div className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-3 bg-[#131416]">
        {history.map((h, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#8A8E95]">
              <span className="text-[#C5A880]">cesar@soyriper:~$</span>
              <span className="text-[#E5E5E0]">{h.cmd}</span>
            </div>
            <div className="pl-3">{h.output}</div>
          </div>
        ))}
        {typingText && (
          <div className="text-[#C5A880] flex items-center gap-1">
            <span>{typingText}</span>
            <span className="w-1.5 h-4 bg-[#C5A880] animate-pulse"></span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Form */}
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
    </motion.div>
  );
};
