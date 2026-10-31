import React, { useState } from 'react';
import { CaseStudy } from '../../types/quiz';
import { FileText, ChevronDown, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

interface CaseStudyViewerProps {
  caseStudies: CaseStudy[];
}

export const CaseStudyViewer: React.FC<CaseStudyViewerProps> = ({ caseStudies }) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (qId: string) => {
    setRevealedAnswers((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          केस-स्टडी आधारित प्रश्न (Case-Based Questions)
        </span>
        <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
          वास्तविक आर्थिक गद्यांश विश्लेषण (Real-World Economic Passages)
        </h3>
        <p className="text-xs md:text-sm text-slate-500 mt-0.5">
          CBSE बोर्ड के नए परीक्षा पैटर्न के अनुसार 4 से 6 अंकों के केस-स्टडी प्रश्न
        </p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((cs, index) => (
          <div
            key={cs.id}
            className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6"
          >
            {/* Case Header */}
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100 uppercase">
                केस स्टडी {index + 1}
              </span>
              <h4 className="font-heading font-bold text-lg md:text-xl text-slate-900 pt-1">
                {cs.title}
              </h4>
              <p className="text-xs text-slate-400 italic">{cs.sourceContext}</p>
            </div>

            {/* Passage Text */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed italic">
              "{cs.caseText}"
            </div>

            {/* Questions under the Case */}
            <div className="space-y-4">
              <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                विश्लेषणात्मक प्रश्न (Follow-Up Questions):
              </h5>

              {cs.questions.map((q, qIdx) => {
                const isRevealed = !!revealedAnswers[q.id];
                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-xs md:text-sm font-semibold text-slate-900">
                        {qIdx + 1}. {q.question}
                      </div>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {q.marks} Marks
                      </span>
                    </div>

                    <button
                      onClick={() => toggleAnswer(q.id)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                    >
                      {isRevealed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      {isRevealed ? 'आदर्श उत्तर छिपाएं' : 'आदर्श उत्तर देखें (Show Model Answer)'}
                    </button>

                    {isRevealed && (
                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs md:text-sm text-slate-800 space-y-1">
                        <strong className="text-emerald-900 font-bold block">
                          आदर्श परीक्षा उत्तर (Model Answer):
                        </strong>
                        <p className="leading-relaxed">{q.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
