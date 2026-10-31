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
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 translate-x-10 -translate-y-10 pointer-events-none">
          <Calculator className="w-96 h-96 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> इंटरएक्टिव साख निर्माण प्रयोगशाला (Interactive Credit Simulator)
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            व्यावसायिक बैंकों द्वारा साख निर्माण (Credit Creation by Commercial Banks)
          </h2>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            देखें कि कैसे मात्र <strong>₹{initialDeposit.toLocaleString('en-IN')}</strong> की प्राथमिक नकद जमा और <strong>{lrr}%</strong> विधिक आरक्षित अनुपात (LRR) से पूरी बैंकिंग प्रणाली <strong>₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> की कुल जमाएं और <strong>₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}</strong> का नया ऋण सृजित कर देती है!
          </p>
        </div>
      </div>

      {/* Control Panel & Sliders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Parameters Card */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
            <Calculator className="w-5 h-5 text-blue-600" />
            सिमुलेशन पैरामीटर्स (Simulation Controls)
          </h3>

          {/* Initial Deposit Input */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700">
                प्राथमिक नकद जमा (Initial Primary Deposit - ₹):
              </label>
              <span className="text-base font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
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
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            {/* Presets */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[1000, 2500, 5000, 10000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleInitialPreset(amt)}
                  className={`text-xs px-3 py-1 rounded-md font-medium transition ${
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
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-700">
                विधिक आरक्षित अनुपात (Legal Reserve Ratio - LRR):
              </label>
              <span className="text-base font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-100">
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
              className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            {/* LRR Presets */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[10, 12.5, 20, 25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleLrrPreset(rate)}
                  className={`text-xs px-3 py-1 rounded-md font-medium transition ${
                    lrr === rate
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {rate}% (k = {(100 / rate).toFixed(1)})
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic">
              * LRR = CRR (RBI के पास) + SLR (बैंक के स्वयं के पास)।
            </p>
          </div>

          {/* Compare Mode Toggle */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">तुलनात्मक विश्लेषण (Compare LRR Mode)</span>
              <button
                onClick={() => setCompareMode(!compareMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  compareMode ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    compareMode ? 'translate-x-6' : 'translate-x-1'
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
                  className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg"
                />
                <p className="text-[11px] text-slate-500">
                  देखें कि जब LRR {lrr}% से बदलकर {comparisonLrr}% होता है, तो साख निर्माण में क्या अंतर आता है।
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results & Key Multiplier Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: Multiplier */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-2xl border border-indigo-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-indigo-700 text-xs font-bold uppercase mb-2">
                <span>साख गुणक (k)</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-3xl font-extrabold text-indigo-900">
                {primaryResult.multiplier}×
              </div>
            </div>
            <p className="text-[11px] text-indigo-600 mt-2">
              सूत्र: k = 1 / LRR = 1 / {(lrr / 100).toFixed(2)}
            </p>
          </div>

          {/* Card 2: Total Deposit Creation */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-emerald-700 text-xs font-bold uppercase mb-2">
                <span>कुल जमा सृजन</span>
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-emerald-900">
                ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[11px] text-emerald-600 mt-2">
              प्रारंभिक जमा × {primaryResult.multiplier}
            </p>
          </div>

          {/* Card 3: Total Legal Reserves */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-amber-700 text-xs font-bold uppercase mb-2">
                <span>कुल कानूनी रिज़र्व</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-amber-900">
                ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[11px] text-amber-600 mt-2">
              = प्रारंभिक नकद जमा (₹{initialDeposit})
            </p>
          </div>

          {/* Card 4: Net Loans / Credit Created */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-blue-700 text-xs font-bold uppercase mb-2">
                <span>शुद्ध साख निर्माण</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-blue-900">
                ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
              </div>
            </div>
            <p className="text-[11px] text-blue-600 mt-2">
              कुल जमाएं - प्रारंभिक जमा
            </p>
          </div>

          {/* Comparative Card when compareMode is active */}
          {compareMode && (
            <div className="col-span-2 md:col-span-4 bg-indigo-950 text-white p-4 rounded-2xl border border-indigo-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs uppercase text-indigo-300 font-semibold tracking-wider">
                  तुलना परिणाम (Comparison Insight)
                </span>
                <p className="text-sm text-indigo-100">
                  LRR <strong>{lrr}%</strong> पर कुल जमा <strong>₹{primaryResult.totalDeposits.toLocaleString('en-IN')}</strong> है, जबकि LRR <strong>{comparisonLrr}%</strong> करने पर कुल जमा घटकर <strong>₹{comparisonResult.totalDeposits.toLocaleString('en-IN')}</strong> रह जाएगी!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center px-3 py-1.5 bg-indigo-900/80 rounded-xl border border-indigo-700">
                  <div className="text-xs text-indigo-300">गुणक अंतर</div>
                  <div className="text-base font-bold text-amber-400">
                    {primaryResult.multiplier}× vs {comparisonResult.multiplier}×
                  </div>
                </div>
                <div className="text-center px-3 py-1.5 bg-indigo-900/80 rounded-xl border border-indigo-700">
                  <div className="text-xs text-indigo-300">जमा अंतर</div>
                  <div className="text-base font-bold text-emerald-400">
                    ₹{Math.abs(primaryResult.totalDeposits - comparisonResult.totalDeposits).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Stepper Control Bar */}
          <div className="col-span-2 md:col-span-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  isPlaying 
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'रोकें (Pause)' : 'ऑटो-प्ले दौर (Play Step-by-Step)'}
              </button>

              <button
                onClick={() => setCurrentRoundStep((prev) => Math.min(primaryResult.rounds.length, prev + 1))}
                disabled={currentRoundStep >= primaryResult.rounds.length || isPlaying}
                className="px-3 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40 transition"
              >
                अगला दौर ⏭
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> रीसेट
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span>वर्तमान प्रदर्शित दौर:</span>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg">
                दौर {currentRoundStep} / {primaryResult.rounds.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Ledger Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              दौर-दर-दौर साख विस्तार तालिका (Round-by-Round Credit Expansion Ledger)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              प्रत्येक दौर में बैंक द्वारा रखी जाने वाली आरक्षित निधि और दिए जाने वाले ऋण का वास्तविक गणित
            </p>
          </div>
          <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            मान्यता: सभी लेनदेन बैंक चेक/डिजिटल द्वारा संपन्न
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">दौर (Rounds)</th>
                <th className="py-3 px-4">प्राप्त नई जमा (Deposit ₹)</th>
                <th className="py-3 px-4">विधिक आरक्षित निधि (Reserve {lrr}% ₹)</th>
                <th className="py-3 px-4">सृजित नया ऋण (Loan ₹)</th>
                <th className="py-3 px-4">संचयी कुल जमा (Cumulative Deposit ₹)</th>
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
                    <td className="py-3 px-4 flex items-center gap-2 text-slate-900">
                      {isLatest && <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />}
                      {r.label}
                    </td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">
                      ₹{r.deposit.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-amber-700 font-medium">
                      ₹{r.reserve.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-blue-700 font-semibold">
                      ₹{r.loan.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-indigo-900 font-bold">
                      ₹{r.cumulativeDeposit.toLocaleString('en-IN')}
                    </td>
                  </tr>
                );
              })}

              {/* Final Total Row (Only when all rounds or final reached) */}
              <tr className="bg-slate-900 text-white font-bold border-t-2 border-slate-900">
                <td className="py-3.5 px-4 text-amber-300">
                  अंतिम कुल योग (Final Total)
                </td>
                <td className="py-3.5 px-4 text-emerald-300">
                  ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
                </td>
                <td className="py-3.5 px-4 text-amber-300">
                  ₹{primaryResult.totalReserves.toLocaleString('en-IN')}
                </td>
                <td className="py-3.5 px-4 text-blue-300">
                  ₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}
                </td>
                <td className="py-3.5 px-4 text-indigo-300">
                  ₹{primaryResult.totalDeposits.toLocaleString('en-IN')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Proportional Bar Breakdown */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-600" />
          कुल सृजित संपदा का दृश्य विभाजन (Visual Breakdown of ₹{primaryResult.totalDeposits.toLocaleString('en-IN')})
        </h4>

        {/* Stacked Bar */}
        <div className="h-6 w-full rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
          <div
            style={{ width: `${(initialDeposit / primaryResult.totalDeposits) * 100}%` }}
            className="bg-amber-500 h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
            title={`आरक्षित निधि: ₹${initialDeposit}`}
          >
            रिज़र्व {lrr}%
          </div>
          <div
            style={{ width: `${(primaryResult.totalCreditCreated / primaryResult.totalDeposits) * 100}%` }}
            className="bg-blue-600 h-full flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
            title={`सृजित ऋण: ₹${primaryResult.totalCreditCreated}`}
          >
            सृजित ऋण {(100 - lrr)}%
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span>कानूनी आरक्षित नकदी (Reserves): <strong>₹{primaryResult.totalReserves.toLocaleString('en-IN')}</strong> ({lrr}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
            <span>सृजित नया साख/ऋण (Loans): <strong>₹{primaryResult.totalCreditCreated.toLocaleString('en-IN')}</strong> ({(100 - lrr)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
