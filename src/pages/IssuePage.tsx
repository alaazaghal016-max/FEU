import React from 'react';
import { RESEARCH_TEMPLATE, FOOD_SOVEREIGNTY_IMAGE_PATH } from '../data/courseData';
import { InteractiveTimeline } from '../components/InteractiveTimeline';
import { ShieldAlert, MapPin, Calendar, Users, AlertTriangle, Activity, Waves, Sparkles } from 'lucide-react';

export const IssuePage: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase font-bold tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Research Deep-Dive • Step 1 & Step 3</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          The Issue: Arctic Climate Crisis & Environmental Degradation
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Examining how unprecedented Arctic warming, toxic chemical bioaccumulation, and rapid sea-ice loss threaten physical safety, food sovereignty, and cultural survival across Inuit Nunangat.
        </p>
      </div>

      {/* Historical Context Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            1
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 block">
              Background & Foundations
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Historical Context: From Autonomy to Frontline Injustice
            </h2>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
          <p className="bg-slate-50 p-5 rounded-2xl border border-slate-200 font-medium text-slate-800">
            {RESEARCH_TEMPLATE.historicalContext}
          </p>

          <p>
            Historically, Inuit communities maintained a highly sophisticated, nomadic land-use economy perfectly tuned to seasonal sea ice dynamics. However, mid-20th century federal government policies imposed permanent settlement, residential schooling, and forced relocation (such as the High Arctic relocations). 
          </p>
          <p>
            Simultaneously, industrial expansion in southern North America and Europe unleashed massive greenhouse gas emissions and toxic persistent organic pollutants (POPs) that migrated northward through atmospheric winds and ocean currents. Consequently, Inuit communities were placed on the frontlines of global environmental degradation without having contributed to or consented to southern industrial pollution.
          </p>
        </div>
      </div>

      {/* Detailed Issue Breakdown Grid (Who, What, Where, When, Why) */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            5-W Issue Analysis
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Systematic breakdown of affected populations, environmental mechanisms, geography, and consequences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Who */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-800 uppercase block">WHO IS AFFECTED?</span>
            <h3 className="text-lg font-bold text-slate-900">Inuit Across Inuit Nunangat</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {RESEARCH_TEMPLATE.issueDetails.who}
            </p>
          </div>

          {/* What */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-rose-800 uppercase block">WHAT IS THE ISSUE?</span>
            <h3 className="text-lg font-bold text-slate-900">Unprecedented 3× Arctic Warming</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {RESEARCH_TEMPLATE.issueDetails.what}
            </p>
          </div>

          {/* Where */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-teal-800 uppercase block">WHERE DOES IT OCCUR?</span>
            <h3 className="text-lg font-bold text-slate-900">Inuit Homeland (Inuit Nunangat)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nunavut, Nunavik (Northern QC), Nunatsiavut (Labrador), and Inuvialuit (NWT). Covers over 35% of Canada's landmass and 50% of its coastline.
            </p>
          </div>

          {/* When */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-amber-800 uppercase block">WHEN DID IT BEGIN?</span>
            <h3 className="text-lg font-bold text-slate-900">Ongoing & Accelerating</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {RESEARCH_TEMPLATE.issueDetails.when}
            </p>
          </div>

          {/* Why Important */}
          <div className="md:col-span-2 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/30 text-cyan-300 flex items-center justify-center font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase block">WHY IS THIS IMPORTANT?</span>
            <h3 className="text-xl font-bold text-white">Threats to Safety, Food Sovereignty & Infrastructure</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {RESEARCH_TEMPLATE.issueDetails.whyImportant}
            </p>
          </div>
        </div>
      </div>

      {/* Food Sovereignty & Toxic POPs Bioaccumulation Deep Dive */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative min-h-[300px]">
          <img
            src={FOOD_SOVEREIGNTY_IMAGE_PATH}
            alt="Arctic Ice Horizon & Country Food Harvesting"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
            Traditional hunting relies on solid multi-year sea ice platform.
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
            Toxicology & Food Security
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Persistent Organic Pollutants (POPs) & The "Grasshopper Effect"
          </h3>

          <p className="text-slate-700 text-sm leading-relaxed">
            Industrial chemicals manufactured thousands of kilometers south in temperate latitudes evaporate into the warm air and travel northward on global wind currents. When they reach cold Arctic air, they condense and rain down onto polar ice and ocean water.
          </p>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800">
            <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-600" />
              <span>Bioaccumulation in Marine Food Chains</span>
            </h4>
            <p className="text-slate-600">
              POPs dissolve into fat tissue. Microscopic plankton absorb POPs &rarr; Fish eat plankton &rarr; Ringed seals eat fish &rarr; Bowhead whales & seals accumulate high concentrations in blubber &rarr; Inuit eating traditional country food receive high doses of toxins in mother's breast milk.
            </p>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
            <strong className="block font-bold">Food Sovereignty Dilemma:</strong>
            <p>
              Replacing traditional country foods with store-bought processed food imported by air cargo leads to staggering food insecurity (with groceries costing 3x–4x southern Canadian prices) and skyrocketing rates of diabetes and cardiovascular illness.
            </p>
          </div>
        </div>
      </div>

      {/* Key Evidence Grid */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            5 Key Pieces of Evidence (Assignment Step 3 Requirement)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Empirical statistics, legal petitions, international treaties, and memoirs documenting the crisis.
          </p>
        </div>

        <div className="space-y-4">
          {RESEARCH_TEMPLATE.evidenceList.map((item) => (
            <div 
              key={item.id} 
              className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start gap-4 hover:border-cyan-400 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-300 font-extrabold text-lg flex items-center justify-center shrink-0">
                #{item.id}
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <span className="text-[11px] bg-cyan-100 text-cyan-800 font-mono font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Timeline Component */}
      <InteractiveTimeline />
    </div>
  );
};
