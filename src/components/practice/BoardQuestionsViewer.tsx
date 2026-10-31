import React, { useState } from 'react';
import { BoardQuestion } from '../../types/chapter';
import { Award, ChevronDown, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';

interface BoardQuestionsViewerProps {
  questions: BoardQuestion[];
}

export const BoardQuestionsViewer: React.FC<BoardQuestionsViewerProps> = ({ questions }) => {
  const [selectedMarks, setSelectedMarks] = useState<number>(0); // 0 means all
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({
    'bq-1m-1': true,
    'bq-6m-1': true
  });

  const marksList = [0, 1, 2, 3, 4, 6];

  const filtered = selectedMarks === 0
    ? questions
    : questions.filter((q) => q.marks === selectedMarks);

  const toggleQuestion = (qId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            बोर्ड परीक्षा प्रश्न बैंक (CBSE Board Question Bank)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            अंकवार पिछले वर्षों के महत्वपूर्ण प्रश्न एवं आदर्श उत्तर
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            1, 2, 3, 4 और 6 अंकों के प्रश्नों के पूर्ण मॉडल उत्तर व मार्किंग स्कीम
          </p>
        </div>

        {/* Marks Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
          {marksList.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMarks(m)}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
                selectedMarks === m
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {m === 0 ? 'सभी प्रश्न (All)' : `${m} Mark${m > 1 ? 's' : ''}`}
            </button>
          ))}
        </div>
      </div>

      {/* Questions Accordion List */}
      <div className="space-y-4">
        {filtered.map((bq) => {
          const isExpanded = !!expandedQuestions[bq.id];
          return (
            <div
              key={bq.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleQuestion(bq.id)}
                className="w-full p-5 bg-slate-50/70 hover:bg-slate-100/70 transition flex items-start justify-between gap-4 text-left border-b border-slate-100"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold text-white bg-blue-700 px-2.5 py-0.5 rounded-md uppercase">
                      {bq.marks} Mark{bq.marks > 1 ? 's' : ''}
                    </span>
                    {bq.year && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                        {bq.year}
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-sm md:text-base text-slate-900 pt-1">
                    {bq.questionHi}
                  </h4>
                  <p className="text-xs text-slate-500 italic">
                    {bq.questionEn}
                  </p>
                </div>

                <div className="p-1 rounded-full bg-white text-slate-600 border border-slate-200 shrink-0 mt-1">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Model Answer Body */}
              {isExpanded && (
                <div className="p-6 space-y-4 text-xs md:text-sm text-slate-700">
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>CBSE परीक्षक अनुमोदित आदर्श उत्तर (Model Answer):</span>
                    </div>
                    <div className="whitespace-pre-line leading-relaxed font-medium text-slate-800">
                      {bq.modelAnswer}
                    </div>
                  </div>

                  {/* Marking Scheme Points */}
                  {bq.markingScheme && bq.markingScheme.length > 0 && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <strong className="text-slate-900 font-bold block text-xs">
                        अंक विभाजन योजना (Marking Scheme Breakdown):
                      </strong>
                      <div className="space-y-0.5 pl-2">
                        {bq.markingScheme.map((item, i) => (
                          <div key={i} className="text-slate-600 text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Keywords Required for Full Marks */}
                  {bq.keyKeywords && bq.keyKeywords.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      <span className="font-bold text-slate-500">अनिवार्य कीवर्ड्स:</span>
                      {bq.keyKeywords.map((kw, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-semibold text-[11px]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
