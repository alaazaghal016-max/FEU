import React from 'react';
import { COURSE_INFO } from '../data/courseData';
import { BookOpen, User, Calendar, FileText } from 'lucide-react';

interface Props {
  onOpenTemplate: () => void;
}

export const CourseMetadataBadge: React.FC<Props> = ({ onOpenTemplate }) => {
  return (
    <div className="bg-slate-900 text-slate-100 border-b border-slate-800 text-xs sm:text-sm py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
          <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2.5 py-0.5 rounded-full text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            {COURSE_INFO.courseCode} ({COURSE_INFO.grade})
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-slate-200">
            <span className="text-slate-400">Course:</span> {COURSE_INFO.courseName}
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="inline-flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">Teacher:</span> <strong className="text-slate-100">{COURSE_INFO.teacher}</strong>
          </span>
          <span className="hidden lg:inline text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Due: {COURSE_INFO.dueDate}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTemplate}
            id="open-research-template-btn"
            className="inline-flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded-md font-medium text-xs transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Research Template (Step 3)
          </button>
        </div>
      </div>
    </div>
  );
};
