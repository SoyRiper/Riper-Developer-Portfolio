import React, { useState } from 'react';
import { Code2, Copy, Check, FileCode } from 'lucide-react';
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
    <div className="bg-[#1E2024] border border-[#2A2C31] rounded-2xl overflow-hidden shadow-none">
      {/* Tab Navigation */}
      <div className="bg-[#131416] px-4 py-3 border-b border-[#2A2C31] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Code2 className="text-[#C5A880]" size={18} />
          <span className="text-xs font-mono font-bold text-[#E5E5E0] mr-2">Inspector de Código:</span>
          {projectsWithCode.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedId === p.id
                  ? 'bg-[#C5A880] text-[#131416] font-bold'
                  : 'bg-[#1E2024] text-[#8A8E95] border border-[#2A2C31] hover:text-[#E5E5E0]'
              }`}
            >
              <FileCode size={13} />
              {p.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 bg-[#131416] hover:bg-[#2A2C31] border border-[#2A2C31] text-[#E5E5E0] text-xs font-mono rounded-lg transition-colors flex items-center gap-1.5"
        >
          {copied ? <Check size={14} className="text-[#C5A880]" /> : <Copy size={14} />}
          {copied ? '¡Copiado!' : 'Copiar Código'}
        </button>
      </div>

      {/* Code Display */}
      <div className="p-5 font-mono text-xs text-[#E5E5E0] overflow-x-auto leading-relaxed bg-[#131416]">
        <div className="text-[11px] text-[#8A8E95] mb-3 pb-2 border-b border-[#2A2C31] flex items-center justify-between">
          <span>// Proyecto: {selectedProject?.title}</span>
          <span className="text-[#C5A880]">Stack: {selectedProject?.tags.join(' | ')}</span>
        </div>
        <pre className="text-[#E5E5E0] whitespace-pre-wrap font-mono">
          <code>{selectedProject?.codeSnippet}</code>
        </pre>
      </div>
    </div>
  );
};
