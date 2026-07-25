import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
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
    <div className="w-full max-w-sm bg-[#1E2024] border border-[#2A2C31] rounded-2xl p-6 relative overflow-hidden">
      {/* Tab Selector */}
      <div className="flex bg-[#131416] p-1 rounded-xl border border-[#2A2C31] mb-6">
        <button
          onClick={() => setActiveTab('real')}
          className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 ${
            activeTab === 'real'
              ? 'bg-[#C5A880] text-[#131416] font-bold'
              : 'text-[#8A8E95] hover:text-[#E5E5E0]'
          }`}
        >
          <UserCheck size={13} /> Retrato Real
        </button>
        <button
          onClick={() => setActiveTab('avatar')}
          className={`flex-1 py-2 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 ${
            activeTab === 'avatar'
              ? 'bg-[#C5A880] text-[#131416] font-bold'
              : 'text-[#8A8E95] hover:text-[#E5E5E0]'
          }`}
        >
          <ShieldCheck size={13} /> Avatar Dev
        </button>
      </div>

      {/* Photo Frame */}
      <div className="relative w-full h-80 rounded-xl overflow-hidden border border-[#2A2C31] mb-5 bg-[#131416] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeTab === 'real' ? (
            <motion.img
              key="real"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              src={photos.real}
              alt={fullName}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <motion.img
              key="avatar"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              src={photos.avatar}
              alt={handle}
              className="w-full h-full object-cover object-center"
            />
          )}
        </AnimatePresence>

        <div className="absolute bottom-3 left-3 right-3 bg-[#131416]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#2A2C31] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#E5E5E0] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            {activeTab === 'real' ? 'Cesar Morales' : 'SoyRiper'}
          </span>
          <span className="text-[#8A8E95] text-[10px]">
            {activeTab === 'real' ? 'Verificado' : 'Discord / Git'}
          </span>
        </div>
      </div>

      {/* Info & LinkedIn Button */}
      <div className="space-y-3 text-center">
        <div>
          <h3 className="text-base font-bold text-[#E5E5E0] font-display tracking-tight">{fullName}</h3>
          <p className="text-xs font-mono text-[#C5A880] mt-0.5">@{handle}</p>
        </div>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-[#131416] hover:bg-[#2A2C31] border border-[#2A2C31] text-[#E5E5E0] hover:text-[#C5A880] rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2"
        >
          <span>Perfil Oficial LinkedIn</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
};
