import React, { useState } from 'react';
import { RESEARCH_TEMPLATE, COURSE_INFO } from '../data/courseData';
import { X, Copy, Check, Printer, FileText, ArrowDownToLine, Sparkles, BookOpen } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchTemplateModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textToCopy = `
NBE3U RESEARCH TEMPLATE - STEP 3
================================
Course: ${COURSE_INFO.courseCode} - ${COURSE_INFO.courseName}
Teacher: ${COURSE_INFO.teacher}
Due Date: ${COURSE_INFO.dueDate}

Topic: ${RESEARCH_TEMPLATE.studentTopic}

RESEARCH QUESTION:
${RESEARCH_TEMPLATE.researchQuestion}

THESIS / MAIN MESSAGE:
${RESEARCH_TEMPLATE.thesisStatement}

HISTORICAL CONTEXT:
${RESEARCH_TEMPLATE.historicalContext}

ISSUE DETAILS:
- Who: ${RESEARCH_TEMPLATE.issueDetails.who}
- What: ${RESEARCH_TEMPLATE.issueDetails.what}
- Where: ${RESEARCH_TEMPLATE.issueDetails.where}
- When: ${RESEARCH_TEMPLATE.issueDetails.when}
- Why Important: ${RESEARCH_TEMPLATE.issueDetails.whyImportant}

CONNECTION TO 5Rs:
1. Resilience: ${RESEARCH_TEMPLATE.fiveRs.resilience}
2. Resistance: ${RESEARCH_TEMPLATE.fiveRs.resistance}
3. Reclamation: ${RESEARCH_TEMPLATE.fiveRs.reclamation}

EVIDENCE:
${RESEARCH_TEMPLATE.evidenceList.map(e => `${e.id}. ${e.title} (${e.category}): ${e.detail}`).join('\n')}

ADVOCATE DETAILS:
- Identity: ${RESEARCH_TEMPLATE.advocateDetails.identity}
- Actions & Roles: ${RESEARCH_TEMPLATE.advocateDetails.actionsAndRoles}
- Organizations: ${RESEARCH_TEMPLATE.advocateDetails.organizations}
- Impact & Recognition: ${RESEARCH_TEMPLATE.advocateDetails.impactAndRecognition}

CRITICAL REFLECTION:
1. Significance Today: ${RESEARCH_TEMPLATE.criticalReflection.significanceToday}
2. Challenged Assumptions: ${RESEARCH_TEMPLATE.criticalReflection.challengedAssumptions}
3. Why Audience Should Care: ${RESEARCH_TEMPLATE.criticalReflection.whyAudienceShouldCare}
4. Most Compelling Evidence: ${RESEARCH_TEMPLATE.criticalReflection.mostCompellingEvidence}
5. Consequences of Inaction: ${RESEARCH_TEMPLATE.criticalReflection.consequencesOfInaction}

ACTION STEPS:
${RESEARCH_TEMPLATE.actionSteps.map(a => `- ${a}`).join('\n')}

INUKTITUT TERMS:
${RESEARCH_TEMPLATE.additionalInfo.inuktitutTerms.map(t => `- ${t.term}: ${t.meaning}`).join('\n')}
`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden my-auto"
        id="research-template-modal-content"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                Course Research Template (Step 3)
                <span className="text-xs bg-cyan-900/80 text-cyan-300 border border-cyan-700/60 px-2.5 py-0.5 rounded-full font-mono">
                  Submitted
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Grade 11 NBE3U | Teacher: {COURSE_INFO.teacher}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Copy text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-800 text-sm leading-relaxed print:p-0">
          {/* Metadata Block */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <p className="text-slate-500">Course Code & Name</p>
              <p className="font-bold text-slate-900">{COURSE_INFO.courseCode} — {COURSE_INFO.courseName}</p>
            </div>
            <div>
              <p className="text-slate-500">Teacher & Due Date</p>
              <p className="font-bold text-slate-900">{COURSE_INFO.teacher} | {COURSE_INFO.dueDate}</p>
            </div>
            <div className="md:col-span-2 pt-2 border-t border-slate-200/80">
              <p className="text-slate-500">Selected Research Topic</p>
              <p className="font-bold text-cyan-800 text-base">{RESEARCH_TEMPLATE.studentTopic}</p>
            </div>
          </div>

          {/* Research Question */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Research Question
            </h3>
            <div className="bg-cyan-50/60 border-l-4 border-cyan-600 p-4 rounded-r-xl text-slate-900 font-medium text-base">
              "{RESEARCH_TEMPLATE.researchQuestion}"
            </div>
          </div>

          {/* Thesis / Main Message */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Thesis / Main Message
            </h3>
            <div className="bg-teal-50/70 border border-teal-200/80 p-4 rounded-xl text-slate-900 font-semibold">
              {RESEARCH_TEMPLATE.thesisStatement}
            </div>
          </div>

          {/* Historical Context */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Historical Context
            </h3>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
              {RESEARCH_TEMPLATE.historicalContext}
            </p>
          </div>

          {/* Issue Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Issue Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs uppercase text-cyan-700 mb-1">Who is affected?</span>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.issueDetails.who}</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs uppercase text-cyan-700 mb-1">What is the issue?</span>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.issueDetails.what}</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs uppercase text-cyan-700 mb-1">Where & When?</span>
                <p className="text-slate-700">
                  <strong>Where:</strong> {RESEARCH_TEMPLATE.issueDetails.where}<br/>
                  <strong>When:</strong> {RESEARCH_TEMPLATE.issueDetails.when}
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs uppercase text-cyan-700 mb-1">Why is it important?</span>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.issueDetails.whyImportant}</p>
              </div>
            </div>
          </div>

          {/* Connection to 5Rs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Connection to Course Concepts (The 5Rs Framework)
            </h3>
            <div className="space-y-2">
              <div className="bg-amber-50/70 border border-amber-200 p-3.5 rounded-xl">
                <strong className="text-amber-900 block text-sm mb-0.5">1. Resilience:</strong>
                <p className="text-amber-950/90">{RESEARCH_TEMPLATE.fiveRs.resilience}</p>
              </div>
              <div className="bg-rose-50/70 border border-rose-200 p-3.5 rounded-xl">
                <strong className="text-rose-900 block text-sm mb-0.5">2. Resistance:</strong>
                <p className="text-rose-950/90">{RESEARCH_TEMPLATE.fiveRs.resistance}</p>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-200 p-3.5 rounded-xl">
                <strong className="text-emerald-900 block text-sm mb-0.5">3. Reclamation:</strong>
                <p className="text-emerald-950/90">{RESEARCH_TEMPLATE.fiveRs.reclamation}</p>
              </div>
            </div>
          </div>

          {/* Evidence List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Key Evidence (5 Pieces)
            </h3>
            <div className="space-y-2">
              {RESEARCH_TEMPLATE.evidenceList.map((item) => (
                <div key={item.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-200 font-bold text-xs flex items-center justify-center shrink-0 text-slate-700">
                    {item.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <span className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-mono">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advocate Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Advocate Analysis: Sheila Watt-Cloutier (Siila)
            </h3>
            <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-cyan-400 font-semibold block text-xs">Identity:</span>
                <p className="text-slate-200">{RESEARCH_TEMPLATE.advocateDetails.identity}</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold block text-xs">Actions & Roles:</span>
                <p className="text-slate-200">{RESEARCH_TEMPLATE.advocateDetails.actionsAndRoles}</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold block text-xs">Organizations & Recognition:</span>
                <p className="text-slate-200">{RESEARCH_TEMPLATE.advocateDetails.organizations} — {RESEARCH_TEMPLATE.advocateDetails.impactAndRecognition}</p>
              </div>
            </div>
          </div>

          {/* Critical Reflection */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Opinion & Critical Reflection
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-1">Significance Today:</strong>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.criticalReflection.significanceToday}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-1">Challenged Assumptions:</strong>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.criticalReflection.challengedAssumptions}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-1">Why Audience Should Care:</strong>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.criticalReflection.whyAudienceShouldCare}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-1">Most Compelling Evidence:</strong>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.criticalReflection.mostCompellingEvidence}</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-1">Consequences of Inaction:</strong>
                <p className="text-slate-700">{RESEARCH_TEMPLATE.criticalReflection.consequencesOfInaction}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            NBE3U Final Evaluation Component | Ms. Jangra
          </span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
