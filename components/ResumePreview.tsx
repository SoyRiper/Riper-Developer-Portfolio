import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Mail, Github, Linkedin, Terminal as TerminalIcon, Cpu, ShieldCheck, FolderGit2, ArrowUpRight, Sparkles, Layers, Phone, MessageSquare, Download, FileText, Award, CheckCircle } from 'lucide-react';
import { BinaryCanvas } from './BinaryCanvas';
import { TerminalIntro } from './TerminalIntro';
import { InteractiveTerminal } from './InteractiveTerminal';
import { ArchitectureMetrics } from './ArchitectureMetrics';
import { AvatarToggle } from './AvatarToggle';
import { ProjectCard } from './ProjectCard';

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const getDeviconClass = (skill: string) => {
    const s = (skill || '').toLowerCase();
    if (s.includes('rust')) return 'devicon-rust-plain text-[#C5A880]';
    if (s.includes('c++')) return 'devicon-cplusplus-plain text-[#E5E5E0]';
    if (s.includes('python')) return 'devicon-python-plain text-[#C5A880]';
    if (s.includes('nestjs') || s.includes('nest')) return 'devicon-nestjs-plain text-[#E5E5E0]';
    if (s.includes('node')) return 'devicon-nodejs-plain text-[#C5A880]';
    if (s.includes('react')) return 'devicon-react-original text-[#E5E5E0]';
    if (s.includes('typescript')) return 'devicon-typescript-plain text-[#C5A880]';
    if (s.includes('vite')) return 'devicon-vitejs-plain text-[#E5E5E0]';
    if (s.includes('sql') || s.includes('postgres')) return 'devicon-postgresql-plain text-[#C5A880]';
    if (s.includes('supabase')) return 'devicon-supabase-plain text-[#E5E5E0]';
    if (s.includes('docker')) return 'devicon-docker-plain text-[#C5A880]';
    if (s.includes('gemini') || s.includes('ai')) return 'devicon-google-plain text-[#C5A880]';
    if (s.includes('html')) return 'devicon-html5-plain text-[#E5E5E0]';
    return 'devicon-devicon-plain text-[#8A8E95]';
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#131416] text-[#E5E5E0] font-sans flex flex-col items-center relative selection:bg-[#C5A880] selection:text-[#131416]">
      
      {/* Background Stream */}
      <div className="print:hidden w-full flex flex-col items-center">
        <BinaryCanvas />
      </div>

      {/* Header Navigation */}
      <header className="print:hidden w-full max-w-6xl px-6 py-6 flex justify-between items-center border-b border-[#2A2C31] sticky top-0 bg-[#131416]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-[#E5E5E0] tracking-tight font-display text-lg block">{data?.fullName}</span>
            <span className="text-xs font-mono text-[#C5A880] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
              {data?.handle} | Discord: {data?.discordTag}
            </span>
          </div>
        </div>

        <nav className="flex gap-4 text-xs font-mono text-[#8A8E95] items-center">
          <a href="#about" className="hover:text-[#E5E5E0] transition-colors hidden lg:inline">Sobre mí</a>
          <a href="#projects" className="hover:text-[#E5E5E0] transition-colors hidden md:inline">Proyectos</a>
          <a href="#architecture" className="hover:text-[#E5E5E0] transition-colors hidden md:inline">Arquitectura</a>
          
          <button
            onClick={handlePrintCV}
            className="bg-[#C5A880] text-[#131416] font-bold px-4 py-2 rounded-xl hover:bg-[#D8BC95] transition-all font-mono text-xs flex items-center gap-1.5 shadow-md"
          >
            <FileText size={14} /> Descargar CV (PDF)
          </button>
        </nav>
      </header>

      {/* MAIN SCREEN DISPLAY */}
      <main className="print:hidden w-full max-w-6xl px-6 py-16 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2024] border border-[#2A2C31] text-[#C5A880] text-xs font-mono">
              <Award size={14} />
              <span>INGENIERO EN INFORMÁTICA Y SOFTWARE (4+ AÑOS EXP.)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#E5E5E0] font-display">
              {data?.fullName}
            </h1>

            <p className="text-lg md:text-xl text-[#C5A880] font-mono">
              {data?.title}
            </p>

            <p className="text-base text-[#8A8E95] leading-relaxed font-normal max-w-2xl">
              {data?.bio}
            </p>

            {/* ANIMATED TERMINAL INTRO WIDGET */}
            <TerminalIntro />

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-3 text-xs font-mono pt-2">
              <button
                onClick={handlePrintCV}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C5A880] text-[#131416] font-bold hover:bg-[#D8BC95] transition-all shadow-lg font-mono"
              >
                <Download size={16} /> Descargar Curriculum Vitae (PDF)
              </button>
              <a
                href={data?.contact?.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Phone size={15} className="text-[#C5A880]" /> WhatsApp: {data?.contact?.phone}
              </a>
              <a
                href={data?.contact?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Linkedin size={15} className="text-[#C5A880]" /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a
                href={data?.contact?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Github size={15} className="text-[#C5A880]" /> GitHub @SoyRiper <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* DUAL AVATAR PROFILE TOGGLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center"
          >
            <AvatarToggle
              photos={data?.photos || { real: '', avatar: '' }}
              fullName={data?.fullName || ''}
              handle={data?.handle || ''}
              linkedinUrl={data?.contact?.linkedin || ''}
            />
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex items-center gap-4">
            <FolderGit2 className="text-[#C5A880]" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Repositorios Destacados en GitHub</h2>
            <div className="h-px bg-[#2A2C31] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(data?.projects || []).map((proj, idx) => (
              <ProjectCard key={proj.id} project={proj} index={idx} />
            ))}
          </div>
        </section>

        {/* ARCHITECTURE & METRICS SECTION */}
        <section id="architecture" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-3">
              <Layers className="text-[#C5A880]" size={24} />
              <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Arquitectura de Sistemas & Métricas de Impacto</h2>
              <div className="h-px bg-[#2A2C31] flex-1"></div>
            </div>
            <p className="text-xs text-[#8A8E95] font-mono mb-4">
              Explora los patrones de diseño, rendimiento y flujo de datos de mis sistemas en producción:
            </p>
            <ArchitectureMetrics />
          </motion.div>
        </section>

        {/* INTERACTIVE TERMINAL CLI */}
        <section id="cli" className="space-y-4">
          <div className="flex items-center gap-4 mb-3">
            <TerminalIcon className="text-[#C5A880]" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Consola CLI Interactiva</h2>
            <div className="h-px bg-[#2A2C31] flex-1"></div>
          </div>
          <InteractiveTerminal data={data} />
        </section>

        {/* SKILLS / STACK SECTION */}
        <section id="stack" className="space-y-8">
          <div className="flex items-center gap-4">
            <Cpu className="text-[#C5A880]" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Arsenal Tecnológico</h2>
            <div className="h-px bg-[#2A2C31] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(data?.skillGroups || []).map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-[#1E2024] border border-[#2A2C31] p-6 rounded-2xl hover:border-[#C5A880]/50 transition-all"
              >
                <h3 className="text-xs font-bold text-[#C5A880] uppercase tracking-widest mb-5 border-b border-[#2A2C31] pb-2 font-mono">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {(group.skills || []).map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#131416] border border-[#2A2C31] hover:border-[#C5A880]/40 transition-colors">
                      <i className={`${getDeviconClass(skill)} text-2xl mb-1.5`}></i>
                      <span className="text-[11px] font-mono text-[#8A8E95] text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="work" className="space-y-8">
          <div className="flex items-center gap-4">
             <ShieldCheck className="text-[#C5A880]" size={24} />
             <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Experiencia & Trayectoria</h2>
             <div className="h-px bg-[#2A2C31] flex-1"></div>
          </div>

          <div className="space-y-8">
            {(data?.experience || []).map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-3">
                  <div className="sticky top-28">
                    <span className="font-mono text-xs text-[#C5A880] block mb-2 px-2.5 py-1 bg-[#1E2024] w-fit rounded-md border border-[#2A2C31]">
                      {job.period}
                    </span>
                    <h3 className="text-base font-bold text-[#E5E5E0] mt-3 font-display">{job.company}</h3>
                    <div className="text-xs font-mono text-[#8A8E95] mt-1">{job.role}</div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl p-6 hover:border-[#C5A880]/40 transition-colors">
                     <ul className="space-y-3">
                      {(job.description || []).map((point, i) => (
                        <li key={i} className="flex gap-3 text-[#8A8E95] leading-relaxed text-xs md:text-sm font-normal">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#C5A880] rounded-full flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* PRINT-ONLY SENIOR ATS CV VIEW */}
      <div className="hidden print:block w-full max-w-4xl p-8 bg-white text-black font-sans leading-normal">
        <div className="border-b-2 border-black pb-4 mb-5">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight">{data?.fullName}</h1>
          <p className="text-base font-bold text-gray-900 mt-0.5">INGENIERO EN INFORMÁTICA Y SOFTWARE | SENIOR FULL-STACK (4+ AÑOS DE EXPERIENCIA)</p>
          <div className="text-xs text-gray-700 flex flex-wrap gap-x-4 gap-y-1 mt-2 font-mono">
            <span><strong>Email:</strong> {data?.contact?.email}</span>
            <span><strong>WhatsApp:</strong> {data?.contact?.phone}</span>
            <span><strong>GitHub:</strong> github.com/SoyRiper</span>
            <span><strong>LinkedIn:</strong> morales-andrades</span>
            <span><strong>Discord:</strong> @soyriper</span>
            <span><strong>Roblox Dev:</strong> @Riperdeveloper</span>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">Perfil Profesional Senior</h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Ingeniero en Informática y Software con más de 4 años de experiencia demostrable en desarrollo de software Full-Stack, arquitectura backend de alta velocidad (FastAPI, NestJS, Python 3, PostgreSQL), desarrollo móvil y desktop (Flutter, Electron.js, Android Studio), bots de automatización multi-dispositivo (Selenium, Android ADB Tools), desarrollo de videojuegos en Roblox Studio (Luau, Rojo SDK) y plataformas de trading algorítmico (MetaTrader 5 SDK).
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2.5">Experiencia Profesional (4+ Años)</h2>
          <div className="space-y-3.5">
            {(data?.experience || []).map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between text-xs font-bold text-black">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-gray-800 mt-1 space-y-1">
                  {exp.description.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2.5">Proyectos Principales en GitHub</h2>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {(data?.projects || []).map((p) => (
              <div key={p.id} className="border border-gray-300 p-2 rounded">
                <div className="font-bold text-black text-[11px]">{p.title}</div>
                <div className="text-[10px] text-gray-700 mt-0.5">{p.description}</div>
                <div className="text-[9px] text-gray-600 font-mono mt-1"><strong>Stack:</strong> {p.tags.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-1 mb-2">Arsenal Tecnológico & Especialidades</h2>
          <div className="text-xs space-y-1 font-mono">
            {(data?.skillGroups || []).map((g, idx) => (
              <div key={idx}>
                <span className="font-bold text-black">{g.category}: </span>
                <span className="text-gray-800">{g.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="print:hidden w-full border-t border-[#2A2C31] mt-auto bg-[#0d0e10] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8A8E95] font-mono">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <TerminalIcon size={14} className="text-[#C5A880]" />
            <span>{data?.fullName} (@{data?.handle}) © {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap gap-6">
             <button onClick={handlePrintCV} className="text-[#C5A880] hover:underline font-bold flex items-center gap-1">
               <FileText size={12} /> Descargar CV PDF
             </button>
             <a href={data?.contact?.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">WhatsApp</a>
             <a href={data?.contact?.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">LinkedIn</a>
             <a href={data?.contact?.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
