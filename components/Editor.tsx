import React, { useState } from 'react';
import { ResumeData, Experience, SkillGroup } from '../types';
import { refineTextWithGemini } from '../services/geminiService';
import { Wand2, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

interface EditorProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export const Editor: React.FC<EditorProps> = ({ data, onChange }) => {
  const [activeSection, setActiveSection] = useState<string | null>('summary');
  const [loadingAI, setLoadingAI] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleUpdate = (field: keyof ResumeData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleRefine = async (text: string, path: string, type: 'summary' | 'bullet') => {
    setLoadingAI(path);
    const refined = await refineTextWithGemini(text, type);
    setLoadingAI(null);

    if (path === 'summary') {
      handleUpdate('summary', refined);
    } else if (path.startsWith('exp-')) {
      const [_, expIndexStr, bulletIndexStr] = path.split('-');
      const expIndex = parseInt(expIndexStr);
      const bulletIndex = parseInt(bulletIndexStr);
      
      const newExp = [...data.experience];
      newExp[expIndex].description[bulletIndex] = refined;
      handleUpdate('experience', newExp);
    }
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      role: 'New Role',
      company: 'Company',
      period: 'Year - Year',
      description: ['New achievement']
    };
    handleUpdate('experience', [newExp, ...data.experience]);
  };

  return (
    <div className="bg-gray-900 border-r border-gray-800 h-full overflow-y-auto p-6 text-sm">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-neon-cyan">///</span> EDITOR
      </h2>

      {/* Profile Section */}
      <div className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50">
        <button 
          onClick={() => toggleSection('profile')}
          className="w-full p-4 flex justify-between items-center text-gray-300 hover:bg-gray-800 transition"
        >
          <span className="font-semibold">Profile & Contact</span>
          {activeSection === 'profile' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {activeSection === 'profile' && (
          <div className="p-4 space-y-3 border-t border-gray-800">
            <input 
              className="w-full bg-gray-950 border border-gray-700 p-2 rounded text-white focus:border-neon-cyan outline-none"
              placeholder="Full Name"
              value={data.fullName}
              onChange={(e) => handleUpdate('fullName', e.target.value)}
            />
            <input 
              className="w-full bg-gray-950 border border-gray-700 p-2 rounded text-white focus:border-neon-cyan outline-none"
              placeholder="Title"
              value={data.title}
              onChange={(e) => handleUpdate('title', e.target.value)}
            />
             <div className="grid grid-cols-2 gap-2">
                <input 
                  className="w-full bg-gray-950 border border-gray-700 p-2 rounded text-gray-300"
                  placeholder="Email"
                  value={data.contact.email}
                  onChange={(e) => handleUpdate('contact', {...data.contact, email: e.target.value})}
                />
                 <input 
                  className="w-full bg-gray-950 border border-gray-700 p-2 rounded text-gray-300"
                  placeholder="Location"
                  value={data.contact.location}
                  onChange={(e) => handleUpdate('contact', {...data.contact, location: e.target.value})}
                />
             </div>
          </div>
        )}
      </div>

      {/* Summary Section */}
      <div className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50">
        <button 
          onClick={() => toggleSection('summary')}
          className="w-full p-4 flex justify-between items-center text-gray-300 hover:bg-gray-800 transition"
        >
          <span className="font-semibold">Professional Summary</span>
          {activeSection === 'summary' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {activeSection === 'summary' && (
          <div className="p-4 space-y-3 border-t border-gray-800">
            <div className="relative">
              <textarea 
                className="w-full bg-gray-950 border border-gray-700 p-2 rounded text-gray-300 h-32 focus:border-neon-cyan outline-none resize-none"
                value={data.summary}
                onChange={(e) => handleUpdate('summary', e.target.value)}
              />
              <button 
                onClick={() => handleRefine(data.summary, 'summary', 'summary')}
                disabled={loadingAI === 'summary'}
                className="absolute bottom-2 right-2 bg-neon-violet/20 hover:bg-neon-violet/40 text-neon-violet p-1.5 rounded-md transition disabled:opacity-50"
                title="AI Refine"
              >
                <Wand2 size={14} className={loadingAI === 'summary' ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>
        )}
      </div>

       {/* Experience Section */}
       <div className="mb-4 border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50">
        <button 
          onClick={() => toggleSection('experience')}
          className="w-full p-4 flex justify-between items-center text-gray-300 hover:bg-gray-800 transition"
        >
          <span className="font-semibold">Experience</span>
          {activeSection === 'experience' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {activeSection === 'experience' && (
          <div className="p-4 space-y-6 border-t border-gray-800">
            {data.experience.map((exp, i) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-gray-800 hover:border-neon-cyan transition-colors">
                 <div className="grid grid-cols-2 gap-2 mb-2">
                    <input 
                      className="bg-transparent font-bold text-white outline-none"
                      value={exp.role}
                      onChange={(e) => {
                        const newExp = [...data.experience];
                        newExp[i].role = e.target.value;
                        handleUpdate('experience', newExp);
                      }}
                    />
                     <input 
                      className="bg-transparent text-right text-gray-400 outline-none text-xs"
                      value={exp.period}
                      onChange={(e) => {
                        const newExp = [...data.experience];
                        newExp[i].period = e.target.value;
                        handleUpdate('experience', newExp);
                      }}
                    />
                 </div>
                 <input 
                    className="bg-transparent text-neon-cyan text-xs outline-none mb-2 w-full"
                    value={exp.company}
                    onChange={(e) => {
                      const newExp = [...data.experience];
                      newExp[i].company = e.target.value;
                      handleUpdate('experience', newExp);
                    }}
                  />
                  
                  <div className="space-y-2">
                    {exp.description.map((bullet, j) => (
                      <div key={j} className="relative group">
                        <textarea
                          className="w-full bg-gray-950 border border-gray-800 p-2 rounded text-xs text-gray-400 focus:text-white focus:border-gray-600 outline-none resize-none h-20"
                          value={bullet}
                          onChange={(e) => {
                            const newExp = [...data.experience];
                            newExp[i].description[j] = e.target.value;
                            handleUpdate('experience', newExp);
                          }}
                        />
                         <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 rounded">
                            <button 
                              onClick={() => handleRefine(bullet, `exp-${i}-${j}`, 'bullet')}
                              disabled={loadingAI === `exp-${i}-${j}`}
                              className="text-neon-violet hover:text-white p-1"
                              title="Refine with AI"
                            >
                              <Wand2 size={12} className={loadingAI === `exp-${i}-${j}` ? 'animate-spin' : ''} />
                            </button>
                            <button 
                              onClick={() => {
                                const newExp = [...data.experience];
                                newExp[i].description.splice(j, 1);
                                handleUpdate('experience', newExp);
                              }}
                              className="text-red-500 hover:text-white p-1"
                            >
                              <Trash2 size={12} />
                            </button>
                         </div>
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newExp = [...data.experience];
                        newExp[i].description.push("New achievement...");
                        handleUpdate('experience', newExp);
                      }}
                      className="text-xs text-neon-cyan hover:underline flex items-center gap-1"
                    >
                      <Plus size={12} /> Add Bullet
                    </button>
                  </div>
              </div>
            ))}
            <button 
              onClick={addExperience}
              className="w-full py-2 border border-dashed border-gray-700 text-gray-500 hover:text-neon-cyan hover:border-neon-cyan rounded text-xs transition"
            >
              + Add Position
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
