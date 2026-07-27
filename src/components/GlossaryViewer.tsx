import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/courseData';
import { Volume2, BookMarked, HelpCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const GlossaryViewer: React.FC = () => {
  const [playingTerm, setPlayingTerm] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const simulatePronunciation = (term: string) => {
    setPlayingTerm(term);
    setTimeout(() => setPlayingTerm(null), 1800);
  };

  const faqs = [
    {
      q: "Why is sea ice so critical to Inuit identity and physical safety?",
      a: "Sea ice is not merely frozen water to Inuit; it is an irreplaceable highway, hunting platform, and cultural domain. It connects remote communities, enables traditional harvesting of marine mammals (ringed seal, bowhead whale, walrus), and provides food sovereignty. When sea ice thins unpredictably, travel becomes perilous, resulting in hunters falling through fragile ice."
    },
    {
      q: "How do Persistent Organic Pollutants (POPs) reach the pristine Arctic?",
      a: "POPs are industrial chemicals (pesticides, flame retardants, PCBs) manufactured in southern industrial regions. They evaporate in warm climates and travel northward via global atmospheric winds and ocean currents—a phenomenon known as the 'grasshopper effect'. In cold polar conditions, they condense and deposit in Arctic ecosystems, bioaccumulating heavily in fat-rich marine fat webs."
    },
    {
      q: "What was the international impact of Sheila Watt-Cloutier's 2005 IACHR Petition?",
      a: "Although the Inter-American Commission on Human Rights did not issue a binding judgment against the US, the 2005 petition forever transformed global climate diplomacy. It shifted the international climate conversation from technical economic debates to a moral and legal human rights imperative, inspiring subsequent climate litigation around the globe."
    },
    {
      q: "What is Inuit Nunangat and how many regions does it contain?",
      a: "Inuit Nunangat is the Inuktitut term for the Inuit homeland in Canada. It spans four distinct regions across northern Canada: Nunavut, Nunavik (northern Quebec), Nunatsiavut (northern Labrador), and the Inuvialuit Settlement Region (NWT). It encompasses over 50 Arctic communities."
    }
  ];

  return (
    <div className="space-y-10">
      {/* Glossary Cards */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-wider bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
            Inuktitut Terminology & Concepts
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Indigenous Glossary
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Understanding key Inuktitut terms, cultural concepts, and geographic identifiers essential for Grade 11 NBE3U studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GLOSSARY_TERMS.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-slate-50 hover:border-cyan-300 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span>{item.term}</span>
                  </h3>
                  {item.phonetic && (
                    <span className="text-xs font-mono text-cyan-700 font-semibold block mt-0.5">
                      Pronounced: /{item.phonetic}/
                    </span>
                  )}
                </div>

                <span className="text-[10px] bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded font-mono shrink-0">
                  {item.category}
                </span>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {item.meaning}
              </p>

              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold text-[11px]">Cultural Context:</strong>
                  <span>{item.culturalContext}</span>
                </div>
              </div>

              {item.phonetic && (
                <button
                  onClick={() => simulatePronunciation(item.term)}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-700 hover:text-cyan-900 font-semibold cursor-pointer pt-1"
                >
                  <Volume2 className={`w-4 h-4 ${playingTerm === item.term ? 'text-amber-500 animate-pulse' : ''}`} />
                  <span>{playingTerm === item.term ? 'Pronouncing Audio...' : 'Listen to Audio Guide'}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div>
          <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            In-Depth Course Inquiry
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Frequently Asked Questions (FAQ)
          </h3>
          <p className="text-slate-400 text-sm">
            Core analytical answers for research presentations and student discussions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/80 rounded-xl border border-slate-700/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-100 flex items-center justify-between gap-4 cursor-pointer hover:text-cyan-300"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
