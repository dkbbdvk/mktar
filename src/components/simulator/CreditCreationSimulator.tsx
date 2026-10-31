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
  Sparkles
} from 'lucide-react';

export const CreditCreationSimulator: React.FC = () => {
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
            return prev + 1;
          } else {
            setIsPlaying(false);
            try {
              confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 }
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
    setIsPlaying(false);
    setCurrentRoundStep(1);
  };

  const handleInitialPreset = (amount: number) => {
    setInitialDeposit(amount);
    setCurrentRoundStep(1);
  };

  const handleLrrPreset = (rate: number) => {
    setLrr(rate);
    setCurrentRoundStep(1);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 translate-x-10 -translate-y-10 pointer-events-none hidden sm:block">
          <Calculator className="w-96 h-96 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> इंटरएक्टिव साख निर्माण प्रयोगशाला
          </div>
          <h2 className="text-xl sm:text-3xl font-bold font-heading leading-tight">
            व्यावसायिक बैंकों द्वारा साख निर्माण (Credit Creation)
          </h2>
          <p className="text-blue-100 text-xs sm:text-base leading-relaxed">
            देखें कि कैसे मात्र <strong>₹{initialDeposit.toLocaleString('en-IN')}</strong> की प्राथमिक नकद जमा और <strong>{lrr}%</strong> विधिक आरक्षित अनुपात (LRR) से पूरी बैंकिंग प्रणाली <strong>₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> की कुल जमाएं और <strong>₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}</strong> का नया ऋण सृजित कर देती है!
          </p>
        </div>
      </div>

      {/* Control Panel & Sliders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Input Parameters Card */}
        <div className="lg:col-span-5 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2.5">
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            सिमुलेशन पैरामीटर्स (Controls)
          </h3>

          {/* Initial Deposit Input */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center gap-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                प्राथमिक नकद जमा (Initial Deposit):
              </label>
              <span className="text-xs sm:text-base font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
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
              className="w-full accent-blue-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg touch-manipulation"
            />
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {[1000, 2500, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleInitialPreset(amt)}
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium transition ${
                    initialDeposit === amt
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
          </div>

          {/* LRR Input */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center gap-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-700">
                विधिक आरक्षित अनुपात (LRR):
              </label>
              <span className="text-xs sm:text-base font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
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
              className="w-full accent-amber-600 cursor-pointer h-2.5 bg-slate-200 rounded-lg touch-manipulation"
            />
            {/* LRR Presets */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {[10, 12.5, 20, 25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleLrrPreset(rate)}
                  className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium transition ${
                    lrr === rate
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {rate}% (k={(100 / rate).toFixed(1)})
                </button>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500 italic">
              * LRR = CRR (RBI के पास) + SLR (बैंक के स्वयं के पास)।
            </p>
          </div>

          {/* Compare Mode Toggle */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-semibold text-slate-700">तुलनात्मक विश्लेषण (Compare LRR)</span>
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-11 items-center rounded-full transition-colors ${
                  compareMode ? 'bg-blue-600' : 'bg-slate-300'
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
              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>तुलना हेतु दूसरा LRR:</span>
                  <span className="text-indigo-600 font-bold">{comparisonLrr}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={comparisonLrr}
                  onChange={(e) => setComparisonLrr(Number(e.target.value))}
                  className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg"
                />
                <p className="text-[10px] sm:text-[11px] text-slate-500">
                  देखें कि जब LRR {lrr}% से बदलकर {comparisonLrr}% होता है, तो साख निर्माण में क्या अंतर आता है।
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results & Key Multiplier Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Card 1: Multiplier */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-3 sm:p-4 rounded-2xl border border-indigo-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-indigo-700 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>साख गुणक (k)</span>
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-3xl font-extrabold text-indigo-900 truncate">
                {primaryResult.multiplier}×
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-indigo-600 mt-1 truncate">
              k = 1 / LRR
            </p>
          </div>

          {/* Card 2: Total Deposit Creation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-3 sm:p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-emerald-700 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>कुल जमा सृजन</span>
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-900 truncate">
                ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-emerald-600 mt-1 truncate">
              जमा × {primaryResult.multiplier}
            </p>
          </div>

          {/* Card 3: Total Legal Reserves */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 sm:p-4 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-amber-700 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>कुल कानूनी रिज़र्व</span>
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-amber-900 truncate">
                ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-amber-600 mt-1 truncate">
              = प्रारंभिक नकद (₹{initialDeposit})
            </p>
          </div>

          {/* Card 4: Net Loans / Credit Created */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 sm:p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-blue-700 text-[10px] sm:text-xs font-bold uppercase mb-1">
                <span>शुद्ध साख निर्माण</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-900 truncate">
                ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[10px] sm:text-[11px] text-blue-600 mt-1 truncate">
              कुल जमा - नकद
            </p>
          </div>

          {/* Comparative Card when compareMode is active */}
          {compareMode && (
            <div className="col-span-2 md:col-span-4 bg-indigo-950 text-white p-3.5 sm:p-4 rounded-2xl border border-indigo-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[10px] sm:text-xs uppercase text-indigo-300 font-semibold tracking-wider">
                  तुलना परिणाम
                </span>
                <p className="text-xs sm:text-sm text-indigo-100">
                  LRR <strong>{lrr}%</strong> पर कुल जमा <strong>₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> है, जबकि LRR <strong>{comparisonLrr}%</strong> पर घटकर <strong>₹{comparisonResult.totalDeposits.toLocaleString('en-IN')}</strong> रह जाएगी!
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className="text-center px-2.5 py-1 bg-indigo-900/80 rounded-xl border border-indigo-700">
                  <div className="text-[10px] text-indigo-300">गुणक</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-400">
                    {primaryResult.multiplier}× vs {comparisonResult.multiplier}×
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Stepper Control Bar */}
          <div className="col-span-2 md:col-span-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  isPlaying 
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? 'रोकें' : 'ऑटो-प्ले (Play)'}
              </button>

              <button
                onClick={() => setCurrentRoundStep((prev) => Math.min(primaryResult.rounds.length, prev + 1))}
                disabled={currentRoundStep >= primaryResult.rounds.length || isPlaying}
                className="px-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40 transition"
              >
                अगला दौर ⏭
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> रीसेट
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 self-center">
              <span>दौर:</span>
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-bold">
                {currentRoundStep} / {primaryResult.rounds.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Ledger Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-3.5 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900">
              दौर-दर-दौर साख विस्तार तालिका (Expansion Ledger)
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              प्रत्येक दौर में आरक्षित निधि और दिए जाने वाले ऋण का गणित
            </p>
          </div>
          <div className="text-[10px] sm:text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium self-start sm:self-auto">
            👉 उंगली से दाएँ-बाएँ स्वाइप करें
          </div>
        </div>

        <div className="overflow-x-auto touch-pan-x">
          <table className="w-full text-left text-xs sm:text-sm min-w-[540px]">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3 sm:px-4">दौर</th>
                <th className="py-2.5 px-3 sm:px-4">जमा (Deposit ₹)</th>
                <th className="py-2.5 px-3 sm:px-4">रिज़र्व ({lrr}% ₹)</th>
                <th className="py-2.5 px-3 sm:px-4">ऋण (Loan ₹)</th>
                <th className="py-2.5 px-3 sm:px-4">संचयी जमा (Total ₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {primaryResult.rounds.slice(0, currentRoundStep).map((r, index) => {
                const isLatest = index === currentRoundStep - 1;
                return (
                  <tr
                    key={r.round}
                    className={`transition-colors ${
                      isLatest ? 'bg-blue-50/70 font-medium' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-2.5 px-3 sm:px-4 flex items-center gap-1.5 text-slate-900 whitespace-nowrap">
                      {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />}
                      {r.label}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-emerald-700 font-semibold whitespace-nowrap">
                      ₹{r.deposit.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-amber-700 font-medium whitespace-nowrap">
                      ₹{r.reserve.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-blue-700 font-semibold whitespace-nowrap">
                      ₹{r.loan.toLocaleString('en-IN')}
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-indigo-900 font-bold whitespace-nowrap">
                      ₹{r.cumulativeDeposit.toLocaleString('en-IN')}
                    </td>
                  </tr>
                );
              })}

              {/* Final Total Row */}
              <tr className="bg-slate-900 text-white font-bold border-t-2 border-slate-900">
                <td className="py-3 px-3 sm:px-4 text-amber-300 whitespace-nowrap">
                  कुल योग (Final Total)
                </td>
                <td className="py-3 px-3 sm:px-4 text-emerald-300 whitespace-nowrap">
                  ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-3 sm:px-4 text-amber-300 whitespace-nowrap">
                  ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-3 sm:px-4 text-blue-300 whitespace-nowrap">
                  ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
                </td>
                <td className="py-3 px-3 sm:px-4 text-indigo-300 whitespace-nowrap">
                  ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Proportional Bar Breakdown */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 sm:space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
          <Info className="w-4 h-4 text-blue-600" />
          कुल सृजित संपदा का दृश्य विभाजन (₹{primaryResult.totalDeposits.toLocaleString('en-IN')})
        </h4>

        {/* Stacked Bar */}
        <div className="h-5 sm:h-6 w-full rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
          <div
            style={{ width: `${(initialDeposit / primaryResult.totalDeposits) * 100}%` }}
            className="bg-amber-500 h-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white transition-all duration-500"
          >
            {lrr}%
          </div>
          <div
            style={{ width: `${(primaryResult.totalCreditCreated / primaryResult.totalDeposits) * 100}%` }}
            className="bg-blue-600 h-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white transition-all duration-500"
          >
            ऋण {(100 - lrr)}%
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-1.5 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span>कानूनी आरक्षित नकदी: <strong>₹{primaryResult.totalReserves.toLocaleString('en-IN')}</strong> ({lrr}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
            <span>सृजित नया ऋण: <strong>₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}</strong> ({(100 - lrr)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
