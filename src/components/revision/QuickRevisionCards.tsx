import React, { useState } from 'react';
import { RevisionRelationship } from '../../content/chapters/money-and-banking/revisionNotes';
import { Zap, TrendingUp, TrendingDown, CheckCircle2, ShieldAlert } from 'lucide-react';

interface QuickRevisionCardsProps {
  relationships: RevisionRelationship[];
}

export const QuickRevisionCards: React.FC<QuickRevisionCardsProps> = ({ relationships }) => {
  const [filterMode, setFilterMode] = useState<'all' | 'inflation' | 'deflation'>('all');

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            त्वरित पुनरावलोकन नोट्स (Quick Revision Cheat-Sheet)
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-slate-900 mt-1">
            मौद्रिक नीति उपकरण एवं प्रत्यक्ष/विलोम संबंध मैट्रिक्स
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-0.5">
            परीक्षा से पहले 5 मिनट में सभी नीतिगत क्रियाओं का मास्टर सार
          </p>
        </div>

        {/* View Mode Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setFilterMode('all')}
            className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
              filterMode === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            सभी उपकरण (All)
          </button>
          <button
            onClick={() => setFilterMode('inflation')}
            className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
              filterMode === 'inflation' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            महंगाई नियंत्रण (Inflation)
          </button>
          <button
            onClick={() => setFilterMode('deflation')}
            className={`text-xs px-3 py-1.5 rounded-lg font-bold transition ${
              filterMode === 'deflation' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            मंदी निवारण (Deflation)
          </button>
        </div>
      </div>

      {/* The Master Relationships Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 text-xs">
            <tr>
              <th className="py-3.5 px-4">मौद्रिक उपकरण (Tool)</th>
              {(filterMode === 'all' || filterMode === 'inflation') && (
                <th className="py-3.5 px-4 text-rose-800 bg-rose-50/50">
                  मुद्रास्फीति (Inflation / अतिरेक मांग)
                </th>
              )}
              {(filterMode === 'all' || filterMode === 'deflation') && (
                <th className="py-3.5 px-4 text-emerald-800 bg-emerald-50/50">
                  मंदी (Deflation / न्यून मांग)
                </th>
              )}
              <th className="py-3.5 px-4 text-blue-900 bg-blue-50/50">
                मुद्रा पूर्ति पर प्रभाव
              </th>
              <th className="py-3.5 px-4">तार्किक कारण (Economic Logic)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
            {relationships.map((rel, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900">
                  <div>{rel.toolHi}</div>
                  <div className="text-[11px] text-slate-400 font-normal">{rel.tool}</div>
                </td>

                {(filterMode === 'all' || filterMode === 'inflation') && (
                  <td className="py-3.5 px-4 text-rose-700 font-semibold bg-rose-50/20">
                    <span className="inline-flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> {rel.inflationAction}
                    </span>
                  </td>
                )}

                {(filterMode === 'all' || filterMode === 'deflation') && (
                  <td className="py-3.5 px-4 text-emerald-700 font-semibold bg-emerald-50/20">
                    <span className="inline-flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" /> {rel.deflationAction}
                    </span>
                  </td>
                )}

                <td className="py-3.5 px-4 text-blue-800 font-medium bg-blue-50/20">
                  {rel.impactOnMoneySupply}
                </td>

                <td className="py-3.5 px-4 text-slate-600 text-xs leading-relaxed">
                  {rel.logicHi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Essential Formulas Cheat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-bold text-slate-500 uppercase">साख गुणक (Multiplier)</div>
          <div className="font-mono text-lg font-bold text-blue-700">k = 1 / LRR</div>
          <p className="text-[11px] text-slate-500">LRR बढ़ने पर k घटता है</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-bold text-slate-500 uppercase">कुल जमा सृजन</div>
          <div className="font-mono text-base font-bold text-emerald-700">Initial Deposit × (1/LRR)</div>
          <p className="text-[11px] text-slate-500">प्रारंभिक जमा का गुणक गुना</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-bold text-slate-500 uppercase">संकीर्ण मुद्रा माप (M1)</div>
          <div className="font-mono text-base font-bold text-indigo-700">M1 = C + DD + OD</div>
          <p className="text-[11px] text-slate-500">सर्वाधिक तरल मुद्रा माप</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
          <div className="text-xs font-bold text-slate-500 uppercase">उच्च-शक्ति मुद्रा (H)</div>
          <div className="font-mono text-base font-bold text-purple-700">H = C + R</div>
          <p className="text-[11px] text-slate-500">करेंसी + कुल बैंक रिज़र्व</p>
        </div>
      </div>
    </div>
  );
};
