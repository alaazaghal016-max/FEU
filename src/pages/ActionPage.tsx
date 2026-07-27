import React, { useState } from 'react';
import { RESEARCH_TEMPLATE } from '../data/courseData';
import { MpLetterGenerator } from '../components/MpLetterGenerator';
import { Flame, Heart, CheckSquare, Globe, ExternalLink, Sparkles, Building2 } from 'lucide-react';

export const ActionPage: React.FC = () => {
  const [pledges, setPledges] = useState<Record<string, boolean>>({
    pledge1: false,
    pledge2: false,
    pledge3: false,
    pledge4: false,
  });

  const togglePledge = (key: string) => {
    setPledges(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(pledges).filter(Boolean).length;

  const organizations = [
    {
      name: "Inuit Circumpolar Council Canada (ICC Canada)",
      description: "Represents over 150,000 Inuit across Canada, Greenland, Alaska, and Russia in global climate negotiations, Arctic Council governance, and human rights tribunals.",
      url: "https://www.inuitcircumpolar.com/",
      role: "Global Inuit Representation & Policy"
    },
    {
      name: "Indigenous Climate Action (ICA)",
      description: "An Indigenous-led organization empowering Indigenous communities to inspire climate action, defend inherent land rights, and build sustainable solutions.",
      url: "https://www.indigenousclimateaction.com/",
      role: "Indigenous Climate Justice & Education"
    },
    {
      name: "Makivik Corporation",
      description: "The legal representative organization of Quebec's Inuit, managing land claim agreements, environmental protection, and community economic development across Nunavik.",
      url: "https://www.makivik.org/",
      role: "Nunavik Land Rights & Economic Sovereignty"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold tracking-wider">
          <Flame className="w-4 h-4" />
          <span>Opportunity for Action • Assignment Step 2 Requirement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Take Action: Support Inuit Climate Justice
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Tangible, meaningful pathways for citizens, students, and allies to amplify Indigenous leadership, demand federal policy changes, and reduce environmental impact.
        </p>
      </div>

      {/* Action Pathways Summary */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            How You Can Take Action Today
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Three concrete pillars specified in the Grade 11 NBE3U evaluation guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Support Indigenous Organizations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Donate directly to or amplify campaigns led by the Inuit Circumpolar Council (ICC Canada) and Indigenous Climate Action.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Policy Advocacy to MPs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Write to your Member of Parliament (MP) advocating for binding GHG emission reductions and full implementation of TRC Calls to Action.
            </p>
          </div>

          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">Personal Energy Footprint</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Commit to energy conservation, sustainable consumption, and educating your school community on Arctic climate justice.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive MP Letter Generator Tool */}
      <MpLetterGenerator />

      {/* Interactive Action Pledge Checklist */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
              Interactive Engagement
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              Personal Climate Justice Pledge
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Check off actions you commit to taking as an ally for Arctic climate advocacy.
            </p>
          </div>

          <div className="text-xs font-mono font-bold bg-slate-900 text-cyan-300 px-3.5 py-2 rounded-xl shrink-0">
            Pledges Active: {completedCount} / 4
          </div>
        </div>

        <div className="space-y-3">
          {[
            { id: 'pledge1', label: 'I will write or send the generated letter to my Member of Parliament regarding Arctic carbon targets.' },
            { id: 'pledge2', label: "I will read Sheila Watt-Cloutier's memoir 'The Right to Be Cold' or cite her speeches in future studies." },
            { id: 'pledge3', label: 'I will follow and amplify the Inuit Circumpolar Council (ICC Canada) on social media.' },
            { id: 'pledge4', label: 'I will educate three peers or family members about Persistent Organic Pollutants (POPs) in Arctic food webs.' },
          ].map(p => {
            const isChecked = pledges[p.id];
            return (
              <button
                key={p.id}
                onClick={() => togglePledge(p.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isChecked 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                    isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-white'
                  }`}>
                    {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                  <span>{p.label}</span>
                </div>

                <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                  isChecked ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-600'
                }`}>
                  {isChecked ? 'Pledged' : 'Click to Pledge'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory of Indigenous Organizations */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div>
          <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            Verified Partner Directory
          </span>
          <h3 className="text-2xl font-extrabold text-white mt-1">
            Support Indigenous Organizations
          </h3>
          <p className="text-slate-400 text-sm">
            Learn more and support the Indigenous institutions leading the fight for northern climate justice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizations.map((org, idx) => (
            <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] bg-cyan-900/80 text-cyan-300 border border-cyan-700 px-2 py-0.5 rounded font-mono font-bold uppercase">
                  {org.role}
                </span>
                <h4 className="font-bold text-white text-base">{org.name}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{org.description}</p>
              </div>

              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold pt-2 cursor-pointer"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
