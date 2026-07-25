import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code2, Terminal as TerminalIcon, Cpu, ShieldCheck, FolderGit2, ArrowUpRight } from 'lucide-react';
import { BinaryCanvas } from './BinaryCanvas';
import { TerminalIntro } from './TerminalIntro';
import { InteractiveTerminal } from './InteractiveTerminal';
import { CodeExplorer } from './CodeExplorer';
import { AvatarToggle } from './AvatarToggle';

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const getDeviconClass = (skill: string) => {
    const s = skill.toLowerCase();
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

  return (
    <div className="min-h-screen bg-[#131416] text-[#E5E5E0] font-sans flex flex-col items-center relative selection:bg-[#C5A880] selection:text-[#131416]">
      
      {/* Background Animated Binary/Code Matrix Stream */}
      <BinaryCanvas />

      {/* Editorial Header Navigation */}
      <header className="w-full max-w-6xl px-6 py-6 flex justify-between items-center border-b border-[#2A2C31] sticky top-0 bg-[#131416]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-[#E5E5E0] tracking-tight font-display text-lg block">{data.fullName}</span>
            <span className="text-xs font-mono text-[#C5A880] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
              {data.handle}
            </span>
          </div>
        </div>

        <nav className="flex gap-8 text-xs font-mono text-[#8A8E95] items-center">
          <a href="#about" className="hover:text-[#E5E5E0] transition-colors hidden md:inline">Sobre mí</a>
          <a href="#projects" className="hover:text-[#E5E5E0] transition-colors">Proyectos</a>
          <a href="#code" className="hover:text-[#E5E5E0] transition-colors hidden md:inline">Código</a>
          <a href="#stack" className="hover:text-[#E5E5E0] transition-colors hidden md:inline">Stack</a>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A880] border border-[#2A2C31] px-4 py-2 rounded-xl hover:bg-[#1E2024] hover:border-[#C5A880]/60 transition-all font-mono text-xs flex items-center gap-1.5"
          >
            <Linkedin size={13} /> LinkedIn <ArrowUpRight size={12} />
          </a>
        </nav>
      </header>

      <main className="w-full max-w-6xl px-6 py-16 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2024] border border-[#2A2C31] text-[#C5A880] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
              <span>FULL-STACK & SYSTEMS ENGINEER</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#E5E5E0] font-display">
              {data.fullName}
            </h1>

            <p className="text-lg md:text-xl text-[#C5A880] font-mono">
              {data.title}
            </p>

            <p className="text-base text-[#8A8E95] leading-relaxed font-normal max-w-2xl">
              {data.bio}
            </p>

            {/* ANIMATED TERMINAL INTRO WIDGET */}
            <TerminalIntro />

            <div className="flex flex-wrap gap-4 text-xs font-mono pt-2">
              <a
                href={`mailto:${data.contact.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Mail size={15} className="text-[#C5A880]" /> {data.contact.email}
              </a>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Linkedin size={15} className="text-[#C5A880]" /> LinkedIn Perfil <ArrowUpRight size={13} />
              </a>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E2024] border border-[#2A2C31] text-[#E5E5E0] hover:border-[#C5A880]/60 hover:text-[#C5A880] transition-all"
              >
                <Github size={15} className="text-[#C5A880]" /> GitHub @SoyRiper <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* DUAL AVATAR PROFILE TOGGLE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <AvatarToggle
              photos={data.photos}
              fullName={data.fullName}
              handle={data.handle}
              linkedinUrl={data.contact.linkedin}
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
            {data.projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#1E2024] border border-[#2A2C31] p-6 rounded-2xl hover:border-[#C5A880]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#131416] border border-[#2A2C31] text-[11px] font-mono text-[#C5A880] font-medium">
                      {proj.badge}
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8A8E95] hover:text-[#C5A880] transition-colors p-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-[#E5E5E0] mb-2 font-display group-hover:text-[#C5A880] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#8A8E95] mb-6 leading-relaxed font-normal">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2C31]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-[#8A8E95] bg-[#131416] px-2 py-0.5 rounded border border-[#2A2C31]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-[#131416] hover:bg-[#2A2C31] border border-[#2A2C31] hover:border-[#C5A880]/50 text-[#E5E5E0] hover:text-[#C5A880] rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={14} /> Ver Repositorio en GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CODE EXPLORER SECTION */}
        <section id="code" className="space-y-4">
          <div className="flex items-center gap-4">
            <Code2 className="text-[#C5A880]" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-[#E5E5E0] font-display">Inspector de Código de Producción</h2>
            <div className="h-px bg-[#2A2C31] flex-1"></div>
          </div>
          <p className="text-xs text-[#8A8E95] font-mono">
            Selecciona un proyecto para examinar fragmentos de código real (Python MT5, NestJS, AI Gemini, C++ Geode Mod):
          </p>
          <CodeExplorer projects={data.projects} />
        </section>

        {/* INTERACTIVE TERMINAL CLI */}
        <section id="cli" className="space-y-4">
          <div className="flex items-center gap-4">
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
            {data.skillGroups.map((group, idx) => (
              <div key={idx} className="bg-[#1E2024] border border-[#2A2C31] p-6 rounded-2xl hover:border-[#C5A880]/40 transition-all">
                <h3 className="text-xs font-bold text-[#C5A880] uppercase tracking-widest mb-5 border-b border-[#2A2C31] pb-2 font-mono">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#131416] border border-[#2A2C31] hover:border-[#C5A880]/30 transition-colors">
                      <i className={`${getDeviconClass(skill)} text-2xl mb-1.5`}></i>
                      <span className="text-[11px] font-mono text-[#8A8E95] text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
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
            {data.experience.map((job) => (
              <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                  <div className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl p-6 hover:border-[#2A2C31] transition-colors">
                     <ul className="space-y-3">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-[#8A8E95] leading-relaxed text-xs md:text-sm font-normal">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#C5A880] rounded-full flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#2A2C31] mt-auto bg-[#0d0e10] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#8A8E95] font-mono">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <TerminalIcon size={14} className="text-[#C5A880]" />
            <span>{data.fullName} (@{data.handle}) © {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-8">
             <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">LinkedIn</a>
             <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880] transition-colors">GitHub</a>
             <a href={`mailto:${data.contact.email}`} className="hover:text-[#C5A880] transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
