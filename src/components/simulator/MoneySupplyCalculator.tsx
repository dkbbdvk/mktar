import React, { useState } from 'react';
import { Layers, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';

export const MoneySupplyCalculator: React.FC = () => {
  const [currency, setCurrency] = useState<number>(150000);
  const [demandDeposits, setDemandDeposits] = useState<number>(200000);
  const [otherDepositsRbi, setOtherDepositsRbi] = useState<number>(5000);
  const [timeDeposits, setTimeDeposits] = useState<number>(500000);
  const [postOfficeSavings, setPostOfficeSavings] = useState<number>(12000);
  const [postOfficeTotal, setPostOfficeTotal] = useState<number>(25000);

  // Calculations
  const m1 = currency + demandDeposits + otherDepositsRbi;
  const m2 = m1 + postOfficeSavings;
  const m3 = m1 + timeDeposits;
  const m4 = m3 + postOfficeTotal;

  const loadPreset1 = () => {
    setCurrency(150000);
    setDemandDeposits(200000);
    setOtherDepositsRbi(5000);
    setTimeDeposits(500000);
    setPostOfficeSavings(12000);
    setPostOfficeTotal(25000);
  };

  const loadPreset2 = () => {
    setCurrency(80000);
    setDemandDeposits(120000);
    setOtherDepositsRbi(2000);
    setTimeDeposits(350000);
    setPostOfficeSavings(8000);
    setPostOfficeTotal(15000);
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-heading font-bold text-base sm:text-xl text-slate-900 flex items-center gap-1.5">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            मुद्रा पूर्ति कैलकुलेटर (M1, M2, M3, M4)
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
            RBI के चारों आधिकारिक मापों की गणना एवं तरलता विश्लेषण
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={loadPreset1}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200"
          >
            CBSE 1
          </button>
          <button
            onClick={loadPreset2}
            className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 border border-blue-200"
          >
            CBSE 2
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            जनता के पास करेंसी (C - ₹ करोड़):
          </label>
          <input
            type="number"
            value={currency}
            onChange={(e) => setCurrency(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            बैंकों की शुद्ध मांग जमाएं (DD - ₹ करोड़):
          </label>
          <input
            type="number"
            value={demandDeposits}
            onChange={(e) => setDemandDeposits(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            RBI के पास अन्य जमाएं (OD - ₹ करोड़):
          </label>
          <input
            type="number"
            value={otherDepositsRbi}
            onChange={(e) => setOtherDepositsRbi(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            बैंकों की सावधि जमाएं (Time Deposits - ₹ करोड़):
          </label>
          <input
            type="number"
            value={timeDeposits}
            onChange={(e) => setTimeDeposits(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            डाकघर बचत जमाएं (₹ करोड़):
          </label>
          <input
            type="number"
            value={postOfficeSavings}
            onChange={(e) => setPostOfficeSavings(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-[11px] sm:text-xs font-semibold text-slate-700 block mb-1">
            डाकघर कुल जमाएं (₹ करोड़):
          </label>
          <input
            type="number"
            value={postOfficeTotal}
            onChange={(e) => setPostOfficeTotal(Number(e.target.value))}
            className="w-full px-3 py-1.5 sm:py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>
      </div>

      {/* Calculated Output Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-1">
        {/* M1 Card */}
        <div className="p-3 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-200">
          <div className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase truncate">M1 (संकीर्ण मुद्रा)</div>
          <div className="text-base sm:text-2xl font-extrabold text-blue-950 mt-0.5 truncate">
            ₹{m1.toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-[11px] text-blue-600 mt-0.5 truncate">C + DD + OD (सर्वाधिक तरल)</p>
        </div>

        {/* M2 Card */}
        <div className="p-3 sm:p-4 rounded-xl bg-cyan-50/80 border border-cyan-200">
          <div className="text-[10px] sm:text-xs font-bold text-cyan-700 uppercase truncate">M2</div>
          <div className="text-base sm:text-2xl font-extrabold text-cyan-950 mt-0.5 truncate">
            ₹{m2.toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-[11px] text-cyan-600 mt-0.5 truncate">M1 + डाकघर बचत</p>
        </div>

        {/* M3 Card */}
        <div className="p-3 sm:p-4 rounded-xl bg-indigo-50/80 border border-indigo-200">
          <div className="text-[10px] sm:text-xs font-bold text-indigo-700 uppercase truncate">M3 (व्यापक मुद्रा)</div>
          <div className="text-base sm:text-2xl font-extrabold text-indigo-950 mt-0.5 truncate">
            ₹{m3.toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-[11px] text-indigo-600 mt-0.5 truncate">M1 + सावधि जमाएं</p>
        </div>

        {/* M4 Card */}
        <div className="p-3 sm:p-4 rounded-xl bg-purple-50/80 border border-purple-200">
          <div className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase truncate">M4</div>
          <div className="text-base sm:text-2xl font-extrabold text-purple-950 mt-0.5 truncate">
            ₹{m4.toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-[11px] text-purple-600 mt-0.5 truncate">M3 + डाकघर कुल</p>
        </div>
      </div>

      <div className="p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] sm:text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>तरलता क्रम: <strong>M1 &gt; M2 &gt; M3 &gt; M4</strong></span>
        <span className="text-blue-700 font-medium">नीतिगत उपयोग: M3 सर्वाधिक प्रचलित</span>
      </div>
    </div>
  );
};
