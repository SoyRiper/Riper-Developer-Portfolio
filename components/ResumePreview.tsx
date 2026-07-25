import React from 'react';
import { ResumeData } from '../types';
import { Mail, MapPin, Github, Linkedin, ExternalLink, Code2, Terminal, FolderGit2, Cpu, ShieldCheck } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  
  const getDeviconClass = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes('rust')) return 'devicon-rust-plain';
    if (s.includes('c++')) return 'devicon-cplusplus-plain';
    if (s.includes('python')) return 'devicon-python-plain';
    if (s.includes('nestjs') || s.includes('nest')) return 'devicon-nestjs-plain';
    if (s.includes('node')) return 'devicon-nodejs-plain';
    if (s.includes('react')) return 'devicon-react-original';
    if (s.includes('typescript')) return 'devicon-typescript-plain';
    if (s.includes('vite')) return 'devicon-vitejs-plain';
    if (s.includes('sql') || s.includes('postgres')) return 'devicon-postgresql-plain';
    if (s.includes('supabase')) return 'devicon-supabase-plain';
    if (s.includes('docker')) return 'devicon-docker-plain';
    if (s.includes('gemini') || s.includes('ai')) return 'devicon-google-plain';
    if (s.includes('html')) return 'devicon-html5-plain';
    return 'devicon-devicon-plain';
  };

  return (
    <div className="min-h-screen bg-page text-primary font-sans flex flex-col items-center">
      
      {/* Navigation / Top Bar */}
      <nav className="w-full max-w-6xl px-6 py-6 flex justify-between items-center border-b border-border/50 sticky top-0 bg-page/80 backdrop-blur-md z-50">
        <div className="text-xl font-bold tracking-tight flex items-center gap-3">
          <div className="w-9 h-9 bg-primary text-page flex items-center justify-center rounded-xl font-mono text-sm font-bold shadow-lg shadow-white/10">
            SR
          </div>
          <span className="tracking-wide font-mono text-base">SOY RIPER</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-subtle items-center">
           <a href="#about" className="hover:text-primary transition-colors hidden sm:inline">Sobre mí</a>
           <a href="#projects" className="hover:text-primary transition-colors">Proyectos</a>
           <a href="#stack" className="hover:text-primary transition-colors hidden sm:inline">Skills</a>
           <a href="#work" className="hover:text-primary transition-colors hidden sm:inline">Experiencia</a>
           <a href={`mailto:${data.contact.email}`} className="text-primary border border-border px-4 py-2 rounded-lg hover:bg-card hover:border-subtle transition-all font-mono text-xs">
             Contactar
           </a>
        </div>
      </nav>

      <main className="w-full max-w-6xl px-6 py-16 space-y-28">
        
        {/* HERO SECTION */}
        <section id="about" className="max-w-4xl pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-subtle text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            DISPONIBLE PARA PROYECTOS Y EMPLEO
          </div>
          
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-primary">
            Full-Stack & Systems Developer. <span className="text-subtle">Construyendo software de alto valor.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-subtle leading-relaxed max-w-3xl mb-10 font-light">
            {data.summary}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-subtle font-mono">
             <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
               <Mail size={15} /> {data.contact.email}
             </a>
             <div className="flex items-center gap-2">
               <MapPin size={15} /> {data.contact.location}
             </div>
             <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
               <Github size={15} /> GitHub / SoyRiper <ExternalLink size={13} />
             </a>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-10">
            <FolderGit2 className="text-emerald-400" size={24} />
            <h2 className="text-2xl font-semibold">Proyectos Destacados en GitHub</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((proj) => (
              <div key={proj.id} className="bg-card border border-border p-6 rounded-2xl hover:border-subtle/50 transition-all hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-page border border-border text-[11px] font-mono text-emerald-400 font-medium">
                      {proj.badge}
                    </span>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-subtle hover:text-primary transition-colors p-1">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-subtle mb-6 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono text-zinc-400 bg-page px-2 py-0.5 rounded border border-border/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS / STACK SECTION */}
        <section id="stack">
          <div className="flex items-center gap-4 mb-10">
            <Cpu className="text-blue-400" size={24} />
            <h2 className="text-2xl font-semibold">Arsenal Técnico</h2>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skillGroups.map((group, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-2xl hover:border-subtle/50 transition-all group">
                <h3 className="text-xs font-bold text-subtle uppercase tracking-widest mb-6 border-b border-border/50 pb-2">{group.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center justify-center p-3 rounded-xl bg-page border border-border/50 hover:border-subtle/40 transition-colors">
                      <i className={`${getDeviconClass(skill)} text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300`}></i>
                      <span className="text-[11px] font-mono text-subtle text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="work">
          <div className="flex items-center gap-4 mb-10">
             <ShieldCheck className="text-purple-400" size={24} />
             <h2 className="text-2xl font-semibold">Experiencia y Trayectoria</h2>
             <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="space-y-12">
            {data.experience.map((job) => (
              <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 group">
                <div className="lg:col-span-3">
                  <div className="sticky top-28">
                    <span className="font-mono text-xs text-subtle block mb-2 px-2.5 py-1 bg-card w-fit rounded-md border border-border">{job.period}</span>
                    <h3 className="text-lg font-bold text-primary mt-3">{job.company}</h3>
                    <div className="text-xs text-subtle mt-0.5 font-medium">{job.role}</div>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-subtle/50 transition-colors">
                     <ul className="space-y-4">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-subtle leading-relaxed text-sm">
                          <span className="mt-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
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
      <footer className="w-full border-t border-border mt-auto bg-card">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-xs text-subtle font-mono">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <Terminal size={15} /> 
            <span>SoyRiper © {new Date().getFullYear()} — Software Developer Portfolio</span>
          </div>
          <div className="flex gap-6">
             <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
             <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
