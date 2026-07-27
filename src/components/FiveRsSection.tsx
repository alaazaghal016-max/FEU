import React, { useState } from 'react';
import { RESEARCH_TEMPLATE } from '../data/courseData';
import { Shield, Flame, Anchor, ArrowRight, Quote, Sparkles } from 'lucide-react';

export const FiveRsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resilience' | 'resistance' | 'reclamation'>('resilience');

  const items = [
    {
      id: 'resilience',
      title: '1. Resilience',
      subtitle: 'Cultural Continuity Amid Perilous Sea Ice Shifts',
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      color: 'border-amber-500 bg-amber-50/50',
      badge: 'Adaptation & Cultural Survival',
      text: RESEARCH_TEMPLATE.fiveRs.resilience,
      details: [
        "Inuit hunters continuously adapt travel routes using satellite monitoring alongside Elder weather predictions.",
        "Generational knowledge transfer continues despite rapid thinning of thick multi-year sea ice.",
        "Community food sharing networks (Niqitsiat) ensure elders and vulnerable families receive country food.",
        "Refusal to abandon land-based identity despite severe environmental pressures."
      ],
      quote: "Our culture is based on ice and snow. Without cold, our culture collapses. Yet our people adapt daily with courage."
    },
    {
      id: 'resistance',
      title: '2. Resistance',
      subtitle: 'Challenging Southern Environmental Injustice',
      icon: <Flame className="w-6 h-6 text-rose-500" />,
      color: 'border-rose-500 bg-rose-50/50',
      badge: 'Legal Human Rights Advocacy',
      text: RESEARCH_TEMPLATE.fiveRs.resistance,
      details: [
        "Filing the historic 2005 Inter-American Commission on Human Rights (IACHR) legal petition against high-emitting nations.",
        "Fighting persistent organic chemical emissions at global United Nations treaty negotiations (Stockholm Convention 2001).",
        "Reframing climate change from an abstract economic issue to a fundamental violation of human rights.",
        "Directly confronting industrial polluters in southern latitudes without Inuit consent."
      ],
      quote: "Climate change is not just about melting ice; it is about environmental violence inflicted on our children's future."
    },
    {
      id: 'reclamation',
      title: '3. Reclamation',
      subtitle: 'Centering Inuit Qaujimajatuqangit (IQ) in Global Governance',
      icon: <Anchor className="w-6 h-6 text-emerald-500" />,
      color: 'border-emerald-500 bg-emerald-50/50',
      badge: 'Indigenous Knowledge Leadership',
      text: RESEARCH_TEMPLATE.fiveRs.reclamation,
      details: [
        "Restoring the authority of Inuit Qaujimajatuqangit (IQ) alongside Western meteorological science.",
        "Inuit Circumpolar Council (ICC) leading climate governance across four Arctic nations.",
        "Reclaiming food sovereignty by protecting marine mammal habitats and traditional hunting rights.",
        "Asserting self-determination across the 4 regions of Inuit Nunangat."
      ],
      quote: "We are not victims of climate change; we are the sentinel messengers offering global solutions from Arctic wisdom."
    }
  ];

  const currentItem = items.find(i => i.id === activeTab)!;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-bold bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
          Grade 11 NBE3U Core Framework
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Connecting to the 5Rs: Resilience, Resistance & Reclamation
        </h2>
        <p className="text-slate-600 text-sm">
          Understanding how Inuit communities respond to environmental violence through cultural endurance, legal opposition, and traditional knowledge restoration.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {item.icon}
              <div className="text-left">
                <span>{item.title}</span>
                <span className="text-[11px] block font-normal text-slate-400 font-mono">
                  {item.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content Display Card */}
      <div className={`p-6 sm:p-8 rounded-2xl border-2 transition-all ${currentItem.color} space-y-6`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-3">
            {currentItem.icon}
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {currentItem.title}: {currentItem.subtitle}
              </h3>
            </div>
          </div>
          <span className="text-xs bg-slate-900 text-white px-3 py-1 rounded-full font-mono font-semibold">
            NBE3U Course Concept
          </span>
        </div>

        {/* Primary Explanation */}
        <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium bg-white/80 p-5 rounded-xl border border-slate-200 shadow-xs">
          {currentItem.text}
        </p>

        {/* Key Detail Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentItem.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/90 text-slate-700 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        {/* Quote Callout */}
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl flex items-start gap-4">
          <Quote className="w-8 h-8 text-cyan-400 shrink-0 opacity-80" />
          <div className="space-y-1">
            <p className="italic text-sm sm:text-base font-serif text-slate-200">
              "{currentItem.quote}"
            </p>
            <p className="text-xs text-cyan-400 font-semibold font-mono">
              — Inspired by Sheila Watt-Cloutier, 'The Right to Be Cold'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
