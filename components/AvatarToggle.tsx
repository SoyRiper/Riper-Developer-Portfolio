import React, { useState } from 'react';
import { User, Sparkles, Shield, RefreshCw } from 'lucide-react';
import { ProfilePhotos } from '../types';

interface AvatarToggleProps {
  photos: ProfilePhotos;
  fullName: string;
  handle: string;
}

export const AvatarToggle: React.FC<AvatarToggleProps> = ({ photos, fullName, handle }) => {
  const [isRealPhoto, setIsRealPhoto] = useState(true);

  return (
    <div className="relative group">
      {/* Outer Glow Ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-500"></div>

      <div className="relative bg-[#0e121e] border border-cyan-500/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
        {/* Photo Frame */}
        <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-inner mb-5 group-hover:scale-105 transition-transform duration-500">
          <img
            src={isRealPhoto ? photos.real : photos.avatar}
            alt={isRealPhoto ? fullName : handle}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 border border-cyan-500/30">
            {isRealPhoto ? 'Modo Real' : 'Modo Cyber'}
          </div>
        </div>

        {/* Identity Info */}
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
          {fullName}
        </h2>
        <p className="text-xs font-mono text-cyan-400 mt-1 mb-4 flex items-center gap-1">
          <Shield size={12} /> @{handle}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setIsRealPhoto(!isRealPhoto)}
          className="w-full py-2 px-4 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-sm"
        >
          <RefreshCw size={13} className="animate-spin-slow" />
          Cambiar Vista: {isRealPhoto ? 'Ver Avatar Discord' : 'Ver Foto Real'}
        </button>
      </div>
    </div>
  );
};
