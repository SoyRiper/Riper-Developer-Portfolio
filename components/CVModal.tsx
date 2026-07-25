import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, Github, Linkedin, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { ResumeData } from '../types';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-none print:hidden"
        >
          {/* Modal Header Bar */}
          <div className="bg-[#131416] px-6 py-4 border-b border-[#2A2C31] flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20 print:hidden">
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={18} className="text-[#C5A880]" />
              <span className="font-mono text-xs font-bold text-[#E5E5E0] uppercase tracking-wider">
                CV Professional — {data?.fullName}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 bg-[#C5A880] text-[#131416] font-bold font-mono text-xs rounded-xl hover:bg-[#D8BC95] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Download size={14} /> Descargar / Imprimir PDF
              </button>

              <button
                onClick={onClose}
                className="p-1.5 bg-[#1E2024] hover:bg-[#2A2C31] text-[#8A8E95] hover:text-[#E5E5E0] border border-[#2A2C31] rounded-xl transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Screen Preview Content */}
          <div className="p-6 md:p-10 overflow-y-auto font-sans space-y-8 bg-[#131416] text-[#E5E5E0]">
            
            {/* Header / Intro */}
            <div className="border-b border-[#2A2C31] pb-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E2024] border border-[#2A2C31] text-[#C5A880] font-mono text-xs rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                <span>INGENIERO EN INFORMÁTICA Y SOFTWARE (4+ AÑOS EXP.)</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#E5E5E0] font-display tracking-tight">
                {data?.fullName}
              </h1>

              <p className="text-sm font-mono text-[#C5A880]">
                {data?.title}
              </p>

              {/* Contacts Grid inside CV */}
              <div className="flex flex-wrap gap-3 text-xs font-mono text-[#8A8E95] pt-2">
                <span className="flex items-center gap-1.5 bg-[#1E2024] px-3 py-1.5 rounded-lg border border-[#2A2C31] text-[#E5E5E0]">
                  <Mail size={13} className="text-[#C5A880]" /> {data?.contact?.email}
                </span>
                <span className="flex items-center gap-1.5 bg-[#1E2024] px-3 py-1.5 rounded-lg border border-[#2A2C31] text-[#E5E5E0]">
                  <Phone size={13} className="text-[#C5A880]" /> {data?.contact?.phone}
                </span>
                <span className="flex items-center gap-1.5 bg-[#1E2024] px-3 py-1.5 rounded-lg border border-[#2A2C31] text-[#E5E5E0]">
                  <MessageSquare size={13} className="text-[#C5A880]" /> Discord: {data?.discordTag}
                </span>
                <span className="flex items-center gap-1.5 bg-[#1E2024] px-3 py-1.5 rounded-lg border border-[#2A2C31] text-[#E5E5E0]">
                  <Github size={13} className="text-[#C5A880]" /> github.com/SoyRiper
                </span>
                <span className="flex items-center gap-1.5 bg-[#1E2024] px-3 py-1.5 rounded-lg border border-[#2A2C31] text-[#E5E5E0]">
                  <Linkedin size={13} className="text-[#C5A880]" /> morales-andrades
                </span>
              </div>
            </div>

            {/* Profile Bio Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-widest border-b border-[#2A2C31] pb-2">
                // Perfil Profesional Senior
              </h2>
              <p className="text-xs md:text-sm text-[#8A8E95] leading-relaxed font-normal">
                {data?.bio}
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-widest border-b border-[#2A2C31] pb-2">
                // Experiencia Laboral & Trayectoria (4+ Años)
              </h2>
              <div className="space-y-4">
                {(data?.experience || []).map((exp) => (
                  <div key={exp.id} className="bg-[#1E2024] border border-[#2A2C31] p-5 rounded-xl space-y-2">
                    <div className="flex flex-wrap justify-between items-center text-xs font-mono gap-2">
                      <span className="text-[#E5E5E0] font-bold text-sm">{exp.role} — <span className="text-[#C5A880]">{exp.company}</span></span>
                      <span className="text-[#8A8E95] bg-[#131416] px-2.5 py-0.5 rounded border border-[#2A2C31]">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {exp.description.map((d, i) => (
                        <li key={i} className="text-xs text-[#8A8E95] flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Highlights Grid */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-widest border-b border-[#2A2C31] pb-2">
                // Repositorios Principales en GitHub
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(data?.projects || []).map((p) => (
                  <div key={p.id} className="bg-[#1E2024] border border-[#2A2C31] p-4 rounded-xl space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-[#C5A880] font-bold">{p.badge}</span>
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-[#8A8E95] hover:text-[#C5A880]">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <h3 className="text-xs font-bold text-[#E5E5E0] font-display">{p.title}</h3>
                    <p className="text-[11px] text-[#8A8E95] leading-normal">{p.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="text-[9px] font-mono text-[#8A8E95] bg-[#131416] px-1.5 py-0.5 rounded border border-[#2A2C31]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-widest border-b border-[#2A2C31] pb-2">
                // Arsenal Tecnológico
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                {(data?.skillGroups || []).map((g, idx) => (
                  <div key={idx} className="bg-[#1E2024] border border-[#2A2C31] p-3.5 rounded-xl">
                    <span className="text-[#C5A880] font-bold block mb-1">{g.category}:</span>
                    <span className="text-[#8A8E95]">{g.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
