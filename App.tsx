import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResumePreview } from './components/ResumePreview';
import { INITIAL_RESUME } from './constants';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-white selection:text-black">
      <ResumePreview data={INITIAL_RESUME} />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(<App />);