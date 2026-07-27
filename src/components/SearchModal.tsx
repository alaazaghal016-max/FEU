import React, { useState } from 'react';
import { ActivePage } from '../types';
import { RESEARCH_TEMPLATE, GLOSSARY_TERMS, MLA_SOURCES, TIMELINE_EVENTS } from '../data/courseData';
import { Search, X, ChevronRight, FileText, Globe } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setActivePage: (page: ActivePage) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, setActivePage }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchQuery = query.toLowerCase().trim();

  // Search items across all site content
  const results: Array<{
    title: string;
    description: string;
    targetPage: ActivePage;
    category: string;
  }> = [];

  if (searchQuery.length >= 2) {
    // 1. Search Research Template / Core concepts
    if ('sheila watt-cloutier'.includes(searchQuery) || 'advocate'.includes(searchQuery)) {
      results.push({
        title: "Sheila Watt-Cloutier (Siila) Profile",
        description: "Inuk climate activist, author of The Right to Be Cold, ICC Chair, 2005 IACHR petition leader.",
        targetPage: 'advocate',
        category: 'Advocate'
      });
    }

    if ('iachr'.includes(searchQuery) || 'petition'.includes(searchQuery) || 'legal'.includes(searchQuery) || 'human rights'.includes(searchQuery)) {
      results.push({
        title: "2005 IACHR Climate Human Rights Petition",
        description: "Historic 177-page petition submitted to Inter-American Commission linking GHG emissions to human rights.",
        targetPage: 'issue',
        category: 'Legal Action'
      });
    }

    if ('pops'.includes(searchQuery) || 'stockholm'.includes(searchQuery) || 'toxins'.includes(searchQuery) || 'food'.includes(searchQuery)) {
      results.push({
        title: "Persistent Organic Pollutants (POPs) & Food Sovereignty",
        description: "Bioaccumulation of toxic industrial chemicals in Arctic seal blubber, whales, and mother's breast milk.",
        targetPage: 'issue',
        category: 'Issue Analysis'
      });
    }

    if ('5rs'.includes(searchQuery) || 'resilience'.includes(searchQuery) || 'resistance'.includes(searchQuery) || 'reclamation'.includes(searchQuery)) {
      results.push({
        title: "The 5Rs Framework: Resilience, Resistance & Reclamation",
        description: "Connecting course concepts to Inuit adaptation, legal defense, and restoration of Inuit Qaujimajatuqangit.",
        targetPage: 'advocate',
        category: 'Course Concepts'
      });
    }

    if ('reflection'.includes(searchQuery) || 'opinion'.includes(searchQuery) || 'assumptions'.includes(searchQuery)) {
      results.push({
        title: "Student Critical Reflection & Analysis",
        description: "Answering the 5 rubric prompts on significance, challenged assumptions, audience, and consequences.",
        targetPage: 'reflection',
        category: 'Critical Evaluation'
      });
    }

    if ('mp'.includes(searchQuery) || 'action'.includes(searchQuery) || 'letter'.includes(searchQuery) || 'pledge'.includes(searchQuery)) {
      results.push({
        title: "Interactive MP Letter Generator & Action Pathways",
        description: "Customizable letter generator to email local Member of Parliament and personal advocacy pledge checklist.",
        targetPage: 'action',
        category: 'Take Action'
      });
    }

    // Search Glossary
    GLOSSARY_TERMS.forEach(g => {
      if (g.term.toLowerCase().includes(searchQuery) || g.meaning.toLowerCase().includes(searchQuery)) {
        results.push({
          title: `Glossary: ${g.term}`,
          description: g.meaning,
          targetPage: 'glossary',
          category: 'Vocabulary'
        });
      }
    });

    // Search Sources
    MLA_SOURCES.forEach(s => {
      if (s.title.toLowerCase().includes(searchQuery) || s.author.toLowerCase().includes(searchQuery)) {
        results.push({
          title: `Citation: ${s.title}`,
          description: sourceFormattedSummary(s.formattedMla),
          targetPage: 'citation',
          category: 'MLA Works Cited'
        });
      }
    });
  }

  function sourceFormattedSummary(text: string) {
    return text.length > 90 ? text.substring(0, 90) + '...' : text;
  }

  const handleSelectResult = (page: ActivePage) => {
    setActivePage(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col">
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-cyan-600 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Google Site (e.g. Sheila Watt-Cloutier, POPs, IACHR, 5Rs, MP letter...)"
            autoFocus
            className="w-full bg-transparent text-slate-900 text-sm sm:text-base font-medium placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          {query.length < 2 ? (
            <div className="py-8 text-center text-slate-400 text-xs sm:text-sm">
              Type at least 2 characters to search across all site modules...
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs sm:text-sm">
              No direct matches found for "{query}". Try keywords like "Sheila", "POPs", "Inuit", "5Rs", "Petition".
            </div>
          ) : (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectResult(res.targetPage)}
                className="w-full text-left p-3.5 rounded-xl border border-slate-200/90 hover:border-cyan-400 hover:bg-cyan-50/50 transition-all flex items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-slate-900 text-cyan-300 font-mono font-bold px-2 py-0.5 rounded">
                      {res.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-cyan-800">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1">{res.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="bg-slate-100 px-4 py-2.5 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between font-mono">
          <span>Search Grade 11 NBE3U Google Site Index</span>
          <span>Esc to Close</span>
        </div>
      </div>
    </div>
  );
};
