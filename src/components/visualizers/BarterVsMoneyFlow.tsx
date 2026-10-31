import React, { useState } from 'react';
import { ArrowRight, RotateCcw, AlertTriangle, CheckCircle, RefreshCw, Sparkles } from 'lucide-react';

export const BarterVsMoneyFlow: React.FC = () => {
  const [mode, setMode] = useState<'barter' | 'money'>('barter');

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            तुलनात्मक विनिमय प्रवाह (Exchange Flow Visualizer)
          </span>
          <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
            वस्तु विनिमय अवरोध बनाम मुद्रा की सरलता (Barter Dilemma vs Money)
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            देखें कि आवश्यकताओं के दोहरे संयोग का अभाव कैसे व्यापार को रोकता है और मुद्रा कैसे समाधान बनती है
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto border border-slate-200">
          <button
            onClick={() => setMode('barter')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'barter'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" /> वस्तु विनिमय (Barter Deadlock)
          </button>
          <button
            onClick={() => setMode('money')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'money'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> मौद्रिक अर्थव्यवस्था (Money Economy)
          </button>
        </div>
      </div>

      {mode === 'barter' ? (
        /* Barter Deadlock Simulation */
        <div className="space-y-6">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs md:text-sm flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>कमोडिटी गतिरोध (Deadlock):</strong> किसान को कपड़ा चाहिए, परंतु बुनकर को गेहूं नहीं बल्कि जूते चाहिए। विनिमय असंभव हो गया!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Person 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-amber-300 space-y-2 text-center">
              <div className="text-3xl">🌾</div>
              <h4 className="font-heading font-bold text-slate-900">किसान (A)</h4>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1 rounded-md">
                पास में है: 50 कि.ग्रा. गेहूं
              </div>
              <div className="text-xs text-rose-700 font-semibold bg-rose-50 py-1 rounded-md">
                आवश्यकता है: 5 मीटर कपड़ा
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-amber-300 space-y-2 text-center">
              <div className="text-3xl">🧵</div>
              <h4 className="font-heading font-bold text-slate-900">बुनकर (B)</h4>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1 rounded-md">
                पास में है: 5 मीटर कपड़ा
              </div>
              <div className="text-xs text-rose-700 font-semibold bg-rose-50 py-1 rounded-md">
                आवश्यकता है: 1 जोड़ी जूते
              </div>
              <p className="text-[11px] text-rose-600 font-bold mt-1">
                ❌ किसान का गेहूं नहीं चाहिए!
              </p>
            </div>

            {/* Person 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-dashed border-amber-300 space-y-2 text-center">
              <div className="text-3xl">👞</div>
              <h4 className="font-heading font-bold text-slate-900">मोची (C)</h4>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1 rounded-md">
                पास में है: 1 जोड़ी जूते
              </div>
              <div className="text-xs text-rose-700 font-semibold bg-rose-50 py-1 rounded-md">
                आवश्यकता है: 50 कि.ग्रा. गेहूं
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-100 rounded-xl text-center text-xs text-slate-600">
            निष्कर्ष: बिना मुद्रा के प्रत्येक व्यक्ति को त्रिकोणीय श्रृंखला में घूमना पड़ेगा या विनिमय स्थगित करना पड़ेगा। भारी खोज लागत (Search Cost)।
          </div>
        </div>
      ) : (
        /* Money Economy Simulation */
        <div className="space-y-6">
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs md:text-sm flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>मुद्रा द्वारा गतिरोध का समाधान:</strong> मुद्रा विनिमय का सर्वस्वीकार्य माध्यम है। क्रय और विक्रय स्वतंत्र हो गए!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Person 1 */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 text-center">
              <div className="text-3xl">🌾</div>
              <h4 className="font-heading font-bold text-slate-900">किसान (A)</h4>
              <p className="text-xs text-slate-600">बाजार में गेहूं बेचकर <strong>₹2,000</strong> प्राप्त किए।</p>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1.5 rounded-lg border border-emerald-200">
                ₹2,000 से तुरंत कपड़ा क्रय कर लिया!
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 text-center">
              <div className="text-3xl">🧵</div>
              <h4 className="font-heading font-bold text-slate-900">बुनकर (B)</h4>
              <p className="text-xs text-slate-600">कपड़ा बेचकर <strong>₹2,000</strong> नकद प्राप्त किए।</p>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1.5 rounded-lg border border-emerald-200">
                ₹2,000 से मोची से जूते खरीद लिए!
              </div>
            </div>

            {/* Person 3 */}
            <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 text-center">
              <div className="text-3xl">👞</div>
              <h4 className="font-heading font-bold text-slate-900">मोची (C)</h4>
              <p className="text-xs text-slate-600">जूते बेचकर <strong>₹2,000</strong> नकद प्राप्त किए।</p>
              <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 py-1.5 rounded-lg border border-emerald-200">
                ₹2,000 से किसान से गेहूं खरीद लिया!
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl text-center text-xs text-blue-900 font-medium border border-blue-200">
            निष्कर्ष: मुद्रा ने आवश्यकताओं के दोहरे संयोग की अनिवार्य शर्त को पूरी तरह समाप्त कर दिया।
          </div>
        </div>
      )}
    </div>
  );
};
