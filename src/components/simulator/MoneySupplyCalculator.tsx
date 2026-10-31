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
    // CBSE standard sample
    setCurrency(80000);
    setDemandDeposits(120000);
    setOtherDepositsRbi(2000);
    setTimeDeposits(350000);
    setPostOfficeSavings(8000);
    setPostOfficeTotal(15000);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            मुद्रा पूर्ति कैलकुलेटर (Money Supply Calculator - M1, M2, M3, M4)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            RBI के चारों आधिकारिक मापों की गणना एवं तरलता विश्लेषण
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadPreset1}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200"
          >
            CBSE उदाहरण 1
          </button>
          <button
            onClick={loadPreset2}
            className="text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 border border-blue-200"
          >
            CBSE उदाहरण 2
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            जनता के पास करेंसी (C - ₹ करोड़):
          </label>
          <input
            type="number"
            value={currency}
            onChange={(e) => setCurrency(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            बैंकों की शुद्ध मांग जमाएं (DD - ₹ करोड़):
          </label>
          <input
            type="number"
            value={demandDeposits}
            onChange={(e) => setDemandDeposits(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            RBI के पास अन्य जमाएं (OD - ₹ करोड़):
          </label>
          <input
            type="number"
            value={otherDepositsRbi}
            onChange={(e) => setOtherDepositsRbi(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            बैंकों की सावधि / मीयादी जमाएं (Time Deposits - ₹ करोड़):
          </label>
          <input
            type="number"
            value={timeDeposits}
            onChange={(e) => setTimeDeposits(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            डाकघर बचत बैंकों की बचत जमाएं (₹ करोड़):
          </label>
          <input
            type="number"
            value={postOfficeSavings}
            onChange={(e) => setPostOfficeSavings(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700 block mb-1">
            डाकघर की कुल जमाएं (NSC को छोड़कर - ₹ करोड़):
          </label>
          <input
            type="number"
            value={postOfficeTotal}
            onChange={(e) => setPostOfficeTotal(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </div>
      </div>

      {/* Calculated Output Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {/* M1 Card */}
        <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200">
          <div className="text-xs font-bold text-blue-700 uppercase">M1 (संकीर्ण मुद्रा - Narrow)</div>
          <div className="text-2xl font-extrabold text-blue-950 mt-1">
            ₹{m1.toLocaleString('en-IN')} <span className="text-xs font-normal">करोड़</span>
          </div>
          <p className="text-[11px] text-blue-600 mt-1">C + DD + OD (सर्वाधिक तरल)</p>
        </div>

        {/* M2 Card */}
        <div className="p-4 rounded-xl bg-cyan-50/80 border border-cyan-200">
          <div className="text-xs font-bold text-cyan-700 uppercase">M2</div>
          <div className="text-2xl font-extrabold text-cyan-950 mt-1">
            ₹{m2.toLocaleString('en-IN')} <span className="text-xs font-normal">करोड़</span>
          </div>
          <p className="text-[11px] text-cyan-600 mt-1">M1 + डाकघर बचत जमाएं</p>
        </div>

        {/* M3 Card */}
        <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200">
          <div className="text-xs font-bold text-indigo-700 uppercase">M3 (व्यापक मुद्रा - Broad)</div>
          <div className="text-2xl font-extrabold text-indigo-950 mt-1">
            ₹{m3.toLocaleString('en-IN')} <span className="text-xs font-normal">करोड़</span>
          </div>
          <p className="text-[11px] text-indigo-600 mt-1">M1 + व्यावसायिक बैंक सावधि जमा</p>
        </div>

        {/* M4 Card */}
        <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200">
          <div className="text-xs font-bold text-purple-700 uppercase">M4</div>
          <div className="text-2xl font-extrabold text-purple-950 mt-1">
            ₹{m4.toLocaleString('en-IN')} <span className="text-xs font-normal">करोड़</span>
          </div>
          <p className="text-[11px] text-purple-600 mt-1">M3 + डाकघर कुल जमा (कम तरल)</p>
        </div>
      </div>

      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span>तरलता क्रम (Liquidity Order): <strong>M1 &gt; M2 &gt; M3 &gt; M4</strong></span>
        <span className="text-blue-700 font-medium">नीतिगत उपयोग: M3 सर्वाधिक प्रचलित</span>
      </div>
    </div>
  );
};
