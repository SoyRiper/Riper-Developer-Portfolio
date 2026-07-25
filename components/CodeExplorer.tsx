import React, { useState } from 'react';
import { Code2, Copy, Check, FileCode, Cpu } from 'lucide-react';
import { Project } from '../types';

interface CodeExplorerProps {
  projects: Project[];
}

export const CodeExplorer: React.FC<CodeExplorerProps> = ({ projects }) => {
  const projectsWithCode = projects.filter((p) => p.codeSnippet);
  const [selectedId, setSelectedId] = useState<string>(projectsWithCode[0]?.id || '');
  const [copied, setCopied] = useState<boolean>(false);

  const selectedProject = projectsWithCode.find((p) => p.id === selectedId) || projectsWithCode[0];

  const handleCopy = () => {
    if (!selectedProject?.codeSnippet) return;
    navigator.clipboard.writeText(selectedProject.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0c0e14] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl">
      {/* Tab Navigation */}
      <div className="bg-[#121622] px-4 py-3 border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Code2 className="text-cyan-400" size={18} />
          <span className="text-xs font-mono font-bold text-zinc-300 mr-2">Code Snippet Explorer:</span>
          {projectsWithCode.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedId === p.id
                  ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-semibold shadow'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              <FileCode size={13} />
              {p.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? '¡Copiado!' : 'Copiar Código'}
        </button>
      </div>

      {/* Code Display */}
      <div className="p-5 font-mono text-xs text-zinc-200 overflow-x-auto leading-relaxed bg-[#07090f]">
        <div className="text-[11px] text-cyan-400/80 mb-3 pb-2 border-b border-zinc-800/80 flex items-center justify-between">
          <span>// Proyecto: {selectedProject?.title} ({selectedProject?.badge})</span>
          <span className="text-zinc-500">Stack: {selectedProject?.tags.join(' | ')}</span>
        </div>
        <pre className="text-emerald-400/90 whitespace-pre-wrap font-mono">
          <code>{selectedProject?.codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};
