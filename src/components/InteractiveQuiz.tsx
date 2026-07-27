import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/courseData';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionIdx: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIdx]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const q = QUIZ_QUESTIONS[currentQuestion];
  const total = QUIZ_QUESTIONS.length;
  const score = calculateScore();

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-cyan-700 font-mono text-xs font-bold uppercase tracking-wider bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
            Self-Check Knowledge Verification
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
            NBE3U Course Concept Quiz
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm">
            Test your understanding of Arctic warming, Sheila Watt-Cloutier's activism, and Inuit Qaujimajatuqangit.
          </p>
        </div>

        {!showResults && (
          <div className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0">
            Question {currentQuestion + 1} of {total}
          </div>
        )}
      </div>

      {!showResults ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-start gap-2">
              <span className="text-cyan-600 font-mono">Q{currentQuestion + 1}.</span>
              <span>{q.question}</span>
            </h4>
          </div>

          <div className="space-y-2.5">
            {q.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestion] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(currentQuestion, idx)}
                  className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-50 border-cyan-600 text-cyan-950 ring-2 ring-cyan-600/20 font-semibold'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center font-mono ${
                      isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation if answered */}
          {selectedAnswers[currentQuestion] !== undefined && (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm space-y-1 animate-in fade-in">
              <span className="text-cyan-400 font-bold block text-xs uppercase tracking-wider">
                Explanatory Insight:
              </span>
              <p className="text-slate-300">{q.explanation}</p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition-colors cursor-pointer"
            >
              &larr; Previous
            </button>

            {currentQuestion < total - 1 ? (
              <button
                disabled={selectedAnswers[currentQuestion] === undefined}
                onClick={() => setCurrentQuestion(prev => Math.min(total - 1, prev + 1))}
                className="px-5 py-2 rounded-lg text-xs font-semibold bg-cyan-700 hover:bg-cyan-600 disabled:opacity-40 text-white transition-colors cursor-pointer"
              >
                Next Question &rarr;
              </button>
            ) : (
              <button
                disabled={Object.keys(selectedAnswers).length < total}
                onClick={() => setShowResults(true)}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white shadow-md transition-colors cursor-pointer"
              >
                View Final Quiz Score
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="text-center space-y-6 py-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300 shadow-sm">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h4 className="text-2xl font-black text-slate-900">
              Quiz Completed! Score: {score} / {total}
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              {score === total 
                ? 'Outstanding! Perfect comprehension of Arctic climate activism and course concepts.'
                : 'Good effort! Review the site tabs to deepen your knowledge of NBE3U concepts.'}
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto text-left">
            {QUIZ_QUESTIONS.map((item, idx) => {
              const isCorrect = selectedAnswers[idx] === item.correctAnswer;
              return (
                <div key={idx} className={`p-4 rounded-xl border text-xs sm:text-sm ${
                  isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                }`}>
                  <div className="flex items-start gap-2.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <strong className="text-slate-900 block font-semibold">
                        Q{idx + 1}: {item.question}
                      </strong>
                      <p className="text-slate-700">
                        <strong>Correct Answer:</strong> {item.options[item.correctAnswer]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};
