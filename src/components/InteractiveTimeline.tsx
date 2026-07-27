import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/courseData';
import { Calendar, ShieldAlert, Scale, Award, Sparkles, ChevronRight } from 'lucide-react';

export const InteractiveTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Historical', 'Advocacy', 'Legal', 'Policy'];

  const filteredEvents = selectedCategory === 'All' 
    ? TIMELINE_EVENTS 
    : TIMELINE_EVENTS.filter(e => e.category === selectedCategory);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Historical':
        return <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">Historical</span>;
      case 'Advocacy':
        return <span className="bg-teal-100 text-teal-800 border border-teal-300 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">Advocacy</span>;
      case 'Legal':
        return <span className="bg-rose-100 text-rose-800 border border-rose-300 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">Legal Landmark</span>;
      case 'Policy':
        return <span className="bg-cyan-100 text-cyan-800 border border-cyan-300 text-[11px] px-2.5 py-0.5 rounded-full font-semibold">Global Treaty</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold block mb-1">
            Historical & Activism Chronology
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Arctic Climate Justice Timeline
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            From forced mid-century sedentarization and toxic pollution discoveries to the landmark 2005 IACHR petition and ongoing Inuit climate leadership.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-700/80 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
        {filteredEvents.map((event, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-500 transition-all flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 rounded-full bg-cyan-300 group-hover:bg-white" />
            </div>

            {/* Event Card */}
            <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-cyan-500/50 rounded-2xl p-5 sm:p-6 transition-all shadow-md space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400 font-bold text-lg sm:text-xl">
                    {event.year}
                  </span>
                  {getCategoryBadge(event.category)}
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {event.title}
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed">
                {event.description}
              </p>

              <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 font-semibold uppercase tracking-wider text-[10px] block">Course Significance</strong>
                  <span>{event.significance}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
