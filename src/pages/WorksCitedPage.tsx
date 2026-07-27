import React, { useState } from 'react';
import { MLA_SOURCES, COURSE_INFO } from '../data/courseData';
import { FileCheck2, Copy, Check, FileText, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface Props {
  onOpenTemplate: () => void;
}

export const WorksCitedPage: React.FC<Props> = ({ onOpenTemplate }) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedSingle, setCopiedSingle] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Book', 'Legal Petition', 'Report', 'International Treaty', 'Academic Journal'];

  const filteredSources = filterType === 'All' 
    ? MLA_SOURCES 
    : MLA_SOURCES.filter(s => s.type === filterType);

  const handleCopyAll = () => {
    const fullBibliography = `WORKS CITED
==================================================
Course: ${COURSE_INFO.courseCode} - ${COURSE_INFO.courseName}
Teacher: ${COURSE_INFO.teacher}

${MLA_SOURCES.map(s => s.formattedMla).join('\n\n')}
`;
    navigator.clipboard.writeText(fullBibliography);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleCopySingle = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSingle(id);
    setTimeout(() => setCopiedSingle(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>Academic Integrity • MLA 9th Edition Format</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Works Cited Page
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Informative, well-sourced, and accurately cited primary and secondary academic sources supporting the NBE3U final evaluation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              onClick={handleCopyAll}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-md cursor-pointer"
            >
              {copiedAll ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copiedAll ? 'Citations Copied!' : 'Copy All MLA Citations'}</span>
            </button>

            <button
              onClick={onOpenTemplate}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded-xl border border-slate-700 text-xs transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Research Template</span>
            </button>
          </div>
        </div>
      </div>

      {/* Citations List Container */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 font-serif">
              Works Cited
            </h2>
            <p className="text-slate-500 text-xs mt-0.5">
              Strictly formatted in MLA 9th Edition style with hanging indents and source annotations.
            </p>
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
            {types.map(t => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterType === t 
                    ? 'bg-slate-900 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Citations Items */}
        <div className="space-y-6">
          {filteredSources.map((source) => (
            <div 
              key={source.id} 
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-cyan-300 transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                <span className="text-xs bg-slate-900 text-cyan-300 font-mono font-bold px-2.5 py-0.5 rounded-full">
                  {source.type}
                </span>

                <button
                  onClick={() => handleCopySingle(source.id, source.formattedMla)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  {copiedSingle === source.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSingle === source.id ? 'Copied' : 'Copy Citation'}</span>
                </button>
              </div>

              {/* MLA Format with Hanging Indent Effect */}
              <div className="font-serif text-slate-900 text-sm sm:text-base leading-relaxed pl-6 -indent-6 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                {source.formattedMla}
              </div>

              {/* Annotation Box */}
              <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold text-[11px]">Annotation & Credibility:</strong>
                  <span>{source.annotation}</span>
                </div>
              </div>

              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-cyan-700 hover:text-cyan-900 font-bold pt-1 cursor-pointer"
                >
                  <span>Access Original Primary Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
