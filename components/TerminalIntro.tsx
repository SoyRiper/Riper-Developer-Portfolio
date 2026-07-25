import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface TerminalIntroProps {
  onComplete?: () => void;
}

export const TerminalIntro: React.FC<TerminalIntroProps> = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [step, setStep] = useState(0);

  const fullText = "cesar@soyriper:~$ npx init-profile --name 'Cesar Morales' --role 'Full-Stack Developer'";

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timer1 = setTimeout(() => setStep(1), 400);
      const timer2 = setTimeout(() => setStep(2), 900);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [textIndex, fullText]);

  return (
    <div className="w-full bg-[#0a0d16] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/40 font-mono text-xs my-6">
      {/* Terminal Header */}
      <div className="bg-[#101422] px-4 py-2.5 border-b border-cyan-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-zinc-400 text-[11px] flex items-center gap-1.5">
            <Terminal size={12} className="text-cyan-400" /> cesar_morales_environment.sh
          </span>
        </div>
        <span className="text-[10px] text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
          SYSTEM ACTIVE
        </span>
      </div>

      {/* Terminal Animated Content */}
      <div className="p-5 space-y-3 min-h-[160px] text-zinc-300">
        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm md:text-base">
          <ChevronRight size={18} className="text-emerald-400 animate-pulse" />
          <span>{displayedText}</span>
          <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block"></span>
        </div>

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pl-6 space-y-1.5 text-xs text-zinc-400"
          >
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <CheckCircle2 size={14} />
              <span>Core Modules Initialized: NestJS, React 19, Python, C++, Supabase, AI API</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-300 font-medium">
              <CheckCircle2 size={14} strokeWidth={2.5} />
              <span>Public Repositories Loaded: 6 Active GitHub Projects</span>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <Sparkles size={14} />
              <span>Estado: Disponible para proyectos y oportunidades de empleo</span>
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">
              [ Presiona Scroll para explorar ]
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
