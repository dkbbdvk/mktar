import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MCQQuestion } from '../../types/quiz';
import { CheckCircle2, XCircle, RotateCcw, Award, HelpCircle, Filter } from 'lucide-react';

interface MCQQuizProps {
  questions: MCQQuestion[];
}

export const MCQQuiz: React.FC<MCQQuizProps> = ({ questions }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Money', 'Banking', 'Credit Creation', 'Central Bank', 'Monetary Policy'];

  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter((q) => q.category === selectedCategory);

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (userAnswers[questionId]) return; // already answered
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [questionId]: true
    }));

    // Trigger celebratory confetti if user answers correctly
    const q = questions.find((item) => item.id === questionId);
    if (q && q.correctAnswerId === optionId) {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.8 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowExplanation({});
  };

  // Score Calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ansId]) => {
    const q = questions.find((item) => item.id === qId);
    return q && q.correctAnswerId === ansId;
  }).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Quiz Header & Live Score Dashboard */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            अभ्यास परीक्षा (Practice Test)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            20 बहुविकल्पीय प्रश्न (20 High-Yield MCQs)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            CBSE बोर्ड परीक्षा के प्रारूप पर आधारित, तुरंत परिणाम और व्याख्या सहित
          </p>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-3">
          <div className="text-center px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
            <div className="text-[10px] uppercase font-bold text-blue-600">अंक (Score)</div>
            <div className="text-xl font-extrabold text-blue-950">
              {correctCount} / {questions.length}
            </div>
          </div>
          <div className="text-center px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100">
            <div className="text-[10px] uppercase font-bold text-emerald-600">सटीकता (Accuracy)</div>
            <div className="text-xl font-extrabold text-emerald-950">{accuracy}%</div>
          </div>
          <button
            onClick={handleResetQuiz}
            title="क्विज रीसेट करें"
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, qIndex) => {
          const selectedOption = userAnswers[q.id];
          const isAnswered = !!selectedOption;
          const isCorrect = selectedOption === q.correctAnswerId;

          return (
            <div
              key={q.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 transition"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    Q{qIndex + 1} • {q.category}
                  </span>
                  <h4 className="font-heading font-bold text-base md:text-lg text-slate-900 pt-1">
                    {q.questionHi}
                  </h4>
                  <p className="text-xs text-slate-500 italic">
                    {q.questionEn}
                  </p>
                </div>

                {/* Status Indicator */}
                {isAnswered && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4" /> सही (Correct)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                        <XCircle className="w-4 h-4" /> गलत (Incorrect)
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt) => {
                  const isThisSelected = selectedOption === opt.id;
                  const isThisCorrect = q.correctAnswerId === opt.id;

                  let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';
                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isThisSelected) {
                      btnStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-medium';
                    } else {
                      btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      disabled={isAnswered}
                      className={`p-3 rounded-xl text-left transition text-xs md:text-sm border flex items-center justify-between gap-2 ${btnStyle}`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold block">{opt.textHi}</span>
                        <span className="text-[11px] opacity-75 italic block">{opt.textEn}</span>
                      </div>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {showExplanation[q.id] && (
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-1 text-xs md:text-sm">
                  <div className="font-bold text-blue-900 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    तार्किक व्याख्या (Conceptual Explanation):
                  </div>
                  <p className="text-slate-800 leading-relaxed">{q.explanationHi}</p>
                  <p className="text-slate-500 text-xs italic">{q.explanationEn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
