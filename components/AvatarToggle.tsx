import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Bot, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { ProfilePhotos } from '../types';

interface AvatarToggleProps {
  photos: ProfilePhotos;
  fullName: string;
  handle: string;
  linkedinUrl: string;
}

export const AvatarToggle: React.FC<AvatarToggleProps> = ({ photos, fullName, handle, linkedinUrl }) => {
  const [activeTab, setActiveTab] = useState<'real' | 'avatar'>('real');

  return (
    <div className="w-full max-w-sm bg-[#0d111a] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
      {/* Background Ambient Light */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-all"></div>
      
      {/* Mode Switcher Tabs */}
      <div className="flex bg-[#07090e] p-1.5 rounded-2xl border border-slate-800 mb-6 relative z-10">
        <button
          onClick={() => setActiveTab('real')}
          className={`flex-1 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 ${
            activeTab === 'real'
              ? 'bg-cyan-500 text-black font-bold shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <UserCheck size={14} /> Foto Real
        </button>
        <button
          onClick={() => setActiveTab('avatar')}
          className={`flex-1 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 ${
            activeTab === 'avatar'
              ? 'bg-emerald-500 text-black font-bold shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Bot size={14} /> Avatar Cyber
        </button>
      </div>

      {/* Animated Photo Container */}
      <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-slate-700/80 mb-5 shadow-inner bg-[#07090e] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'real' ? (
            <motion.img
              key="real-photo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={photos.real}
              alt={fullName}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <motion.img
              key="avatar-photo"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={photos.avatar}
              alt={handle}
              className="w-full h-full object-cover object-center"
            />
          )}
        </AnimatePresence>

        <div className="absolute bottom-3 left-3 right-3 bg-[#07090e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-300 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${activeTab === 'real' ? 'bg-cyan-400' : 'bg-emerald-400'} animate-pulse`}></span>
            {activeTab === 'real' ? 'Cesar Morales' : 'SoyRiper'}
          </span>
          <span className="text-slate-400">{activeTab === 'real' ? 'Verificado' : 'Discord Dev'}</span>
        </div>
      </div>

      {/* Developer Card Info */}
      <div className="text-center space-y-2 relative z-10">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-center gap-1.5">
          {fullName} <ShieldCheck size={16} className="text-cyan-400" />
        </h3>
        <p className="text-xs font-mono text-cyan-400">@{handle}</p>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full py-2.5 px-4 bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2"
        >
          <span>Ver Perfil en LinkedIn</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};
