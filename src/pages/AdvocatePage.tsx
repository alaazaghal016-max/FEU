import React, { useState } from 'react';
import { RESEARCH_TEMPLATE, ADVOCATE_IMAGE_PATH } from '../data/courseData';
import { FiveRsSection } from '../components/FiveRsSection';
import { UserCheck, Award, BookOpen, Quote, Landmark, Globe, Sparkles, ChevronRight } from 'lucide-react';

export const AdvocatePage: React.FC = () => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const quotes = [
    {
      quote: "The right to be cold is inseparable from the human right to life, health, culture, and security. When Arctic ice melts, our culture begins to slip away into the sea.",
      source: "The Right to Be Cold (2015)"
    },
    {
      quote: "We are not victims of environmental destruction; we are sentinel messengers providing humanity with an early warning system from the Arctic.",
      source: "UN Climate Summit Keynote Speech"
    },
    {
      quote: "Inuit Qaujimajatuqangit teaches us that everything is connected. You cannot pollute the air in the South without harming the mother's milk in the North.",
      source: "Stockholm Convention Negotiations (2001)"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider">
          <UserCheck className="w-4 h-4" />
          <span>Advocate Focus • Step 1 & Step 3</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          The Advocate: Sheila Watt-Cloutier (Siila)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Inuk political leader, author, and Nobel Peace Prize nominee who pioneered the historical legal linkage between global climate change and basic human rights.
        </p>
      </div>

      {/* Advocate Profile Overview */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative min-h-[380px]">
          <img
            src={ADVOCATE_IMAGE_PATH}
            alt="Sheila Watt-Cloutier Inuk Advocate"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="text-[10px] bg-cyan-600 text-white font-mono px-2 py-0.5 rounded font-bold uppercase">
              Inuktitut Name: Siila
            </span>
            <h3 className="text-xl font-bold">Sheila Watt-Cloutier</h3>
            <p className="text-xs text-slate-300">Born in Kuujjuaq, Nunavik (Northern Quebec)</p>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Identity & Roles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transforming Global Environmental Diplomacy
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block font-bold text-sm mb-1">Identity & Heritage:</strong>
              <p>{RESEARCH_TEMPLATE.advocateDetails.identity}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block font-bold text-sm mb-1">Actions & Leadership Roles:</strong>
              <p>{RESEARCH_TEMPLATE.advocateDetails.actionsAndRoles}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-slate-900 block font-bold text-sm mb-1">Key Organizations:</strong>
              <p>{RESEARCH_TEMPLATE.advocateDetails.organizations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Major Milestones Grid */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Major Advocacy Milestones & Breakthroughs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Historical campaigns led by Watt-Cloutier that reshaped international law and climate policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Milestone 1: Stockholm Convention */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-700 uppercase">2001 GLOBAL TREATY</span>
            <h3 className="text-lg font-bold text-slate-900">Stockholm Convention on POPs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Representing over 150,000 Inuit, Sheila lobbied international delegates with nursing mothers' milk evidence to successfully secure a binding global treaty banning 'the Dirty Dozen' toxic persistent organic pollutants.
            </p>
          </div>

          {/* Milestone 2: 2005 IACHR Petition */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600/30 text-rose-300 flex items-center justify-center font-bold">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-rose-400 uppercase">DEC 7, 2005 LANDMARK</span>
            <h3 className="text-lg font-bold text-white">177-Page IACHR Legal Petition</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Filed the world's first climate change human rights petition with the Inter-American Commission on Human Rights, asserting that high GHG emissions directly violate Inuit cultural and bodily integrity.
            </p>
          </div>

          {/* Milestone 3: Memoir & Recognition */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 uppercase">2015 MEMOIR & AWARDS</span>
            <h3 className="text-lg font-bold text-slate-900">The Right to Be Cold</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Authored her acclaimed book documenting Arctic culture. Received the Officer of the Order of Canada, Right Livelihood Award (2015), and Nobel Peace Prize nomination (2007).
            </p>
          </div>
        </div>
      </div>

      {/* Quote Explorer Box */}
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Quote className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Words of Sheila Watt-Cloutier</h3>
          </div>
          <div className="flex gap-2">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveQuoteIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activeQuoteIdx === idx ? 'bg-cyan-400 w-6' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <blockquote className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed">
            "{quotes[activeQuoteIdx].quote}"
          </blockquote>
          <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            — {quotes[activeQuoteIdx].source}
          </p>
        </div>
      </div>

      {/* Connection to 5Rs Component */}
      <FiveRsSection />
    </div>
  );
};
