import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../types';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code2, Terminal as TerminalIcon, Cpu, ShieldCheck, Sparkles, FolderGit2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    if (s.includes('rust')) return 'devicon-rust-plain text-orange-400';
    if (s.includes('c++')) return 'devicon-cplusplus-plain text-purple-400';
    if (s.includes('python')) return 'devicon-python-plain text-yellow-400';
    if (s.includes('nestjs') || s.includes('nest')) return 'devicon-nestjs-plain text-rose-500';
    if (s.includes('node')) return 'devicon-nodejs-plain text-emerald-500';
    if (s.includes('react')) return 'devicon-react-original text-cyan-400';
    if (s.includes('typescript')) return 'devicon-typescript-plain text-blue-400';
    if (s.includes('vite')) return 'devicon-vitejs-plain text-purple-400';
    if (s.includes('sql') || s.includes('postgres')) return 'devicon-postgresql-plain text-blue-300';
    if (s.includes('supabase')) return 'devicon-supabase-plain text-emerald-400';
    if (s.includes('docker')) return 'devicon-docker-plain text-blue-500';
    if (s.includes('gemini') || s.includes('ai')) return 'devicon-google-plain text-amber-400';
    if (s.includes('html')) return 'devicon-html5-plain text-orange-500';
    return 'devicon-devicon-plain text-slate-400';
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans flex flex-col items-center selection:bg-cyan-500 selection:text-black relative">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-10 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Sticky Top Header Navigation */}
      <header className="w-full max-w-6xl px-6 py-4 flex justify-between items-center border-b border-slate-800/80 sticky top-0 bg-[#07090e]/90 backdrop-blur-2xl z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-400 text-black flex items-center justify-center rounded-xl font-mono text-sm font-extrabold shadow-lg shadow-cyan-500/20">
            CM
          </div>
          <div>
            <span className="font-bold text-white tracking-tight text-base block">{data.fullName}</span>
            <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              {data.handle}
            </span>
          </div>
        </div>

        <nav className="flex gap-6 text-xs font-mono text-slate-300 items-center">
          <a href="#about" className="hover:text-cyan-400 transition-colors hidden md:inline">Sobre mí</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#code" className="hover:text-cyan-400 transition-colors hidden md:inline">Código</a>
          <a href="#stack" className="hover:text-cyan-400 transition-colors hidden md:inline">Stack</a>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 border border-cyan-500/40 px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-mono text-xs flex items-center gap-1.5"
          >
            <Linkedin size={13} /> LinkedIn <ArrowUpRight size={12} />
          </a>
        </nav>
      </header>

      <main className="w-full max-w-6xl px-6 py-10 space-y-24 relative z-10">
        
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
              <span>DESARROLLADOR FULL-STACK & SISTEMAS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
              {data.fullName}
            </h1>

            <p className="text-lg md:text-xl text-cyan-400 font-mono font-medium">
              {data.title}
            </p>

            <p className="text-base text-slate-300 leading-relaxed font-light max-w-2xl">
              {data.bio}
            </p>

            {/* ANIMATED TERMINAL INTRO WIDGET */}
            <TerminalIntro />

            <div className="flex flex-wrap gap-4 text-xs font-mono pt-2">
              <a
                href={`mailto:${data.contact.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-sm"
              >
                <Mail size={15} className="text-cyan-400" /> {data.contact.email}
              </a>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-950/50 border border-blue-700/60 text-blue-300 hover:border-blue-400 transition-all shadow-sm"
              >
                <Linkedin size={15} className="text-blue-400" /> LinkedIn Perfil Oficial <ArrowUpRight size={13} />
              </a>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/50 border border-purple-700/60 text-purple-300 hover:border-purple-400 transition-all shadow-sm"
              >
                <Github size={15} className="text-purple-400" /> GitHub @SoyRiper <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* DUAL AVATAR PROFILE TOGGLE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          <div className="flex items-center gap-3">
            <FolderGit2 className="text-emerald-400" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">Repositorios Destacados en GitHub</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0c0f18] border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#07090e] border border-slate-700 text-[11px] font-mono text-emerald-400 font-medium">
                      {proj.badge}
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-300 bg-[#07090e] px-2 py-0.5 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-slate-900 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 rounded-xl text-xs font-mono transition-all flex items-center justify-center gap-2"
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
          <div className="flex items-center gap-3">
            <Code2 className="text-purple-400" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">Inspector de Código de Producción</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Selecciona un proyecto para examinar la estructura y sintaxis del código real desarrollado:
          </p>
          <CodeExplorer projects={data.projects} />
        </section>

        {/* INTERACTIVE TERMINAL CLI */}
        <section id="cli" className="space-y-4">
          <div className="flex items-center gap-3">
            <TerminalIcon className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">Consola CLI Interactiva</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>
          <InteractiveTerminal data={data} />
        </section>

        {/* SKILLS / STACK SECTION */}
        <section id="stack" className="space-y-8">
          <div className="flex items-center gap-3">
            <Cpu className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">Arsenal Tecnológico</h2>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-[#0c0f18] border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all"
              >
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-5 border-b border-slate-800 pb-2 font-mono">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#07090e] border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <i className={`${getDeviconClass(skill)} text-2xl mb-1.5`}></i>
                      <span className="text-[11px] font-mono text-slate-300 text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="work" className="space-y-8">
          <div className="flex items-center gap-3">
             <ShieldCheck className="text-emerald-400" size={24} />
             <h2 className="text-2xl font-bold tracking-tight text-white font-mono">Experiencia & Roles</h2>
             <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="space-y-8">
            {data.experience.map((job) => (
              <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <div className="sticky top-28">
                    <span className="font-mono text-xs text-cyan-400 block mb-2 px-2.5 py-1 bg-[#0c0f18] w-fit rounded-md border border-slate-800">
                      {job.period}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3">{job.company}</h3>
                    <div className="text-xs font-mono text-slate-400 mt-1">{job.role}</div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="bg-[#0c0f18] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
                     <ul className="space-y-3">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 leading-relaxed text-xs md:text-sm font-light">
                          <span className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
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
      <footer className="w-full border-t border-slate-800/80 mt-auto bg-[#040609] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-mono">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span>{data.fullName} (@{data.handle}) © {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
             <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
             <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
             <a href={`mailto:${data.contact.email}`} className="hover:text-emerald-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
