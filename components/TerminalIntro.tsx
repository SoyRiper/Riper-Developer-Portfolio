import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, RefreshCw, Play } from 'lucide-react';

export const TerminalIntro: React.FC = () => {
  const lines = [
    "cesar@soyriper:~$ npx init-environment --engineer 'Cesar Morales'",
    "[SYSTEM] Loading Full-Stack modules: NestJS, Python 3, React 19, TypeScript, C++17...",
    "[SYSTEM] Connecting to FinTech Trading APIs: MetaTrader 5 & OANDA v20... [OK]",
    "[SYSTEM] Initializing AI Engine: Google Gemini API & Supabase... [OK]",
    "✔ Status: Entorno activo y listo para desarrollo de software."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);

  const restartTypewriter = () => {
    setCompletedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsTyping(true);
  };

  useEffect(() => {
    if (!isTyping) return;

    if (currentLineIndex < lines.length) {
      const currentFullLine = lines[currentLineIndex];

      if (currentCharIndex < currentFullLine.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, 25);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCompletedLines((prev) => [...prev, currentFullLine]);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
        return () => clearTimeout(timer);
      }
    } else {
      setIsTyping(false);
    }
  }, [currentLineIndex, currentCharIndex, isTyping, lines]);

  return (
    <div
      onMouseEnter={() => {
        if (!isTyping && completedLines.length === lines.length) {
          restartTypewriter();
        }
      }}
      className="w-full bg-[#1E2024] border border-[#2A2C31] rounded-2xl overflow-hidden font-mono text-xs my-6 transition-all hover:border-[#C5A880]/60 shadow-xl group"
    >
      {/* Terminal Bar Header */}
      <div className="bg-[#131416] px-4 py-2.5 border-b border-[#2A2C31] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-[#8A8E95] text-[11px] flex items-center gap-1.5 font-bold">
            <Terminal size={13} className="text-[#C5A880]" /> cesar_morales_init.sh
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={restartTypewriter}
            className="text-[10px] text-[#C5A880] bg-[#131416] hover:bg-[#2A2C31] border border-[#2A2C31] px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
          >
            <RefreshCw size={10} className={isTyping ? 'animate-spin' : ''} />
            <span>{isTyping ? 'Escribiendo...' : 'Re-ejecutar'}</span>
          </button>
        </div>
      </div>

      {/* Terminal Screen Stream */}
      <div className="p-5 space-y-2.5 min-h-[160px] bg-[#131416] text-[#E5E5E0]">
        {completedLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-start gap-2 ${
              line.startsWith('✔')
                ? 'text-[#C5A880] font-bold'
                : line.startsWith('cesar@')
                ? 'text-[#E5E5E0] font-semibold'
                : 'text-[#8A8E95]'
            }`}
          >
            {line.startsWith('✔') ? (
              <CheckCircle2 size={14} className="text-[#C5A880] flex-shrink-0 mt-0.5" />
            ) : line.startsWith('cesar@') ? (
              <span className="text-[#C5A880] font-bold">&gt;</span>
            ) : (
              <span className="text-[#8A8E95]">&gt;</span>
            )}
            <span>{line}</span>
          </motion.div>
        ))}

        {/* Current Active Animated Line */}
        {isTyping && currentLineIndex < lines.length && (
          <div className="flex items-start gap-2 text-[#E5E5E0]">
            <span className="text-[#C5A880] font-bold">&gt;</span>
            <span>{lines[currentLineIndex].substring(0, currentCharIndex)}</span>
            <span className="w-2 h-4 bg-[#C5A880] animate-pulse inline-block align-middle ml-0.5"></span>
          </div>
        )}

        {!isTyping && (
          <div className="pt-2 text-[11px] text-[#8A8E95] flex items-center gap-2">
            <Sparkles size={12} className="text-[#C5A880]" />
            <span>Pasa el cursor por la consola para reiniciar el tipeo en vivo</span>
          </div>
        )}
      </div>
    </div>
  );
};
