import React, { useState } from 'react';
import { AssertionReasonQuestion } from '../../types/quiz';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';

interface AssertionReasonQuizProps {
  questions: AssertionReasonQuestion[];
}

export const AssertionReasonQuiz: React.FC<AssertionReasonQuizProps> = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const options = [
    { id: 'A', label: '(A) A और R दोनों सत्य हैं, और R, A की सही व्याख्या है।' },
    { id: 'B', label: '(B) A और R दोनों सत्य हैं, परंतु R, A की सही व्याख्या नहीं है।' },
    { id: 'C', label: '(C) A सत्य है, परंतु R असत्य है।' },
    { id: 'D', label: '(D) A असत्य है, परंतु R सत्य है।' }
  ];

  const handleSelect = (qId: string, optId: string) => {
    if (userAnswers[qId]) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleReset = () => {
    setUserAnswers({});
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            अभिकथन एवं कारण (Assertion & Reason)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            5 अभिकथन एवं कारण प्रश्न (Assertion-Reason Practice)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            CBSE द्वारा पूछे जाने वाले विश्लेषणात्मक प्रश्नों का अभ्यास
          </p>
        </div>

        <button
          onClick={handleReset}
          className="self-start md:self-auto px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 hover:bg-slate-100 transition inline-flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" /> रीसेट करें
        </button>
      </div>

      <div className="space-y-5">
        {questions.map((q, idx) => {
          const selected = userAnswers[q.id];
          const isAnswered = !!selected;
          const isCorrect = selected === q.correctOption;

          return (
            <div
              key={q.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 uppercase">
                  प्रश्न {idx + 1}
                </span>
                {isAnswered && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                      isCorrect
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}
                  >
                    {isCorrect ? '✓ सही उत्तर' : '✗ गलत उत्तर'}
                  </span>
                )}
              </div>

              {/* Statements */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs md:text-sm">
                <div>
                  <strong className="text-blue-900 block font-bold">
                    अभिकथन (A - Assertion):
                  </strong>
                  <span className="text-slate-800 font-medium">{q.assertionHi}</span>
                  <span className="text-slate-400 block text-[11px] italic mt-0.5">{q.assertionEn}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <strong className="text-indigo-900 block font-bold">
                    कारण (R - Reason):
                  </strong>
                  <span className="text-slate-800 font-medium">{q.reasonHi}</span>
                  <span className="text-slate-400 block text-[11px] italic mt-0.5">{q.reasonEn}</span>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {options.map((opt) => {
                  const isThisSelected = selected === opt.id;
                  const isThisCorrect = q.correctOption === opt.id;

                  let style = 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200';
                  if (isAnswered) {
                    if (isThisCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isThisSelected) {
                      style = 'bg-rose-50 border-rose-500 text-rose-950 font-medium';
                    } else {
                      style = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      disabled={isAnswered}
                      className={`p-3 rounded-xl text-left text-xs transition border ${style}`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" /> सही व्याख्या:
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
