import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { MCQQuestion } from '../../types/quiz';
import { CheckCircle2, XCircle, RotateCcw, Award, HelpCircle, Filter, Flame, Zap, Trophy } from 'lucide-react';
import { playAccessGranted, playCyberClick } from '../../utils/cyberAudio';

interface MCQQuizProps {
  questions: MCQQuestion[];
}

export const MCQQuiz: React.FC<MCQQuizProps> = ({ questions }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [streak, setStreak] = useState<number>(0);
  const [lastWrongId, setLastWrongId] = useState<string | null>(null);

  const categories = ['All', 'Money', 'Banking', 'Credit Creation', 'Central Bank', 'Monetary Policy'];

  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter((q) => q.category === selectedCategory);

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (userAnswers[questionId]) return; // already answered
    playCyberClick();

    const q = questions.find((item) => item.id === questionId);
    const isCorrect = q && q.correctAnswerId === optionId;

    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [questionId]: true
    }));

    if (isCorrect) {
      playAccessGranted();
      setStreak((prev) => prev + 1);
      setLastWrongId(null);
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6']
        });
      } catch (e) {
        // ignore
      }
    } else {
      setStreak(0);
      setLastWrongId(questionId);
    }
  };

  const handleResetQuiz = () => {
    playCyberClick();
    setUserAnswers({});
    setShowExplanation({});
    setStreak(0);
    setLastWrongId(null);
  };

  // Score Calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ansId]) => {
    const q = questions.find((item) => item.id === qId);
    return q && q.correctAnswerId === ansId;
  }).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="space-y-6 text-white relative">
      {/* Quiz Header & Live Score Dashboard */}
      <div className="bg-slate-900/90 backdrop-blur-2xl p-6 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            [ MCQ_EXAMINATION_MATRIX ]
          </span>
          <h3 className="font-heading font-extrabold text-xl md:text-3xl text-white mt-1">
            20 बहुविकल्पीय प्रश्न (20 High-Yield MCQs)
          </h3>
          <p className="text-xs md:text-sm text-cyan-200/70 mt-0.5 font-mono">
            CBSE बोर्ड परीक्षा के प्रारूप पर आधारित, तुरंत परिणाम और व्याख्या सहित
          </p>
        </div>

        {/* Live Score Counter with Animated Streak */}
        <div className="flex flex-wrap items-center gap-2.5 relative z-10 font-mono">
          {streak >= 2 && (
            <div className="px-3.5 py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 text-black font-extrabold text-xs flex items-center gap-1.5 animate-streak-fire shadow-lg shadow-rose-600/40">
              <Flame className="w-4 h-4 fill-black" />
              <span>{streak}x STREAK! 🔥</span>
            </div>
          )}

          <div className="text-center px-4 py-2 bg-slate-950 rounded-2xl border border-cyan-500/40 shadow-inner">
            <div className="text-[10px] uppercase font-bold text-cyan-400">अंक (Score)</div>
            <div className="text-xl font-black text-white">
              {correctCount} / {questions.length}
            </div>
          </div>

          <div className="text-center px-4 py-2 bg-slate-950 rounded-2xl border border-emerald-500/40 shadow-inner">
            <div className="text-[10px] uppercase font-bold text-emerald-400">सटीकता (Accuracy)</div>
            <div className="text-xl font-black text-emerald-400">{accuracy}%</div>
          </div>

          <button
            onClick={handleResetQuiz}
            title="क्विज रीसेट करें"
            className="p-3 rounded-2xl border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950 transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="w-4 h-4 text-cyan-400 shrink-0 ml-1 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playCyberClick();
              setSelectedCategory(cat);
            }}
            className={`text-xs font-mono px-3.5 py-1.5 rounded-xl font-medium transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-cyan-200 hover:border-cyan-500/30'
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
          const isLastWrong = lastWrongId === q.id;

          return (
            <div
              key={q.id}
              className={`bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border transition-all duration-300 space-y-4 shadow-xl ${
                isLastWrong
                  ? 'border-rose-500 animate-shake shadow-rose-950/50'
                  : isAnswered && isCorrect
                  ? 'border-emerald-500 shadow-emerald-950/40'
                  : 'border-cyan-500/25 hover:border-cyan-500/50'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    Q{qIndex + 1} // {q.category}
                  </span>
                  <h4 className="font-heading font-extrabold text-base md:text-lg text-white pt-1">
                    {q.questionHi}
                  </h4>
                  <p className="text-xs text-slate-400 italic font-mono">
                    {q.questionEn}
                  </p>
                </div>

                {/* Status Indicator */}
                {isAnswered && (
                  <div className="shrink-0 font-mono">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-500/40 animate-bounce">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> सही (CORRECT)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-950/80 px-3 py-1 rounded-xl border border-rose-500/40">
                        <XCircle className="w-4 h-4 text-rose-400" /> गलत (INCORRECT)
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

                  let btnStyle = 'bg-slate-950/80 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-cyan-500/40';
                  if (isAnswered) {
                    if (isThisCorrect) {
                      btnStyle = 'bg-emerald-950/80 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-950';
                    } else if (isThisSelected) {
                      btnStyle = 'bg-rose-950/80 border-rose-400 text-white font-medium ring-2 ring-rose-500/40';
                    } else {
                      btnStyle = 'bg-slate-950/50 text-slate-600 border-slate-900 opacity-40';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      disabled={isAnswered}
                      className={`p-3.5 rounded-2xl text-left transition text-xs md:text-sm border flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                    >
                      <div className="space-y-0.5 min-w-0">
                        <span className="font-semibold block text-white">{opt.textHi}</span>
                        <span className="text-[11px] opacity-75 italic block font-mono text-cyan-300/80 truncate">{opt.textEn}</span>
                      </div>
                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                      )}
                      {isAnswered && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {showExplanation[q.id] && (
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1.5 text-xs md:text-sm animate-in fade-in duration-300">
                  <div className="font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                    तार्किक व्याख्या [CONCEPT_EXPLANATION]:
                  </div>
                  <p className="text-slate-200 leading-relaxed font-sans">{q.explanationHi}</p>
                  <p className="text-cyan-400/70 text-xs italic font-mono">{q.explanationEn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
