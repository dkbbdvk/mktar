import React, { useState } from 'react';
import { RevisionRelationship } from '../../content/chapters/money-and-banking/revisionNotes';
import { Zap, TrendingUp, TrendingDown, CheckCircle2, ShieldAlert } from 'lucide-react';

interface QuickRevisionCardsProps {
  relationships: RevisionRelationship[];
}

export const QuickRevisionCards: React.FC<QuickRevisionCardsProps> = ({ relationships }) => {
  const [filterMode, setFilterMode] = useState<'all' | 'inflation' | 'deflation'>('all');

  return (
    <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider">
            त्वरित पुनरावलोकन नोट्स (Quick Revision)
          </span>
          <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mt-0.5">
            मौद्रिक नीति उपकरण एवं संबंध मैट्रिक्स
          </h3>
          <p className="text-[11px] sm:text-sm text-slate-500 mt-0.5">
            परीक्षा से पहले 5 मिनट में सभी नीतिगत क्रियाओं का मास्टर सार
          </p>
        </div>

        {/* View Mode Filters */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto overflow-x-auto scrollbar-none">
          <button
            onClick={() => setFilterMode('all')}
            className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 ${
              filterMode === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            सभी (All)
          </button>
          <button
            onClick={() => setFilterMode('inflation')}
            className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 ${
              filterMode === 'inflation' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            महंगाई (Inflation)
          </button>
          <button
            onClick={() => setFilterMode('deflation')}
            className={`text-xs px-2.5 sm:px-3 py-1.5 rounded-lg font-bold transition shrink-0 ${
              filterMode === 'deflation' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            मंदी (Deflation)
          </button>
        </div>
      </div>

      <div className="text-[10px] sm:text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium sm:hidden inline-block">
        👉 तालिका को दाएँ-बाएँ स्वाइप करें
      </div>

      {/* The Master Relationships Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 touch-pan-x">
        <table className="w-full text-left text-xs sm:text-sm min-w-[540px]">
          <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 text-xs">
            <tr>
              <th className="py-2.5 px-3 sm:px-4">मौद्रिक उपकरण</th>
              {(filterMode === 'all' || filterMode === 'inflation') && (
                <th className="py-2.5 px-3 sm:px-4 text-rose-800 bg-rose-50/50">
                  मुद्रास्फीति (Inflation)
                </th>
              )}
              {(filterMode === 'all' || filterMode === 'deflation') && (
                <th className="py-2.5 px-3 sm:px-4 text-emerald-800 bg-emerald-50/50">
                  मंदी (Deflation)
                </th>
              )}
              <th className="py-2.5 px-3 sm:px-4 text-blue-900 bg-blue-50/50">
                मुद्रा पूर्ति
              </th>
              <th className="py-2.5 px-3 sm:px-4">तार्किक कारण (Logic)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {relationships.map((rel, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-slate-900 whitespace-nowrap">
                  <div>{rel.toolHi}</div>
                  <div className="text-[10px] text-slate-400 font-normal">{rel.tool}</div>
                </td>

                {(filterMode === 'all' || filterMode === 'inflation') && (
                  <td className="py-2.5 px-3 sm:px-4 text-rose-700 font-semibold bg-rose-50/20 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> {rel.inflationAction}
                    </span>
                  </td>
                )}

                {(filterMode === 'all' || filterMode === 'deflation') && (
                  <td className="py-2.5 px-3 sm:px-4 text-emerald-700 font-semibold bg-emerald-50/20 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" /> {rel.deflationAction}
                    </span>
                  </td>
                )}

                <td className="py-2.5 px-3 sm:px-4 text-blue-800 font-medium bg-blue-50/20 whitespace-nowrap">
                  {rel.impactOnMoneySupply}
                </td>

                <td className="py-2.5 px-3 sm:px-4 text-slate-600 text-xs leading-relaxed min-w-[200px]">
                  {rel.logicHi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Essential Formulas Cheat Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 pt-1">
        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
          <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase truncate">साख गुणक</div>
          <div className="font-mono text-base sm:text-lg font-bold text-blue-700">k = 1 / LRR</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">LRR से उल्टा संबंध</p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
          <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase truncate">कुल जमा सृजन</div>
          <div className="font-mono text-xs sm:text-base font-bold text-emerald-700 truncate">Initial × (1/LRR)</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">जमा का गुणक गुना</p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
          <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase truncate">संकीर्ण माप (M1)</div>
          <div className="font-mono text-xs sm:text-base font-bold text-indigo-700 truncate">M1 = C+DD+OD</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">सर्वाधिक तरल</p>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-0.5">
          <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase truncate">उच्च-शक्ति मुद्रा</div>
          <div className="font-mono text-xs sm:text-base font-bold text-purple-700 truncate">H = C + R</div>
          <p className="text-[10px] sm:text-[11px] text-slate-500 truncate">करेंसी + बैंक रिज़र्व</p>
        </div>
      </div>
    </div>
  );
};
