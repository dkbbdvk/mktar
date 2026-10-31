import React, { useState } from 'react';
import { ArrowRight, RotateCcw, AlertTriangle, CheckCircle, RefreshCw, Sparkles, Coins, Zap } from 'lucide-react';
import { playCyberClick, playHologramFlip } from '../../utils/cyberAudio';

export const BarterVsMoneyFlow: React.FC = () => {
  const [mode, setMode] = useState<'barter' | 'money'>('barter');

  const handleSwitchMode = (newMode: 'barter' | 'money') => {
    if (newMode === 'money') playHologramFlip();
    else playCyberClick();
    setMode(newMode);
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-500/20 pb-5 relative z-10">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            [ EXCHANGE_FLOW_SIMULATION ]
          </span>
          <h3 className="font-heading font-extrabold text-xl md:text-3xl text-white mt-1">
            वस्तु विनिमय अवरोध बनाम मुद्रा की सरलता (Barter Dilemma vs Money)
          </h3>
          <p className="text-xs md:text-sm text-cyan-200/70 mt-1 font-mono">
            आवश्यकताओं के दोहरे संयोग का अभाव कैसे व्यापार को रोकता है और मुद्रा कैसे समाधान बनती है
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-2xl self-start md:self-auto border border-cyan-500/30">
          <button
            onClick={() => handleSwitchMode('barter')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mode === 'barter'
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 border border-rose-400'
                : 'text-slate-400 hover:text-rose-300'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" /> वस्तु विनिमय गतिरोध
          </button>
          <button
            onClick={() => handleSwitchMode('money')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
              mode === 'money'
                ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400'
                : 'text-slate-400 hover:text-cyan-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" /> मौद्रिक प्रणाली (Money)
          </button>
        </div>
      </div>

      {mode === 'barter' ? (
        /* Barter Deadlock Simulation with Red Glitch & Shake */
        <div className="space-y-6 relative z-10 animate-in fade-in duration-300">
          <div className="p-4 bg-rose-950/60 rounded-2xl border border-rose-500/40 text-rose-200 text-xs md:text-sm flex items-center gap-3 animate-shake font-mono">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 animate-bounce" />
            <span>
              <strong className="text-rose-300 uppercase">[ DEADLOCK DETECTED ]:</strong> किसान को कपड़ा चाहिए, परंतु बुनकर को गेहूं नहीं जूते चाहिए। विनिमय असंभव हो गया!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Person 1 */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border-2 border-dashed border-rose-500/50 space-y-3 text-center relative group hover:border-rose-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '3s' }}>🌾</div>
              <h4 className="font-heading font-extrabold text-lg text-white">किसान (Agent A)</h4>
              <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 py-1.5 rounded-lg border border-cyan-500/30">
                पास में है: 50 कि.ग्रा. गेहूं
              </div>
              <div className="text-xs font-mono text-rose-300 bg-rose-950/80 py-1.5 rounded-lg border border-rose-500/30">
                आवश्यकता है: 5 मीटर कपड़ा
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border-2 border-dashed border-rose-500/50 space-y-3 text-center relative group hover:border-rose-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '2.7s' }}>🧵</div>
              <h4 className="font-heading font-extrabold text-lg text-white">बुनकर (Agent B)</h4>
              <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 py-1.5 rounded-lg border border-cyan-500/30">
                पास में है: 5 मीटर कपड़ा
              </div>
              <div className="text-xs font-mono text-rose-300 bg-rose-950/80 py-1.5 rounded-lg border border-rose-500/30">
                आवश्यकता है: 1 जोड़ी जूते
              </div>
              <p className="text-[11px] font-mono text-rose-400 font-bold mt-1 bg-rose-950/60 py-0.5 rounded border border-rose-500/40">
                ❌ किसान का गेहूं नहीं चाहिए!
              </p>
            </div>

            {/* Person 3 */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border-2 border-dashed border-rose-500/50 space-y-3 text-center relative group hover:border-rose-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '3.2s' }}>👞</div>
              <h4 className="font-heading font-extrabold text-lg text-white">मोची (Agent C)</h4>
              <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 py-1.5 rounded-lg border border-cyan-500/30">
                पास में है: 1 जोड़ी जूते
              </div>
              <div className="text-xs font-mono text-rose-300 bg-rose-950/80 py-1.5 rounded-lg border border-rose-500/30">
                आवश्यकता है: 50 कि.ग्रा. गेहूं
              </div>
            </div>
          </div>

          {/* Animated Connecting SVG showing broken lines */}
          <div className="p-4 bg-slate-950/80 rounded-2xl border border-rose-500/30 text-center text-xs font-mono text-rose-300">
            निष्कर्ष: बिना सामान्य विनिमय माध्यम (मुद्रा) के प्रत्येक व्यक्ति को त्रिकोणीय संयोग खोजना पड़ता है। अत्यधिक खोज लागत (Search Cost)।
          </div>
        </div>
      ) : (
        /* Money Economy Simulation with Animated Flowing Conduits */
        <div className="space-y-6 relative z-10 animate-in fade-in duration-300">
          <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-500/40 text-emerald-200 text-xs md:text-sm flex items-center gap-3 font-mono shadow-lg shadow-emerald-950/40">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 animate-pulse" />
            <span>
              <strong className="text-emerald-300 uppercase">[ LIQUIDITY_RESOLVED ]:</strong> मुद्रा विनिमय का सर्वस्वीकार्य माध्यम है। क्रय और विक्रय स्वतंत्र हो गए, व्यापार तुरंत संभव हुआ!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Person 1 */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/40 shadow-xl space-y-3 text-center relative group hover:border-cyan-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '2.5s' }}>🌾</div>
              <h4 className="font-heading font-extrabold text-lg text-white">किसान (Agent A)</h4>
              <p className="text-xs text-slate-300 font-mono">गेहूं बेचकर <strong className="text-cyan-300">₹2,000</strong> प्राप्त किए।</p>
              <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 py-2 rounded-xl border border-emerald-500/40 shadow-sm flex items-center justify-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>₹2,000 से तुरंत कपड़ा क्रय!</span>
              </div>
            </div>

            {/* Person 2 */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/40 shadow-xl space-y-3 text-center relative group hover:border-cyan-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '2.8s' }}>🧵</div>
              <h4 className="font-heading font-extrabold text-lg text-white">बुनकर (Agent B)</h4>
              <p className="text-xs text-slate-300 font-mono">कपड़ा बेचकर <strong className="text-cyan-300">₹2,000</strong> नकद प्राप्त किए।</p>
              <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 py-2 rounded-xl border border-emerald-500/40 shadow-sm flex items-center justify-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>₹2,000 से मोची से जूते खरीदे!</span>
              </div>
            </div>

            {/* Person 3 */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-emerald-500/40 shadow-xl space-y-3 text-center relative group hover:border-cyan-400 transition">
              <div className="text-4xl animate-bounce" style={{ animationDuration: '3.1s' }}>👞</div>
              <h4 className="font-heading font-extrabold text-lg text-white">मोची (Agent C)</h4>
              <p className="text-xs text-slate-300 font-mono">जूते बेचकर <strong className="text-cyan-300">₹2,000</strong> नकद प्राप्त किए।</p>
              <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 py-2 rounded-xl border border-emerald-500/40 shadow-sm flex items-center justify-center gap-1.5">
                <Coins className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>₹2,000 से किसान से गेहूं क्रय!</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-emerald-500/30 text-center text-xs font-mono text-emerald-300">
            निष्कर्ष: मुद्रा ने आवश्यकताओं के दोहरे संयोग (Double Coincidence of Wants) की अनिवार्यता को समाप्त करके आर्थिक दक्षता स्थापित की।
          </div>
        </div>
      )}
    </div>
  );
};
