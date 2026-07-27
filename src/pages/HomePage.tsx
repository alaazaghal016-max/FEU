import React from 'react';
import { ActivePage } from '../types';
import { RESEARCH_TEMPLATE, HERO_IMAGE_PATH, ADVOCATE_IMAGE_PATH, COURSE_INFO } from '../data/courseData';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  UserCheck, 
  BrainCircuit, 
  Flame, 
  BookMarked, 
  FileCheck2, 
  Quote, 
  TrendingUp, 
  Award, 
  Globe2 
} from 'lucide-react';

interface Props {
  setActivePage: (page: ActivePage) => void;
  onOpenTemplate: () => void;
}

export const HomePage: React.FC<Props> = ({ setActivePage, onOpenTemplate }) => {
  return (
    <div className="space-y-12">
      {/* Hero Banner Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 text-white min-h-[460px] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_PATH}
            alt="Arctic Sea Ice Horizon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 filter contrast-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 px-3 py-1 rounded-full backdrop-blur-md">
              Grade 11 NBE3U Final Evaluation Project
            </span>
            <span className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full backdrop-blur-md">
              Ms. Jangra
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-200">
              Arctic Climate Justice & Inuit Advocacy
            </span>
          </h1>

          {/* Research Question & Thesis Card */}
          <div className="bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-700/80 shadow-xl space-y-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                Central Research Question
              </span>
              <p className="text-slate-200 text-sm sm:text-base font-semibold">
                "{RESEARCH_TEMPLATE.researchQuestion}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold block mb-1">
                Core Thesis Statement
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {RESEARCH_TEMPLATE.thesisStatement}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActivePage('issue')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              <span>Explore The Arctic Issue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('advocate')}
              className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-semibold px-5 py-3 rounded-xl border border-slate-700 shadow-md transition-all cursor-pointer text-sm"
            >
              <span>Advocate Profile (Sheila Watt-Cloutier)</span>
            </button>

            <button
              onClick={onOpenTemplate}
              className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-semibold px-4 py-3 rounded-xl border border-amber-500/40 text-sm transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Step 3 Research Template</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Statistics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 font-black text-xl shrink-0">
            3×
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Warming Velocity</div>
            <div className="text-sm font-bold text-slate-900">Arctic Warming Rate</div>
            <div className="text-xs text-slate-600">3× faster than global average</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Circumpolar Voice</div>
            <div className="text-sm font-bold text-slate-900">150,000+ Inuit</div>
            <div className="text-xs text-slate-600">Across Canada, Greenland, US, Russia</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Legal Precedent</div>
            <div className="text-sm font-bold text-slate-900">2005 IACHR Petition</div>
            <div className="text-xs text-slate-600">First climate human rights case</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Inuktitut Term</div>
            <div className="text-sm font-bold text-slate-900">Uggianaqtuq</div>
            <div className="text-xs text-slate-600">Weather behaving unpredictably</div>
          </div>
        </div>
      </div>

      {/* Featured Advocate Spotlight Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
          <img
            src={ADVOCATE_IMAGE_PATH}
            alt="Sheila Watt-Cloutier"
            referrerPolicy="no-referrer"
            className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="text-[10px] bg-cyan-600 text-white px-2.5 py-0.5 rounded font-mono font-bold uppercase">
              Inuk Climate Pioneer
            </span>
            <h4 className="text-lg font-bold">Sheila Watt-Cloutier (Siila)</h4>
            <p className="text-xs text-slate-300">Former International Chair, Inuit Circumpolar Council</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
            Featured Indigenous Advocate
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Sheila Watt-Cloutier: <br />
            <span className="text-cyan-300">Arctic Climate & Human Rights Leader</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Born in Kuujjuaq, Nunavik, Sheila Watt-Cloutier has spent over three decades reframing global environmental strategy. She led negotiations representing 150,000+ Inuit, spearheading the 2001 Stockholm Convention banning persistent organic pollutants and filing the landmark 2005 climate human rights petition.
          </p>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-xs sm:text-sm text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Award className="w-4 h-4" />
              <span>Major Honours & Recognition</span>
            </div>
            <p className="text-slate-300">
              Officer of the Order of Canada • Nobel Peace Prize Nominee (2007) • Right Livelihood Award (2015) • UN Champion of the Earth.
            </p>
          </div>

          <button
            onClick={() => setActivePage('advocate')}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-md transition-colors text-sm cursor-pointer"
          >
            <span>Read Full Advocate Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Website Sections Grid (Google Sites Overview) */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Issue */}
          <div 
            onClick={() => setActivePage('issue')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              The Issue: Arctic Climate Crisis
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-depth research on Arctic warming rates, thinning sea ice hazards, permafrost thaw, and toxic Persistent Organic Pollutants (POPs) bioaccumulating in traditional country foods.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>View Historical & Scientific Analysis</span> &rarr;
            </span>
          </div>

          {/* Card 2: Advocate */}
          <div 
            onClick={() => setActivePage('advocate')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              The Advocate: Sheila Watt-Cloutier
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore Siila's biography, key organizations (ICC, Makivik), the 2005 IACHR petition, her memoir 'The Right to Be Cold', and connection to the 5Rs framework.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>View Advocacy & Milestones</span> &rarr;
            </span>
          </div>

          {/* Card 3: Reflection */}
          <div 
            onClick={() => setActivePage('reflection')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-200 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              Critical Reflection & Analysis
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thorough student critical reflection answering all 5 rubric prompts (Significance Today, Challenged Assumptions, Why Care, Most Compelling Evidence, Inaction Consequences).
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>Read Analysis & Take Quiz</span> &rarr;
            </span>
          </div>

          {/* Card 4: Take Action */}
          <div 
            onClick={() => setActivePage('action')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              Take Action! (MP Letter Tool)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Interactive advocacy tool generating a customized email letter to your Canadian Member of Parliament urging Arctic emissions reduction and TRC environmental stewardship.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>Generate MP Advocacy Letter</span> &rarr;
            </span>
          </div>

          {/* Card 5: Glossary */}
          <div 
            onClick={() => setActivePage('glossary')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <BookMarked className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              Glossary & FAQs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inuktitut vocabulary definitions (*Inuit Qaujimajatuqangit*, *Uggianaqtuq*, *Inuit Nunangat*) with simulated audio pronunciation guides and course FAQs.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>Explore Inuktitut Terms & FAQs</span> &rarr;
            </span>
          </div>

          {/* Card 6: Works Cited */}
          <div 
            onClick={() => setActivePage('citation')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
              Works Cited (MLA Format)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              6 accurately cited primary and secondary academic sources formatted strictly in MLA 9th Edition style with annotations, URLs, and instant copy buttons.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 group-hover:translate-x-1 transition-transform">
              <span>View MLA Citations</span> &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
