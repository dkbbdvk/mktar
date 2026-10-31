import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCreditCreation } from '../../hooks/useCreditCreation';
import { 
  Calculator, 
  RotateCcw, 
  Play, 
  Pause, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Info, 
  HelpCircle, 
  Sparkles, 
  Volume2,
  Cpu,
  Activity,
  Zap
} from 'lucide-react';
import { playCyberClick } from '../../utils/cyberAudio';

interface CreditCreationSimulatorProps {
  onSpeak?: (text: string, title: string, id: string) => void;
  activeSpeechId?: string | null;
  isSpeaking?: boolean;
}

export const CreditCreationSimulator: React.FC<CreditCreationSimulatorProps> = ({
  onSpeak,
  activeSpeechId,
  isSpeaking
}) => {
  const [initialDeposit, setInitialDeposit] = useState<number>(1000);
  const [lrr, setLrr] = useState<number>(10);
  const [currentRoundStep, setCurrentRoundStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [comparisonLrr, setComparisonLrr] = useState<number>(20);

  const primaryResult = useCreditCreation(initialDeposit, lrr);
  const comparisonResult = useCreditCreation(initialDeposit, comparisonLrr);

  // Auto-play animation through rounds
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentRoundStep((prev) => {
          if (prev < primaryResult.rounds.length) {
            playCyberClick();
            return prev + 1;
          } else {
            setIsPlaying(false);
            try {
              confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.7 },
                colors: ['#06b6d4', '#8b5cf6', '#10b981']
              });
            } catch (e) {
              // ignore
            }
            return prev;
          }
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isPlaying, primaryResult.rounds.length]);

  const handleReset = () => {
    playCyberClick();
    setIsPlaying(false);
    setCurrentRoundStep(1);
  };

  const handleInitialPreset = (amount: number) => {
    playCyberClick();
    setInitialDeposit(amount);
    setCurrentRoundStep(1);
  };

  const handleLrrPreset = (rate: number) => {
    playCyberClick();
    setLrr(rate);
    setCurrentRoundStep(1);
  };

  return (
    <div className="space-y-6 sm:space-y-8 text-white relative">
      {/* Header Banner */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-2xl shadow-cyan-950/40 overflow-hidden">
        {/* Corner Accents */}
        <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-10" />
        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400 z-10" />

        <div className="bg-slate-950/95 backdrop-blur-2xl p-5 sm:p-8 rounded-3xl relative overflow-hidden space-y-3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-6 animate-scanline pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              [ QUANTUM CREDIT EXPANSION LAB // V4.2 ]
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
              व्यावसायिक बैंकों द्वारा साख निर्माण (Credit Creation)
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal">
              देखें कि कैसे मात्र <strong className="text-cyan-300 font-mono">₹{initialDeposit.toLocaleString('en-IN')}</strong> की प्राथमिक नकद जमा और <strong className="text-amber-300 font-mono">{lrr}%</strong> विधिक आरक्षित अनुपात (LRR) से पूरी बैंकिंग प्रणाली <strong className="text-emerald-300 font-mono">₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> की कुल जमाएं और <strong className="text-purple-300 font-mono">₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}</strong> का नया ऋण सृजित कर देती है!
            </p>
          </div>
        </div>
      </div>

      {/* Control Panel & Sliders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Input Parameters Card */}
        <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-cyan-500/30 shadow-xl space-y-5">
          <h3 className="font-heading font-bold text-base sm:text-lg text-white flex items-center gap-2 border-b border-cyan-500/20 pb-2.5 font-mono">
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            सिमुलेशन पैरामीटर्स [CONTROLS]
          </h3>

          {/* Initial Deposit Input */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center gap-2 font-mono">
              <label className="text-xs sm:text-sm font-semibold text-slate-300">
                प्राथमिक नकद जमा (Initial Deposit):
              </label>
              <span className="text-xs sm:text-base font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-lg border border-cyan-500/40">
                ₹{initialDeposit.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="20000"
              step="500"
              value={initialDeposit}
              onChange={(e) => {
                setInitialDeposit(Number(e.target.value));
                setCurrentRoundStep(1);
              }}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg touch-manipulation"
            />
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 pt-0.5 font-mono">
              {[1000, 2500, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleInitialPreset(amt)}
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    initialDeposit === amt
                      ? 'bg-cyan-600 text-white shadow-sm border border-cyan-400'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* LRR Input */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center gap-2 font-mono">
              <label className="text-xs sm:text-sm font-semibold text-slate-300">
                विधिक आरक्षित अनुपात (LRR):
              </label>
              <span className="text-xs sm:text-base font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-lg border border-amber-500/40">
                {lrr}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={lrr}
              onChange={(e) => {
                setLrr(Number(e.target.value));
                setCurrentRoundStep(1);
              }}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg touch-manipulation"
            />
            {/* LRR Presets */}
            <div className="flex flex-wrap gap-1.5 pt-0.5 font-mono">
              {[10, 12.5, 20, 25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleLrrPreset(rate)}
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                    lrr === rate
                      ? 'bg-amber-600 text-white shadow-sm border border-amber-400'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {rate}% (k={(100 / rate).toFixed(1)})
                </button>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-mono italic">
              * LRR = CRR (RBI के पास) + SLR (बैंक के स्वयं के पास)।
            </p>
          </div>

          {/* Compare Mode Toggle */}
          <div className="pt-2 border-t border-cyan-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-semibold text-slate-300">तुलनात्मक विश्लेषण (COMPARE_LRR)</span>
              <button
                onClick={() => {
                  playCyberClick();
                  setCompareMode(!compareMode);
                }}
                className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors cursor-pointer ${
                  compareMode ? 'bg-cyan-500' : 'bg-slate-800'
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform ${
                    compareMode ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {compareMode && (
              <div className="mt-3 p-3 bg-slate-950/80 rounded-xl border border-cyan-500/30 space-y-2">
                <div className="flex justify-between text-xs font-mono font-semibold text-slate-300">
                  <span>तुलना हेतु दूसरा LRR:</span>
                  <span className="text-cyan-400 font-bold">{comparisonLrr}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={comparisonLrr}
                  onChange={(e) => setComparisonLrr(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                  LRR {lrr}% बनाम {comparisonLrr}% साख गुणक तुलना।
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results & Key Multiplier Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 font-mono">
          {/* Card 1: Multiplier */}
          <div className="bg-slate-900/90 p-3.5 sm:p-4 rounded-2xl border border-cyan-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-cyan-400 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>साख गुणक (k)</span>
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-white truncate">
                {primaryResult.multiplier}×
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-cyan-300/80 mt-1 truncate">
              k = 1 / LRR
            </p>
          </div>

          {/* Card 2: Total Deposit Creation */}
          <div className="bg-slate-900/90 p-3.5 sm:p-4 rounded-2xl border border-emerald-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-emerald-400 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>कुल जमा सृजन</span>
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white truncate">
                ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-emerald-300/80 mt-1 truncate">
              जमा × {primaryResult.multiplier}
            </p>
          </div>

          {/* Card 3: Total Legal Reserves */}
          <div className="bg-slate-900/90 p-3.5 sm:p-4 rounded-2xl border border-amber-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-amber-400 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>कुल कानूनी रिज़र्व</span>
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white truncate">
                ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-300/80 mt-1 truncate">
              = नकद (₹{initialDeposit})
            </p>
          </div>

          {/* Card 4: Net Loans / Credit Created */}
          <div className="bg-slate-900/90 p-3.5 sm:p-4 rounded-2xl border border-purple-500/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-purple-400 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>शुद्ध साख निर्माण</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white truncate">
                ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-purple-300/80 mt-1 truncate">
              कुल जमा - नकद
            </p>
          </div>

          {/* Comparative Card when compareMode is active */}
          {compareMode && (
            <div className="col-span-2 md:col-span-4 bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-cyan-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[10px] sm:text-xs uppercase text-cyan-400 font-mono font-bold tracking-wider">
                  [ COMPARATIVE_ANALYSIS ]
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-sans">
                  LRR <strong>{lrr}%</strong> पर कुल जमा <strong>₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> है, जबकि LRR <strong>{comparisonLrr}%</strong> पर घटकर <strong>₹{comparisonResult.totalDeposits.toLocaleString('en-IN')}</strong> रह जाएगी!
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-center px-2.5 py-1 bg-slate-900 rounded-xl border border-cyan-500/30">
                  <div className="text-[10px] text-cyan-400 font-mono">गुणक</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-300 font-mono">
                    {primaryResult.multiplier}× vs {comparisonResult.multiplier}×
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Stepper Control Bar */}
          <div className="col-span-2 md:col-span-4 bg-slate-900/90 p-3 sm:p-4 rounded-2xl border border-cyan-500/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  playCyberClick();
                  setIsPlaying(!isPlaying);
                }}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  isPlaying 
                    ? 'bg-amber-500 text-black hover:bg-amber-400 font-bold'
                    : 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-600/30 border border-cyan-400/40'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'रोकें' : 'ऑटो-प्ले (Play)'}
              </button>

              <button
                onClick={() => {
                  playCyberClick();
                  setCurrentRoundStep((prev) => Math.min(primaryResult.rounds.length, prev + 1));
                }}
                disabled={currentRoundStep >= primaryResult.rounds.length || isPlaying}
                className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-30 transition cursor-pointer border border-slate-700"
              >
                अगला दौर ⏭
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:bg-slate-800 transition cursor-pointer border border-slate-800"
              >
                <RotateCcw className="w-3.5 h-3.5" /> रीसेट
              </button>

              {onSpeak && (
                <button
                  onClick={() => {
                    playCyberClick();
                    const speech = `साख निर्माण प्रक्रिया की संपूर्ण व्याख्या: प्रारंभिक जमा ₹${initialDeposit} रुपये और वैधानिक तरलता अनुपात LRR ${lrr} प्रतिशत होने पर, साख गुणक यानी क्रेडिट मल्टीप्लायर 1 बटा ${lrr}% यानी ${(100/lrr).toFixed(1)} आता है। इसका अर्थ है कि बैंकिंग प्रणाली इस प्रारंभिक जमा से कुल ₹${primaryResult.totalDeposits.toLocaleString('en-IN')} रुपये की कुल जमाएँ निर्मित करेगी, जिसमें से ₹${primaryResult.totalCreditCreated.toLocaleString('en-IN')} रुपये का नया ऋण सृजित होगा और ₹${primaryResult.totalReserves.toLocaleString('en-IN')} रुपये बैंक रिज़र्व में सुरक्षित रहेगा।${compareMode ? ` तुलनात्मक विश्लेषण: यदि LRR को बढ़ाकर ${comparisonLrr} प्रतिशत किया जाए, तो कुल जमा सृजन घटकर मात्र ₹${comparisonResult.totalDeposits.toLocaleString('en-IN')} रह जाएगा, क्योंकि LRR और साख सृजन में विपरीत संबंध होता है।` : ''}`;
                    onSpeak(speech, 'साख निर्माण सिमुलेटर व्याख्या', 'sim-credit-creation');
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                    activeSpeechId === 'sim-credit-creation' && isSpeaking
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-500/40'
                  }`}
                  title="साख निर्माण की ऑडियो व्याख्या सुनें"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{activeSpeechId === 'sim-credit-creation' && isSpeaking ? 'रोकें' : '🔊 AI व्याख्या'}</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300 self-center">
              <span>दौर (CYCLE):</span>
              <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded-md font-bold border border-cyan-500/30">
                {currentRoundStep} / {primaryResult.rounds.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Ledger Table */}
      <div className="bg-slate-900/90 rounded-2xl border border-cyan-500/30 shadow-xl overflow-hidden font-mono">
        <div className="p-3.5 sm:p-5 bg-slate-950/80 border-b border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-heading font-bold text-sm sm:text-lg text-white font-mono">
              दौर-दर-दौर साख विस्तार तालिका [EXPANSION_LEDGER]
            </h3>
            <p className="text-[11px] sm:text-xs text-cyan-400/80 mt-0.5">
              प्रत्येक दौर में बैंक केवल कानूनी आरक्षित अनुपात (LRR) काटकर शेष राशि ऋण के रूप में आगे दे देता है।
            </p>
          </div>
          <span className="text-[10px] sm:text-xs text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30 font-medium sm:hidden self-start">
            👉 तालिका को स्वाइप करें
          </span>
        </div>

        <div className="overflow-x-auto touch-pan-x">
          <table className="w-full text-left text-xs sm:text-sm min-w-[500px]">
            <thead className="bg-slate-950 text-slate-400 font-bold border-b border-cyan-500/20 text-xs">
              <tr>
                <th className="py-2.5 px-3 sm:px-4">दौर (Round)</th>
                <th className="py-2.5 px-3 sm:px-4 text-cyan-400">जमा राशि (Deposit)</th>
                <th className="py-2.5 px-3 sm:px-4 text-amber-400">रिज़र्व (LRR {lrr}%)</th>
                <th className="py-2.5 px-3 sm:px-4 text-purple-400">नया ऋण (Loans)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {primaryResult.rounds.slice(0, currentRoundStep).map((r) => (
                <tr key={r.round} className="hover:bg-slate-800/50 transition-colors animate-fadeIn">
                  <td className="py-2.5 px-3 sm:px-4 font-bold text-white whitespace-nowrap">
                    {r.label}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-cyan-300 whitespace-nowrap">
                    ₹{r.deposit.toLocaleString('en-IN')}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-amber-300 whitespace-nowrap">
                    ₹{r.reserve.toLocaleString('en-IN')}
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 font-semibold text-purple-300 whitespace-nowrap">
                    ₹{r.loan.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
              {/* Grand Total Row */}
              <tr className="bg-slate-950 font-bold text-white border-t-2 border-cyan-500/40 text-xs sm:text-sm">
                <td className="py-3 px-3 sm:px-4 text-amber-300">
                  अंतिम कुल योग (Σ)
                </td>
                <td className="py-3 px-3 sm:px-4 text-cyan-400">
                  ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-3 sm:px-4 text-amber-400">
                  ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-3 sm:px-4 text-purple-400">
                  ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
