import React, { useState } from 'react';
import { FormulaData } from '../../types/chapter';
import { Calculator, ChevronDown, ChevronRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface NumericalSolverProps {
  formulas: FormulaData[];
}

export const NumericalSolver: React.FC<NumericalSolverProps> = ({ formulas }) => {
  const [selectedFormulaId, setSelectedFormulaId] = useState<string>(formulas[0]?.id || '');
  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({
    'num-1': true,
    'num-2': true,
    'num-m1': true,
    'num-h': true
  });

  const activeFormula = formulas.find((f) => f.id === selectedFormulaId) || formulas[0];

  const toggleSteps = (numId: string) => {
    setExpandedSteps((prev) => ({ ...prev, [numId]: !prev[numId] }));
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            गणितीय विश्लेषण एवं संख्यात्मक हल (Formulas & Numericals)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            चरणबद्ध संख्यात्मक प्रश्न समाधान (Step-by-Step Solved Numericals)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            साख गुणक, कुल जमा सृजन, M1/M3 तथा उच्च-शक्ति मुद्रा के बोर्ड स्तरीय संख्यात्मक प्रश्न
          </p>
        </div>

        {/* Formula Switcher */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
          {formulas.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFormulaId(f.id)}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
                selectedFormulaId === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f.nameHi}
            </button>
          ))}
        </div>
      </div>

      {/* Active Formula Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white space-y-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
            {activeFormula.nameEn}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-md bg-white/20 text-white font-mono">
            NCERT Standard Formula
          </span>
        </div>

        <div className="py-2 text-center sm:text-left">
          <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300 tracking-wide">
            {activeFormula.formula}
          </div>
        </div>

        {/* Symbols explanation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/20 text-xs">
          {activeFormula.symbols.map((sym, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-bold font-mono text-amber-300 bg-white/10 px-2 py-0.5 rounded">
                {sym.symbol}
              </span>
              <span className="text-blue-100">{sym.meaning}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-blue-200 pt-1 leading-relaxed">
          <strong>तर्क (Logic):</strong> {activeFormula.logic}
        </p>
      </div>

      {/* Solved Numericals for this formula */}
      <div className="space-y-4 pt-2">
        <h4 className="font-heading font-bold text-base text-slate-900">
          हल किए गए संख्यात्मक उदाहरण (Solved Examples):
        </h4>

        {activeFormula.solvedNumericals.map((num) => {
          const isExpanded = !!expandedSteps[num.id];
          return (
            <div
              key={num.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            >
              <div className="p-5 bg-slate-50 border-b border-slate-200 space-y-2">
                <span className="text-[11px] font-bold text-blue-700 uppercase bg-blue-100 px-2.5 py-0.5 rounded">
                  {num.title}
                </span>
                <p className="text-xs md:text-sm font-semibold text-slate-900 whitespace-pre-line leading-relaxed">
                  {num.question}
                </p>

                {/* Given & To Find */}
                <div className="flex flex-wrap items-center gap-4 text-xs pt-2 text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <strong className="text-slate-900">दिया है (Given):</strong>
                    {Object.entries(num.given).map(([k, v], i) => (
                      <span key={i} className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px]">
                        {k} = {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Solver Body */}
              <div className="p-5 space-y-4 text-xs md:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    प्रयुक्त सूत्र: <code className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-mono">{num.formulaUsed}</code>
                  </span>
                  <button
                    onClick={() => toggleSteps(num.id)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                  >
                    {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    {isExpanded ? 'चरण छिपाएं' : 'चरणबद्ध हल देखें'}
                  </button>
                </div>

                {isExpanded && (
                  <div className="space-y-3 pt-2">
                    {num.steps.map((st) => (
                      <div key={st.step} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center shrink-0">
                            {st.step}
                          </span>
                          <span>{st.label}</span>
                        </div>
                        <div className="font-mono text-blue-800 font-bold pl-7 text-xs md:text-sm">
                          {st.expression}
                        </div>
                        <p className="text-slate-500 text-xs pl-7">
                          {st.explanation}
                        </p>
                      </div>
                    ))}

                    {/* Final Answer Banner */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-950 font-bold text-xs md:text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>अंतिम उत्तर: {num.finalAnswer}</span>
                    </div>

                    {num.note && (
                      <div className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200 italic">
                        💡 ध्यान दें: {num.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
