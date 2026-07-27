import React from 'react';
import { RESEARCH_TEMPLATE } from '../data/courseData';
import { InteractiveQuiz } from '../components/InteractiveQuiz';
import { BrainCircuit, Sparkles, CheckCircle2, MessageSquareQuote, ShieldCheck, AlertCircle } from 'lucide-react';

export const ReflectionPage: React.FC = () => {
  const prompts = [
    {
      title: "1. What makes this issue significant today?",
      text: RESEARCH_TEMPLATE.criticalReflection.significanceToday,
      analysis: "The Arctic functions as the Earth's primary air conditioner through the ice-albedo feedback effect. White sea ice reflects up to 80% of incoming solar radiation back into space. As Arctic ice melts into dark ocean water, heat absorption accelerates globally. Therefore, defending Arctic ice is not a localized regional concern—it is a global planetary stability imperative."
    },
    {
      title: "2. What did you learn that challenged your assumptions?",
      text: RESEARCH_TEMPLATE.criticalReflection.challengedAssumptions,
      analysis: "Prior to this Grade 11 NBE3U research project, I viewed climate change primarily through a narrow scientific and meteorological lens (greenhouse gas charts, global mean temperature graphs). This investigation fundamentally re-framed climate change as an ongoing act of environmental violence and colonial injustice. Southern industrial activities generate profits while transferring ecological degradation and toxic chemical hazards onto northern Indigenous communities who contributed least to emissions."
    },
    {
      title: "3. Why should your audience care?",
      text: RESEARCH_TEMPLATE.criticalReflection.whyAudienceShouldCare,
      analysis: "Canadians living in southern urban centers directly participate in the energy consumption, manufacturing, and consumer choices that cause Arctic warming. As treaty partners in Canada, non-Indigenous citizens hold a moral and civic obligation to uphold environmental justice and honour Indigenous sovereignty under the Truth and Reconciliation Commission's Calls to Action."
    },
    {
      title: "4. Which evidence was the most compelling and why?",
      text: RESEARCH_TEMPLATE.criticalReflection.mostCompellingEvidence,
      analysis: "Sheila Watt-Cloutier's 2005 petition to the Inter-American Commission on Human Rights (IACHR) was the most compelling evidence. By leveraging human rights declarations, the petition proved that environmental destruction directly breaches fundamental rights to bodily integrity, health, cultural expression, and intergenerational transmission of knowledge."
    },
    {
      title: "5. What are the consequences if this issue is ignored?",
      text: RESEARCH_TEMPLATE.criticalReflection.consequencesOfInaction,
      analysis: "Ignoring Arctic climate change will trigger irreversible planetary tipping points, accelerate sea level rise globally, cause catastrophic permafrost thaw releasing massive subterranean methane reserves, and result in the erasure of traditional Inuit land-based culture, Inuktitut language vocabulary, and food sovereignty."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase font-bold tracking-wider">
          <BrainCircuit className="w-4 h-4" />
          <span>Critical Evaluation • Step 2 & Step 3 Rubric</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Opinion & Critical Reflection
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Student analytical synthesis connecting empirical research, Indigenous voices, climate justice, and NBE3U course concepts.
        </p>
      </div>

      {/* Prompts Accordion / Cards List */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            5 Rubric Reflection Prompts & Analysis
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Detailed student response addressing every prompt from the assignment guidelines with academic depth.
          </p>
        </div>

        <div className="space-y-6">
          {prompts.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 hover:border-cyan-400 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-cyan-300 font-bold text-sm flex items-center justify-center shrink-0">
                  #{idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {p.title}
                </h3>
              </div>

              {/* Research Template Response */}
              <div className="bg-cyan-50/70 p-4 rounded-xl border border-cyan-200/80 text-cyan-950 font-medium text-sm sm:text-base">
                <span className="text-xs font-mono font-bold uppercase text-cyan-800 block mb-1">Research Template Summary Statement:</span>
                "{p.text}"
              </div>

              {/* Deep Analytical Extension */}
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-1.5 pl-2 border-l-2 border-slate-300">
                <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-slate-500">In-Depth Critical Synthesis:</strong>
                <p>{p.analysis}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NBE3U Course Concept Ties Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
          <Sparkles className="w-4 h-4" />
          <span>Course Concept Integration</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">Connections to Grade 11 NBE3U Curriculum</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          This study directly integrates key NBE3U themes: <strong>Indigenous Voices</strong> (amplifying Inuk leader Sheila Watt-Cloutier over external non-Indigenous commentary), <strong>Systemic Inequity</strong> (exposing southern environmental colonialism), and the <strong>5Rs Framework</strong> (Resilience in adaptation, Resistance in legal action, and Reclamation of Inuit Qaujimajatuqangit).
        </p>
      </div>

      {/* Interactive Quiz Section */}
      <InteractiveQuiz />
    </div>
  );
};
