import React from 'react';
import { COMMON_EXAM_MISTAKES } from '../../content/chapters/money-and-banking/revisionNotes';
import { AlertOctagon, CheckCircle2, Lightbulb, ShieldAlert } from 'lucide-react';

export const CommonMistakes: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
          परीक्षा में सावधानियां (Examiner Alert Points)
        </span>
        <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
          विद्यार्थियों द्वारा की जाने वाली सामान्य गलतियाँ (Common Mistakes & Traps)
        </h3>
        <p className="text-xs md:text-sm text-slate-500 mt-0.5">
          बोर्ड परीक्षा में प्रायः छात्र जिन भ्रामक बिंदुओं पर अंक गंवाते हैं और उनका सही समाधान
        </p>
      </div>

      <div className="space-y-4">
        {COMMON_EXAM_MISTAKES.map((item, idx) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <h4 className="font-heading font-bold text-sm md:text-base text-rose-900">
                भ्रम: {item.misconception}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-8 text-xs md:text-sm">
              {/* Correct Reality */}
              <div className="p-3.5 bg-white rounded-xl border border-emerald-200 space-y-1">
                <span className="text-emerald-800 font-bold flex items-center gap-1.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> सही आर्थिक तथ्य (Correct Reality):
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {item.reality}
                </p>
              </div>

              {/* Examiner Tip */}
              <div className="p-3.5 bg-white rounded-xl border border-amber-200 space-y-1">
                <span className="text-amber-800 font-bold flex items-center gap-1.5 text-xs">
                  <Lightbulb className="w-4 h-4 text-amber-600" /> CBSE परीक्षक सुझाव (Exam Strategy):
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {item.examTip}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
