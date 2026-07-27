import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { ActivePage } from '../types';
import { Globe, FileText, Heart, ArrowUp } from 'lucide-react';

interface Props {
  setActivePage: (page: ActivePage) => void;
  onOpenTemplate: () => void;
}

export const Footer: React.FC<Props> = ({ setActivePage, onOpenTemplate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          {/* Col 1: Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-7 h-7 rounded bg-cyan-600 flex items-center justify-center text-white">
                <Globe className="w-4 h-4" />
              </div>
              <span>Arctic Climate Justice & Inuit Advocacy</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              A Grade 11 NBE3U website investigating Arctic warming, Persistent Organic Pollutants, and Inuit human rights advocacy through the leadership of Sheila Watt-Cloutier.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <span>{COURSE_INFO.courseCode}</span>
              <span>•</span>
              <span>{COURSE_INFO.teacher}</span>
              <span>•</span>
              <span>Due: {COURSE_INFO.dueDate}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Site Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => { setActivePage('home'); scrollToTop(); }} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('issue'); scrollToTop(); }} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  The Issue: Arctic Climate Crisis
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('advocate'); scrollToTop(); }} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  The Advocate: Sheila Watt-Cloutier
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('reflection'); scrollToTop(); }} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Critical Reflection & Analysis
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('action'); scrollToTop(); }} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Take Action (MP Letter Generator)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Evaluation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Course Evaluation
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenTemplate}
                className="w-full text-left bg-slate-900 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>View Research Template (Step 3)</span>
              </button>
              <button
                onClick={() => { setActivePage('citation'); scrollToTop(); }}
                className="w-full text-left bg-slate-900 hover:bg-slate-800 p-2.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                <span>MLA Works Cited (6 Sources)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Grade 11 NBE3U Final Evaluation Project. Formatted for Google Sites publishing.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
