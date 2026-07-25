import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

export const TerminalIntro: React.FC = () => {
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
    <div className="w-full bg-[#1E2024] border border-[#2A2C31] rounded-2xl overflow-hidden font-mono text-xs my-6">
      {/* Header */}
      <div className="bg-[#131416] px-4 py-2.5 border-b border-[#2A2C31] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2A2C31]"></div>
          <span className="ml-2 text-[#8A8E95] text-[11px] flex items-center gap-1.5">
            <Terminal size={12} className="text-[#C5A880]" /> environment_init.sh
          </span>
        </div>
        <span className="text-[10px] text-[#C5A880] border border-[#2A2C31] px-2 py-0.5 rounded font-mono">
          READY
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 min-h-[150px] text-[#E5E5E0]">
        <div className="flex items-center gap-2 text-[#C5A880] font-semibold text-sm md:text-base">
          <ChevronRight size={18} className="text-[#C5A880] animate-pulse" />
          <span>{displayedText}</span>
          <span className="w-2 h-5 bg-[#C5A880] animate-pulse inline-block"></span>
        </div>

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="pl-6 space-y-1.5 text-xs text-[#8A8E95]"
          >
            <div className="flex items-center gap-2 text-[#E5E5E0] font-medium">
              <CheckCircle2 size={14} className="text-[#C5A880]" />
              <span>Sistemas Backend: NestJS, Python 3, Node.js, C++17, PostgreSQL, Supabase</span>
            </div>
            <div className="flex items-center gap-2 text-[#E5E5E0] font-medium">
              <CheckCircle2 size={14} className="text-[#C5A880]" />
              <span>Sistemas Frontend: React 19, TypeScript, Vite, TailwindCSS, Framer Motion</span>
            </div>
          </motion.div>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 pt-3 border-t border-[#2A2C31] flex flex-wrap items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-center gap-2 text-[#C5A880]">
              <Sparkles size={14} />
              <span>Status: Listo para desarrollo de aplicaciones Full-Stack y FinTech</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
