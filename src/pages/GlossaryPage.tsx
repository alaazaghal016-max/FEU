import React from 'react';
import { GlossaryViewer } from '../components/GlossaryViewer';
import { BookMarked } from 'lucide-react';

export const GlossaryPage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase font-bold tracking-wider">
          <BookMarked className="w-4 h-4" />
          <span>Cultural Vocabulary & FAQs • Step 2 Requirement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Indigenous Terminology & FAQs
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Master Inuktitut terms, cultural concepts, geographical distinctions, and key analytical questions for Grade 11 NBE3U studies.
        </p>
      </div>

      <GlossaryViewer />
    </div>
  );
};
